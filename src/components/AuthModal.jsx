import React, { useState } from 'react';
import { X, User, LogIn, UserPlus, LogOut, Check, Sparkles, ChefHat, GraduationCap, ShieldCheck, Heart, ShoppingBag, Refrigerator } from 'lucide-react';
import { getStoredUsers, saveStoredUsers, DEMO_USERS } from '../utils/authManager';

export default function AuthModal({ 
  currentUser, 
  onLogin, 
  onLogout, 
  onClose,
  pantryCount,
  favoritesCount,
  shoppingCount
}) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Ev Hanımı & Aile Şefi');
  const [error, setError] = useState('');

  const users = getStoredUsers();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!found) {
      setError('Bu e-posta adresiyle kayıtlı bir hesap bulunamadı.');
      return;
    }

    onLogin(found);
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Lütfen tüm alanları doldurunuz.');
      return;
    }

    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      setError('Bu e-posta adresi zaten kullanımda.');
      return;
    }

    const newUser = {
      id: 'user-' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      avatar: role.includes('Öğrenci') ? '🎓' : '👩‍🍳',
      role: role,
      householdSize: role.includes('Öğrenci') ? 1 : 4,
      dietary: ['Genel'],
      pantry: ['yumurta', 'makarna', 'domates_salcasi', 'aycicek_yagi', 'tuz'],
      favorites: ['menemen'],
      shoppingList: [],
      customRecipes: []
    };

    const updatedUsers = [...users, newUser];
    saveStoredUsers(updatedUsers);
    onLogin(newUser);
    onClose();
  };

  const handleQuickDemoSwitch = (demoUser) => {
    onLogin(demoUser);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        {/* Header */}
        <div style={{
          position: 'relative',
          background: 'var(--primary)',
          color: 'white',
          padding: '1.5rem 1.25rem',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>
              {currentUser ? currentUser.avatar : '👤'}
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>
                {currentUser ? currentUser.name : (isRegister ? 'Hesap Oluştur' : 'Kullanıcı Girişi')}
              </h2>
              <div style={{ fontSize: '0.775rem', opacity: 0.9 }}>
                {currentUser ? currentUser.role : 'Kişisel dolap ve tariflerinizi saklayın'}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {currentUser ? (
            /* Logged in User Profile View */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {/* User Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                <div style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem',
                  textAlign: 'center'
                }}>
                  <Refrigerator size={20} color="var(--primary)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{pantryCount}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Dolapta Malzeme</div>
                </div>

                <div style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem',
                  textAlign: 'center'
                }}>
                  <Heart size={20} color="#dc2626" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{favoritesCount}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Favori Tarif</div>
                </div>

                <div style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem',
                  textAlign: 'center'
                }}>
                  <ShoppingBag size={20} color="var(--warning)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{shoppingCount}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Pazar İhtiyacı</div>
                </div>
              </div>

              {/* User Details */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '0.95rem'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>E-Posta Adresi:</div>
                <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-primary)', marginBottom: '0.65rem' }}>{currentUser.email}</div>
                
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Profil Tipi:</div>
                <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--primary)' }}>{currentUser.role}</div>
              </div>

              {/* Switch Demo Profile Quick Action */}
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  Hızlı Profil Değiştir (Test):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {DEMO_USERS.map(demo => (
                    <button
                      key={demo.id}
                      onClick={() => handleQuickDemoSwitch(demo)}
                      style={{
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-md)',
                        background: currentUser.id === demo.id ? 'var(--primary-light)' : 'var(--bg-tertiary)',
                        border: currentUser.id === demo.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span style={{ fontSize: '1.35rem' }}>{demo.avatar}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{demo.name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{demo.role}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Logout button */}
              <button
                className="btn btn-outline"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                style={{ color: 'var(--danger)', borderColor: 'var(--border-color)', marginTop: '0.5rem' }}
              >
                <LogOut size={16} />
                <span>Oturumu Kapat</span>
              </button>
            </div>
          ) : (
            /* Login / Register Form */
            <div>
              {/* Switch Login / Register Tabs */}
              <div style={{
                display: 'flex',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-full)',
                padding: '0.25rem',
                marginBottom: '1.25rem',
                border: '1px solid var(--border-color)'
              }}>
                <button
                  onClick={() => { setIsRegister(false); setError(''); }}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    background: !isRegister ? 'var(--primary)' : 'transparent',
                    color: !isRegister ? 'white' : 'var(--text-secondary)'
                  }}
                >
                  Giriş Yap
                </button>
                <button
                  onClick={() => { setIsRegister(true); setError(''); }}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    background: isRegister ? 'var(--primary)' : 'transparent',
                    color: isRegister ? 'white' : 'var(--text-secondary)'
                  }}
                >
                  Yeni Hesap Aç
                </button>
              </div>

              {error && (
                <div style={{
                  background: 'var(--danger-light)',
                  color: 'var(--danger)',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {error}
                </div>
              )}

              {/* Quick Demo Logins */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.45rem' }}>
                  ⚡ Tek Tıkla Örnek Kullanıcı Olarak Başla:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {DEMO_USERS.map(demo => (
                    <button
                      key={demo.id}
                      onClick={() => handleQuickDemoSwitch(demo)}
                      style={{
                        padding: '0.6rem 0.75rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1.5px solid var(--border-color)',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    >
                      <span style={{ fontSize: '1.35rem' }}>{demo.avatar}</span>
                      <div>
                        <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>{demo.name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{demo.role}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                position: 'relative',
                margin: '1.25rem 0',
                fontSize: '0.775rem',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}>
                <span style={{ background: 'var(--bg-secondary)', padding: '0 0.5rem', position: 'relative', zIndex: 1 }}>
                  veya e-posta ile devam edin
                </span>
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)' }} />
              </div>

              {/* Form */}
              <form onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {isRegister && (
                  <div>
                    <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Adınız & Soyadınız:
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Ayşe Hanım"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1.5px solid var(--border-color)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                )}

                {isRegister && (
                  <div>
                    <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Profil Tipi:
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1.5px solid var(--border-color)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="Ev Hanımı & Aile Şefi">👩‍🍳 Ev Hanımı & Aile Şefi</option>
                      <option value="Üniversite Öğrencisi">🎓 Üniversite Öğrencisi (Pratik & Bütçe)</option>
                      <option value="Çalışan / Hızlı Yemek">⚡ Çalışan / Hızlı & Pratik</option>
                      <option value="Genel Mutfak Meraklısı">🥘 Mutfak Meraklısı</option>
                    </select>
                  </div>
                )}

                <div>
                  <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    E-Posta:
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1.5px solid var(--border-color)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    Şifre:
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1.5px solid var(--border-color)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem', fontWeight: 800 }}
                >
                  {isRegister ? <UserPlus size={18} /> : <LogIn size={18} />}
                  <span>{isRegister ? 'Hesabı Tamamla ve Başla' : 'Giriş Yap'}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
