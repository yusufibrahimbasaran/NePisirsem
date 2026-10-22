# 🍳 Ne Pişirsem? - Akıllı Dolap & Mutfak Asistanı

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-5.0-FCC72B?logo=vitest&logoColor=black)](https://vitest.dev/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-FF5722?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

> Evdeki malzemelerle "Bugün ne pişirsem?" derdine son veren, ev hanımları, öğrenciler ve yoğun çalışanlar için tasarlanmış modern, sade, hızlı ve çevrimdışı çalışan akıllı mutfak asistanı.

---

## 📸 Ekran Görüntüleri

| 🧊 Akıllı Dolap & Kiler | 🎯 Eşleşen Tarifler Listesi | 🍲 Detay & Dinamik Porsiyon |
| :---: | :---: | :---: |
| ![Akıllı Dolap](https://images.unsplash.com/photo-1584990347449-399a9a30faef?w=600&auto=format&fit=crop&q=80) | ![Tarifler](https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80) | ![Tarif Detay](https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80) |
| *139 malzeme ile tek tıkla dolap seçimi* | *%100 yapılabilir ve 1-2 eksikli yemekler* | *Porsiyona göre anlık gramaj & makro hesabı* |

| 🎡 Günün Şanslı Çarkı | 🛒 Pazar & Alışveriş Listesi | 👤 Profil & Persona Yönetimi |
| :---: | :---: | :---: |
| ![Yemek Çarkı](https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80) | ![Market Listesi](https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=80) | ![Profil Yönetimi](https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80) |
| *Kararsız kalınca eğlenceli kura* | *Eksikleri tek tıkla WhatsApp ile paylaş* | *Ev Hanımı & Öğrenci profil izolasyonu* |

*(Not: Kendi ekran görüntülerinizi eklemek için proje kökündeki `public/screenshots/` klasörüne görsel ekleyip yolları güncelleyebilirsiniz).*

---

## ✨ Öne Çıkan Özellikler

1. 🧊 **Akıllı Dolap & Kiler (`PantrySection`):**
   - 8 reyon altında gruplanmış **139 temel gıda ve baharat**.
   - Hızlı arama, kategori filtreleri ve tek dokunuşla malzeme seçimi.
2. 🎯 **Akıllı Eşleşme Motoru (`recipeMatcher.js`):**
   - 🟢 **%100 Yapılabilir:** Dolaptaki malzemelerle hemen pişirilebilecek yemekler.
   - 🟡 **1-2 Eksik Malzemeli:** Dolaba en yakın tarifler ve eksik malzemelerin sarı rozetle listelenmesi.
   - Eksik malzemeleri tek tıkla alışveriş listesine aktarma imkanı.
3. ⚖️ **Dinamik Porsiyon Ölçekleyici (`portionScaler.js`):**
   - Kişi sayısı artırıldığında veya azaltıldığında adet, kaşık, bardak ve gramaj değerleri anlık oranlanır (örn: 500g kıyma 2 katına çıkınca otomatik "1 kg kıyma" olur, 1 çay kaşığı yarıya inince "Yarım (1/2) çay kaşığı" olur).
4. 🥗 **Besin Değerleri ve Alerjen Koruması (`nutritionCalculator.js`):**
   - Kişi sayısına göre ölçeklenen kalori, protein, karbonhidrat ve lif makroları.
   - Gluten, süt/laktoz, yumurta, kuruyemiş, deniz ürünü alerjen tespiti ve kullanıcı diyet kısıtlarıyla eşleşmeyen yemeklerde anında uyarı.
5. 🎡 **Günün Şanslı Yemeği - Çarkıfelek (`WheelOfFood`):**
   - Kararsız kalındığında eğlenceli çark çevirme deneyimi ve `canvas-confetti` kutlaması.
6. 🛒 **Pazar & Market Listesi (`ShoppingListSection`):**
   - Eksik malzemeleri tek tıkla listeye ekleme, tamamlananları işaretleme ve WhatsApp/SMS formatında paylaşım.
7. 👥 **Yerel Profil & Persona Yönetimi (`authManager.js`):**
   - Tek cihazda birden fazla aile bireyi (Ev Hanımı, Öğrenci) için profil bazlı dolap ve favori izolasyonu.
   - > ⚠️ **Mimari Not:** Bu sistem bir sunucu/backend kimlik doğrulama (JWT/OAuth) altyapısı değil, aynı cihazı paylaşan aile fertleri için istemci taraflı (Local-First) bir **profil ayırma ve persona yönetimi** çözümüdür.
8. ⚡ **Performans & Kod Bölümleme (Code Splitting & Lazy Loading):**
   - 97 tariflik büyük veri seti (`recipesData.js`), yemek çarkı ve özel tarif modalı dinamik `React.lazy` ve `import()` ile bölünmüştür.
   - İlk sayfa yükleme JS boyutu 498 kB'den **98 kB gzip'e** düşürülmüştür.
9. 📱 **Tam Kapsamlı PWA & Akıllı Güncelleme:**
   - Standalone mobil uygulama deneyimi (iOS & Android).
   - Çevrimdışı önbellek desteği (`sw.js`).
   - Yeni bir sürüm deploy edildiğinde kullanıcıyı rahatsız etmeden beliren **"Yeni Sürüm Hazır - Güncelle"** bildirimi.

---

## 📁 Proje Klasör Yapısı

```text
nepisirsem-app/
├── public/                     # Statik varlıklar & PWA dosyaları
│   ├── favicon.svg             # Modern vektör logo
│   ├── icons.svg               # SVG ikon seti
│   ├── manifest.json           # PWA manifest yapılandırması
│   └── sw.js                   # Service Worker (Çevrimdışı önbellek & güncelleme)
├── scripts/                    # Bakım ve doğrulama araçları
│   └── validateData.js         # 97 tarif & 139 malzeme bütünlük doğrulayıcı
├── src/
│   ├── assets/                 # Proje içi görseller ve stiller
│   ├── components/             # React UI Bileşenleri
│   │   ├── AuthModal.jsx             # Profil geçişi ve persona modalı
│   │   ├── BottomNav.jsx             # Mobil alt gezinti çubuğu
│   │   ├── ChefAssistant.jsx         # Kural tabanlı mutfak tavsiye asistanı
│   │   ├── CreateRecipeModal.jsx     # Özel tarif oluşturma/düzenleme (Lazy)
│   │   ├── Header.jsx                # Üst başlık, logo, tema ve profil butonu
│   │   ├── InstallAppBanner.jsx      # Mobil PWA yükleme bildirimi
│   │   ├── PantrySection.jsx         # Dolap & kiler malzeme paneli
│   │   ├── RecipeCard.jsx            # Tarif kartı ve eşleşme rozeti
│   │   ├── RecipeDetailModal.jsx     # Tarif detayı, porsiyon ve besin analizi
│   │   ├── RecipeListSection.jsx     # Tarif listeleme, arama ve filtreleme
│   │   ├── ShoppingListSection.jsx   # Alışveriş listesi ve WhatsApp paylaşımı
│   │   ├── UpdateNotification.jsx    # "Yeni Sürüm Hazır" PWA güncelleme bildirimi
│   │   └── WheelOfFood.jsx           # Şanslı yemek çarkı (Lazy)
│   ├── data/                   # Statik veritabanı
│   │   ├── ingredientsData.js        # 139 kategori bazlı malzeme
│   │   └── recipesData.js            # 97 detaylı tarif kataloğu
│   ├── utils/                  # Yardımcı iş mantığı modülleri
│   │   ├── __tests__/                # Vitest birim testleri (36 test)
│   │   ├── aiChefAssistant.js        # Kural tabanlı menü türetici
│   │   ├── authManager.js            # Persona ve profil yöneticisi
│   │   ├── nutritionCalculator.js    # Makro, kalori ve alerjen hesaplayıcı
│   │   ├── portionScaler.js          # Akıllı porsiyon ve ölçü ölçekleyici
│   │   ├── recipeMatcher.js          # Malzeme eşleşme ve sıralama algoritması
│   │   ├── storage.js                # Sürümlemeli ve güvenli LocalStorage motoru
│   │   └── textUtils.js              # Türkçe karakter duyarlı arama fonksiyonları
│   ├── App.css                 # Bileşen özel stilleri
│   ├── App.jsx                 # Ana uygulama çatısı ve durum yönetimi
│   ├── index.css               # Temel tasarım sistemi ve renk paleti (Terracotta & Olive)
│   └── main.jsx                # React başlangıç noktası & SW kaydı
├── netlify.toml                # Netlify SPA yönlendirme ve PWA header ayarları
├── package.json                # Bağımlılıklar ve npm scriptleri
├── vercel.json                 # Vercel SPA routing ve PWA header ayarları
└── vite.config.js              # Vite React yapılandırması
```

---

## 🚀 Kurulum ve Yerel Çalıştırma

### Gereksinimler
- Node.js (v18.0 veya üzeri)
- npm veya pnpm / yarn

### Adımlar

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```
   Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı test edebilirsiniz.

3. **Birim Testlerini Çalıştırın (Vitest):**
   ```bash
   npm test
   ```
   *Eşleşme motoru, porsiyon ölçekleyici, besin hesaplayıcı ve depolama motorunu kapsayan 36 test koşulur.*

4. **Veri Bütünlüğü Doğrulamasını Çalıştırın:**
   ```bash
   npm run validate
   ```
   *Tariflerdeki 97 yemek ile 139 malzeme arasındaki bağlantıları, eksik alanları ve alerjen tutarlılığını denetler.*

5. **Kod Standartları ve Linter Kontrolü (Oxlint):**
   ```bash
   npm run lint
   ```

6. **Üretim Derlemesi (Build):**
   ```bash
   npm run build
   ```
   Derleme çıktıları `dist/` klasörüne üretilir.

7. **Derlemeyi Yerel Olarak Önizleyin:**
   ```bash
   npm run preview
   ```

---

## 🌐 Canlıya Alma (Deploy) Talimatları

Proje Vercel ve Netlify için optimize edilmiş yapılandırma dosyalarıyla (`vercel.json` ve `netlify.toml`) birlikte gelir.

### 1. Vercel ile Canlıya Alma (Önerilen)

#### Yöntem A: Vercel Dashboard (En Kolay)
1. Kodlarınızı GitHub / GitLab / Bitbucket reponuza gönderin:
   ```bash
   git add .
   git commit -m "feat: Ne Pisirsem v0.9.0 Production Ready"
   git push origin main
   ```
2. [vercel.com](https://vercel.com) adresine giriş yapıp **"Add New Project"** butonuna tıklayın.
3. GitHub reponuzu seçin:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **"Deploy"** butonuna tıklayın. 1 dakika içinde uygulamanız dünya çapında CDN üzerinde canlıya alınır.

#### Yöntem B: Vercel CLI
```bash
npm i -g vercel
vercel
# Üretime göndermek için:
vercel --prod
```

---

### 2. Netlify ile Canlıya Alma

#### Yöntem A: Netlify Dashboard
1. [netlify.com](https://app.netlify.com) adresine gidin.
2. **"Add new site" > "Import an existing project"** adımlarını izleyin.
3. Reponuzu bağlayın. `netlify.toml` dosyası build komutunu (`npm run build`), yayın dizinini (`dist`) ve PWA header'larını otomatik algılayacaktır.
4. **"Deploy Site"** butonuna basın.

#### Yöntem B: Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

---

## 📈 Performans ve Kalite Metrikleri

- **İlk Yükleme Boyutu:** ~98.6 kB (Gzip)
- **Lazy Loaded Modüller:** Yemek Çarkı, Özel Tarif Modalı ve 97 adetlik Tarif Kataloğu
- **Derleme Süresi:** ~0.65 saniye (Vite 8)
- **Test Kapsamı:** %100 iş mantığı yardımcı modülleri (36 test)
- **Linter Hata Sayısı:** 0

---

## 🗺️ Gelecek Planları & Yol Haritası (Roadmap)

- [ ] **Gerçek LLM Entegrasyonu (Google Gemini API):** Şef asistanını kural tabanlı yapıdan çıkarıp kullanıcının sıra dışı malzeme kombinasyonları için yaratıcı şef tarifleri üreten üretken yapay zeka modeline bağlamak.
- [ ] **Sesli Mutfak Asistanı & Zamanlayıcı:** Pişirme esnasında eller kirliyken adımları sesle okuma ve fırın/tencere için dahili sesli kronometre.
- [ ] **Fiş / Fatura Tarama (OCR):** Market fişinin fotoğrafını çekerek dolaptaki malzemeleri otomatik doldurma.
- [ ] **Topluluk Tarifleri & Sosyal Paylaşım:** Kullanıcıların kendi oluşturdukları özel aile tariflerini toplulukla paylaşabilmesi ve oylama sistemi.
- [ ] **Haftalık Menü & İsraf Önleme Takvimi:** Dolaptaki son kullanma tarihine yaklaşan ürünleri önceliklendirerek 7 günlük akşam yemeği planlayıcı.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında açık kaynak olarak sunulmaktadır.
Lezzetli ve keyifli yemekler dileriz! 👨‍🍳✨
