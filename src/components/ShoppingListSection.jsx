import React, { useState } from 'react';
import { ShoppingBag, Plus, Trash2, Check, Share2 } from 'lucide-react';

export default function ShoppingListSection({ 
  shoppingList, 
  onToggleItem, 
  onAddItem, 
  onRemoveItem, 
  onClearCompleted 
}) {
  const [newItemText, setNewItemText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    onAddItem(newItemText.trim());
    setNewItemText('');
  };

  const handleShareWhatsApp = () => {
    if (shoppingList.length === 0) return;
    
    const unbought = shoppingList.filter(i => !i.completed).map(i => `▫️ ${i.name}`).join('\n');
    const bought = shoppingList.filter(i => i.completed).map(i => `✅ ${i.name}`).join('\n');
    
    let text = `🛒 *Ne Pişirsem? - Pazar & Market Listesi*\n\n`;
    if (unbought) text += `*Alınacaklar:*\n${unbought}\n\n`;
    if (bought) text += `*Alınanlar:*\n${bought}\n`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  const completedCount = shoppingList.filter(i => i.completed).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
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
          <ShoppingBag size={16} />
          <span>Eksik Malzemeler</span>
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Pazar & Market Listesi 🛒
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.45 }}>
          Tariflerden eksik olanlar ve eklediğiniz tüm ihtiyaçlar elinizin altında.
        </p>
      </div>

      {/* Add New Item Input */}
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Listeye ekle (örn: 1 kg Yoğurt, 2 adet Ekmek)..."
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          style={{
            flex: 1,
            padding: '0.85rem 1.15rem',
            background: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            fontSize: '0.95rem',
            color: 'var(--text-primary)'
          }}
        />
        <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 1.35rem' }}>
          <Plus size={20} />
          <span>Ekle</span>
        </button>
      </form>

      {/* List Action Bar */}
      {shoppingList.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
            Toplam {shoppingList.length} ürün ({completedCount} alındı)
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handleShareWhatsApp}
              className="btn btn-outline btn-sm"
              style={{ fontSize: '0.825rem', fontWeight: 700 }}
            >
              <Share2 size={14} />
              <span>{copied ? 'Kopyalandı! ✔' : 'WhatsApp İçin Kopyala'}</span>
            </button>
            {completedCount > 0 && (
              <button
                onClick={onClearCompleted}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.825rem', color: 'var(--danger)', fontWeight: 700 }}
              >
                <Trash2 size={14} />
                <span>Alınanları Sil</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Shopping Items List */}
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '0.85rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem'
      }}>
        {shoppingList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)' }}>
            <ShoppingBag size={44} style={{ opacity: 0.35, marginBottom: '0.5rem' }} />
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>Listeniz Boş</div>
            <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>Tariflerden eksik olanları veya yukarıdan yeni ürünleri ekleyebilirsiniz.</div>
          </div>
        ) : (
          shoppingList.map(item => (
            <div
              key={item.id}
              onClick={() => onToggleItem(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                background: item.completed ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '7px',
                  border: item.completed ? 'none' : '2px solid var(--border-color)',
                  background: item.completed ? 'var(--success)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  {item.completed && <Check size={16} strokeWidth={3.5} />}
                </div>
                <span style={{
                  fontSize: '0.95rem',
                  color: item.completed ? 'var(--text-muted)' : 'var(--text-primary)',
                  textDecoration: item.completed ? 'line-through' : 'none',
                  fontWeight: item.completed ? 400 : 700
                }}>
                  {item.name}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveItem(item.id);
                }}
                style={{ color: 'var(--text-muted)', padding: '5px' }}
                aria-label="Sil"
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
