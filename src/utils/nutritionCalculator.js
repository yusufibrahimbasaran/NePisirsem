// Besin Değerleri, Makro Hesaplayıcı ve Alerjen Analiz Motoru

export const DIETARY_FILTERS = [
  { id: 'all', name: 'Tüm Diyetler', icon: '🍽️' },
  { id: 'vegetarian', name: 'Vejetaryen', icon: '🌱' },
  { id: 'vegan', name: 'Vegan', icon: '🥑' },
  { id: 'gluten_free', name: 'Glutensiz', icon: '🌾' },
  { id: 'dairy_free', name: 'Laktozsuz', icon: '🥛' },
  { id: 'high_protein', name: 'Yüksek Protein (20g+)', icon: '💪' },
  { id: 'low_calorie', name: 'Düşük Kalori (<300 kcal)', icon: '⚡' },
];

export const ALLERGEN_TYPES = [
  { id: 'gluten', name: 'Gluten (Buğday / Un / Şehriye)', icon: '🌾' },
  { id: 'dairy', name: 'Süt & Laktoz (Peynir / Yoğurt / Krema)', icon: '🥛' },
  { id: 'egg', name: 'Yumurta', icon: '🥚' },
  { id: 'nuts', name: 'Kuruyemiş (Ceviz / Fındık / Fıstık)', icon: '🥜' },
  { id: 'seafood', name: 'Deniz Ürünü & Balık', icon: '🐟' },
  { id: 'sesame', name: 'Susam & Tahin', icon: '✨' },
];

// Malzeme ID'lerine göre alerjen ve diyet eşlemeleri
const GLUTEN_INGREDIENTS = new Set([
  'un', 'makarna', 'ekmek', 'yufka', 'bulgur', 'sehriye', 'eriste', 'lavas', 'galeta_unu', 'irmik', 'kuskus'
]);

const DAIRY_INGREDIENTS = new Set([
  'sut', 'yogurt', 'kasar_peyniri', 'beyaz_peynir', 'tereyagi', 'krema', 'lor_peyniri', 'parmesan', 'mozzarella', 'labne', 'tulum_peyniri', 'cedar'
]);

const MEAT_INGREDIENTS = new Set([
  'kiyma', 'tavuk_gogsu', 'tavuk_but', 'kusbasi_et', 'biftek', 'sucuk', 'sosis', 'pastirma', 'ton_baligi', 'somon', 'levrek', 'karides'
]);

const SEAFOOD_INGREDIENTS = new Set([
  'ton_baligi', 'somon', 'levrek', 'karides'
]);

const NUT_INGREDIENTS = new Set([
  'ceviz', 'cam_fistigi'
]);

const SESAME_INGREDIENTS = new Set([
  'tahin', 'susam'
]);

/**
 * Bir tarifin malzemelerini analiz ederek alerjenleri tespit eder
 */
export function analyzeAllergens(recipe) {
  if (!recipe) return [];

  const allIngIds = [
    ...(recipe.requiredIngredients || []).map(i => i.id),
    ...(recipe.optionalIngredients || []).map(i => i.id)
  ];

  const allergens = [];

  if (allIngIds.some(id => GLUTEN_INGREDIENTS.has(id))) {
    allergens.push({ id: 'gluten', name: 'Gluten İçerir', icon: '🌾' });
  }

  if (allIngIds.some(id => DAIRY_INGREDIENTS.has(id))) {
    allergens.push({ id: 'dairy', name: 'Süt & Laktoz İçerir', icon: '🥛' });
  }

  if (allIngIds.includes('yumurta')) {
    allergens.push({ id: 'egg', name: 'Yumurta İçerir', icon: '🥚' });
  }

  if (allIngIds.some(id => NUT_INGREDIENTS.has(id))) {
    allergens.push({ id: 'nuts', name: 'Kuruyemiş İçerir', icon: '🥜' });
  }

  if (allIngIds.some(id => SEAFOOD_INGREDIENTS.has(id))) {
    allergens.push({ id: 'seafood', name: 'Deniz Ürünü İçerir', icon: '🐟' });
  }

  if (allIngIds.some(id => SESAME_INGREDIENTS.has(id))) {
    allergens.push({ id: 'sesame', name: 'Susam/Tahin İçerir', icon: '✨' });
  }

  return allergens;
}

/**
 * Bir tarifin diyet uygunluk etiketlerini hesaplar
 */
export function analyzeDietaryTags(recipe) {
  if (!recipe) return [];

  const allIngIds = [
    ...(recipe.requiredIngredients || []).map(i => i.id),
    ...(recipe.optionalIngredients || []).map(i => i.id)
  ];

  const tags = [];

  const hasMeat = allIngIds.some(id => MEAT_INGREDIENTS.has(id));
  const hasDairy = allIngIds.some(id => DAIRY_INGREDIENTS.has(id));
  const hasEgg = allIngIds.includes('yumurta');
  const hasGluten = allIngIds.some(id => GLUTEN_INGREDIENTS.has(id));

  // Vejetaryen
  if (!hasMeat) {
    tags.push({ id: 'vegetarian', label: 'Vejetaryen', icon: '🌱' });
  }

  // Vegan
  if (!hasMeat && !hasDairy && !hasEgg) {
    tags.push({ id: 'vegan', label: 'Vegan', icon: '🥑' });
  }

  // Glutensiz
  if (!hasGluten) {
    tags.push({ id: 'gluten_free', label: 'Glutensiz', icon: '🌾' });
  }

  // Laktozsuz
  if (!hasDairy) {
    tags.push({ id: 'dairy_free', label: 'Laktozsuz', icon: '🥛' });
  }

  // Düşük Kalori
  if (recipe.calories && recipe.calories <= 280) {
    tags.push({ id: 'low_calorie', label: 'Düşük Kalori', icon: '⚡' });
  }

  // Yüksek Protein (Tahmini veya et/yumurta/lor/ton balığı içeren)
  if (hasMeat || allIngIds.includes('ton_baligi') || allIngIds.includes('lor_peyniri') || allIngIds.includes('kirmizi_mercimek')) {
    tags.push({ id: 'high_protein', label: 'Yüksek Protein', icon: '💪' });
  }

  return tags;
}

/**
 * Porsiyon başına ve seçilen porsiyon sayısına göre makro besin değerlerini hesaplar
 */
export function calculateMacros(recipe, currentServings = 2) {
  if (!recipe) {
    return { protein: 0, carbs: 0, fat: 0, fiber: 0, calories: 0 };
  }

  const baseServings = recipe.servings || 2;
  const ratio = currentServings / baseServings;
  const baseCalories = recipe.calories || 300;

  // Tarif içinde tanımlı özel makro varsa kullan, yoksa kategori ve içeriğe göre gerçekçi hesapla
  let proteinPerServing = 12;
  let carbsPerServing = 25;
  let fatPerServing = 10;
  let fiberPerServing = 3;

  const allIngIds = (recipe.requiredIngredients || []).map(i => i.id);

  if (allIngIds.includes('tavuk_gogsu') || allIngIds.includes('somon') || allIngIds.includes('biftek')) {
    proteinPerServing = 32;
    carbsPerServing = 8;
    fatPerServing = 12;
    fiberPerServing = 2;
  } else if (allIngIds.includes('kiyma') || allIngIds.includes('sucuk')) {
    proteinPerServing = 24;
    carbsPerServing = 14;
    fatPerServing = 20;
    fiberPerServing = 3;
  } else if (allIngIds.includes('makarna') || allIngIds.includes('pirinc') || allIngIds.includes('bulgur')) {
    proteinPerServing = 11;
    carbsPerServing = 52;
    fatPerServing = 9;
    fiberPerServing = 4;
  } else if (allIngIds.includes('kirmizi_mercimek') || allIngIds.includes('kuru_fasulye') || allIngIds.includes('nohut')) {
    proteinPerServing = 16;
    carbsPerServing = 36;
    fatPerServing = 5;
    fiberPerServing = 9;
  } else if (allIngIds.includes('yumurta') && recipe.category.includes('Kahvaltı')) {
    proteinPerServing = 15;
    carbsPerServing = 6;
    fatPerServing = 14;
    fiberPerServing = 2;
  } else if (recipe.category.includes('Sebze') || recipe.category.includes('Salata')) {
    proteinPerServing = 6;
    carbsPerServing = 16;
    fatPerServing = 8;
    fiberPerServing = 5;
  }

  const scaledCalories = Math.round(baseCalories * ratio);

  return {
    perServing: {
      protein: proteinPerServing,
      carbs: carbsPerServing,
      fat: fatPerServing,
      fiber: fiberPerServing,
      calories: baseCalories
    },
    totalScaled: {
      protein: Math.round(proteinPerServing * currentServings),
      carbs: Math.round(carbsPerServing * currentServings),
      fat: Math.round(fatPerServing * currentServings),
      fiber: Math.round(fiberPerServing * currentServings),
      calories: scaledCalories
    }
  };
}

/**
 * Kullanıcı kısıtlamalarına göre tarif uygunluğunu denetler
 */
export function checkUserDietaryConflict(recipe, userPreferences = []) {
  if (!userPreferences || userPreferences.length === 0 || !recipe) {
    return null;
  }

  const allergens = analyzeAllergens(recipe);
  const dietaryTags = analyzeDietaryTags(recipe).map(t => t.id);

  const conflicts = [];

  userPreferences.forEach(pref => {
    const p = pref.toLowerCase();
    if (p.includes('gluten') && allergens.some(a => a.id === 'gluten')) {
      conflicts.push('Gluten içeriyor');
    }
    if ((p.includes('laktoz') || p.includes('süt')) && allergens.some(a => a.id === 'dairy')) {
      conflicts.push('Süt / Laktoz içeriyor');
    }
    if (p.includes('vejetaryen') && !dietaryTags.includes('vegetarian')) {
      conflicts.push('Et / Tavuk / Balık içeriyor');
    }
    if (p.includes('vegan') && !dietaryTags.includes('vegan')) {
      conflicts.push('Hayvansal gıda içeriyor');
    }
    if (p.includes('yumurta') && allergens.some(a => a.id === 'egg')) {
      conflicts.push('Yumurta içeriyor');
    }
    if (p.includes('kuruyemiş') && allergens.some(a => a.id === 'nuts')) {
      conflicts.push('Kuruyemiş içeriyor');
    }
  });

  return conflicts.length > 0 ? conflicts : null;
}
