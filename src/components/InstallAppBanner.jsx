import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Sparkles, Check } from 'lucide-react';

export default function InstallAppBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode (PWA installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isStandalone) {
      setInstalled(true);
      return;
    }

    // Check if dismissed recently
    const dismissed = localStorage.getItem('nepisirsem_install_dismissed');
    if (dismissed && Date.now() - parseInt(dismissed, 10) < 1000 * 60 * 60 * 24 * 3) {
      // Dismissed within last 3 days
      return;
    }

    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome|crios|fxios/.test(userAgent);
    if (isIosDevice && isSafari) {
      setIsIOS(true);
      setShowBanner(true);
    }

    // Listen for beforeinstallprompt event (Android / Chrome / Edge)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstalled(true);
      }
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('nepisirsem_install_dismissed', Date.now().toString());
  };

  if (!showBanner || installed) return null;

  return (
    <div className="install-pwa-banner">
      <div className="install-pwa-content">
        <div className="install-pwa-icon">
          <img src="/logo.jpg" alt="Ne Pişirsem Logo" style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
        </div>
        <div className="install-pwa-text">
          <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Uygulamayı Telefona Yükle</span>
            <Sparkles size={14} color="#e0533c" />
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {isIOS 
              ? 'Safari’de alttaki 📤 Paylaş butonuna dokunup "Ana Ekrana Ekle"yi seçin.'
              : 'Daha hızlı açılış ve internetsiz kullanım için ana ekranınıza ekleyin.'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {!isIOS && deferredPrompt && (
          <button 
            onClick={handleInstallClick}
            className="btn-install-pwa"
          >
            <Download size={15} />
            <span>Yükle</span>
          </button>
        )}
        <button 
          onClick={handleDismiss} 
          className="btn-close-pwa"
          title="Kapat"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
