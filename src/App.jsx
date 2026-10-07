import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import PantrySection from './components/PantrySection';
import RecipeListSection from './components/RecipeListSection';
import WheelOfFood from './components/WheelOfFood';
import ChefAssistant from './components/ChefAssistant';
import ShoppingListSection from './components/ShoppingListSection';
import RecipeDetailModal from './components/RecipeDetailModal';
import CreateRecipeModal from './components/CreateRecipeModal';
import AuthModal from './components/AuthModal';
import InstallAppBanner from './components/InstallAppBanner';
import { RECIPES } from './data/recipesData';
import { INGREDIENTS } from './data/ingredientsData';
import { calculateRecipeMatch } from './utils/recipeMatcher';
import { getCurrentUser, setCurrentUser as setStoredCurrentUser, getStoredUsers, saveStoredUsers } from './utils/authManager';

export default function App() {
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('np_theme') || 'light';
  });

  // Current User State
  const [currentUser, setCurrentUser] = useState(() => {
    return getCurrentUser();
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCreateRecipeModalOpen, setIsCreateRecipeModalOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Active Tab: 'pantry', 'recipes', 'wheel', 'chef', 'shopping'
  const [activeTab, setActiveTab] = useState('pantry');

  // Selected Ingredients State (Loaded from current user or defaults)
  const [selectedIngredients, setSelectedIngredients] = useState(() => {
    if (currentUser && currentUser.pantry) {
      return currentUser.pantry;
    }
    return ['yumurta', 'domates', 'biber_yesil', 'sogan', 'aycicek_yagi', 'makarna', 'tuz', 'karabiber'];
  });

  // Favorites State
  const [favoriteIds, setFavoriteIds] = useState(() => {
    if (currentUser && currentUser.favorites) {
      return currentUser.favorites;
    }
    return ['menemen', 'kremali_mantarli_makarna'];
  });

  // Custom Recipes State (Personal Recipe Book)
  const [customRecipes, setCustomRecipes] = useState(() => {
    if (currentUser && currentUser.customRecipes && currentUser.customRecipes.length > 0) {
      return currentUser.customRecipes;
    }
    const saved = localStorage.getItem('np_custom_recipes');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'custom-anne-kofte',
        title: 'Annemin Özel Baharatlı Köftesi',
        category: 'Ana Yemekler',
        cuisine: 'Anne Mutfağı',
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        difficulty: 'Kolay',
        calories: 340,
        imageEmoji: '🧆',
        description: 'Bizim evin vazgeçilmez akşam yemeği. Bol kimyon ve anne sevgisiyle yoğrulmuş özel tarif.',
        isCustom: true,
        author: 'Siz',
        requiredIngredients: [
          { id: 'kiyma', amount: '500g' },
          { id: 'sogan', amount: '1 adet' },
          { id: 'sarimsak', amount: '2 diş' },
          { id: 'yumurta', amount: '1 adet' },
          { id: 'ekmek', amount: '2 dilim' }
        ],
        optionalIngredients: [
          { id: 'maydanoz', amount: 'Yarım demet' },
          { id: 'zeytinyagi', amount: '2 yemek kaşığı' }
        ],
        spices: [
          { id: 'kimyon', amount: '1 tatlı kaşığı' },
          { id: 'karabiber', amount: '1 çay kaşığı' },
          { id: 'pul_biber', amount: '1 çay kaşığı' },
          { id: 'tuz', amount: '1 tatlı kaşığı' }
        ],
        instructions: [
          'Soğan ve sarımsağı rendeleyip suyunu sıkın.',
          'Kıyma, bayat ekmek içi, yumurta, soğan, sarımsak ve tüm baharatları geniş bir kasede 5-10 dakika yoğurun.',
          'Ceviz büyüklüğünde parçalar alıp yassı köfteler şekillendirin.',
          'Az yağlı tavada veya döküm ızgarada her iki tarafını 3-4 dakika nar gibi pişirin.'
        ],
        tags: ['ozel-tarif', 'anne-tarifi', 'kofte', 'protein'],
        tips: 'Köfteleri şekillendirdikten sonra dolapta 15 dakika dinlendirirseniz çok daha sulu ve lezzetli kalır.'
      }
    ];
  });

  // Shopping List State
  const [shoppingList, setShoppingList] = useState(() => {
    if (currentUser && currentUser.shoppingList) {
      return currentUser.shoppingList;
    }
    return [
      { id: '1', name: '1 kg Süt', completed: false },
      { id: '2', name: 'Kaşar Peyniri', completed: true }
    ];
  });

  // Active Selected Recipe for Modal
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Sync theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('np_theme', theme);
  }, [theme]);

  // Persist custom recipes to localStorage
  useEffect(() => {
    localStorage.setItem('np_custom_recipes', JSON.stringify(customRecipes));
  }, [customRecipes]);

  // Sync changes back to active user's persistent profile
  const syncToActiveUser = (updatedPantry, updatedFavorites, updatedShopping, updatedCustomRecipes) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      pantry: updatedPantry !== undefined ? updatedPantry : selectedIngredients,
      favorites: updatedFavorites !== undefined ? updatedFavorites : favoriteIds,
      shoppingList: updatedShopping !== undefined ? updatedShopping : shoppingList,
      customRecipes: updatedCustomRecipes !== undefined ? updatedCustomRecipes : customRecipes
    };

    setStoredCurrentUser(updatedUser);
    
    // Also update in all users array
    const allUsers = getStoredUsers();
    const updatedUsers = allUsers.map(u => u.id === updatedUser.id ? updatedUser : u);
    saveStoredUsers(updatedUsers);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Auth Handlers
  const handleUserLogin = (user) => {
    setCurrentUser(user);
    setStoredCurrentUser(user);
    setSelectedIngredients(user.pantry || []);
    setFavoriteIds(user.favorites || []);
    setShoppingList(user.shoppingList || []);
    if (user.customRecipes && user.customRecipes.length > 0) {
      setCustomRecipes(user.customRecipes);
    }
  };

  const handleUserLogout = () => {
    setCurrentUser(null);
    setStoredCurrentUser(null);
  };

  // Pantry Handlers
  const toggleIngredient = (id) => {
    setSelectedIngredients(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      syncToActiveUser(next, undefined, undefined, undefined);
      return next;
    });
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
    syncToActiveUser([], undefined, undefined, undefined);
  };

  const applyPreset = (presetIds) => {
    setSelectedIngredients(presetIds);
    syncToActiveUser(presetIds, undefined, undefined, undefined);
  };

  // Favorite Handlers
  const toggleFavorite = (recipeId) => {
    setFavoriteIds(prev => {
      const next = prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId];
      syncToActiveUser(undefined, next, undefined, undefined);
      return next;
    });
  };

  // Custom Recipe Handlers (Tarif Defterim)
  const handleSaveCustomRecipe = (recipeData) => {
    setCustomRecipes(prev => {
      const existsIndex = prev.findIndex(r => r.id === recipeData.id);
      let updated;
      if (existsIndex >= 0) {
        updated = [...prev];
        updated[existsIndex] = recipeData;
      } else {
        updated = [recipeData, ...prev];
      }
      syncToActiveUser(undefined, undefined, undefined, updated);
      return updated;
    });

    // Auto open created recipe
    setSelectedRecipe(recipeData);
    setEditingRecipe(null);
  };

  const handleDeleteCustomRecipe = (recipeId) => {
    setCustomRecipes(prev => {
      const updated = prev.filter(r => r.id !== recipeId);
      syncToActiveUser(undefined, undefined, undefined, updated);
      return updated;
    });
    if (selectedRecipe?.id === recipeId) {
      setSelectedRecipe(null);
    }
  };

  const handleEditCustomRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setIsCreateRecipeModalOpen(true);
  };

  // Shopping List Handlers
  const addShoppingItem = (name) => {
    const newItem = {
      id: 'shop-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      name,
      completed: false
    };
    const next = [newItem, ...shoppingList];
    setShoppingList(next);
    syncToActiveUser(undefined, undefined, next, undefined);
  };

  const addMissingIngredientsToShopping = (missingItems) => {
    const newItems = missingItems.map(item => {
      const found = INGREDIENTS.find(i => i.id === item.id);
      return {
        id: 'shop-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        name: `${found ? found.name : item.id} (${item.amount || 'Yeteri kadar'})`,
        completed: false
      };
    });

    const next = [...newItems, ...shoppingList];
    setShoppingList(next);
    syncToActiveUser(undefined, undefined, next, undefined);
    alert(`${newItems.length} eksik malzeme pazar listenize eklendi! 🛒`);
  };

  const toggleShoppingItem = (id) => {
    const next = shoppingList.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setShoppingList(next);
    syncToActiveUser(undefined, undefined, next, undefined);
  };

  const removeShoppingItem = (id) => {
    const next = shoppingList.filter(item => item.id !== id);
    setShoppingList(next);
    syncToActiveUser(undefined, undefined, next, undefined);
  };

  const clearCompletedShopping = () => {
    const next = shoppingList.filter(item => !item.completed);
    setShoppingList(next);
    syncToActiveUser(undefined, undefined, next, undefined);
  };

  // Combine built-in and user custom recipes
  const allRecipes = useMemo(() => {
    return [...customRecipes, ...RECIPES];
  }, [customRecipes]);

  // Calculate 100% cookable recipes count
  const cookableRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      const match = calculateRecipeMatch(recipe, selectedIngredients);
      return match.isFullyCookable;
    });
  }, [allRecipes, selectedIngredients]);

  return (
    <div className="app-container">
      {/* Header with User Profile Trigger */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pantryCount={selectedIngredients.length}
        shoppingCount={shoppingList.filter(i => !i.completed).length}
        theme={theme}
        toggleTheme={toggleTheme}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* PWA Install Banner */}
      <InstallAppBanner />

      {/* Main Content Body */}
      <main className="main-wrapper">
        {activeTab === 'pantry' && (
          <PantrySection
            selectedIngredients={selectedIngredients}
            toggleIngredient={toggleIngredient}
            clearIngredients={clearIngredients}
            applyPreset={applyPreset}
            cookableCount={cookableRecipes.length}
            onViewRecipes={() => setActiveTab('recipes')}
          />
        )}

        {activeTab === 'recipes' && (
          <RecipeListSection
            recipes={allRecipes}
            selectedIngredientIds={selectedIngredients}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            onAddMissingToShopping={addMissingIngredientsToShopping}
            onOpenCreateRecipe={() => {
              setEditingRecipe(null);
              setIsCreateRecipeModalOpen(true);
            }}
          />
        )}

        {activeTab === 'wheel' && (
          <WheelOfFood
            recipes={allRecipes}
            cookableRecipes={cookableRecipes}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
          />
        )}

        {activeTab === 'chef' && (
          <ChefAssistant
            selectedIngredientIds={selectedIngredients}
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
          />
        )}

        {activeTab === 'shopping' && (
          <ShoppingListSection
            shoppingList={shoppingList}
            onToggleItem={toggleShoppingItem}
            onAddItem={addShoppingItem}
            onRemoveItem={removeShoppingItem}
            onClearCompleted={clearCompletedShopping}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pantryCount={selectedIngredients.length}
        shoppingCount={shoppingList.filter(i => !i.completed).length}
      />

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          selectedIngredientIds={selectedIngredients}
          onClose={() => setSelectedRecipe(null)}
          isFavorite={favoriteIds.includes(selectedRecipe.id)}
          onToggleFavorite={toggleFavorite}
          onAddMissingToShopping={addMissingIngredientsToShopping}
          onEditCustomRecipe={handleEditCustomRecipe}
          onDeleteCustomRecipe={handleDeleteCustomRecipe}
          currentUser={currentUser}
        />
      )}

      {/* Create / Edit Custom Recipe Modal */}
      <CreateRecipeModal
        isOpen={isCreateRecipeModalOpen}
        onClose={() => {
          setIsCreateRecipeModalOpen(false);
          setEditingRecipe(null);
        }}
        onSaveRecipe={handleSaveCustomRecipe}
        initialRecipe={editingRecipe}
        currentUser={currentUser}
      />

      {/* User Login & Profile Modal */}
      {isAuthModalOpen && (
        <AuthModal
          currentUser={currentUser}
          onLogin={handleUserLogin}
          onLogout={handleUserLogout}
          onClose={() => setIsAuthModalOpen(false)}
          pantryCount={selectedIngredients.length}
          favoritesCount={favoriteIds.length}
          shoppingCount={shoppingList.filter(i => !i.completed).length}
        />
      )}
    </div>
  );
}
