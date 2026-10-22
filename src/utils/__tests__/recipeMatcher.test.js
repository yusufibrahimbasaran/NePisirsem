import { describe, it, expect } from 'vitest';
import { calculateRecipeMatch, sortAndFilterRecipes } from '../recipeMatcher';

describe('recipeMatcher - calculateRecipeMatch', () => {
  const sampleRecipe = {
    id: 'test-menemen',
    title: 'Menemen',
    category: 'Pratik & Kahvaltı',
    requiredIngredients: [
      { id: 'yumurta', amount: '3 adet' },
      { id: 'domates', amount: '2 adet' },
      { id: 'biber', amount: '2 adet' },
      { id: 'sivi_yag', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'kasar_peyniri', amount: '50g' }
    ]
  };

  it('tam eşleşme: tüm gerekli malzemeler mevcut olduğunda isFullyCookable true ve missingCount 0 olmalı', () => {
    const selected = ['yumurta', 'domates', 'biber', 'sivi_yag', 'kasar_peyniri'];
    const result = calculateRecipeMatch(sampleRecipe, selected);

    expect(result.isFullyCookable).toBe(true);
    expect(result.missingCount).toBe(0);
    expect(result.missingRequired.length).toBe(0);
    expect(result.matchedRequired.length).toBe(4);
    expect(result.matchPercentage).toBe(100);
  });

  it('1 eksik malzeme: 1 malzeme eksik olduğunda isFullyCookable false ve missingCount 1 olmalı', () => {
    // biber eksik
    const selected = ['yumurta', 'domates', 'sivi_yag'];
    const result = calculateRecipeMatch(sampleRecipe, selected);

    expect(result.isFullyCookable).toBe(false);
    expect(result.missingCount).toBe(1);
    expect(result.missingRequired).toEqual([{ id: 'biber', amount: '2 adet' }]);
    expect(result.matchedRequired.length).toBe(3);
    expect(result.matchPercentage).toBeGreaterThan(0);
    expect(result.matchPercentage).toBeLessThan(100);
  });

  it('2 eksik malzeme: 2 malzeme eksik olduğunda missingCount 2 olmalı', () => {
    // biber ve sivi_yag eksik
    const selected = ['yumurta', 'domates'];
    const result = calculateRecipeMatch(sampleRecipe, selected);

    expect(result.isFullyCookable).toBe(false);
    expect(result.missingCount).toBe(2);
    expect(result.missingRequired.map(r => r.id)).toEqual(['biber', 'sivi_yag']);
    expect(result.matchedRequired.map(r => r.id)).toEqual(['yumurta', 'domates']);
  });

  it('eşleşmeyen durumlar: hiçbir malzeme eşleşmediğinde matchPercentage 0 olmalı', () => {
    const selected = ['un', 'sut', 'seker'];
    const result = calculateRecipeMatch(sampleRecipe, selected);

    expect(result.isFullyCookable).toBe(false);
    expect(result.missingCount).toBe(4);
    expect(result.matchedRequired.length).toBe(0);
    expect(result.matchPercentage).toBe(0);
  });

  it('gerekli malzemesi olmayan tarifler %100 eşleşme kabul edilmeli', () => {
    const emptyRecipe = { requiredIngredients: [], optionalIngredients: [] };
    const result = calculateRecipeMatch(emptyRecipe, []);

    expect(result.isFullyCookable).toBe(true);
    expect(result.matchPercentage).toBe(100);
    expect(result.missingCount).toBe(0);
  });
});

describe('recipeMatcher - sortAndFilterRecipes', () => {
  const recipes = [
    {
      id: 'r1',
      title: 'Yumurta Haşlama',
      category: 'Pratik & Kahvaltı',
      prepTime: 2,
      cookTime: 8,
      difficulty: 'Kolay',
      requiredIngredients: [{ id: 'yumurta', amount: '2 adet' }],
      optionalIngredients: [],
      tags: ['pratik']
    },
    {
      id: 'r2',
      title: 'Omlet',
      category: 'Pratik & Kahvaltı',
      prepTime: 5,
      cookTime: 10,
      difficulty: 'Kolay',
      requiredIngredients: [
        { id: 'yumurta', amount: '2 adet' },
        { id: 'tereyagi', amount: '1 tatlı kaşığı' }
      ],
      optionalIngredients: [],
      tags: ['kahvalti']
    },
    {
      id: 'r3',
      title: 'Karnıyarık',
      category: 'Ana Yemek',
      prepTime: 20,
      cookTime: 40,
      difficulty: 'Orta',
      requiredIngredients: [
        { id: 'patlican', amount: '4 adet' },
        { id: 'kiyma', amount: '250g' },
        { id: 'sogan', amount: '1 adet' }
      ],
      optionalIngredients: [],
      tags: ['klasik']
    }
  ];

  it('filterMode ready sadece %100 yapılabilir tarifleri döndürmeli', () => {
    // Sadece yumurta var
    const filtered = sortAndFilterRecipes(recipes, ['yumurta'], { filterMode: 'ready' });
    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe('r1');
  });

  it('filterMode almost en fazla 2 eksiği olan tarifleri döndürmeli', () => {
    // yumurta var -> r1 (0 eksik), r2 (1 eksik) döner, r3 (3 eksik) elenir
    const filtered = sortAndFilterRecipes(recipes, ['yumurta'], { filterMode: 'almost' });
    expect(filtered.map(r => r.id)).toEqual(['r1', 'r2']);
  });

  it('tarifler eşleşme yüzdesine göre azalan şekilde sıralanmalı', () => {
    const sorted = sortAndFilterRecipes(recipes, ['yumurta']);
    expect(sorted[0].id).toBe('r1'); // %100
    expect(sorted[1].id).toBe('r2'); // %50
  });
});
