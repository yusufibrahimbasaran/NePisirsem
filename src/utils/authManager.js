/**
 * Ne Pişirsem? - İstemci Taraflı Profil Ayırma & Persona Yöneticisi
 * 
 * ⚠️ ÖNEMLİ MİMARİ AÇIKLAMA:
 * Bu modül gerçek bir sunucu/backend kimlik doğrulama (JWT, OAuth, parola hash'leme veya oturum güvenliği)
 * sistemi DEĞİLDİR. Tamamen istemci taraflı (Local-First / LocalStorage tabanlı) bir
 * "Profil Ayırma ve Çoklu Persona Geçişi" mekanizmasıdır.
 * 
 * Amaç:
 * Aynı tarayıcı veya mobil cihazı kullanan aile bireylerinin (örneğin "Ev Hanımı" ile "Üniversite Öğrencisi")
 * dolap malzemelerini, favori tariflerini ve alışveriş listelerini birbirine karıştırmadan
 * bağımsız profiller halinde saklayabilmesini sağlamaktır.
 */

import { getStorageItem, setStorageItem, removeStorageItem } from './storage';

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
  const users = getStorageItem('np_all_users', null);
  if (users && Array.isArray(users) && users.length > 0) {
    return users;
  }
  // Varsayılan demo kullanıcıları ile başlat
  setStorageItem('np_all_users', DEMO_USERS);
  return DEMO_USERS;
}

export function saveStoredUsers(users) {
  setStorageItem('np_all_users', users);
}

export function getCurrentUser() {
  const user = getStorageItem('np_active_user', null);
  if (user) {
    return user;
  }
  // Başlangıçta varsayılan olarak ilk profili seç
  const users = getStoredUsers();
  const defaultUser = users[0] || null;
  if (defaultUser) {
    setStorageItem('np_active_user', defaultUser);
  }
  return defaultUser;
}

export function setCurrentUser(user) {
  if (user) {
    setStorageItem('np_active_user', user);
  } else {
    removeStorageItem('np_active_user');
  }
}
