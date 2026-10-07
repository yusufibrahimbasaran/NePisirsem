import React, { useState, useMemo } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  CookingPot,
  Sparkles,
  BookOpen,
  PlusCircle,
  Heart
} from 'lucide-react';
import RecipeCard from './RecipeCard';
import { sortAndFilterRecipes } from '../utils/recipeMatcher';
import { DIETARY_FILTERS } from '../utils/nutritionCalculator';

export default function RecipeListSection({ 
  recipes, 
  selectedIngredientIds, 
  onSelectRecipe, 
  favoriteIds, 
  onToggleFavorite, 
  onAddMissingToShopping,
  onOpenCreateRecipe
}) {
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'ready', 'almost', 'custom', 'favorites'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxTime, setMaxTime] = useState(null);
  const [difficulty, setDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'Pratik & Kahvaltı', name: '🍳 Pratik & Kahvaltı' },
    { id: 'Ana Yemekler', name: '🍲 Ana Yemekler' },
    { id: 'Çorbalar', name: '🥣 Çorbalar' },
    { id: 'Makarna & Hamur', name: '🍝 Makarna & Hamur' },
    { id: 'Pilav & Yan Lezzet', name: '🍚 Pilav & Yan Lezzet' },
    { id: 'Zeytinyağlı & Sebze', name: '🥒 Zeytinyağlı & Sebze' },
    { id: 'Salata & Meze', name: '🥗 Salata & Meze' },
    { id: 'Tatlı & İkram', name: '🍮 Tatlı & İkram' }
  ];

  const filteredRecipes = useMemo(() => {
    return sortAndFilterRecipes(recipes, selectedIngredientIds, {
      category: selectedCategory,
      filterMode,
      dietaryFilter,
      searchQuery,
      maxTime,
      difficulty,
      favorites: favoriteIds
    });
  }, [recipes, selectedIngredientIds, selectedCategory, filterMode, dietaryFilter, searchQuery, maxTime, difficulty, favoriteIds]);

  const readyCount = useMemo(() => {
    return sortAndFilterRecipes(recipes, selectedIngredientIds, { filterMode: 'ready' }).length;
  }, [recipes, selectedIngredientIds]);

  const customCount = useMemo(() => {
    return recipes.filter(r => r.isCustom).length;
  }, [recipes]);

  const favoriteCount = favoriteIds.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header Controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        background: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.15rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Search Bar & Add Recipe Button Row */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Yemek veya malzeme ara (örn: menemen, köfte, ıspanak...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.85rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.95rem',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {onOpenCreateRecipe && (
            <button
              onClick={onOpenCreateRecipe}
              className="btn btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.8rem 1.15rem',
                fontWeight: 800,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.2)'
              }}
            >
              <PlusCircle size={18} />
              <span>Tarif Ekle</span>
            </button>
          )}
        </div>

        {/* Ready Status & Recipe Book & Favorites Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilterMode('all')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              background: filterMode === 'all' ? 'var(--primary)' : 'var(--bg-tertiary)',
              color: filterMode === 'all' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)'
            }}
          >
            Tüm Yemekler ({recipes.length})
          </button>

          <button
            onClick={() => setFilterMode('ready')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              background: filterMode === 'ready' ? 'var(--success)' : 'var(--bg-tertiary)',
              color: filterMode === 'ready' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <CheckCircle2 size={16} />
            <span>Hemen Yapılabilir ({readyCount})</span>
          </button>

          <button
            onClick={() => setFilterMode('almost')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              background: filterMode === 'almost' ? 'var(--warning)' : 'var(--bg-tertiary)',
              color: filterMode === 'almost' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)'
            }}
          >
            1-2 Eksik Malzemeli
          </button>

          <button
            onClick={() => setFilterMode('favorites')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 800,
              background: filterMode === 'favorites' ? '#dc2626' : 'var(--bg-tertiary)',
              color: filterMode === 'favorites' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <Heart size={15} fill={filterMode === 'favorites' ? 'white' : 'none'} color={filterMode === 'favorites' ? 'white' : '#dc2626'} />
            <span>Favorilerim ({favoriteCount})</span>
          </button>

          <button
            onClick={() => setFilterMode('custom')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 800,
              background: filterMode === 'custom' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'var(--bg-tertiary)',
              color: filterMode === 'custom' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <BookOpen size={16} />
            <span>Tarif Defterim ({customCount})</span>
          </button>
        </div>

        {/* Categories Scroll */}
        <div className="category-scroll" style={{ padding: 0 }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              style={{ fontSize: '0.85rem', padding: '0.45rem 0.85rem' }}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Dietary Fit Filters Bar */}
        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', padding: '0.2rem 0' }}>
          {DIETARY_FILTERS.map(diet => (
            <button
              key={diet.id}
              onClick={() => setDietaryFilter(diet.id)}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.775rem',
                fontWeight: 700,
                background: dietaryFilter === diet.id ? 'var(--text-primary)' : 'var(--bg-tertiary)',
                color: dietaryFilter === diet.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              <span>{diet.icon}</span>
              <span>{diet.name}</span>
            </button>
          ))}
        </div>

        {/* Secondary Filters (Cooking Time, Difficulty) */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', paddingTop: '0.4rem', borderTop: '1px solid var(--border-light)' }}>
          <select
            value={maxTime || ''}
            onChange={(e) => setMaxTime(e.target.value ? Number(e.target.value) : null)}
            style={{
              padding: '0.45rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.825rem',
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}
          >
            <option value="">⏱️ Pişirme Süresi (Tümü)</option>
            <option value="15">⚡ 15 Dakika Altı (Çok Pratik)</option>
            <option value="30">⏳ 30 Dakika Altı</option>
            <option value="45">🍲 45 Dakika Altı</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{
              padding: '0.45rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.825rem',
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}
          >
            <option value="all">👩‍🍳 Zorluk Derecesi (Tümü)</option>
            <option value="Kolay">Kolay</option>
            <option value="Orta">Orta</option>
          </select>
        </div>
      </div>

      {/* Results Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Önerilen Tarifler ({filteredRecipes.length})
        </span>
        <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
          Elinizdeki malzemelere göre sıralandı
        </span>
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelectRecipe}
              isFavorite={favoriteIds.includes(recipe.id)}
              onToggleFavorite={onToggleFavorite}
              onAddMissingToShopping={onAddMissingToShopping}
            />
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px dashed var(--border-color)'
        }}>
          <CookingPot size={48} style={{ opacity: 0.35, marginBottom: '0.75rem' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Uygun Yemek Bulunamadı
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '380px', margin: '0.5rem auto 1rem auto', lineHeight: 1.45 }}>
            Filtreleri sıfırlayabilir veya "Dolabım" sekmesinden elinizdeki diğer malzemeleri seçebilirsiniz.
          </p>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setFilterMode('all');
              setSelectedCategory('all');
              setSearchQuery('');
              setMaxTime(null);
              setDifficulty('all');
            }}
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
}
