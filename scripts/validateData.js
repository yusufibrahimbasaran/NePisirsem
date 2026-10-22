import { INGREDIENTS, INGREDIENT_CATEGORIES } from '../src/data/ingredientsData.js';
import { RECIPES } from '../src/data/recipesData.js';
import { 
  analyzeAllergens 
} from '../src/utils/nutritionCalculator.js';

export function runValidation() {
  const report = {
    summary: {
      recipeCount: RECIPES.length,
      ingredientCount: INGREDIENTS.length,
      categoryCount: INGREDIENT_CATEGORIES.length,
      errorsCount: 0,
      warningsCount: 0,
    },
    duplicateRecipeIds: [],
    duplicateIngredientIds: [],
    unmappedIngredientIds: [], // Recipes referencing an ingredient ID not in INGREDIENTS
    emptyRecipeFields: [],
    emptyIngredientFields: [],
    duplicateIngredientsInRecipe: [],
    allergenFindings: [],
    suggestions: []
  };

  const ingredientIdSet = new Set(INGREDIENTS.map(i => i.id));
  const recipeIdSet = new Set();
  const seenIngIds = new Set();

  // 1. Check duplicate ingredient IDs
  INGREDIENTS.forEach(ing => {
    if (seenIngIds.has(ing.id)) {
      report.duplicateIngredientIds.push(ing.id);
    }
    seenIngIds.add(ing.id);

    // Empty fields in ingredients
    if (!ing.id || !ing.id.trim()) report.emptyIngredientFields.push({ id: ing.id, field: 'id' });
    if (!ing.name || !ing.name.trim()) report.emptyIngredientFields.push({ id: ing.id, field: 'name' });
    if (!ing.category || !ing.category.trim()) report.emptyIngredientFields.push({ id: ing.id, field: 'category' });
    if (!ing.icon || !ing.icon.trim()) report.emptyIngredientFields.push({ id: ing.id, field: 'icon' });
  });

  // 2. Scan Recipes
  RECIPES.forEach((recipe, idx) => {
    const recipeRef = recipe.id || `Tarif #${idx + 1}`;

    // Duplicate Recipe ID
    if (recipeIdSet.has(recipe.id)) {
      report.duplicateRecipeIds.push(recipe.id);
    }
    recipeIdSet.add(recipe.id);

    // Empty / Missing Fields Check
    const requiredFields = [
      'id', 'title', 'category', 'cuisine', 'prepTime', 
      'cookTime', 'servings', 'difficulty', 'calories', 
      'imageEmoji', 'description', 'requiredIngredients', 'instructions'
    ];

    requiredFields.forEach(field => {
      const val = recipe[field];
      if (val === undefined || val === null || val === '') {
        report.emptyRecipeFields.push({ recipeId: recipeRef, field, issue: 'Boş veya tanımsız' });
      } else if (typeof val === 'string' && val.trim().length === 0) {
        report.emptyRecipeFields.push({ recipeId: recipeRef, field, issue: 'Boş metin' });
      } else if (Array.isArray(val) && val.length === 0) {
        report.emptyRecipeFields.push({ recipeId: recipeRef, field, issue: 'Boş dizi (en az 1 öğe beklenir)' });
      }
    });

    // Ingredient reference checks
    const currentRecipeIngIds = [];

    const checkIngredientList = (list, type) => {
      if (!Array.isArray(list)) return;
      list.forEach((item, itemIdx) => {
        if (!item.id || typeof item.id !== 'string') {
          report.emptyRecipeFields.push({ recipeId: recipeRef, field: `${type}[${itemIdx}].id`, issue: 'Geçersiz/boş ID' });
          return;
        }
        if (!ingredientIdSet.has(item.id)) {
          report.unmappedIngredientIds.push({
            recipeId: recipe.id,
            recipeTitle: recipe.title,
            type,
            missingIngredientId: item.id,
            amount: item.amount || ''
          });
        }
        currentRecipeIngIds.push(item.id);
      });
    };

    checkIngredientList(recipe.requiredIngredients, 'requiredIngredients');
    checkIngredientList(recipe.optionalIngredients, 'optionalIngredients');
    checkIngredientList(recipe.spices, 'spices');

    // Duplicate ingredients within the same recipe
    const ingSet = new Set();
    currentRecipeIngIds.forEach(id => {
      if (ingSet.has(id)) {
        report.duplicateIngredientsInRecipe.push({ recipeId: recipe.id, recipeTitle: recipe.title, ingredientId: id });
      }
      ingSet.add(id);
    });

    // 3. Allergen & Diet Consistency Check
    const allergens = analyzeAllergens(recipe);
    const allergenIds = allergens.map(a => a.id);

    // Known potential allergens in ingredients
    const allIngs = [
      ...(recipe.requiredIngredients || []).map(i => i.id),
      ...(recipe.optionalIngredients || []).map(i => i.id)
    ];

    if (allIngs.includes('biskuvi') && !allergenIds.includes('gluten')) {
      report.allergenFindings.push({
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        ingredient: 'biskuvi',
        issue: 'Bisküvi glüten içerir fakat GLUTEN_INGREDIENTS listesinde tanımlı değil.'
      });
    }

    if (allIngs.includes('kaymak') && !allergenIds.includes('dairy')) {
      report.allergenFindings.push({
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        ingredient: 'kaymak',
        issue: 'Kaymak süt ürünüdür fakat DAIRY_INGREDIENTS listesinde tanımlı değil.'
      });
    }

    if (allIngs.includes('findik_ezmesi') && !allergenIds.includes('nuts')) {
      report.allergenFindings.push({
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        ingredient: 'findik_ezmesi',
        issue: 'Fındık ezmesi kuruyemiş içerir fakat NUT_INGREDIENTS listesinde tanımlı değil.'
      });
    }
  });

  // Calculate totals
  report.summary.errorsCount = 
    report.duplicateRecipeIds.length + 
    report.duplicateIngredientIds.length + 
    report.unmappedIngredientIds.length + 
    report.emptyRecipeFields.length + 
    report.emptyIngredientFields.length;

  report.summary.warningsCount = 
    report.duplicateIngredientsInRecipe.length + 
    report.allergenFindings.length;

  // Recommendations
  if (report.unmappedIngredientIds.length > 0) {
    const uniqueMissing = [...new Set(report.unmappedIngredientIds.map(u => u.missingIngredientId))];
    report.suggestions.push(
      `Eksik Malzeme ID'leri: ${uniqueMissing.join(', ')} malzemeleri INGREDIENTS listesine eklenmeli veya tariflerdeki yazım hatası düzeltilmeli.`
    );
  }

  if (report.duplicateIngredientsInRecipe.length > 0) {
    report.suggestions.push(
      'Aynı tarifte hem required hem spices/optional olarak yinelenen malzeme ID’leri tekil hale getirilmeli.'
    );
  }

  return report;
}

// If run directly via node
const result = runValidation();
console.log('=== VERİ DOĞRULAMA RAPORU ===');
console.log(`Tarif Sayısı: ${result.summary.recipeCount}`);
console.log(`Malzeme Sayısı: ${result.summary.ingredientCount}`);
console.log(`Hata Sayısı: ${result.summary.errorsCount}`);
console.log(`Uyarı Sayısı: ${result.summary.warningsCount}`);
console.log('---');

if (result.duplicateRecipeIds.length > 0) {
  console.log('Tekrarlayan Tarif ID’leri:', result.duplicateRecipeIds);
}
if (result.duplicateIngredientIds.length > 0) {
  console.log('Tekrarlayan Malzeme ID’leri:', result.duplicateIngredientIds);
}
if (result.unmappedIngredientIds.length > 0) {
  console.log(`Eşleşmeyen Malzeme ID Kullanımları (${result.unmappedIngredientIds.length} adet):`);
  result.unmappedIngredientIds.slice(0, 20).forEach(u => {
    console.log(` - Tarif: "${u.recipeTitle}" (${u.recipeId}) -> Eksik ID: "${u.missingIngredientId}" (${u.type})`);
  });
  if (result.unmappedIngredientIds.length > 20) {
    console.log(` ... ve ${result.unmappedIngredientIds.length - 20} kullanım daha.`);
  }
}
if (result.emptyRecipeFields.length > 0) {
  console.log('Boş/Eksik Tarif Alanları:', result.emptyRecipeFields);
}
if (result.duplicateIngredientsInRecipe.length > 0) {
  console.log('Tarif İçi Yinelenen Malzemeler:', result.duplicateIngredientsInRecipe);
}
if (result.allergenFindings.length > 0) {
  console.log('Alerjen Bulguları:', result.allergenFindings);
}
if (result.suggestions.length > 0) {
  console.log('\nÖneriler:');
  result.suggestions.forEach(s => console.log(' * ' + s));
}
