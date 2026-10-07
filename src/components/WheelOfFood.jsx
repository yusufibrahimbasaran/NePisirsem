import React, { useState } from 'react';
import { Dices, Sparkles, ChefHat, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WheelOfFood({ recipes, cookableRecipes, onSelectRecipe }) {
  const [useOnlyCookable, setUseOnlyCookable] = useState(cookableRecipes.length > 0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedWinner, setSelectedWinner] = useState(null);

  const pool = useOnlyCookable && cookableRecipes.length > 0 ? cookableRecipes : recipes;

  const handleSpin = () => {
    if (isSpinning || pool.length === 0) return;

    setIsSpinning(true);
    setSelectedWinner(null);

    const extraTurns = Math.floor(Math.random() * 4) + 5;
    const randomDegrees = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (extraTurns * 360) + randomDegrees;

    setRotation(totalRotation);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      const winner = pool[randomIndex];
      setSelectedWinner(winner);
      setIsSpinning(false);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'var(--warning-light)',
          border: '1px solid var(--warning)',
          color: 'var(--warning-text)',
          padding: '0.4rem 0.95rem',
          borderRadius: 'var(--radius-full)',
          fontWeight: 800,
          fontSize: '0.85rem',
          marginBottom: '0.5rem'
        }}>
          <Sparkles size={16} />
          <span>Kararsız Kaldığınız Günler İçin</span>
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Günün Şanslı Yemeği 🎡
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', maxWidth: '440px', margin: '0 auto', lineHeight: 1.45 }}>
          "Bugün ne pişirsem?" diye düşünmeyi bırakın; çarkı çevirin, günün menüsü karşınıza çıksın!
        </p>
      </div>

      {/* Filter Mode Toggle */}
      <div style={{
        background: 'var(--bg-tertiary)',
        padding: '0.35rem',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        gap: '0.35rem',
        border: '1.5px solid var(--border-color)'
      }}>
        <button
          onClick={() => setUseOnlyCookable(true)}
          style={{
            padding: '0.5rem 1.15rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            background: useOnlyCookable ? 'var(--primary)' : 'transparent',
            color: useOnlyCookable ? 'white' : 'var(--text-secondary)',
            transition: 'all 0.15s ease'
          }}
        >
          Dolabımdaki Malzemelerle ({cookableRecipes.length})
        </button>
        <button
          onClick={() => setUseOnlyCookable(false)}
          style={{
            padding: '0.5rem 1.15rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            background: !useOnlyCookable ? 'var(--primary)' : 'transparent',
            color: !useOnlyCookable ? 'white' : 'var(--text-secondary)',
            transition: 'all 0.15s ease'
          }}
        >
          Tüm Tarifler ({recipes.length})
        </button>
      </div>

      {/* Roulette Wheel Graphics */}
      <div className="wheel-container">
        <div style={{ position: 'relative' }}>
          <div className="roulette-pointer"></div>
          <div
            className="roulette-box"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="roulette-center">
              <ChefHat size={34} color="var(--primary)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
                NE PİŞİRSEM?
              </span>
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleSpin}
          disabled={isSpinning || pool.length === 0}
          style={{
            padding: '0.9rem 2.5rem',
            fontSize: '1.05rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 800,
            opacity: isSpinning ? 0.7 : 1
          }}
        >
          <Dices size={22} />
          <span>{isSpinning ? 'Çark Dönüyor...' : 'Çarkı Çevir! 🎲'}</span>
        </button>
      </div>

      {/* Winner Result Card */}
      {selectedWinner && (
        <div style={{
          width: '100%',
          background: 'var(--bg-secondary)',
          border: '2px solid var(--primary)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.35rem',
          boxShadow: 'var(--shadow-lg)',
          textAlign: 'center',
          animation: 'slideUp 0.25s ease'
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>
            🎉 Günün Seçilen Yemeği!
          </div>
          <div style={{ fontSize: '2.75rem', margin: '0.35rem 0' }}>
            {selectedWinner.imageEmoji || '🍲'}
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {selectedWinner.title}
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.4rem 0 1.15rem 0' }}>
            {selectedWinner.description}
          </p>

          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => onSelectRecipe(selectedWinner)}
          >
            <span>Tarifi Gör ve Pişir</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
