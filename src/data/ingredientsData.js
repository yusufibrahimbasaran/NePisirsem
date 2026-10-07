export const INGREDIENT_CATEGORIES = [
  { id: 'all', name: 'Tümü', icon: 'Sparkles' },
  { id: 'vegetables', name: 'Sebze & Yeşillik', icon: 'Carrot' },
  { id: 'meat', name: 'Et, Tavuk & Balık', icon: 'Beef' },
  { id: 'dairy', name: 'Süt, Peynir & Yumurta', icon: 'Egg' },
  { id: 'grains', name: 'Bakliyat & Tahıl', icon: 'Wheat' },
  { id: 'pantry', name: 'Temel & Yağ & Sos', icon: 'Bottle' },
  { id: 'spices', name: 'Baharat & Çeşni', icon: 'Flame' },
];

export const INGREDIENTS = [
  // Sebzeler
  { id: 'sogan', name: 'Kuru Soğan', category: 'vegetables', icon: '🧅', common: true },
  { id: 'sarimsak', name: 'Sarımsak', category: 'vegetables', icon: '🧄', common: true },
  { id: 'domates', name: 'Domates', category: 'vegetables', icon: '🍅', common: true },
  { id: 'patates', name: 'Patates', category: 'vegetables', icon: '🥔', common: true },
  { id: 'biber_yesil', name: 'Yeşil Biber / Sivri Biber', category: 'vegetables', icon: '🫑', common: true },
  { id: 'biber_kapya', name: 'Kapya Biber', category: 'vegetables', icon: '🌶️', common: false },
  { id: 'patlican', name: 'Patlıcan', category: 'vegetables', icon: '🍆', common: true },
  { id: 'kabak', name: 'Kabak', category: 'vegetables', icon: '🥒', common: true },
  { id: 'havuc', name: 'Havuç', category: 'vegetables', icon: '🥕', common: true },
  { id: 'ispanak', name: 'Ispanak', category: 'vegetables', icon: '🥬', common: false },
  { id: 'mantar', name: 'Mantar', category: 'vegetables', icon: '🍄', common: false },
  { id: 'limon', name: 'Limon', category: 'vegetables', icon: '🍋', common: true },
  { id: 'maydanoz', name: 'Maydanoz', category: 'vegetables', icon: '🌿', common: true },
  { id: 'dereotu', name: 'Dereotu', category: 'vegetables', icon: '🌱', common: false },
  { id: 'taze_sogan', name: 'Taze Soğan', category: 'vegetables', icon: '🧅', common: false },
  { id: 'salatalik', name: 'Salatalık', category: 'vegetables', icon: '🥒', common: false },
  { id: 'pirasa', name: 'Pırasa', category: 'vegetables', icon: '🥬', common: false },
  { id: 'karnabahar', name: 'Karnabahar', category: 'vegetables', icon: '🥦', common: false },
  { id: 'brokoli', name: 'Brokoli', category: 'vegetables', icon: '🥦', common: false },
  { id: 'lahana', name: 'Beyaz Lahana', category: 'vegetables', icon: '🥬', common: false },
  { id: 'marul', name: 'Marul / Kıvırcık', category: 'vegetables', icon: '🥗', common: false },
  { id: 'misir', name: 'Mısır (Konserve/Taze)', category: 'vegetables', icon: '🌽', common: false },
  { id: 'bezelye', name: 'Bezelye', category: 'vegetables', icon: '🟢', common: false },

  // Et & Tavuk
  { id: 'kiyma', name: 'Kıyma (Dana/Kuzu)', category: 'meat', icon: '🥩', common: true },
  { id: 'tavuk_gogsu', name: 'Tavuk Göğsü / Fileto', category: 'meat', icon: '🍗', common: true },
  { id: 'tavuk_but', name: 'Tavuk But / Pirzola', category: 'meat', icon: '🍗', common: false },
  { id: 'kusbasi_et', name: 'Kuşbaşı Dana / Kuzu Eti', category: 'meat', icon: '🥩', common: false },
  { id: 'sucuk', name: 'Sucuk', category: 'meat', icon: '🥓', common: true },
  { id: 'sosis', name: 'Sosis', category: 'meat', icon: '🌭', common: false },
  { id: 'pastirma', name: 'Pastırma', category: 'meat', icon: '🥓', common: false },
  { id: 'ton_baligi', name: 'Ton Balığı (Konserve)', category: 'meat', icon: '🐟', common: false },
  { id: 'somon', name: 'Somon / Balık', category: 'meat', icon: '🐟', common: false },

  // Süt & Yumurta
  { id: 'yumurta', name: 'Yumurta', category: 'dairy', icon: '🥚', common: true },
  { id: 'sut', name: 'Süt', category: 'dairy', icon: '🥛', common: true },
  { id: 'yogurt', name: 'Yoğurt', category: 'dairy', icon: '🥣', common: true },
  { id: 'kasar_peyniri', name: 'Kaşar Peyniri / Rendelenmiş Peynir', category: 'dairy', icon: '🧀', common: true },
  { id: 'beyaz_peynir', name: 'Beyaz Peynir / Süzme Peynir', category: 'dairy', icon: '🧀', common: true },
  { id: 'tereyagi', name: 'Tereyağı / Margarin', category: 'dairy', icon: '🧈', common: true },
  { id: 'krema', name: 'Sıvı Krema', category: 'dairy', icon: '🥛', common: false },
  { id: 'lor_peyniri', name: 'Lor Peyniri', category: 'dairy', icon: '🧀', common: false },
  { id: 'parmesan', name: 'Parmesan / Eski Kaşar', category: 'dairy', icon: '🧀', common: false },

  // Bakliyat & Tahıl
  { id: 'makarna', name: 'Makarna (Herhangi bir çeşit)', category: 'grains', icon: '🍝', common: true },
  { id: 'pirinc', name: 'Pirinç (Baldo/Osmancık)', category: 'grains', icon: '🍚', common: true },
  { id: 'bulgur', name: 'Bulgur (Pilavlık veya Köftelik)', category: 'grains', icon: '🌾', common: true },
  { id: 'kirmizi_mercimek', name: 'Kırmızı Mercimek', category: 'grains', icon: '🥣', common: true },
  { id: 'yesil_mercimek', name: 'Yeşil Mercimek', category: 'grains', icon: '🥣', common: false },
  { id: 'nohut', name: 'Nohut (Haşlanmış/Kuru)', category: 'grains', icon: '🧆', common: false },
  { id: 'kuru_fasulye', name: 'Kuru Fasulye', category: 'grains', icon: '🍲', common: false },
  { id: 'un', name: 'Un', category: 'grains', icon: '🥖', common: true },
  { id: 'sehriye', name: 'Arpa / Tel Şehriye', category: 'grains', icon: '🌾', common: true },
  { id: 'yulaf', name: 'Yulaf Ezmesi', category: 'grains', icon: '🥣', common: false },
  { id: 'ekmek', name: 'Ekmek / Bayat Ekmek', category: 'grains', icon: '🍞', common: true },
  { id: 'yufka', name: 'Yufka / Hazır Baklavalık Yufka', category: 'grains', icon: '🥟', common: false },

  // Temel Yağ & Sos & Kiler
  { id: 'zeytinyagi', name: 'Zeytinyağı', category: 'pantry', icon: '🫒', common: true },
  { id: 'aycicek_yagi', name: 'Sıvı Yağ (Ayçiçek)', category: 'pantry', icon: '🌻', common: true },
  { id: 'domates_salcasi', name: 'Domates Salçası', category: 'pantry', icon: '🥫', common: true },
  { id: 'biber_salcasi', name: 'Biber Salçası', category: 'pantry', icon: '🥫', common: true },
  { id: 'domates_rendesi', name: 'Domates Rendesi / Püresi', category: 'pantry', icon: '🍅', common: false },
  { id: 'seker', name: 'Toz Şeker', category: 'pantry', icon: '🧂', common: true },
  { id: 'sirke', name: 'Sirke (Elma/Üzüm)', category: 'pantry', icon: '🍶', common: false },
  { id: 'soya_sosu', name: 'Soya Sosu', category: 'pantry', icon: '🍶', common: false },
  { id: 'hardal', name: 'Hardal', category: 'pantry', icon: '🍯', common: false },
  { id: 'bal', name: 'Bal / Pekmez', category: 'pantry', icon: '🍯', common: false },
  { id: 'tahin', name: 'Tahin', category: 'pantry', icon: '🥣', common: false },
  { id: 'ceviz', name: 'Ceviz / Fındık', category: 'pantry', icon: '🥜', common: false },

  // Baharatlar
  { id: 'tuz', name: 'Tuz', category: 'spices', icon: '🧂', common: true },
  { id: 'karabiber', name: 'Karabiber', category: 'spices', icon: '🧂', common: true },
  { id: 'pul_biber', name: 'Pul Biber', category: 'spices', icon: '🌶️', common: true },
  { id: 'kekik', name: 'Kekik', category: 'spices', icon: '🌿', common: true },
  { id: 'nane', name: 'Kuru Nane', category: 'spices', icon: '🍃', common: true },
  { id: 'kimyon', name: 'Kimyon', category: 'spices', icon: '✨', common: true },
  { id: 'kirmizi_toz_biber', name: 'Kırmızı Toz Biber (Tatlı/Acı)', category: 'spices', icon: '🌶️', common: true },
  { id: 'kori', name: 'Köri', category: 'spices', icon: '🍛', common: false },
  { id: 'zerdecal', name: 'Zerdeçal', category: 'spices', icon: '✨', common: false },
  { id: 'tarcin', name: 'Tarçın', category: 'spices', icon: '🪵', common: false },
  { id: 'sumak', name: 'Sumak', category: 'spices', icon: '✨', common: false },
];

export const PRESET_PANTRIES = [
  {
    id: 'student',
    name: '🎓 Öğrenci Evi Temel Dolabı',
    description: 'Yumurta, makarna, soğan, salça, sıvı yağ, patates, kaşar gibi temel kurtarıcılar.',
    ingredients: ['yumurta', 'makarna', 'sogan', 'sarimsak', 'domates_salcasi', 'aycicek_yagi', 'patates', 'kasar_peyniri', 'tuz', 'karabiber', 'pul_biber', 'ekmek']
  },
  {
    id: 'traditional_turkish',
    name: '🇹🇷 Klasik Türk Mutfağı Kileri',
    description: 'Mercimek, pirinç, bulgur, kıyma, domates, biber, tereyağı ve zengin baharatlar.',
    ingredients: ['sogan', 'sarimsak', 'domates', 'biber_yesil', 'patates', 'kiyma', 'pirinc', 'bulgur', 'kirmizi_mercimek', 'domates_salcasi', 'biber_salcasi', 'tereyagi', 'zeytinyagi', 'tuz', 'karabiber', 'pul_biber', 'nane', 'kimyon', 'yoğurt', 'yumurta']
  },
  {
    id: 'fit_healthy',
    name: '🥗 Fit & Sağlıklı Beslenme',
    description: 'Tavuk göğsü, yumurta, lor peyniri, yoğurt, sebzeler, zeytinyağı, yulaf.',
    ingredients: ['tavuk_gogsu', 'yumurta', 'yogurt', 'zeytinyagi', 'ispanak', 'mantar', 'kabak', 'domates', 'salatalik', 'limon', 'yulaf', 'tuz', 'karabiber', 'kekik']
  },
  {
    id: 'quick_pasta',
    name: '🍝 Pratik & İtalyan Tarzı',
    description: 'Makarna, krema, sarımsak, domates sosu, parmesan/kaşar, mantar, tavuk.',
    ingredients: ['makarna', 'krema', 'sarimsak', 'domates_rendesi', 'mantar', 'tavuk_gogsu', 'kasar_peyniri', 'zeytinyagi', 'tuz', 'karabiber', 'kekik']
  }
];
