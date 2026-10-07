import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Trash2, 
  Sparkles, 
  Carrot, 
  Beef, 
  Egg, 
  Wheat, 
  Flame, 
  Check, 
  ArrowRight,
  PackagePlus,
  CookingPot
} from 'lucide-react';
import { INGREDIENTS, INGREDIENT_CATEGORIES, PRESET_PANTRIES } from '../data/ingredientsData';
import { matchesSearch } from '../utils/textUtils';

export default function PantrySection({ 
  selectedIngredients, 
  toggleIngredient, 
  clearIngredients, 
  applyPreset, 
  cookableCount,
  onViewRecipes 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIconMap = {
    all: <Sparkles size={16} />,
    vegetables: <Carrot size={16} />,
    meat: <Beef size={16} />,
    dairy: <Egg size={16} />,
    grains: <Wheat size={16} />,
    pantry: <PackagePlus size={16} />,
    spices: <Flame size={16} />,
  };

  const filteredIngredients = useMemo(() => {
    return INGREDIENTS.filter(item => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = matchesSearch(item.name, searchQuery);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Friendly Warm Hero Banner */}
      <div className="hero-banner">
        <h1 className="hero-title">Dolabınızda Neler Var? 🍅</h1>
        <p className="hero-subtitle">
          Elinizdeki malzemelere dokunarak seçin; sistemimiz hemen yapabileceğiniz en lezzetli yemekleri sizin için sıralasın.
        </p>

        <div className="hero-stats">
          <div className="hero-stat-pill">
            <span>🧺</span>
            <span>{selectedIngredients.length} Malzeme Seçtiniz</span>
          </div>
          <div className={`hero-stat-pill ${cookableCount > 0 ? 'success' : ''}`}>
            <span>🍳</span>
            <span>{cookableCount > 0 ? `${cookableCount} Yemek Hemen Pişirilebilir!` : 'Tarifler hazır'}</span>
          </div>
        </div>
      </div>

      {/* Quick Dolap Presets tailored for students & homemakers */}
      <div style={{ 
        background: 'var(--bg-secondary)', 
        border: '1.5px solid var(--border-color)', 
        borderRadius: 'var(--radius-lg)', 
        padding: '1.15rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '0.85rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 800, fontSize: '0.95rem' }}>
            <CookingPot size={19} color="var(--primary)" />
            <span>Hızlı Dolap Seçenekleri</span>
          </div>
          {selectedIngredients.length > 0 && (
            <button 
              onClick={clearIngredients}
              style={{ 
                color: 'var(--danger)', 
                fontSize: '0.825rem', 
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <Trash2 size={14} />
              Seçimleri Temizle
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem' }}>
          {PRESET_PANTRIES.map(preset => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset.ingredients)}
              style={{
                background: 'var(--bg-tertiary)',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 0.95rem',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {preset.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                {preset.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search 
            size={20} 
            color="var(--text-muted)" 
            style={{ position: 'absolute', left: '1rem', pointerEvents: 'none' }} 
          />
          <input
            type="text"
            placeholder="Malzeme ara (örn: domates, kıyma, patates, makarna...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 2.85rem',
              background: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-sm)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '0.85rem',
                color: 'var(--text-secondary)',
                fontSize: '0.825rem',
                fontWeight: 600,
                padding: '0.25rem 0.6rem',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              Temizle
            </button>
          )}
        </div>

        {/* Category Chips Scroll */}
        <div className="category-scroll">
          {INGREDIENT_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-chip ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {categoryIconMap[cat.id]}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ingredient Grid */}
      <div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '0.85rem' 
        }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Malzeme Listesi ({filteredIngredients.length})
          </span>
          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Seçmek için üzerine dokunun
          </span>
        </div>

        <div className="ingredient-grid">
          {filteredIngredients.map(item => {
            const isSelected = selectedIngredients.includes(item.id);
            return (
              <div
                key={item.id}
                className={`ingredient-card ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleIngredient(item.id)}
              >
                {isSelected && (
                  <div className="ingredient-check">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                )}
                <span className="emoji">{item.icon}</span>
                <span className="name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      {selectedIngredients.length > 0 && (
        <div style={{
          position: 'sticky',
          bottom: '75px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '2px solid var(--primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '0.85rem 1.25rem',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 40,
          gap: '1rem',
          animation: 'slideUp 0.2s ease'
        }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {selectedIngredients.length} Malzeme Seçildi
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>
              {cookableCount > 0 ? `✨ ${cookableCount} yemek hemen yapılabilir!` : 'Tarif önerileri hazır'}
            </div>
          </div>

          <button 
            className="btn btn-primary"
            onClick={onViewRecipes}
            style={{ padding: '0.65rem 1.25rem' }}
          >
            <span>Tarifleri Gör</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
