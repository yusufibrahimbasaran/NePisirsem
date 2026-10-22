import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Register PWA Service Worker & listen for updates
if ('serviceWorker' in navigator && (import.meta.env.PROD || window.location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        // If an updated worker is already waiting, prompt immediately
        if (registration.waiting) {
          window.dispatchEvent(new CustomEvent('sw-update-available', { detail: registration }));
        }

        // Listen for new workers being installed
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.addEventListener('statechange', () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available and ready
                window.dispatchEvent(new CustomEvent('sw-update-available', { detail: registration }));
              }
            });
          }
        });
      },
      (err) => {
        console.warn('PWA ServiceWorker registration failed:', err);
      }
    );
  });
}
