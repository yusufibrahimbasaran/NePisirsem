import React from 'react';
import { Clock, Flame, Utensils, Heart, CheckCircle2, AlertCircle, ShoppingBag } from 'lucide-react';
import { INGREDIENTS } from '../data/ingredientsData';

export default function RecipeCard({ 
  recipe, 
  onSelect, 
  isFavorite, 
  onToggleFavorite, 
  onAddMissingToShopping 
}) {
  const { match } = recipe;
  const isFullyCookable = match?.isFullyCookable;
  const matchPercentage = match?.matchPercentage || 0;
  const missingCount = match?.missingCount || 0;

  const totalTime = recipe.prepTime + recipe.cookTime;

  // Get missing ingredient names
  const missingNames = (match?.missingRequired || []).map(req => {
    const found = INGREDIENTS.find(i => i.id === req.id);
    return found ? found.name : req.id;
  });

  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <div className="recipe-emoji-avatar">
          {recipe.imageEmoji || '🍲'}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          {isFullyCookable ? (
            <div className="match-badge full">
              <CheckCircle2 size={14} />
              <span>Tüm Malzemeler Var</span>
            </div>
          ) : missingCount <= 2 ? (
            <div className="match-badge high">
              <AlertCircle size={14} />
              <span>{missingCount} Eksik Malzeme</span>
            </div>
          ) : (
            <div className="match-badge low">
              <span>%{matchPercentage} Eşleşme</span>
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
            style={{
              padding: '7px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: isFavorite ? '#dc2626' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Favorilere ekle"
          >
            <Heart size={18} fill={isFavorite ? '#dc2626' : 'none'} />
          </button>
        </div>
      </div>

      <div className="recipe-card-body" onClick={() => onSelect(recipe)} style={{ cursor: 'pointer' }}>
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-desc">{recipe.description}</p>

        <div className="recipe-meta-row">
          <div className="recipe-meta-item">
            <Clock size={15} />
            <span>{totalTime} dk</span>
          </div>
          <div className="recipe-meta-item">
            <Utensils size={15} />
            <span>{recipe.difficulty}</span>
          </div>
          <div className="recipe-meta-item">
            <Flame size={15} />
            <span>{recipe.calories} kcal</span>
          </div>
        </div>

        {missingCount > 0 && (
          <div className="missing-ingredients-tag">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Eksik: {missingNames.slice(0, 2).join(', ')}{missingNames.length > 2 ? ` +${missingNames.length - 2}` : ''}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddMissingToShopping(match.missingRequired);
                }}
                style={{
                  color: 'var(--warning-text)',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  background: 'var(--bg-secondary)',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)'
                }}
                title="Eksikleri Alışveriş Listesine Ekle"
              >
                <ShoppingBag size={12} />
                <span>Listeye Ekle</span>
              </button>
            </div>
          </div>
        )}

        <button 
          className="btn btn-secondary btn-sm"
          style={{ width: '100%', marginTop: 'auto', fontWeight: 700 }}
          onClick={() => onSelect(recipe)}
        >
          Tarifi Gör & Pişir
        </button>
      </div>
    </div>
  );
}
