import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Sparkles, 
  ChefHat, 
  Clock, 
  Utensils, 
  Flame, 
  Users, 
  BookOpen,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { INGREDIENTS } from '../data/ingredientsData';

export default function CreateRecipeModal({ 
  isOpen, 
  onClose, 
  onSaveRecipe, 
  initialRecipe = null,
  currentUser 
}) {
  if (!isOpen) return null;

  const isEditing = Boolean(initialRecipe);

  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [category, setCategory] = useState(initialRecipe?.category || 'Ana Yemekler');
  const [cuisine, setCuisine] = useState(initialRecipe?.cuisine || 'Ev Yapımı / Anne Mutfağı');
  const [prepTime, setPrepTime] = useState(initialRecipe?.prepTime || 15);
  const [cookTime, setCookTime] = useState(initialRecipe?.cookTime || 20);
  const [servings, setServings] = useState(initialRecipe?.servings || 4);
  const [difficulty, setDifficulty] = useState(initialRecipe?.difficulty || 'Kolay');
  const [calories, setCalories] = useState(initialRecipe?.calories || 320);
  const [imageEmoji, setImageEmoji] = useState(initialRecipe?.imageEmoji || '🍲');
  const [description, setDescription] = useState(initialRecipe?.description || '');
  const [tips, setTips] = useState(initialRecipe?.tips || '');
  
  // Required Ingredients
  const [requiredIngredients, setRequiredIngredients] = useState(
    initialRecipe?.requiredIngredients || [
      { id: 'sogan', amount: '1 adet' },
      { id: 'zeytinyagi', amount: '2 yemek kaşığı' }
    ]
  );

  // Optional Ingredients
  const [optionalIngredients, setOptionalIngredients] = useState(
    initialRecipe?.optionalIngredients || []
  );

  // Spices
  const [spices, setSpices] = useState(
    initialRecipe?.spices || [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' }
    ]
  );

  // Instructions Steps
  const [instructions, setInstructions] = useState(
    initialRecipe?.instructions || [
      'Malzemeleri yıkayıp doğrayarak hazırlayın.',
      'Tencere veya tavada pişirme aşamalarını sırayla uygulayın.',
      'Sıcak olarak servis yapın.'
    ]
  );

  const [error, setError] = useState('');

  const emojiOptions = ['🍲', '🍳', '🥩', '🍗', '🐟', '🍝', '🍚', '🥗', '🍕', '🥟', '🥦', '🥕', '🍆', '🍮', '🥞', '🥣', '🥪', '🌯', '🧁', '✨'];

  const categories = [
    'Pratik & Kahvaltı',
    'Ana Yemekler',
    'Çorbalar',
    'Makarna & Hamur',
    'Pilav & Yan Lezzet',
    'Zeytinyağlı & Sebze',
    'Salata & Meze',
    'Tatlı & İkram'
  ];

  // Required Ingredient Handlers
  const handleAddRequired = () => {
    setRequiredIngredients([...requiredIngredients, { id: 'domates', amount: '1 adet' }]);
  };

  const handleUpdateRequired = (index, field, value) => {
    const updated = [...requiredIngredients];
    updated[index][field] = value;
    setRequiredIngredients(updated);
  };

  const handleRemoveRequired = (index) => {
    setRequiredIngredients(requiredIngredients.filter((_, i) => i !== index));
  };

  // Optional Ingredient Handlers
  const handleAddOptional = () => {
    setOptionalIngredients([...optionalIngredients, { id: 'kasar_peyniri', amount: '50g' }]);
  };

  const handleUpdateOptional = (index, field, value) => {
    const updated = [...optionalIngredients];
    updated[index][field] = value;
    setOptionalIngredients(updated);
  };

  const handleRemoveOptional = (index) => {
    setOptionalIngredients(optionalIngredients.filter((_, i) => i !== index));
  };

  // Spices Handlers
  const handleAddSpice = () => {
    setSpices([...spices, { id: 'pul_biber', amount: '1 çay kaşığı' }]);
  };

  const handleUpdateSpice = (index, field, value) => {
    const updated = [...spices];
    updated[index][field] = value;
    setSpices(updated);
  };

  const handleRemoveSpice = (index) => {
    setSpices(spices.filter((_, i) => i !== index));
  };

  // Step Handlers
  const handleAddStep = () => {
    setInstructions([...instructions, '']);
  };

  const handleUpdateStep = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const handleRemoveStep = (index) => {
    if (instructions.length <= 1) return;
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Lütfen yemeğin adını giriniz.');
      return;
    }

    if (requiredIngredients.length === 0) {
      setError('Lütfen en az bir ana malzeme ekleyiniz.');
      return;
    }

    const filteredSteps = instructions.filter(s => s.trim().length > 0);
    if (filteredSteps.length === 0) {
      setError('Lütfen en az bir hazırlanış adımı yazınız.');
      return;
    }

    const recipeData = {
      id: initialRecipe?.id || 'custom-' + Date.now(),
      title: title.trim(),
      category,
      cuisine,
      prepTime: Number(prepTime) || 10,
      cookTime: Number(cookTime) || 15,
      servings: Number(servings) || 2,
      difficulty,
      calories: Number(calories) || 300,
      imageEmoji: imageEmoji || '🍲',
      description: description.trim() || `${title} - Özel ev yapımı tarifiniz.`,
      isCustom: true,
      author: currentUser?.name || 'Siz',
      requiredIngredients: requiredIngredients.filter(r => r.id),
      optionalIngredients: optionalIngredients.filter(o => o.id),
      spices: spices.filter(s => s.id),
      instructions: filteredSteps,
      tags: ['ozel-tarif', 'kisisel-defter', category.toLowerCase()],
      tips: tips.trim() || 'Kendi damak zevkinize göre baharat miktarını ayarlayabilirsiniz.'
    };

    onSaveRecipe(recipeData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '680px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <div style={{
          position: 'relative',
          background: 'var(--primary)',
          color: 'white',
          padding: '1.4rem 1.5rem',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem'
            }}>
              {imageEmoji}
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                {isEditing ? 'Tarifi Düzenle' : 'Tarif Defterime Ekle 📖'}
              </h2>
              <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Kendi özel tarifinizi kaydedin, dolap malzemelerinizle otomatik eşleşsin.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(0,0,0,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {error && (
            <div style={{
              padding: '0.75rem 1rem',
              background: 'var(--danger-light)',
              color: 'var(--danger)',
              border: '1px solid var(--danger)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* Emoji & Title */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                İkon
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={imageEmoji}
                  onChange={(e) => setImageEmoji(e.target.value)}
                  maxLength={4}
                  style={{
                    width: '60px',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    padding: '0.55rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-color)',
                    background: 'var(--bg-tertiary)'
                  }}
                />
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Tarif Adı *
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Annemin Meşhur Fırın Köftesi, Pratik Lavaş Tost..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border-color)',
                  background: 'var(--bg-tertiary)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              />
            </div>
          </div>

          {/* Quick Emoji Bar */}
          <div style={{ display: 'flex', gap: '0.35rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {emojiOptions.map(em => (
              <button
                type="button"
                key={em}
                onClick={() => setImageEmoji(em)}
                style={{
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  border: imageEmoji === em ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  background: imageEmoji === em ? 'var(--primary-light)' : 'var(--bg-secondary)',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                {em}
              </button>
            ))}
          </div>

          {/* Category & Cuisine */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Kategori
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  fontWeight: 600
                }}
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Mutfak / Stil
              </label>
              <input
                type="text"
                placeholder="Örn: Anne Mutfağı, Pratik, Türk, Ege..."
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
          </div>

          {/* Metrics: PrepTime, CookTime, Servings, Calories, Difficulty */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '0.65rem',
            background: 'var(--bg-secondary)',
            padding: '0.85rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)'
          }}>
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                <Clock size={13} /> Hazırlık (dk)
              </label>
              <input
                type="number"
                min="0"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                <Flame size={13} /> Pişirme (dk)
              </label>
              <input
                type="number"
                min="0"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                <Users size={13} /> Porsiyon
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                <Flame size={13} /> Kalori
              </label>
              <input
                type="number"
                min="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                <Utensils size={13} /> Zorluk
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
              >
                <option value="Kolay">Kolay</option>
                <option value="Orta">Orta</option>
                <option value="Zor">Zor</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              Tarif Açıklaması / Hikayesi
            </label>
            <textarea
              rows={2}
              placeholder="Yemeğinizi kısaca tanıtın (örn: Çıtır çıtır, az yağlı pratik bir lezzet)..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Required Ingredients */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                🍅 Gerekli Ana Malzemeler ({requiredIngredients.length})
              </label>
              <button
                type="button"
                onClick={handleAddRequired}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  background: 'var(--primary-light)',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                <Plus size={14} /> Malzeme Ekle
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {requiredIngredients.map((ing, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <select
                    value={ing.id}
                    onChange={(e) => handleUpdateRequired(idx, 'id', e.target.value)}
                    style={{
                      flex: 1.2,
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-tertiary)'
                    }}
                  >
                    {INGREDIENTS.map(i => (
                      <option key={i.id} value={i.id}>{i.icon} {i.name}</option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Miktar (örn: 2 adet, 200g)"
                    value={ing.amount}
                    onChange={(e) => handleUpdateRequired(idx, 'amount', e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-tertiary)'
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveRequired(idx)}
                    style={{
                      background: 'var(--danger-light)',
                      color: 'var(--danger)',
                      border: 'none',
                      padding: '7px',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Spices & Seasonings */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                🧂 Baharatlar ({spices.length})
              </label>
              <button
                type="button"
                onClick={handleAddSpice}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '3px 7px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                + Baharat Ekle
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {spices.map((sp, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <select
                    value={sp.id}
                    onChange={(e) => handleUpdateSpice(idx, 'id', e.target.value)}
                    style={{
                      flex: 1.2,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.85rem'
                    }}
                  >
                    {INGREDIENTS.filter(i => i.category === 'spices' || i.common).map(i => (
                      <option key={i.id} value={i.id}>{i.icon} {i.name}</option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Miktar (örn: 1 çay kaşığı)"
                    value={sp.amount}
                    onChange={(e) => handleUpdateSpice(idx, 'amount', e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.85rem'
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveSpice(idx)}
                    style={{
                      background: 'transparent',
                      color: 'var(--text-muted)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                👩‍🍳 Hazırlanış Adımları ({instructions.length})
              </label>
              <button
                type="button"
                onClick={handleAddStep}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  background: 'var(--primary-light)',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                <Plus size={14} /> Yeni Adım Ekle
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {instructions.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--primary-light)',
                    color: 'var(--primary-dark)',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}>
                    {idx + 1}
                  </div>

                  <textarea
                    rows={2}
                    placeholder={`Adım ${idx + 1} yapılışı...`}
                    value={step}
                    onChange={(e) => handleUpdateStep(idx, e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      resize: 'vertical'
                    }}
                  />

                  {instructions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(idx)}
                      style={{
                        background: 'transparent',
                        color: 'var(--text-muted)',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px'
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              💡 Şefin Püf Noktası / Özel Notu
            </label>
            <input
              type="text"
              placeholder="Örn: Pişirmeden önce eti oda sıcaklığına getirin, kapağı kapalı tutun..."
              value={tips}
              onChange={(e) => setTips(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Actions Footer */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              İptal
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <CheckCircle2 size={18} />
              <span>{isEditing ? 'Değişiklikleri Kaydet' : 'Tarifi Defterime Kaydet'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
