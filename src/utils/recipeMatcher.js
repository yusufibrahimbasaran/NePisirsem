import { matchesSearch } from './textUtils';

export function calculateRecipeMatch(recipe, selectedIngredientIds) {
  const selectedSet = new Set(selectedIngredientIds);
  
  const totalRequired = recipe.requiredIngredients.length;
  if (totalRequired === 0) {
    return {
      matchPercentage: 100,
      matchedRequired: [],
      missingRequired: [],
      matchedOptional: [],
      missingOptional: [],
      isFullyCookable: true,
      missingCount: 0,
    };
  }

  const matchedRequired = [];
  const missingRequired = [];

  recipe.requiredIngredients.forEach((req) => {
    if (selectedSet.has(req.id)) {
      matchedRequired.push(req);
    } else {
      missingRequired.push(req);
    }
  });

  const matchedOptional = [];
  const missingOptional = [];

  (recipe.optionalIngredients || []).forEach((opt) => {
    if (selectedSet.has(opt.id)) {
      matchedOptional.push(opt);
    } else {
      missingOptional.push(opt);
    }
  });

  // Calculate percentage: required ingredients have 85% weight, optional have 15%
  const reqPercentage = (matchedRequired.length / totalRequired) * 100;
  
  let totalPercentage = reqPercentage;
  if (recipe.optionalIngredients && recipe.optionalIngredients.length > 0) {
    const optPercentage = (matchedOptional.length / recipe.optionalIngredients.length) * 100;
    totalPercentage = Math.round((reqPercentage * 0.85) + (optPercentage * 0.15));
  } else {
    totalPercentage = Math.round(reqPercentage);
  }

  const isFullyCookable = missingRequired.length === 0;

  return {
    matchPercentage: totalPercentage,
    matchedRequired,
    missingRequired,
    matchedOptional,
    missingOptional,
    isFullyCookable,
    missingCount: missingRequired.length,
  };
}

export function sortAndFilterRecipes(recipes, selectedIngredientIds, options = {}) {
  const {
    category = 'all',
    maxTime = null,
    difficulty = 'all',
    filterMode = 'all', // 'all', 'ready', 'almost', 'custom', 'favorites'
    searchQuery = '',
    tag = null,
    favorites = [],
  } = options;

  const results = recipes.map((recipe) => {
    const match = calculateRecipeMatch(recipe, selectedIngredientIds);
    return {
      ...recipe,
      match,
    };
  });

  return results
    .filter((recipe) => {
      // Search Query
      if (searchQuery.trim()) {
        const matchTitle = matchesSearch(recipe.title, searchQuery);
        const matchDesc = matchesSearch(recipe.description, searchQuery);
        const matchCat = matchesSearch(recipe.category, searchQuery);
        const matchCuisine = matchesSearch(recipe.cuisine, searchQuery);
        const matchIng = recipe.requiredIngredients.some(i => matchesSearch(i.id, searchQuery) || matchesSearch(i.amount, searchQuery));
        const matchOpt = (recipe.optionalIngredients || []).some(i => matchesSearch(i.id, searchQuery));
        const matchTag = (recipe.tags || []).some(t => matchesSearch(t, searchQuery));
        if (!matchTitle && !matchDesc && !matchCat && !matchCuisine && !matchIng && !matchOpt && !matchTag) return false;
      }

      // Category filter
      if (category !== 'all' && recipe.category !== category) {
        return false;
      }

      // Tag filter
      if (tag && !recipe.tags.includes(tag)) {
        return false;
      }

      // Max Cooking Time
      if (maxTime && (recipe.prepTime + recipe.cookTime) > maxTime) {
        return false;
      }

      // Difficulty
      if (difficulty !== 'all' && recipe.difficulty !== difficulty) {
        return false;
      }

      // Filter Mode
      if (filterMode === 'ready' && !recipe.match.isFullyCookable) {
        return false;
      }
      if (filterMode === 'almost' && recipe.match.missingCount > 2) {
        return false;
      }
      if (filterMode === 'custom' && !recipe.isCustom) {
        return false;
      }
      if (filterMode === 'favorites' && !favorites.includes(recipe.id)) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Prioritize match percentage
      if (b.match.matchPercentage !== a.match.matchPercentage) {
        return b.match.matchPercentage - a.match.matchPercentage;
      }
      // Then fewest missing ingredients
      if (a.match.missingCount !== b.match.missingCount) {
        return a.match.missingCount - b.match.missingCount;
      }
      // Then cooking time
      return (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime);
    });
}
