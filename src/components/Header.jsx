import React from 'react';
import { ChefHat, Refrigerator, UtensilsCrossed, Dices, Wand2, ShoppingBag, Moon, Sun, User } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  pantryCount, 
  shoppingCount, 
  theme, 
  toggleTheme,
  currentUser,
  onOpenAuth
}) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div 
          className="brand-logo" 
          style={{ cursor: 'pointer' }}
          onClick={() => setActiveTab('pantry')}
        >
          <div className="brand-badge">
            <ChefHat size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.3px', color: 'var(--text-primary)' }}>
              Ne Pişirsem<span style={{ color: 'var(--primary)' }}>?</span>
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '-2px' }}>
              Evdeki Malzemelerle Pratik Yemekler
            </div>
          </div>
        </div>

        <nav className="header-nav-desktop">
          <button 
            className={`nav-link ${activeTab === 'pantry' ? 'active' : ''}`}
            onClick={() => setActiveTab('pantry')}
          >
            <Refrigerator size={18} />
            <span>Dolabım</span>
            {pantryCount > 0 && (
              <span className="nav-badge" style={{ position: 'static', marginLeft: '2px' }}>
                {pantryCount}
              </span>
            )}
          </button>

          <button 
            className={`nav-link ${activeTab === 'recipes' ? 'active' : ''}`}
            onClick={() => setActiveTab('recipes')}
          >
            <UtensilsCrossed size={18} />
            <span>Tarifler</span>
          </button>

          <button 
            className={`nav-link ${activeTab === 'wheel' ? 'active' : ''}`}
            onClick={() => setActiveTab('wheel')}
          >
            <Dices size={18} />
            <span>Günün Çarkı</span>
          </button>

          <button 
            className={`nav-link ${activeTab === 'chef' ? 'active' : ''}`}
            onClick={() => setActiveTab('chef')}
          >
            <Wand2 size={18} />
            <span>Sihirli Menü</span>
          </button>

          <button 
            className={`nav-link ${activeTab === 'shopping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shopping')}
          >
            <ShoppingBag size={18} />
            <span>Pazar Listesi</span>
            {shoppingCount > 0 && (
              <span className="nav-badge" style={{ position: 'static', marginLeft: '2px' }}>
                {shoppingCount}
              </span>
            )}
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* User Profile / Login Pill */}
          <button
            onClick={onOpenAuth}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-tertiary)',
              border: '1.5px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {currentUser ? (
              <>
                <span style={{ fontSize: '1.15rem' }}>{currentUser.avatar}</span>
                <span style={{ maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {currentUser.name}
                </span>
              </>
            ) : (
              <>
                <User size={16} />
                <span>Giriş Yap</span>
              </>
            )}
          </button>

          <button 
            className="btn-icon" 
            onClick={toggleTheme} 
            title={theme === 'dark' ? 'Açık Mod' : 'Karanlık Mod'}
            aria-label="Tema Değiştir"
          >
            {theme === 'dark' ? <Sun size={19} color="#f59e0b" /> : <Moon size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
