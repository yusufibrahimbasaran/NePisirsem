// Kullanıcı Yönetimi & Kimlik Doğrulama Sistemi

export const DEMO_USERS = [
  {
    id: 'user-ayse',
    name: 'Ayşe Hanım',
    email: 'ayse@evmutfagi.com',
    avatar: '👩‍🍳',
    role: 'Ev Hanımı & Aile Şefi',
    householdSize: 4,
    dietary: ['Geleneksel'],
    pantry: ['sogan', 'sarimsak', 'domates', 'biber_yesil', 'patates', 'kiyma', 'pirinc', 'bulgur', 'kirmizi_mercimek', 'domates_salcasi', 'biber_salcasi', 'tereyagi', 'zeytinyagi', 'tuz', 'karabiber', 'pul_biber', 'nane', 'kimyon', 'yogurt', 'yumurta'],
    favorites: ['karniyarik', 'mercimek_corbasi', 'firinda_patatesli_kofte'],
    shoppingList: [
      { id: 'ayse-1', name: '2 kg Un', completed: false },
      { id: 'ayse-2', name: 'Zeytinyağı (1 Lt)', completed: true }
    ],
    customRecipes: []
  },
  {
    id: 'user-mert',
    name: 'Mert (Öğrenci)',
    email: 'mert@universite.edu.tr',
    avatar: '🎓',
    role: 'Üniversite Öğrencisi',
    householdSize: 1,
    dietary: ['Pratik', 'Bütçe Dostu'],
    pantry: ['yumurta', 'makarna', 'sogan', 'sarimsak', 'domates_salcasi', 'aycicek_yagi', 'patates', 'kasar_peyniri', 'tuz', 'karabiber', 'ekmek'],
    favorites: ['menemen', 'kiymali_makarna', 'patatesli_omlet'],
    shoppingList: [
      { id: 'mert-1', name: '1 Koli Yumurta (30lu)', completed: false },
      { id: 'mert-2', name: '2 Paket Makarna', completed: false }
    ],
    customRecipes: []
  }
];

export function getStoredUsers() {
  const data = localStorage.getItem('np_all_users');
  if (data) {
    try { return JSON.parse(data); } catch (e) {}
  }
  // Initialize with demo users
  localStorage.setItem('np_all_users', JSON.stringify(DEMO_USERS));
  return DEMO_USERS;
}

export function saveStoredUsers(users) {
  localStorage.setItem('np_all_users', JSON.stringify(users));
}

export function getCurrentUser() {
  const data = localStorage.getItem('np_active_user');
  if (data) {
    try { return JSON.parse(data); } catch (e) {}
  }
  // Default to Ayşe Hanım initially
  const users = getStoredUsers();
  const defaultUser = users[0] || null;
  if (defaultUser) {
    localStorage.setItem('np_active_user', JSON.stringify(defaultUser));
  }
  return defaultUser;
}

export function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('np_active_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('np_active_user');
  }
}
