import React from 'react';
import { Refrigerator, UtensilsCrossed, Dices, Wand2, ShoppingBag } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, pantryCount, shoppingCount }) {
  return (
    <nav className="mobile-bottom-nav">
      <button 
        className={`mobile-nav-item ${activeTab === 'pantry' ? 'active' : ''}`}
        onClick={() => setActiveTab('pantry')}
      >
        <Refrigerator size={21} />
        <span>Dolabım</span>
        {pantryCount > 0 && <span className="nav-badge">{pantryCount}</span>}
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'recipes' ? 'active' : ''}`}
        onClick={() => setActiveTab('recipes')}
      >
        <UtensilsCrossed size={21} />
        <span>Tarifler</span>
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'wheel' ? 'active' : ''}`}
        onClick={() => setActiveTab('wheel')}
      >
        <Dices size={21} />
        <span>Çark</span>
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'chef' ? 'active' : ''}`}
        onClick={() => setActiveTab('chef')}
      >
        <Wand2 size={21} />
        <span>Sihirli Menü</span>
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'shopping' ? 'active' : ''}`}
        onClick={() => setActiveTab('shopping')}
      >
        <ShoppingBag size={21} />
        <span>Pazar</span>
        {shoppingCount > 0 && <span className="nav-badge">{shoppingCount}</span>}
      </button>
    </nav>
  );
}
