import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  Flame, 
  Utensils, 
  Check, 
  ShoppingBag, 
  Play, 
  Pause, 
  RotateCcw, 
  Lightbulb, 
  Heart,
  CheckCircle2,
  Users,
  Plus,
  Minus
} from 'lucide-react';
import { INGREDIENTS } from '../data/ingredientsData';
import { scaleAmount } from '../utils/portionScaler';

export default function RecipeDetailModal({ 
  recipe, 
  selectedIngredientIds, 
  onClose, 
  onToggleFavorite, 
  isFavorite, 
  onAddMissingToShopping 
}) {
  const [activeTab, setActiveTab] = useState('ingredients'); // 'ingredients' or 'steps'
  const [completedSteps, setCompletedSteps] = useState([]);
  
  // Dynamic Portion / Servings State
  const baseServings = recipe.servings || 2;
  const [servings, setServings] = useState(baseServings);

  // Kitchen Timer State
  const [timerSeconds, setTimerSeconds] = useState((recipe.cookTime || 15) * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleStep = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const getIngredientInfo = (id) => {
    return INGREDIENTS.find(i => i.id === id) || { name: id, icon: '🥘' };
  };

  const selectedSet = new Set(selectedIngredientIds);
  const missingItems = recipe.requiredIngredients.filter(req => !selectedSet.has(req.id));

  // Handler to add missing ingredients with current scaled portions
  const handleAddScaledMissing = () => {
    const scaledMissing = missingItems.map(item => ({
      id: item.id,
      amount: scaleAmount(item.amount, baseServings, servings)
    }));
    onAddMissingToShopping(scaledMissing);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Warm Cozy Header */}
        <div style={{ 
          position: 'relative', 
          background: 'var(--primary)', 
          color: 'white', 
          padding: '1.75rem 1.5rem 1.25rem 1.5rem',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'
        }}>
          <button 
            onClick={onClose}
            style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1rem', 
              background: 'rgba(0,0,0,0.2)', 
              color: 'white', 
              width: '34px', 
              height: '34px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
            aria-label="Kapat"
          >
            <X size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '2.75rem' }}>{recipe.imageEmoji || '🍲'}</span>
            <div>
              <div style={{ fontSize: '0.825rem', opacity: 0.9, fontWeight: 600 }}>
                {recipe.category} • {recipe.cuisine}
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'white' }}>{recipe.title}</h2>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginTop: '0.85rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} />
              <span>{recipe.prepTime + recipe.cookTime} Dakika</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users size={14} />
              <span>{servings} Kişilik (Ayarlanabilir)</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.825rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Flame size={14} />
              <span>{Math.round(recipe.calories * (servings / baseServings))} kcal</span>
            </div>
          </div>
        </div>

        {/* Dynamic Portion Calculator Bar */}
        <div style={{
          background: 'var(--bg-tertiary)',
          borderBottom: '1.5px solid var(--border-color)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.65rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Users size={17} color="var(--primary)" />
            <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Kaç Kişilik Pişiriyorsunuz?
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Quick preset buttons */}
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              {[1, 2, 4, 6].map(num => (
                <button
                  key={num}
                  onClick={() => setServings(num)}
                  style={{
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.775rem',
                    fontWeight: 800,
                    background: servings === num ? 'var(--primary)' : 'var(--bg-secondary)',
                    color: servings === num ? 'white' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {num === 1 ? '1 (Tek)' : num === 4 ? '4 (Aile)' : `${num} Kişi`}
                </button>
              ))}
            </div>

            {/* Stepper buttons */}
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                style={{ padding: '0.3rem 0.5rem', color: 'var(--text-primary)' }}
                disabled={servings <= 1}
                aria-label="Porsiyon Azalt"
              >
                <Minus size={14} />
              </button>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, padding: '0 0.4rem', minWidth: '22px', textAlign: 'center' }}>
                {servings}
              </span>
              <button
                onClick={() => setServings(Math.min(12, servings + 1))}
                style={{ padding: '0.3rem 0.5rem', color: 'var(--text-primary)' }}
                disabled={servings >= 12}
                aria-label="Porsiyon Artır"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Tab Switcher */}
        <div style={{ 
          display: 'flex', 
          borderBottom: '1.5px solid var(--border-color)', 
          background: 'var(--bg-secondary)', 
          padding: '0 1rem' 
        }}>
          <button
            onClick={() => setActiveTab('ingredients')}
            style={{
              flex: 1,
              padding: '0.85rem',
              fontWeight: 800,
              fontSize: '0.925rem',
              color: activeTab === 'ingredients' ? 'var(--primary)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'ingredients' ? '3px solid var(--primary)' : '3px solid transparent'
            }}
          >
            Malzemeler ({recipe.requiredIngredients.length})
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            style={{
              flex: 1,
              padding: '0.85rem',
              fontWeight: 800,
              fontSize: '0.925rem',
              color: activeTab === 'steps' ? 'var(--primary)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'steps' ? '3px solid var(--primary)' : '3px solid transparent'
            }}
          >
            Nasıl Pişirilir? ({recipe.instructions.length} Adım)
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.25rem', overflowY: 'auto' }}>
          {activeTab === 'ingredients' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Missing Ingredients Alert */}
              {missingItems.length > 0 && (
                <div style={{
                  background: 'var(--warning-light)',
                  border: '1.5px solid var(--warning)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--warning-text)', fontSize: '0.875rem' }}>
                      {missingItems.length} Malzemeniz Eksik
                    </div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                      {servings} kişilik porsiyona göre hesaplanan miktarlarla pazar listenize ekleyin.
                    </div>
                  </div>
                  <button
                    className="btn btn-sm"
                    style={{ background: 'var(--warning)', color: 'white', fontWeight: 700 }}
                    onClick={handleAddScaledMissing}
                  >
                    <ShoppingBag size={14} />
                    <span>Pazara Ekle</span>
                  </button>
                </div>
              )}

              {/* Main Required Ingredients (Scaled dynamically) */}
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Gerekli Malzemeler</span>
                  {servings !== baseServings && (
                    <span style={{ fontSize: '0.775rem', color: 'var(--primary)', fontWeight: 700 }}>
                      ⚡ {servings} kişiye göre uyarlandı
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {recipe.requiredIngredients.map(req => {
                    const info = getIngredientInfo(req.id);
                    const hasIt = selectedSet.has(req.id);
                    const scaledAmountText = scaleAmount(req.amount, baseServings, servings);

                    return (
                      <div
                        key={req.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.65rem 0.95rem',
                          borderRadius: 'var(--radius-md)',
                          background: hasIt ? 'var(--success-light)' : 'var(--bg-tertiary)',
                          border: hasIt ? '1.5px solid var(--success)' : '1px solid var(--border-color)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '1.25rem' }}>{info.icon}</span>
                          <span style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                            {info.name}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ 
                            fontSize: '0.85rem', 
                            color: servings !== baseServings ? 'var(--primary)' : 'var(--text-secondary)', 
                            fontWeight: 700 
                          }}>
                            {scaledAmountText}
                          </span>
                          {hasIt ? (
                            <span style={{ color: 'var(--success-text)', fontWeight: 800, fontSize: '0.775rem', display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <CheckCircle2 size={15} /> Dolapta Var
                            </span>
                          ) : (
                            <span style={{ color: 'var(--warning)', fontWeight: 800, fontSize: '0.775rem' }}>
                              Eksik
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Optional Ingredients (Scaled) */}
              {recipe.optionalIngredients && recipe.optionalIngredients.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    İsteğe Bağlı Lezzet Katıcılar
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {recipe.optionalIngredients.map(opt => {
                      const info = getIngredientInfo(opt.id);
                      const scaledOptText = scaleAmount(opt.amount, baseServings, servings);
                      return (
                        <div
                          key={opt.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.65rem 0.95rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>{info.icon}</span>
                            <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{info.name}</span>
                          </div>
                          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                            {scaledOptText}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Spices */}
              {recipe.spices && recipe.spices.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Baharat & Tuz
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {recipe.spices.map(sp => {
                      const info = getIngredientInfo(sp.id);
                      const scaledSpiceText = scaleAmount(sp.amount, baseServings, servings);
                      return (
                        <div
                          key={sp.id}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-color)',
                            fontSize: '0.825rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <span>{info.icon || '🧂'}</span>
                          <span>{info.name} ({scaledSpiceText})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Chef Tips */}
              {recipe.tips && (
                <div style={{
                  background: 'var(--primary-light)',
                  border: '1.5px solid var(--primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.95rem 1.15rem',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start'
                }}>
                  <Lightbulb size={22} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary-dark)' }}>
                      Mutfak Püf Noktası
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '2px', lineHeight: 1.4 }}>
                      {recipe.tips}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Kitchen Countdown Timer */}
              <div className="kitchen-timer">
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  ⏱️ Mutfak Pişirme Sayacı
                </div>
                <div className="timer-digits">
                  {formatTimer(timerSeconds)}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', marginTop: '0.5rem' }}>
                  <button
                    className={`btn ${isTimerRunning ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                  >
                    {isTimerRunning ? <Pause size={16} /> : <Play size={16} />}
                    <span>{isTimerRunning ? 'Durdur' : 'Sayacı Başlat'}</span>
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds((recipe.cookTime || 15) * 60);
                    }}
                  >
                    <RotateCcw size={16} />
                    <span>Sıfırla</span>
                  </button>
                </div>
              </div>

              {/* Instructions List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {recipe.instructions.map((step, idx) => {
                  const isDone = completedSteps.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleStep(idx)}
                      style={{
                        padding: '0.95rem 1.15rem',
                        borderRadius: 'var(--radius-lg)',
                        background: isDone ? 'var(--success-light)' : 'var(--bg-tertiary)',
                        border: isDone ? '2px solid var(--success)' : '1.5px solid var(--border-color)',
                        cursor: 'pointer',
                        display: 'flex',
                        gap: '0.95rem',
                        alignItems: 'flex-start',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isDone ? 'var(--success)' : 'var(--border-color)',
                        color: isDone ? 'white' : 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: '1px'
                      }}>
                        {isDone ? <Check size={16} strokeWidth={3.5} /> : idx + 1}
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                        textDecoration: isDone ? 'line-through' : 'none',
                        lineHeight: 1.45,
                        fontWeight: isDone ? 500 : 600
                      }}>
                        {step}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div style={{
          padding: '0.85rem 1.25rem',
          borderTop: '1.5px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => onToggleFavorite(recipe.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Heart size={18} fill={isFavorite ? '#dc2626' : 'none'} color={isFavorite ? '#dc2626' : 'currentColor'} />
            <span>{isFavorite ? 'Favorilerimde' : 'Favorilere Ekle'}</span>
          </button>

          {activeTab === 'ingredients' ? (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setActiveTab('steps')}
            >
              <span>Pişirmeye Başla 🍳</span>
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={onClose}
            >
              <Check size={18} />
              <span>Tamamla & Afiyet Olsun!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
