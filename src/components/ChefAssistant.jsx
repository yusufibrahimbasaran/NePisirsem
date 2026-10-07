import React, { useState } from 'react';
import { Sparkles, Wand2, Clock, Flame, Utensils, CookingPot, Lightbulb } from 'lucide-react';
import { generateChefSuggestion } from '../utils/aiChefAssistant';
import { INGREDIENTS } from '../data/ingredientsData';

export default function ChefAssistant({ selectedIngredientIds, onSelectRecipe }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [customSuggestion, setCustomSuggestion] = useState(null);

  const selectedIngredientObjects = selectedIngredientIds.map(id => {
    return INGREDIENTS.find(i => i.id === id) || { id, name: id, icon: '🥘' };
  });

  const handleGenerate = () => {
    if (selectedIngredientObjects.length === 0) return;
    setIsGenerating(true);
    setCustomSuggestion(null);

    setTimeout(() => {
      const generated = generateChefSuggestion(selectedIngredientObjects);
      setCustomSuggestion(generated);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '650px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'var(--primary-light)',
          color: 'var(--primary-dark)',
          padding: '0.4rem 0.95rem',
          borderRadius: 'var(--radius-full)',
          fontWeight: 800,
          fontSize: '0.85rem',
          marginBottom: '0.5rem'
        }}>
          <Wand2 size={16} />
          <span>Mutfak Tavsiyesi</span>
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Sihirli Menü Önerisi 👩‍🍳
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.45 }}>
          Dolabınızda kalan farklı malzemeleri israf etmeden, tek bir lezzetli yemekte nasıl birleştirebileceğinizi öğrenin.
        </p>
      </div>

      {/* Selected Items Box */}
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Değerlendirilecek Malzemeleriniz ({selectedIngredientObjects.length}):
        </div>

        {selectedIngredientObjects.length === 0 ? (
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontStyle: 'italic', padding: '0.75rem 0' }}>
            Henüz dolaptan malzeme seçmediniz. Lütfen "Dolabım" sekmesinden elinizdeki malzemeleri seçin.
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.15rem' }}>
            {selectedIngredientObjects.map(item => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}

        <button
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.85rem', fontWeight: 800, fontSize: '0.95rem' }}
          onClick={handleGenerate}
          disabled={isGenerating || selectedIngredientObjects.length === 0}
        >
          <CookingPot size={20} />
          <span>{isGenerating ? 'Yemek Fikri Hazırlanıyor...' : 'Bu Malzemelerle Pratik Yemek Öner! 🍲'}</span>
        </button>
      </div>

      {/* Generated Result */}
      {customSuggestion && (
        <div style={{
          background: 'var(--bg-secondary)',
          border: '2px solid var(--primary)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-md)',
          animation: 'slideUp 0.25s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                Özel Mutfak Önerisi
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                {customSuggestion.title}
              </h3>
            </div>
            <span style={{ fontSize: '2.5rem' }}>🍳</span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.45 }}>
            {customSuggestion.description}
          </p>

          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} />
              <span>{customSuggestion.cookTime} dk Pişirme</span>
            </div>
            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Utensils size={14} />
              <span>{customSuggestion.servings} Kişilik</span>
            </div>
            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Flame size={14} />
              <span>{customSuggestion.calories} kcal</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Nasıl Hazırlanır?
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {customSuggestion.steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--primary-light)',
            border: '1.5px solid var(--primary)',
            padding: '0.85rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.85rem',
            color: 'var(--text-primary)',
            display: 'flex',
            gap: '0.65rem',
            alignItems: 'center'
          }}>
            <Lightbulb size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
            <span>{customSuggestion.chefNote}</span>
          </div>
        </div>
      )}
    </div>
  );
}
