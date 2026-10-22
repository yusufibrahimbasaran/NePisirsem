import { describe, it, expect } from 'vitest';
import { calculateMacros, analyzeAllergens, analyzeDietaryTags, checkUserDietaryConflict } from '../nutritionCalculator';

describe('nutritionCalculator - calculateMacros', () => {
  const chickenRecipe = {
    id: 'tavuk-sote',
    title: 'Tavuk Sote',
    category: 'Ana Yemek',
    servings: 2,
    calories: 380,
    requiredIngredients: [
      { id: 'tavuk_gogsu', amount: '400g' },
      { id: 'biber', amount: '2 adet' },
      { id: 'domates', amount: '2 adet' }
    ]
  };

  const pastaRecipe = {
    id: 'makarna-domatesli',
    title: 'Domates Soslu Makarna',
    category: 'Makarna & Hamur İşi',
    servings: 4,
    calories: 420,
    requiredIngredients: [
      { id: 'makarna', amount: '500g' },
      { id: 'domates_salcasi', amount: '2 yemek kaşığı' }
    ]
  };

  it('porsiyon başına makro ve kalori değerlerini doğru hesaplamalı', () => {
    const result = calculateMacros(chickenRecipe, 2);

    expect(result.perServing).toBeDefined();
    expect(result.perServing.calories).toBe(380);
    // Tavuk göğsü içerdiği için yüksek protein (32g) beklenir
    expect(result.perServing.protein).toBe(32);
    expect(result.perServing.carbs).toBe(8);
  });

  it('porsiyona göre ölçekleme (2 kişilikten 4 kişiliğe artırma): toplam kalori ve makrolar orantılı artmalı', () => {
    // chickenRecipe: baseServings = 2, calories = 380
    // currentServings = 4 -> ratio = 2
    const result = calculateMacros(chickenRecipe, 4);

    expect(result.totalScaled.calories).toBe(760); // 380 * 2
    expect(result.totalScaled.protein).toBe(128); // 32 * 4
    expect(result.totalScaled.carbs).toBe(32); // 8 * 4
  });

  it('porsiyona göre ölçekleme (4 kişilikten 2 kişiliğe azaltma): toplam kalori yarıya inmeli', () => {
    // pastaRecipe: baseServings = 4, calories = 420
    // currentServings = 2 -> ratio = 0.5
    const result = calculateMacros(pastaRecipe, 2);

    expect(result.totalScaled.calories).toBe(210); // 420 * 0.5
    expect(result.totalScaled.carbs).toBe(104); // 52 * 2
  });

  it('farklı malzeme profillerine göre makro dağılımı değişmeli (makarna yüksek karbonhidrat)', () => {
    const pastaMacros = calculateMacros(pastaRecipe, 4);
    // Makarna 52g karbonhidrat içerir
    expect(pastaMacros.perServing.carbs).toBe(52);
  });

  it('boş veya geçersiz tarif verildiğinde sıfır değerler döndürmeli', () => {
    const result = calculateMacros(null, 2);
    expect(result.calories).toBe(0);
    expect(result.protein).toBe(0);
  });
});

describe('nutritionCalculator - analyzeAllergens & analyzeDietaryTags', () => {
  it('gluten ve süt içeren tariflerde doğru alerjenleri tespit etmeli', () => {
    const recipe = {
      requiredIngredients: [
        { id: 'makarna', amount: '200g' }, // gluten
        { id: 'kasar_peyniri', amount: '100g' } // süt/laktoz
      ]
    };

    const allergens = analyzeAllergens(recipe);
    const allergenIds = allergens.map(a => a.id);

    expect(allergenIds).toContain('gluten');
    expect(allergenIds).toContain('dairy');
    expect(allergenIds).not.toContain('egg');
  });

  it('etsiz tarifleri vejetaryen olarak etiketlemeli', () => {
    const vegRecipe = {
      calories: 250,
      requiredIngredients: [
        { id: 'domates', amount: '2 adet' },
        { id: 'zeytinyagi', amount: '2 yemek kaşığı' }
      ]
    };

    const tags = analyzeDietaryTags(vegRecipe).map(t => t.id);
    expect(tags).toContain('vegetarian');
    expect(tags).toContain('vegan');
    expect(tags).toContain('gluten_free');
    expect(tags).toContain('dairy_free');
    expect(tags).toContain('low_calorie');
  });

  it('kullanıcı alerji/diyet kısıtlamalarıyla tarif arasındaki çakışmaları tespit etmeli', () => {
    const cheesePasta = {
      requiredIngredients: [
        { id: 'makarna', amount: '200g' },
        { id: 'beyaz_peynir', amount: '100g' }
      ]
    };

    const conflicts = checkUserDietaryConflict(cheesePasta, ['Glutensiz', 'Laktozsuz']);
    expect(conflicts).toBeDefined();
    expect(conflicts).toContain('Gluten içeriyor');
    expect(conflicts).toContain('Süt / Laktoz içeriyor');
  });
});
