export const RECIPES = [
  // ==========================================
  // 1. PRATİK & KAHVALTI
  // ==========================================
  {
    id: 'menemen',
    title: 'Geleneksel Menemen',
    category: 'Pratik & Kahvaltı',
    cuisine: 'Türk Mutfağı',
    prepTime: 5,
    cookTime: 12,
    servings: 2,
    difficulty: 'Kolay',
    calories: 240,
    imageEmoji: '🍳',
    description: 'Domates, biber ve yumurtanın mükemmel uyumu. İster soğanlı ister soğansız, Türk kahvaltısının vazgeçilmezi.',
    requiredIngredients: [
      { id: 'yumurta', amount: '3 adet' },
      { id: 'domates', amount: '3 adet orta boy' },
      { id: 'biber_yesil', amount: '2 adet' },
      { id: 'zeytinyagi', amount: '2 yemek kaşığı (veya sıvı yağ)' }
    ],
    optionalIngredients: [
      { id: 'sogan', amount: '1 küçük boy' },
      { id: 'kasar_peyniri', amount: '50g rendelenmiş' },
      { id: 'tereyagi', amount: '1 tatlı kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 çay kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Biberleri ince ince doğrayın ve tavada zeytinyağında 2-3 dakika soteleyin.',
      '(Soğanlı yapıyorsanız) İnce doğranmış soğanı da ekleyip hafif pembeleşene kadar kavurun.',
      'Kabukları soyulup küp küp doğranmış domatesleri ekleyin, kapağı kapatıp suyunu salıp çekene kadar kısık ateşte pişirin.',
      'Tuz ve baharatları ekleyip karıştırın.',
      'Yumurtaları kırın; isterseniz sarılarını patlatmadan ya da hafifçe karıştırarak kıvam alana kadar 2-3 dakika pişirin.',
      'İsteğe göre üzerine kaşar serpip eriyince sıcak servis edin.'
    ],
    tags: ['pratik', 'kahvalti', 'vejetaryen', 'ekonomik', '15-dakika'],
    tips: 'Domateslerin sulu ve lezzetli olması menemenin sırrıdır. Yumurtaları fazla pişirip kurutmamaya özen gösterin.'
  },
  {
    id: 'cilbir',
    title: 'Sarımsaklı Yoğurtlu Çılbır',
    category: 'Pratik & Kahvaltı',
    cuisine: 'Geleneksel Türk',
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    difficulty: 'Kolay',
    calories: 220,
    imageEmoji: '🥣',
    description: 'İpeksi sarımsaklı süzme yoğurt üzerine haşlanmış poşe yumurta ve tereyağlı pul biber sosu.',
    requiredIngredients: [
      { id: 'yumurta', amount: '3-4 adet' },
      { id: 'yogurt', amount: '1.5 su bardağı (tercihen süzme)' },
      { id: 'sarimsak', amount: '2 diş ezilmiş' },
      { id: 'tereyagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'dereotu', amount: 'Birkaç dal ince kıyılmış' },
      { id: 'sirke', amount: '1 yemek kaşığı (poşe suyu için)' }
    ],
    spices: [
      { id: 'pul_biber', amount: '1 tatlı kaşığı' },
      { id: 'kirmizi_toz_biber', amount: 'Yarım çay kaşığı' },
      { id: 'tuz', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Geniş bir kasede yoğurt, ezilmiş sarımsak ve tuzu pürüzsüz kıvam alana kadar çırpın, servis tabağına taban olarak yayın.',
      'Geniş bir tencerede suyu kaynatıp altını kısın, içine 1 yemek kaşığı sirke ekleyin ve kaşıkla girdap oluşturun.',
      'Yumurtaları teker teker bu girdabın ortasına kırıp beyazı toparlanana kadar (yaklaşık 3-4 dakika) pişirip delikli kepçeyle yoğurdun üzerine alın.',
      'Küçük bir tavada tereyağını kızdırıp pul biber ve kırmızı toz biberi köpürtün.',
      'Köpüren tereyağını yumurtaların üzerine gezdirin, dereotu serpip çıtır ekmekle servis yapın.'
    ],
    tags: ['kahvalti', 'protein', 'geleneksel', 'pratik', '15-dakika'],
    tips: 'Poşe yaparken sirke yumurta beyazının dağılmadan hemen toparlanmasını sağlar.'
  },
  {
    id: 'patatesli_omlet',
    title: 'İspanyol Usulü Patatesli Omlet (Tortilla)',
    category: 'Pratik & Kahvaltı',
    cuisine: 'Dünya / Pratik',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'Kolay',
    calories: 310,
    imageEmoji: '🍳',
    description: 'Sadece patates, soğan ve yumurta ile harikalar yaratan, günün her saatine yakışan doyurucu omlet.',
    requiredIngredients: [
      { id: 'patates', amount: '2 adet orta boy' },
      { id: 'yumurta', amount: '4 adet' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'kasar_peyniri', amount: '50g rendelenmiş' },
      { id: 'sucuk', amount: '50g dilimlenmiş' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Patatesleri ince ince yarım ay şeklinde, soğanları piyazlık doğrayın.',
      'Tavada zeytinyağını ısıtın, patates ve soğanları kısık ateşte yumuşayana kadar 10 dakika soteleyin (kızartmayın, buğulayın).',
      'Bir kapta yumurtaları tuz ve karabiberle çırpın, pişen patatesleri yumurtanın içine aktarın.',
      'Tavayı tekrar hafifçe yağlayıp karışımı dökün. Alt tarafı pişince düz bir tabak yardımıyla çevirip diğer yüzünü de 3-4 dakika pişirin.'
    ],
    tags: ['pratik', 'kahvalti', 'vejetaryen', 'ekonomik', '15-dakika'],
    tips: 'Omleti ters çevirmeden önce tabağın arkasını fırçayla hafifçe yağlarsanız kolayca kayar.'
  },
  {
    id: 'firinda_yumurtali_ekmek',
    title: 'Fırında Kaşarlı Yumurtalı Ekmek',
    category: 'Pratik & Kahvaltı',
    cuisine: 'Türk Mutfağı',
    prepTime: 5,
    cookTime: 12,
    servings: 3,
    difficulty: 'Kolay',
    calories: 260,
    imageEmoji: '🍞',
    description: 'Bayat ekmekleri değerlendirmenin en leziz yolu! Fırında nar gibi kızaran kaşarlı yumurtalı dilimler.',
    requiredIngredients: [
      { id: 'ekmek', amount: '1 adet bayat ekmek veya 8-10 dilim tost ekmeği' },
      { id: 'yumurta', amount: '3 adet' },
      { id: 'sut', amount: 'Yarım çay bardağı' },
      { id: 'kasar_peyniri', amount: '100g rendelenmiş' },
      { id: 'tereyagi', amount: '1 yemek kaşığı eritilmiş' }
    ],
    optionalIngredients: [
      { id: 'sucuk', amount: '50g minik küpler' },
      { id: 'domates', amount: '1 adet ince dilim' },
      { id: 'maydanoz', amount: 'Birkaç dal' }
    ],
    spices: [
      { id: 'tuz', amount: 'Yarım çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Geniş bir kapta yumurta, süt, eritilmiş tereyağı, tuz ve baharatları çırpın.',
      'Ekmek dilimlerini bu karışıma batırıp her iki tarafını ıslatın ve yağlı kağıt serili fırın tepsisine dizin.',
      'Üzerlerine rendelenmiş kaşar, sucuk parçaları ve kekik serpiştirin.',
      '200°C önceden ısıtılmış fırında kaşarlar eriyip altın sarısı kızarana kadar 10-12 dakika fırınlayın.'
    ],
    tags: ['kahvalti', 'pratik', 'ekonomik', 'israf-onleyici', '15-dakika'],
    tips: 'Fırında yapıldığı için tavada kızartılan yumurtalı ekmeğe göre çok daha hafif ve çıtır olur.'
  },
  {
    id: 'kuymak_mihlama',
    title: 'Karadeniz Usulü Kuymak / Mıhlama',
    category: 'Pratik & Kahvaltı',
    cuisine: 'Karadeniz / Türk',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: 'Kolay',
    calories: 380,
    imageEmoji: '🧀',
    description: 'Tereyağında kavrulan mısır unu ve uzadıkça uzayan peyniriyle sofraların yıldızı.',
    requiredIngredients: [
      { id: 'misir_unu', amount: '3 yemek kaşığı' },
      { id: 'tereyagi', amount: '2.5 yemek kaşığı' },
      { id: 'kasar_peyniri', amount: '150g (veya kolot/telli peynir)' }
    ],
    optionalIngredients: [
      { id: 'sut', amount: 'Yarım su bardağı (veya sıcak su)' }
    ],
    spices: [
      { id: 'tuz', amount: 'Yarım çay kaşığı (peynirin tuzuna göre)' }
    ],
    instructions: [
      'Bakır veya teflon tavada tereyağını eritin.',
      'Mısır ununu ekleyip rengi hafif dönüp fındık kokusu gelene kadar 2-3 dakika kavurun.',
      'Üzerine 1 su bardağı ılık su (veya süt) ekleyip hızlıca karıştırın, un suyunu çekip kaynayana kadar pişirin.',
      'Telli peyniri veya rendelenmiş kaşarı ekleyip kısık ateşte eritip fazla karıştırmadan tereyağı üste çıkana kadar 2 dakika bekleyin.',
      'Sıcak sıcak mısır ekmeği veya taze somun ekmekle servis edin.'
    ],
    tags: ['kahvalti', 'geleneksel', 'pratik', 'peynirli'],
    tips: 'Peyniri ekledikten sonra çok karıştırmamak tereyağının yüzeye çıkıp lezzetin parlamasını sağlar.'
  },
  {
    id: 'pratik_pankek',
    title: 'Puf Puf Kahvaltılık Pankek',
    category: 'Pratik & Kahvaltı',
    cuisine: 'Dünya / Kahvaltı',
    prepTime: 8,
    cookTime: 10,
    servings: 3,
    difficulty: 'Kolay',
    calories: 220,
    imageEmoji: '🥞',
    description: 'Bal, peynir, reçel veya çikolatayla mükemmel giden süngerimsi yumuşacık pankekler.',
    requiredIngredients: [
      { id: 'un', amount: '1.5 su bardağı' },
      { id: 'sut', amount: '1 su bardağı' },
      { id: 'yumurta', amount: '1 adet' },
      { id: 'seker', amount: '2 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'bal', amount: 'Servis için' },
      { id: 'kabartma_tozu', amount: '1 paket' },
      { id: 'tereyagi', amount: 'Tava için' }
    ],
    spices: [
      { id: 'tuz', amount: 'Bir çimdik' },
      { id: 'tarcin', amount: 'İsteğe göre yarım çay kaşığı' }
    ],
    instructions: [
      'Yumurta ve şekeri köpürene kadar çırpın.',
      'Süt ve sıvı yağı ekleyip karıştırın.',
      'Unu ve bir çimdik tuzu eleyerek ekleyin, pürüzsüz akıcı bir hamur elde edin.',
      'Hafif yağlanmış teflon tavada küçük bir kepçe hamur dökün.',
      'Üzeri göz göz olunca spatula ile çevirip diğer yüzünü de 1 dakika pişirin.',
      'Bal veya meyvelerle servis yapın.'
    ],
    tags: ['kahvalti', 'tatli', 'pratik', 'cocuk-menusu'],
    tips: 'Tavanın ısısı orta-kısık olmalıdır, aksi halde pankeklerin içi çiğ kalıp dışı yanabilir.'
  },

  // ==========================================
  // 2. ÇORBALAR
  // ==========================================
  {
    id: 'mercimek_corbasi',
    title: 'Lokanta Usulü Süzme Mercimek Çorbası',
    category: 'Çorbalar',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'Kolay',
    calories: 180,
    imageEmoji: '🥣',
    description: 'İçinizi ısıtan, pürüzsüz ipeksi kıvamda ve tam kıvamında enfes bir klasik.',
    requiredIngredients: [
      { id: 'kirmizi_mercimek', amount: '1.5 su bardağı' },
      { id: 'sogan', amount: '1 adet büyük' },
      { id: 'havuc', amount: '1 adet' },
      { id: 'patates', amount: '1 adet küçük' },
      { id: 'aycicek_yagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'tereyagi', amount: '1 yemek kaşığı (sos için)' },
      { id: 'un', amount: '1 yemek kaşığı' },
      { id: 'limon', amount: '1 adet' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'kimyon', amount: 'Yarım çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' },
      { id: 'nane', amount: '1 tatlı kaşığı' }
    ],
    instructions: [
      'Tencereye sıvı yağı alın, iri doğranmış soğanları hafif pembeleşene kadar soteleyin.',
      'İri doğranmış havuç ve patatesi ekleyip 2 dakika daha kavurun.',
      'Yıkanmış kırmızı mercimeği ve 6 su bardağı sıcak suyu ekleyin.',
      'Sebzeler ve mercimekler iyice yumuşayana kadar orta ateşte kaynatın.',
      'Tuz ve kimyonu ekleyin, ardından pürüzsüz olana kadar blenderdan geçirin.',
      'Ayrı bir tavada tereyağını eritip nane ve pul biberi hafif yakın, çorbanın üzerine gezdirin. Limonla servis yapın.'
    ],
    tags: ['corba', 'pratik', 'vejetaryen', 'ekonomik', 'klasik'],
    tips: 'Çorbaya ekleyeceğiniz az miktarda kimyon hem gaz yapmasını engeller hem de lokanta lezzeti katar.'
  },
  {
    id: 'ezogelin_corbasi',
    title: 'Geleneksel Ezogelin Çorbası',
    category: 'Çorbalar',
    cuisine: 'Güneydoğu / Türk',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'Kolay',
    calories: 195,
    imageEmoji: '🥣',
    description: 'Kırmızı mercimek, bulgur ve pirincin salçalı ve naneli nefis buluşması.',
    requiredIngredients: [
      { id: 'kirmizi_mercimek', amount: '1 su bardağı' },
      { id: 'bulgur', amount: '2 yemek kaşığı' },
      { id: 'pirinc', amount: '1 yemek kaşığı' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' },
      { id: 'tereyagi', amount: '1.5 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'biber_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'limon', amount: '1 adet' }
    ],
    spices: [
      { id: 'nane', amount: '1.5 tatlı kaşığı' },
      { id: 'pul_biber', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'tuz', amount: '1 tatlı kaşığı' }
    ],
    instructions: [
      'Tencereye mercimek, pirinç, bulgur ve 6 bardak sıcak suyu alıp yumuşayana kadar pişirin.',
      'Ayrı bir sos tenceresinde tereyağında doğranmış soğan ve sarımsakları soteleyin.',
      'Salçaları ekleyip kokusu çıkana kadar kavurun, ardından nane ve pul biberi ekleyin.',
      'Bu salçalı sosu kaynayan tencereye ekleyip 10 dakika özleşene kadar kısık ateşte kaynatın.',
      'İsteğe göre hafifçe el blenderından geçirip pütürlü veya pürüzsüz servis yapın.'
    ],
    tags: ['corba', 'klasik', 'geleneksel', 'bakliyat', 'ekonomik'],
    tips: 'Ezogelin çorbasında bol kuru nane ve tereyağı lezzetin can damarıdır.'
  },
  {
    id: 'domates_corbasi',
    title: 'Köz Kokulu Kaşarlı Domates Çorbası',
    category: 'Çorbalar',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 150,
    imageEmoji: '🥣',
    description: 'Taze domateslerle hazırlanan, üzerine eriyen kaşar peyniriyle servis edilen iç ısıtıcı çorba.',
    requiredIngredients: [
      { id: 'domates', amount: '4-5 adet olgun' },
      { id: 'un', amount: '2 yemek kaşığı' },
      { id: 'tereyagi', amount: '1.5 yemek kaşığı' },
      { id: 'sut', amount: '1 çay bardağı' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'kasar_peyniri', amount: '50g rendelenmiş (servis için)' },
      { id: 'sarimsak', amount: '1 diş' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Tencerede tereyağını eritin, unu ekleyip kokusu çıkana kadar 2 dakika kavurun.',
      'Salçayı ekleyip 1 dakika daha kavurun.',
      'Rendelenmiş veya blenderdan geçirilmiş domatesleri tencereye ekleyip karıştırın.',
      '3.5 su bardağı sıcak suyu azar azar ekleyerek topaklanmaması için çırpın.',
      'Kaynamaya başlayınca kısık ateşte 10 dakika pişirin.',
      'Ilık sütü yavaşça ekleyin, tuz ve karabiberi katıp 2 dakika daha kaynatın. Rendelenmiş kaşarla sıcak sunun.'
    ],
    tags: ['corba', 'pratik', 'vejetaryen', 'klasik'],
    tips: 'Sütü eklerken kesilmemesi için oda sıcaklığında veya ılık olmasına dikkat edin.'
  },
  {
    id: 'yayla_corbasi',
    title: 'Geleneksel Naneli Yayla Çorbası',
    category: 'Çorbalar',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 160,
    imageEmoji: '🥣',
    description: 'Yoğurt terbiyeli, pirinçli ve bol tereyağlı naneli geleneksel şifa çorbası.',
    requiredIngredients: [
      { id: 'pirinc', amount: 'Yarım çay bardağı' },
      { id: 'yogurt', amount: '1.5 su bardağı' },
      { id: 'yumurta', amount: '1 adet sarısı' },
      { id: 'un', amount: '1 yemek kaşığı' },
      { id: 'tereyagi', amount: '2 yemek kaşığı' },
      { id: 'nane', amount: '1 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı (en son eklenecek)' }
    ],
    instructions: [
      'Tencereye pirinci ve 4 su bardağı suyu alıp pirinçler yumuşayana kadar haşlayın.',
      'Terbiyesi için kasede yoğurt, yumurta sarısı ve unu pürüzsüz çırpın.',
      'Haşlanan pirincin suyundan 1 kepçe alıp ılıtarak terbiyeye karıştırın.',
      'Terbiyeyi tencereye dökerken çorbayı sürekli karıştırın.',
      'Kaynayana kadar karıştırmaya devam edin, kaynayınca kısık ateşte 5 dakika pişirin.',
      'Tavada tereyağını eritip bol nane ile köpürtün ve çorbaya dökün. Tuzu mutlaka ocaktan aldıktan sonra ekleyin.'
    ],
    tags: ['corba', 'vejetaryen', 'sifali', 'klasik'],
    tips: 'Yoğurdun kesilmemesi için tuzu mutlaka çorba piştikten ve ocaktan alındıktan sonra ekleyin.'
  },
  {
    id: 'sehriyeli_tavuk_corbasi',
    title: 'Şifalı Tel Şehriyeli Tavuk Çorbası',
    category: 'Çorbalar',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'Kolay',
    calories: 175,
    imageEmoji: '🥣',
    description: 'Tavuk suyuyla pişen, tel şehriyeli, limonlu ve bol karabiberli hasta çorbası.',
    requiredIngredients: [
      { id: 'tavuk_gogsu', amount: '250g haşlanıp didiklenmiş' },
      { id: 'sehriye', amount: '1 çay bardağı tel veya arpa şehriye' },
      { id: 'tereyagi', amount: '1.5 yemek kaşığı' },
      { id: 'domates_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'limon', amount: 'Yarım adet suyu' }
    ],
    optionalIngredients: [
      { id: 'havuc', amount: '1 adet rendelenmiş' },
      { id: 'sarimsak', amount: '1 diş' },
      { id: 'maydanoz', amount: 'İnce kıyılmış' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kirmizi_toz_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Tencerede tereyağını eritin, salçayı (ve rendelenmiş havucu) 2 dakika kavurun.',
      '5 su bardağı tavuk suyunu tencereye ekleyip kaynamaya bırakın.',
      'Kaynayan suya şehriyeleri ve didiklenmiş tavuk etlerini ekleyin.',
      'Şehriyeler yumuşayana kadar kısık ateşte 10-12 dakika pişirin.',
      'Limon suyu, tuz ve bol karabiber ekleyip kıyılmış maydanozla servis yapın.'
    ],
    tags: ['corba', 'tavuk', 'sifali', 'protein', 'pratik'],
    tips: 'Tavuğu haşlarken içine 1 defne yaprağı ve tane karabiber atarsanız tavuk suyunuz çok aromatik olur.'
  },
  {
    id: 'kremali_mantar_corbasi',
    title: 'Kremalı Taze Mantar Çorbası',
    category: 'Çorbalar',
    cuisine: 'Dünya / Restoran',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 210,
    imageEmoji: '🍄',
    description: 'İnce dilimlenmiş tereyağlı mantarlar, hafif krema ve dereotu ile restoran kalitesinde çorba.',
    requiredIngredients: [
      { id: 'mantar', amount: '300g ince dilimlenmiş' },
      { id: 'tereyagi', amount: '2 yemek kaşığı' },
      { id: 'un', amount: '2 yemek kaşığı' },
      { id: 'krema', amount: 'Yarım paket (100ml)' },
      { id: 'sarimsak', amount: '1 diş ezilmiş' }
    ],
    optionalIngredients: [
      { id: 'dereotu', amount: 'Yarım demet ince kıyılmış' },
      { id: 'sut', amount: '1 çay bardağı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Tencerede tereyağını eritin, mantarları ekleyip suyunu salıp çekene kadar soteleyin.',
      'Ezilmiş sarımsağı ve unu ekleyip 2 dakika un kokusu gidene kadar kavurun.',
      '3 su bardağı ılık suyu ve sütü azar azar ekleyip çırpma teliyle karıştırın.',
      'Kaynamaya başlayınca kısık ateşte 8-10 dakika pişirin.',
      'Sıvı kremayı, tuzu ve karabiberi ekleyin. 2 dakika kısıkta kaynatıp üzerine dereotu serperek ocaktan alın.'
    ],
    tags: ['corba', 'restoran-tarzi', 'mantarli', 'gurme'],
    tips: 'Mantarları yıkamak yerine nemli bir bezle silmek suyunu salmadan mükemmel sotelenmesini sağlar.'
  },

  // ==========================================
  // 3. ANA YEMEKLER (ET, TAVUK & BALIK)
  // ==========================================
  {
    id: 'tavuk_sote',
    title: 'Sebzeli Tavuk Sote',
    category: 'Ana Yemekler',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: 'Kolay',
    calories: 320,
    imageEmoji: '🍗',
    description: 'Yumuşacık tavuk göğsü, renkli biberler ve nefis domates soslu pratik ana yemek.',
    requiredIngredients: [
      { id: 'tavuk_gogsu', amount: '500g küp doğranmış' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'biber_yesil', amount: '2 adet' },
      { id: 'domates', amount: '2 adet' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'biber_kapya', amount: '1 adet' },
      { id: 'domates_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'mantar', amount: '150g' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 tatlı kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Geniş bir tavaya sıvı yağı alın, yüksek ateşte küp doğranmış tavukları suyunu salıp çekene kadar soteleyin.',
      'Yemeklik doğranmış soğan, sarımsak ve biberleri ekleyip 4-5 dakika kavurun.',
      '(Varsa) Salçayı ekleyip kokusu çıkana kadar 1 dakika çevirin.',
      'Küp doğranmış domatesleri, tuz ve baharatları ekleyin.',
      'Tavanın kapağını kapatıp kısık ateşte domatesler sos kıvamına gelene kadar 8-10 dk pişirin.',
      'Ocaktan almadan önce bol kekik serpin ve sıcak servis yapın.'
    ],
    tags: ['ana-yemek', 'protein', 'pratik', 'tencere', 'fit'],
    tips: 'Tavukları yüksek ateşte mühürlemek suyunun içinde kalmasını ve lokum gibi olmasını sağlar.'
  },
  {
    id: 'kori_soslu_tavuk',
    title: 'Kremalı Köri Soslu Tavuk',
    category: 'Ana Yemekler',
    cuisine: 'Dünya / Modern',
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: 'Kolay',
    calories: 390,
    imageEmoji: '🍛',
    description: 'Restoranların vazgeçilmez menüsü! Altın sarısı köri sosu ve mantarlarla enfes tavuk parçaları.',
    requiredIngredients: [
      { id: 'tavuk_gogsu', amount: '500g küp doğranmış' },
      { id: 'krema', amount: '1 kutu (200ml)' },
      { id: 'kori', amount: '1.5 tatlı kaşığı' },
      { id: 'zeytinyagi', amount: '2 yemek kaşığı' },
      { id: 'sarimsak', amount: '1 diş' }
    ],
    optionalIngredients: [
      { id: 'mantar', amount: '150g' },
      { id: 'biber_kapya', amount: '1 adet' },
      { id: 'tereyagi', amount: '1 yemek kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Tavaya yağı alıp iyice kızdırın. Küp tavukları ekleyip yüksek ateşte suyunu çekip kızarana kadar soteleyin.',
      '(Varsa) İnce doğranmış biber ve mantarları ekleyip 3-4 dakika birlikte çevirin.',
      'Ezilmiş sarımsağı ve köri baharatını ekleyip kokusu yayılana kadar 30 saniye kavurun.',
      'Kremayı ve tuzu ekleyin, kısık ateşte sos koyulaşana kadar 3-4 dakika kaynatın.',
      'Pirinç pilavı veya makarna eşliğinde servis yapın.'
    ],
    tags: ['ana-yemek', 'protein', 'pratik', 'restoran-tarzi', '15-dakika'],
    tips: 'Köri baharatını kremadan önce hafifçe yağda çevirmek aromasını ve canlı rengini ortaya çıkarır.'
  },
  {
    id: 'firinda_patatesli_kofte',
    title: 'Fırında Anne Köftesi & Patates',
    category: 'Ana Yemekler',
    cuisine: 'Türk Mutfağı',
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    difficulty: 'Orta',
    calories: 490,
    imageEmoji: '🧆',
    description: 'Çocukluğumuzun en sevilen klasiği. Fırında lokum gibi pişen köfte ve patatesler.',
    requiredIngredients: [
      { id: 'kiyma', amount: '400g' },
      { id: 'patates', amount: '3 adet büyük' },
      { id: 'sogan', amount: '1 adet rendelenmiş' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'ekmek', amount: '2 dilim ufalanmış içi' },
      { id: 'yumurta', amount: '1 adet' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'domates', amount: '2 adet dilim' },
      { id: 'biber_yesil', amount: '3 adet' },
      { id: 'maydanoz', amount: 'Yarım demet' }
    ],
    spices: [
      { id: 'tuz', amount: '1.5 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kimyon', amount: '1 tatlı kaşığı' },
      { id: 'pul_biber', amount: '1 tatlı kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Geniş bir kapta kıyma, rendelenmiş ve suyu sıkılmış soğan, ezilmiş sarımsak, yumurta, ekmek içi ve baharatları 5 dakika iyice yoğurun.',
      'Köfte harcından ceviz büyüklüğünde parçalar alıp yassı köfteler şekillendirin.',
      'Patatesleri elma dilim şeklinde doğrayın.',
      'Fırın tepsisine sırasıyla patates ve köfteleri dizin. Araya domates ve biber dilimleri yerleştirin.',
      '1 yemek kaşığı salçayı 1.5 su bardağı sıcak su ve 2 kaşık yağ ile çırpıp tepsiye gezdirin.',
      '200°C fırında patatesler yumuşayıp köfteler kızarana kadar 35-40 dk pişirin.'
    ],
    tags: ['ana-yemek', 'firin', 'klasik', 'aile-menusu', 'protein'],
    tips: 'Köfte harcını iyice yoğurmak köftelerin pişerken çatlayıp dağılmasını önler.'
  },
  {
    id: 'karniyarik',
    title: 'Nefis Fırında Karnıyarık',
    category: 'Ana Yemekler',
    cuisine: 'Türk Mutfağı',
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: 'Orta',
    calories: 380,
    imageEmoji: '🍆',
    description: 'Közlenmiş veya kızarmış patlıcanların leziz kıymalı harçla buluştuğu Türk mutfağının baş tacı.',
    requiredIngredients: [
      { id: 'patlican', amount: '4 adet orta boy' },
      { id: 'kiyma', amount: '250g' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'domates', amount: '2 adet' },
      { id: 'biber_yesil', amount: '2 adet' },
      { id: 'sarimsak', amount: '3 diş' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: 'Kızartmak veya yağlamak için' }
    ],
    optionalIngredients: [
      { id: 'biber_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'maydanoz', amount: 'Yarım demet' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Patlıcanları alacalı soyup tuzlu suda 15 dakika bekletin ve kurulayın.',
      'Patlıcanları tavada veya fırında kızartıp fırın tepsisine dizin ve ortalarından yarık açın.',
      'Tavada yağda doğranmış soğan, sarımsak ve kıymayı kavurun. Biberleri, küp domatesi, salçayı ve baharatları ekleyip pişirin.',
      'Hazırlanan kıymalı harcı patlıcanların ortasına paylaştırın. Üzerlerine domates ve biber dilimleri koyun.',
      '1 tatlı kaşığı salçayı 1 su bardağı sıcak suyla karıştırıp tepsinin tabanına dökün. 190°C fırında 25-30 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'firin', 'klasik', 'geleneksel'],
    tips: 'Daha hafif bir karnıyarık için patlıcanları fırında yağlı kağıt üzerinde fırçalayarak közleyebilirsiniz.'
  },
  {
    id: 'firinda_soslu_tavuk_patates',
    title: 'Fırında Soslu Tavuk & Patates',
    category: 'Ana Yemekler',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    difficulty: 'Kolay',
    calories: 430,
    imageEmoji: '🍗',
    description: 'Yoğurtlu ve salçalı marinasyonuyla fırında nar gibi kızaran tavuk butları ve çıtır patatesler.',
    requiredIngredients: [
      { id: 'tavuk_but', amount: '600g (veya tavuk pirzola/kanat)' },
      { id: 'patates', amount: '3 adet büyük' },
      { id: 'yogurt', amount: '2 yemek kaşığı' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' },
      { id: 'sarimsak', amount: '2 diş' }
    ],
    optionalIngredients: [
      { id: 'biber_yesil', amount: '3 adet' },
      { id: 'domates', amount: '2 adet' },
      { id: 'biber_salcasi', amount: '1 tatlı kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1.5 tatlı kaşığı' },
      { id: 'kekik', amount: '1 tatlı kaşığı' },
      { id: 'kirmizi_toz_biber', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kimyon', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Geniş bir kapta yoğurt, salça, zeytinyağı, sarımsak ve baharatları karıştırarak marine sosunu hazırlayın.',
      'Tavuk parçalarını ve elma dilim doğranmış patatesleri bu sosa bulayın.',
      'Fırın tepsisine dizin, aralara biber ve domates dilimleri serpiştirin.',
      '200°C fırında tavuklar ve patatesler nar gibi kızarana kadar 40-45 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'firin', 'protein', 'aile-menusu', 'kolay'],
    tips: 'Tavukları sosta 30 dakika bekletirseniz eti pamuk gibi yumuşak olur.'
  },
  {
    id: 'kuru_fasulye',
    title: 'Geleneksel Güveçte Kuru Fasulye',
    category: 'Ana Yemekler',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 45,
    servings: 4,
    difficulty: 'Orta',
    calories: 340,
    imageEmoji: '🍲',
    description: 'Yanında pilav ve turşuyla Türk sofralarının en sevilen milli tencere yemeği.',
    requiredIngredients: [
      { id: 'kuru_fasulye', amount: '2 su bardağı (haşlanmış)' },
      { id: 'sogan', amount: '1 adet büyük' },
      { id: 'domates_salcasi', amount: '1.5 yemek kaşığı' },
      { id: 'biber_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'tereyagi', amount: '1 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'sucuk', amount: '100g dilimlenmiş' },
      { id: 'kusbasi_et', amount: '150g' },
      { id: 'biber_yesil', amount: '2 adet' }
    ],
    spices: [
      { id: 'tuz', amount: '1.5 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'pul_biber', amount: '1 tatlı kaşığı' },
      { id: 'kimyon', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Tencereye sıvı yağ ve tereyağını alın, doğranmış soğanları (ve varsa et/sucuğu) kavurun.',
      'Biberleri ve salçaları ekleyip kokusu çıkana kadar 2 dakika soteleyin.',
      'Önceden haşlanmış kuru fasulyeleri ilave edip 2 dakika harmanlayın.',
      'Fasulyelerin üzerini 2 parmak geçecek kadar sıcak su ve baharatları ekleyin.',
      'Kısık ateşte fasulyeler lokum gibi olup suyu özleşene kadar 35-40 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'tencere', 'klasik', 'bakliyat', 'protein'],
    tips: 'Fasulyenin suyunun kıvamlı olması için birkaç kaşık fasulyeyi tencere kenarında kaşıkla ezebilirsiniz.'
  },
  {
    id: 'firinda_somon_sebzeli',
    title: 'Fırında Sebzeli Somon Fileto',
    category: 'Ana Yemekler',
    cuisine: 'Akdeniz / Fit',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: 'Kolay',
    calories: 360,
    imageEmoji: '🐟',
    description: 'Zeytinyağı, limon, sarımsak ve kekikle marine edilmiş, omega-3 deposu somon ve sebzeler.',
    requiredIngredients: [
      { id: 'somon', amount: '2 dilim somon fileto' },
      { id: 'patates', amount: '1 adet elma dilim' },
      { id: 'limon', amount: '1 adet dilimlenmiş' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' },
      { id: 'sarimsak', amount: '2 diş ezilmiş' }
    ],
    optionalIngredients: [
      { id: 'ceri_domates', amount: '6-8 adet' },
      { id: 'kabak', amount: '1 adet dilim' },
      { id: 'dereotu', amount: 'Servis için' }
    ],
    spices: [
      { id: 'tuz', amount: '1 çay kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 tatlı kaşığı' }
    ],
    instructions: [
      'Küçük bir kasede zeytinyağı, limon suyu, ezilmiş sarımsak, tuz, karabiber ve kekiği çırpın.',
      'Yağlı kağıt serili fırın tepsisine somon filetoları ve sebzeleri yerleştirin.',
      'Hazırladığınız sosu somonların ve sebzelerin üzerine fırçayla sürün.',
      'Somonların üzerine ince limon dilimleri yerleştirin.',
      '190°C fırında somonlar yumuşacık pişip sebzeler kızarana kadar 18-20 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'balik', 'fit', 'omega3', 'pratik', '20-dakika'],
    tips: 'Somonu fırında fazla tutmamak kurumasını engeller ve sulu, yumuşak kalmasını sağlar.'
  },
  {
    id: 'tavuk_fajita',
    title: 'Renkli Biberli Tavuk Fajita',
    category: 'Ana Yemekler',
    cuisine: 'Meksika / Dünya',
    prepTime: 10,
    cookTime: 12,
    servings: 3,
    difficulty: 'Kolay',
    calories: 340,
    imageEmoji: '🌯',
    description: 'Jülyen tavuk dilimleri, rengarenk biberler ve soğanların kızgın döküm tavada dansı.',
    requiredIngredients: [
      { id: 'tavuk_gogsu', amount: '450g jülyen doğranmış' },
      { id: 'biber_kapya', amount: '1 adet jülyen' },
      { id: 'biber_yesil', amount: '2 adet jülyen' },
      { id: 'sogan', amount: '1 adet piyazlık' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'lavas', amount: '4-5 adet dürüm için' },
      { id: 'sarimsak', amount: '1 diş' },
      { id: 'soya_sosu', amount: '1 yemek kaşığı' },
      { id: 'kasar_peyniri', amount: 'Üzerine rendelenmiş' }
    ],
    spices: [
      { id: 'kimyon', amount: '1 çay kaşığı' },
      { id: 'kirmizi_toz_biber', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' },
      { id: 'tuz', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Tavuk şeritlerini zeytinyağı, sarımsak, kimyon, toz biber, tuz ve karabiberle harmanlayın.',
      'İyice ısıtılmış tavada tavukları yüksek ateşte 5-6 dakika mühürleyerek soteleyin.',
      'Doğranmış soğan ve renkli biberleri ekleyin, sebzeler hafif diri kalacak şekilde yüksek ateşte 4-5 dakika çevirin.',
      'Sıcak lavaşların içine sararak veya yoğurt eşliğinde servis yapın.'
    ],
    tags: ['ana-yemek', 'protein', 'pratik', 'dunya-mutfagi', '15-dakika'],
    tips: 'Sebzelerin çıtır kalması için mutlaka yüksek ateşte ve tavanın kapağını kapatmadan pişirin.'
  },

  // ==========================================
  // 4. MAKARNA, PİLAV & HAMURİŞİ
  // ==========================================
  {
    id: 'kremali_mantarli_makarna',
    title: 'Kremalı Mantarlı Tavuklu Makarna',
    category: 'Makarna & Hamur',
    cuisine: 'İtalyan / Modern',
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: 'Kolay',
    calories: 460,
    imageEmoji: '🍝',
    description: 'Restoran kalitesinde, kadife kıvamında kreması ve mantarlarıyla damak çatlatan lezzet.',
    requiredIngredients: [
      { id: 'makarna', amount: '1 paket (Penne veya Fettuccine)' },
      { id: 'mantar', amount: '250g dilimlenmiş' },
      { id: 'krema', amount: '1 kutu (200ml)' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'zeytinyagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'tavuk_gogsu', amount: '250g jülyen doğranmış' },
      { id: 'kasar_peyniri', amount: '50g rendelenmiş (veya parmesan)' },
      { id: 'tereyagi', amount: '1 yemek kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Makarnayı tuzlu kaynar suda hafif diri haşlayıp 1 çay bardağı suyundan ayırarak süzün.',
      'Tavada yağda tavuk ve mantarları yüksek ateşte soteleyin.',
      'Sarımsağı, kremayı ve baharatları ekleyip kısık ateşte sos koyulaşana kadar 2-3 dakika kaynatın.',
      'Makarnayı ve ayırdığınız makarna suyunu ekleyip sosla harmanlayın. Kaşarla sıcak servis edin.'
    ],
    tags: ['makarna', 'pratik', 'restoran-tarzi', 'hizli'],
    tips: 'Ayırdığınız nişastalı makarna suyu kremanın makarnaya yapışmasını sağlar.'
  },
  {
    id: 'kiymali_makarna',
    title: 'Kıymalı Bolonez Soslu Makarna',
    category: 'Makarna & Hamur',
    cuisine: 'Pratik / İtalyan',
    prepTime: 5,
    cookTime: 15,
    servings: 3,
    difficulty: 'Kolay',
    calories: 420,
    imageEmoji: '🍝',
    description: 'Öğrencinin de ailenin de en hızlı, en lezzetli kurtarıcısı.',
    requiredIngredients: [
      { id: 'makarna', amount: '1 paket' },
      { id: 'kiyma', amount: '200g' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'domates_salcasi', amount: '1.5 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'domates', amount: '1 adet rendelenmiş' },
      { id: 'kasar_peyniri', amount: 'Üzerine rendelenmiş' },
      { id: 'biber_yesil', amount: '1 adet' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Makarnayı kaynayan tuzlu suda haşlayıp süzün.',
      'Tencereye sıvı yağı alın, kıymayı ekleyip rengi dönene kadar kavurun.',
      'İnce doğranmış soğan ve sarımsağı ekleyip pembeleşene kadar soteleyin.',
      'Salçayı (ve rendelenmiş domatesi) ekleyip kokusu çıkana kadar kavurun.',
      'Yarım çay bardağı su ve baharatları ekleyip kısık ateşte 3-4 dakika sosu koyulaştırın.',
      'Makarnayı sosun içine döküp harmanlayın ve peynirle servis edin.'
    ],
    tags: ['makarna', 'pratik', 'ekonomik', '15-dakika', 'protein'],
    tips: 'Kıymayı kavururken topaklanmaması için kaşıkla bastırarak ezin.'
  },
  {
    id: 'firinda_besamel_makarna',
    title: 'Fırında Beşamel Soslu Kaşarlı Makarna',
    category: 'Makarna & Hamur',
    cuisine: 'Türk / Akdeniz',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'Orta',
    calories: 440,
    imageEmoji: '🧀',
    description: 'İpeksi beşamel sosu ve üzeri nar gibi kızarmış çıtır kaşar kabuğuyla fırın makarna.',
    requiredIngredients: [
      { id: 'makarna', amount: '1 paket fırın veya boru makarna' },
      { id: 'sut', amount: '3 su bardağı' },
      { id: 'un', amount: '2 yemek kaşığı' },
      { id: 'tereyagi', amount: '2 yemek kaşığı' },
      { id: 'kasar_peyniri', amount: '150g rendelenmiş' }
    ],
    optionalIngredients: [
      { id: 'beyaz_peynir', amount: '100g ufalanmış arasına' },
      { id: 'yumurta', amount: '1 adet' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'muskat', amount: 'Bir çimdik muskat rendesi' }
    ],
    instructions: [
      'Makarnayı bol tuzlu suda 8 dakika haşlayıp süzün.',
      'Beşamel sos için tereyağında unu 2 dakika kokusu çıkana kadar kavurun.',
      'Sütü azar azar dökerek çırpma teliyle pürüzsüzleşip koyulaşana kadar kaynatın. Tuz, karabiber ve muskat ekleyin.',
      'Haşlanmış makarnayı beşamel sos ve rendelenmiş kaşarın yarısıyla karıştırıp fırın tepsisine yayın.',
      'Üzerine kalan kaşarı bolca serpin. 190°C fırında üzeri altın sarısı kızarana kadar 20-25 dakika fırınlayın.'
    ],
    tags: ['makarna', 'firin', 'peynirli', 'klasik'],
    tips: 'Beşamel sosa bir çimdik muskat cevizi rendelemek lezzeti profesyonel seviyeye taşır.'
  },
  {
    id: 'pratik_lavas_pizza',
    title: 'Çıtır Lavaş Pizza (10 Dakikada)',
    category: 'Makarna & Hamur',
    cuisine: 'İtalyan / Pratik',
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    difficulty: 'Kolay',
    calories: 290,
    imageEmoji: '🍕',
    description: 'Hamur yoğurmadan hazır lavaşla yapılan, çıtır çıtır ve hafif süper pratik pizza.',
    requiredIngredients: [
      { id: 'lavas', amount: '2 adet' },
      { id: 'kasar_peyniri', amount: '100g rendelenmiş' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' },
      { id: 'zeytinyagi', amount: '1 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'sucuk', amount: '50g dilimlenmiş' },
      { id: 'mantar', amount: '3 adet ince dilim' },
      { id: 'biber_yesil', amount: '1 adet dilim' },
      { id: 'misir', amount: '2 yemek kaşığı' }
    ],
    spices: [
      { id: 'kekik', amount: '1 çay kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'tuz', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Salçayı 2 yemek kaşığı ılık su, zeytinyağı, kekik ve tuzla karıştırarak pizza sosunu hazırlayın.',
      'Birinci lavaşı tepsiye koyup üzerine çok az kaşar serpin ve ikinci lavaşı üzerine kapatın (çift kat çıtırlık sağlar).',
      'Sosunu sürün, rendelenmiş kaşar, dilimlenmiş sucuk, mantar, biber ve mısırları dizin.',
      '200°C fırında kaşarlar eriyip kenarlar çıtırlaşana kadar 8-10 dakika pişirin.'
    ],
    tags: ['hamuris', 'pizza', 'pratik', '10-dakika', 'cocuk-menusu'],
    tips: 'İki lavaş arasına az kaşar koymak tabanın kalın ve çıtır olmasını sağlar.'
  },
  {
    id: 'pratik_tava_boregi',
    title: 'Su Böreği Tadında Pratik Tava Böreği',
    category: 'Makarna & Hamur',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Kolay',
    calories: 310,
    imageEmoji: '🥟',
    description: 'Fırın açmadan teflon tavada 15 dakikada su böreği lezzetinde çıtır ve yumuşacık börek.',
    requiredIngredients: [
      { id: 'yufka', amount: '2-3 adet hazır yufka' },
      { id: 'beyaz_peynir', amount: '150g (veya lor peyniri)' },
      { id: 'sut', amount: '1 çay bardağı' },
      { id: 'yumurta', amount: '1 adet' },
      { id: 'aycicek_yagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'maydanoz', amount: 'Yarım demet ince kıyılmış' },
      { id: 'tereyagi', amount: '1 yemek kaşığı (tava için)' },
      { id: 'kasar_peyniri', amount: '50g' }
    ],
    spices: [
      { id: 'pul_biber', amount: '1 çay kaşığı' },
      { id: 'tuz', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Süt, yumurta ve sıvı yağı bir kasede çırparak sos hazırlayın.',
      'Peynir ve ince kıyılmış maydanozu karıştırın.',
      'Tavayı tereyağı ile yağlayıp 1 adet yufkayı kenarları dışarı taşacak şekilde serin.',
      'Kalan yufkaları parçalayıp sosa batırarak tavadaki yufkanın üzerine yarısını dizin.',
      'Peynirli harcı yayın, kalan soslu yufkaları dizip dışa taşan kenarları üzerine kapatın.',
      'Kısık-orta ateşte tavanın kapağı kapalı olarak her iki yüzünü de 7-8 dakika nar gibi kızarana kadar pişirin.'
    ],
    tags: ['borek', 'pratik', 'kahvalti', 'tava', 'peynirli'],
    tips: 'Böreği çevirirken düz bir kapak veya tabak kullanın ve tavayı çevirmeden önce tekrar hafif yağlayın.'
  },
  {
    id: 'sehriyeli_pirinc_pilavi',
    title: 'Tane Tane Şehriyeli Pirinç Pilavı',
    category: 'Pilav & Yan Lezzet',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 280,
    imageEmoji: '🍚',
    description: 'Her yemeğin yanına yakışan, tane tane dökülen tereyağlı pirinç pilavı.',
    requiredIngredients: [
      { id: 'pirinc', amount: '2 su bardağı' },
      { id: 'sehriye', amount: 'Yarım çay bardağı' },
      { id: 'tereyagi', amount: '2 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'limon', amount: '3-4 damla (parlaklık için)' }
    ],
    spices: [
      { id: 'tuz', amount: '1.5 tatlı kaşığı' }
    ],
    instructions: [
      'Pirinçleri ılık tuzlu suda 20 dakika bekletip berrak su akana kadar yıkayıp süzün.',
      'Tencereye yağı ve şehriyeleri alıp altın rengi olana kadar kavurun.',
      'Süzülmüş pirinçleri ekleyip pirinçler şeffaflaşana kadar 3-4 dakika kavurun.',
      '3 su bardağı kaynar su (veya et/tavuk suyu), tuz ve limon damlası ekleyin.',
      'Kapağı kapalı olarak kısık ateşte suyunu çekene kadar 12-15 dakika pişirin.',
      'Ocaktan alıp kağıt havlu ile 15 dakika demlendirin.'
    ],
    tags: ['pilav', 'klasik', 'vejetaryen', 'yan-yemek'],
    tips: 'Pirinci kırmadan tahta kaşıkla nazikçe kavurun ve demlenmesini sabırla bekleyin.'
  },
  {
    id: 'sebzeli_bulgur_pilavi',
    title: 'Meyhane Usulü Sebzeli Bulgur Pilavı',
    category: 'Pilav & Yan Lezzet',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 230,
    imageEmoji: '🌾',
    description: 'Bol domatesli, biberli, aromatik ve doyurucu nefis bulgur pilavı.',
    requiredIngredients: [
      { id: 'bulgur', amount: '2 su bardağı' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'biber_yesil', amount: '2 adet' },
      { id: 'domates', amount: '2 adet' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' },
      { id: 'tereyagi', amount: '1 yemek kaşığı' },
      { id: 'zeytinyagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'biber_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'sarimsak', amount: '1 diş' }
    ],
    spices: [
      { id: 'tuz', amount: '1.5 tatlı kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' },
      { id: 'nane', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Tencerede yağda doğranmış soğan ve biberleri 3-4 dakika kavurun.',
      'Salçaları ekleyip 1 dakika kokusu çıkana kadar kavurun.',
      'Küp doğranmış domatesleri ve yıkanmış bulguru ekleyip 2 dakika harmanlayın.',
      '3.5 su bardağı sıcak su, tuz ve baharatları ekleyin.',
      'Kısık ateşte suyunu çekene kadar kapağı kapalı pişirin, ardından 10 dakika demlendirin.'
    ],
    tags: ['pilav', 'vejetaryen', 'pratik', 'ekonomik', 'lifli'],
    tips: 'Bulgur pilavında pilavlık iri taneli köy bulguru kullanırsanız lezzeti çok daha zengin olur.'
  },
  {
    id: 'mercimek_koftesi',
    title: 'Geleneksel Mercimek Köftesi',
    category: 'Pilav & Yan Lezzet',
    cuisine: 'Türk Mutfağı',
    prepTime: 20,
    cookTime: 20,
    servings: 5,
    difficulty: 'Kolay',
    calories: 190,
    imageEmoji: '🧆',
    description: 'Bol yeşillikli, nar ekşili ve limonlu çay saatlerinin ve günlerin kraliçesi.',
    requiredIngredients: [
      { id: 'kirmizi_mercimek', amount: '1 su bardağı' },
      { id: 'bulgur', amount: '1.5 su bardağı ince köftelik bulgur' },
      { id: 'sogan', amount: '1 adet büyük' },
      { id: 'domates_salcasi', amount: '1.5 yemek kaşığı' },
      { id: 'biber_salcasi', amount: '1 yemek kaşığı' },
      { id: 'zeytinyagi', amount: 'Yarım su bardağı' }
    ],
    optionalIngredients: [
      { id: 'taze_sogan', amount: '4-5 dal' },
      { id: 'maydanoz', amount: 'Yarım demet' },
      { id: 'limon', amount: '1 adet suyu' },
      { id: 'nar_eksisi', amount: '2 yemek kaşığı' }
    ],
    spices: [
      { id: 'kimyon', amount: '1 tatlı kaşığı' },
      { id: 'pul_biber', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'tuz', amount: '1 tatlı kaşığı' }
    ],
    instructions: [
      'Mercimeği 3 su bardağı suda iyice yumuşayana kadar haşlayın.',
      'Ocaktan alıp içine ince bulguru dökün, karıştırıp kapağını kapatıp 20 dakika şişmeye bırakın.',
      'Tavada zeytinyağında ince doğranmış kuru soğanı kavurun, salçaları ekleyip 2 dakika çevirin.',
      'Şişen bulgurlu harca salçalı soğanı ve baharatları ekleyip 5 dakika yoğurun.',
      'İnce kıyılmış taze soğan, maydanoz, limon suyu ve nar ekşisini ekleyip hafifçe yoğurun.',
      'Avuç içinde sıkarak şekil verin ve marul yaprakları üzerinde servis edin.'
    ],
    tags: ['meze', 'vejetaryen', 'vegan', 'gun-menusu', 'geleneksel'],
    tips: 'Mercimek köftesini sıkarken elinizi hafifçe zeytinyağı veya suya batırırsanız parlak ve pürüzsüz olur.'
  },

  // ==========================================
  // 5. ZEYTİNYAĞLI & SEBZE YEMEKLERİ
  // ==========================================
  {
    id: 'saksuka',
    title: 'Geleneksel Şakşuka / Meze',
    category: 'Zeytinyağlı & Sebze',
    cuisine: 'Türk Mutfağı / Akdeniz',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 190,
    imageEmoji: '🍆',
    description: 'Kızarmış patlıcan, kabak ve biberlerin sarımsaklı domates sosuyla efsanevi buluşması.',
    requiredIngredients: [
      { id: 'patlican', amount: '2 adet' },
      { id: 'kabak', amount: '1 adet' },
      { id: 'patates', amount: '1 adet' },
      { id: 'biber_yesil', amount: '2 adet' },
      { id: 'domates', amount: '3 adet rendelenmiş' },
      { id: 'sarimsak', amount: '3 diş' },
      { id: 'aycicek_yagi', amount: 'Kızartmak için' }
    ],
    optionalIngredients: [
      { id: 'domates_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'seker', amount: 'Yarım çay kaşığı (asit dengesi)' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Patlıcan, kabak ve patatesi küp küp doğrayın. Patlıcanları tuzlu suda bekletip kurulayın.',
      'Sırasıyla patates, kabak, patlıcan ve biberleri kızgın yağda altın sarısı olana kadar kızartın.',
      'Sos için sos tavasında sarımsak, rendelenmiş domates, salça, şeker, tuz ve baharatları 8-10 dakika pişirin.',
      'Kızaran sebzeleri servis tabağına alın, üzerine sıcak sarımsaklı domates sosunu gezdirin.'
    ],
    tags: ['meze', 'vejetaryen', 'pratik', 'akdeniz'],
    tips: 'Şakşuka hem ılık hem de buzdolabında soğutulduktan sonra enfes bir meze olarak tüketilir.'
  },
  {
    id: 'firinda_mucver',
    title: 'Hafif & Pratik Fırında Kabak Mücveri',
    category: 'Zeytinyağlı & Sebze',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Kolay',
    calories: 160,
    imageEmoji: '🥒',
    description: 'Kızartmadan fırında nar gibi kızaran hafif, peynirli ve besleyici kabak mücveri.',
    requiredIngredients: [
      { id: 'kabak', amount: '3 adet' },
      { id: 'yumurta', amount: '2 adet' },
      { id: 'un', amount: '3-4 yemek kaşığı' },
      { id: 'beyaz_peynir', amount: '100g ufalanmış' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'dereotu', amount: 'Yarım demet' },
      { id: 'maydanoz', amount: 'Yarım demet' },
      { id: 'taze_sogan', amount: '2 dal' },
      { id: 'kasar_peyniri', amount: '50g (üzeri için)' }
    ],
    spices: [
      { id: 'tuz', amount: '1 çay kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Kabakları rendeleyin ve avucunuzun içinde sularını iyice sıkın (en kritik adımdır).',
      'Bir kapta yumurtaları çırpın, zeytinyağı, peynir, kıyılmış yeşillikler ve baharatları ekleyin.',
      'Suyu sıkılmış kabakları ve unu ekleyip koyu krep kıvamında bir harç elde edin.',
      'Yağlı kağıt serili fırın kabına harcı yayın, üzerine kaşar serpin.',
      '180°C fırında üzeri altın rengi alana kadar 30-35 dakika pişirin. Ilıyınca dilimleyin.'
    ],
    tags: ['fit', 'firin', 'vejetaryen', 'hafif', 'diyet'],
    tips: 'Kabakların suyunu çok iyi sıkmazsanız mücver fırında sulanır ve hamur kalır.'
  },
  {
    id: 'ispanak_yemegi',
    title: 'Zeytinyağlı Pirinçli Ispanak Yemeği',
    category: 'Zeytinyağlı & Sebze',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 140,
    imageEmoji: '🥬',
    description: 'Demir deposu, yoğurtla servis edilen hafif, pratik ve şifalı zeytinyağlı.',
    requiredIngredients: [
      { id: 'ispanak', amount: '500g yıkanmış doğranmış' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'pirinc', amount: '2 yemek kaşığı' },
      { id: 'domates_salcasi', amount: '1 yemek kaşığı' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'havuc', amount: '1 adet' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'yogurt', amount: 'Servis için' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' },
      { id: 'pul_biber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Tencerede zeytinyağında doğranmış soğanı (ve havucu) kavurun.',
      'Salçayı ekleyip 1 dakika karıştırın.',
      'Yıkanmış ve doğranmış ıspanakları azar azar tencereye ekleyin.',
      'Yıkanmış pirinci, tuzu, baharatları ve 1 çay bardağı sıcak suyu ekleyin.',
      'Kapağı kapalı olarak pirinçler yumuşayana kadar kısık ateşte 15-20 dakika pişirin. Yoğurtla servis edin.'
    ],
    tags: ['sebze', 'vejetaryen', 'fit', 'hafif', 'saglikli'],
    tips: 'Ispanakları bol sirkeli suda birkaç kez yıkayarak tüm kumundan arındırın.'
  },
  {
    id: 'zeytinyagli_taze_fasulye',
    title: 'Geleneksel Zeytinyağlı Taze Fasulye',
    category: 'Zeytinyağlı & Sebze',
    cuisine: 'Ege / Türk Mutfağı',
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    difficulty: 'Kolay',
    calories: 130,
    imageEmoji: '🫘',
    description: 'Bol domatesli, sızma zeytinyağlı ve dinlendikçe lezzetlenen klasik Ege yemeği.',
    requiredIngredients: [
      { id: 'taze_fasulye', amount: '500g ayıklanmış' },
      { id: 'domates', amount: '3 adet sulu olgun' },
      { id: 'sogan', amount: '1 adet büyük' },
      { id: 'sarimsak', amount: '3 diş' },
      { id: 'zeytinyagi', amount: '4-5 yemek kaşığı' },
      { id: 'seker', amount: '1 tatlı kaşığı (asit dengesi)' }
    ],
    optionalIngredients: [
      { id: 'domates_salcasi', amount: '1 tatlı kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Tencereye zeytinyağını ve piyazlık doğranmış soğanları alın, hafifçe soteleyin.',
      'Ayıklanıp boyuna ikiye bölünmüş taze fasulyeleri ekleyip rengi canlı yeşile dönene kadar 5 dakika kavurun.',
      'Küp doğranmış domatesleri, ezilmiş sarımsakları, şekeri, tuzu ve yarım çay bardağı sıcak suyu ekleyin.',
      'Kapağı kapalı olarak en kısık ateşte fasulyeler lokum gibi yumuşayana kadar (yaklaşık 30-35 dakika) pişirin.',
      'Kapağı açmadan tencerede soğumaya bırakın ve ılık veya soğuk servis edin.'
    ],
    tags: ['zeytinyagli', 'ege', 'vejetaryen', 'vegan', 'diyet'],
    tips: 'Zeytinyağlı yemekler bir gece buzdolabında dinlendiğinde çok daha lezzetli olur.'
  },
  {
    id: 'firinda_citir_karnabahar',
    title: 'Fırında Baharatlı Çıtır Karnabahar & Yoğurt Sos',
    category: 'Zeytinyağlı & Sebze',
    cuisine: 'Sağlıklı / Pratik',
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    difficulty: 'Kolay',
    calories: 150,
    imageEmoji: '🥦',
    description: 'Karnabahar sevmeyenlerin bile bayıldığı, çıtır baharatlı fırın sebze ve sarımsaklı yoğurt.',
    requiredIngredients: [
      { id: 'karnabahar', amount: '1 küçük baş çiçeklerine ayrılmış' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' },
      { id: 'yogurt', amount: '1 su bardağı (sos için)' },
      { id: 'sarimsak', amount: '2 diş' }
    ],
    optionalIngredients: [
      { id: 'misir_unu', amount: '1 yemek kaşığı çıtırlık için' },
      { id: 'limon', amount: 'Yarım adet' }
    ],
    spices: [
      { id: 'kirmizi_toz_biber', amount: '1 tatlı kaşığı' },
      { id: 'zerdecal', amount: 'Yarım çay kaşığı' },
      { id: 'kimyon', amount: 'Yarım çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' },
      { id: 'tuz', amount: '1 tatlı kaşığı' }
    ],
    instructions: [
      'Karnabaharları lokmalık çiçeklerine ayırıp yıkayın ve iyice kurulayın.',
      'Geniş bir kapta zeytinyağı, mısır unu, tuz ve tüm baharatları karıştırın.',
      'Karnabaharları bu sosa bulayıp yağlı kağıt serili tepsiye tek kat halinde yayın.',
      '200°C fırında altın sarısı olup uçları çıtırlaşana kadar 25 dakika pişirin.',
      'Sarımsaklı yoğurt dip sosuyla sıcak veya ılık servis edin.'
    ],
    tags: ['fit', 'firin', 'vejetaryen', 'snack', 'diyet'],
    tips: 'Karnabaharların fırında çıtır olması için kurulanmış ve tepsiye üst üste gelmeyecek şekilde dizilmiş olması gerekir.'
  },

  // ==========================================
  // 6. SALATA & MEZE
  // ==========================================
  {
    id: 'ton_balikli_pratik_salata',
    title: 'Akdeniz Usulü Ton Balıklı Salata',
    category: 'Salata & Meze',
    cuisine: 'Akdeniz / Fit',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'Kolay',
    calories: 260,
    imageEmoji: '🥗',
    description: 'Hiç pişirme gerektirmeyen, 5 dakikada hazır yüksek proteinli ferah öğün.',
    requiredIngredients: [
      { id: 'ton_baligi', amount: '1 kutu (160g)' },
      { id: 'domates', amount: '2 adet' },
      { id: 'salatalik', amount: '1 adet' },
      { id: 'zeytinyagi', amount: '2 yemek kaşığı' },
      { id: 'limon', amount: 'Yarım adet suyu' }
    ],
    optionalIngredients: [
      { id: 'marul', amount: '5-6 yaprak' },
      { id: 'misir', amount: '3 yemek kaşığı' },
      { id: 'sogan', amount: 'Yarım kırmızı soğan' }
    ],
    spices: [
      { id: 'tuz', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' },
      { id: 'pul_biber', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Yeşillikleri, domates ve salatalığı yıkayıp doğrayın.',
      'Salata kasesine doğranmış sebzeleri alın.',
      'Yağı süzülmüş ton balığını sebzelerin üzerine iri parçalar halinde ekleyin.',
      'Küçük bir kasede zeytinyağı, limon suyu, tuz ve kekiği çırparak sos hazırlayın.',
      'Sosu salatanın üzerine gezdirip harmanlayarak servis edin.'
    ],
    tags: ['salata', 'fit', 'protein', 'pisirmesiz', '5-dakika'],
    tips: 'Salataya ekleyeceğiniz taze limon ve kekik ton balığının lezzetini mükemmel dengeler.'
  },
  {
    id: 'yogurtlu_havuc_tarator',
    title: 'Cevizli Yoğurtlu Havuç Tarator',
    category: 'Salata & Meze',
    cuisine: 'Türk Mutfağı / Meze',
    prepTime: 10,
    cookTime: 8,
    servings: 3,
    difficulty: 'Kolay',
    calories: 180,
    imageEmoji: '🥕',
    description: 'Zeytinyağında sotelenmiş tatlı havuçlar, sarımsaklı süzme yoğurt ve çıtır cevizler.',
    requiredIngredients: [
      { id: 'havuc', amount: '3 adet büyük' },
      { id: 'yogurt', amount: '1.5 su bardağı (tercihen süzme)' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'ceviz', amount: 'Yarım çay bardağı dövülmüş' },
      { id: 'dereotu', amount: 'Süsleme için' },
      { id: 'mayonez', amount: '1 yemek kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' }
    ],
    instructions: [
      'Havuçları rendeleyin.',
      'Tavada zeytinyağında rendelenmiş havuçları yumuşayıp rengini yağa bırakana kadar 6-8 dakika soteleyin ve soğumaya bırakın.',
      'Bir kapta yoğurt, ezilmiş sarımsak, tuz ve dövülmüş cevizi karıştırın.',
      'Soğuyan havuçları yoğurtlu karışıma ekleyip harmanlayın.',
      'Servis tabağına alıp üzerine zeytinyağı ve dereotu gezdirerek servis edin.'
    ],
    tags: ['meze', 'salata', 'pratik', 'vejetaryen', 'sofra'],
    tips: 'Havuçları yoğurtla karıştırmadan önce mutlaka oda sıcaklığına gelene kadar soğutun.'
  },
  {
    id: 'koz_patlican_salatasi',
    title: 'Köz Patlıcan & Kapya Biber Salatası',
    category: 'Salata & Meze',
    cuisine: 'Geleneksel / Akdeniz',
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    difficulty: 'Kolay',
    calories: 120,
    imageEmoji: '🍆',
    description: 'Köz kokusuyla iştah kabartan, zeytinyağlı sarımsaklı nefis patlıcan salatası.',
    requiredIngredients: [
      { id: 'patlican', amount: '3 adet közlenmiş' },
      { id: 'biber_kapya', amount: '2 adet közlenmiş' },
      { id: 'sarimsak', amount: '2 diş' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' },
      { id: 'limon', amount: 'Yarım adet suyu' }
    ],
    optionalIngredients: [
      { id: 'maydanoz', amount: 'Yarım demet' },
      { id: 'nar_eksisi', amount: '1 tatlı kaşığı' },
      { id: 'domates', amount: '1 adet küp doğranmış' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'pul_biber', amount: 'Yarım çay kaşığı' }
    ],
    instructions: [
      'Patlıcan ve kapya biberleri ocak üzerinde veya fırında közleyip kabuklarını soyun ve ince ince doğrayın.',
      'Bir karıştırma kabına közlenmiş sebzeleri alın.',
      'Üzerine ezilmiş sarımsak, ince kıyılmış maydanoz, zeytinyağı, limon suyu ve tuzu ekleyin.',
      'Hafifçe harmanlayıp servis tabağına alın.'
    ],
    tags: ['meze', 'koz', 'fit', 'vejetaryen', 'vegan'],
    tips: 'Közlenen sebzeleri sıcakken bir poşete koyup ağzını bağlarsanız buharıyla kabukları çok kolay soyulur.'
  },

  // ==========================================
  // 7. TATLI & İKRAM
  // ==========================================
  {
    id: 'firinda_sutlac',
    title: 'Geleneksel Fırında Sütlaç',
    category: 'Tatlı & İkram',
    cuisine: 'Osmanlı / Türk',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: 'Kolay',
    calories: 270,
    imageEmoji: '🍮',
    description: 'Üzeri nar gibi yanık, ipeksi kıvamda geleneksel sütlü tatlımız.',
    requiredIngredients: [
      { id: 'sut', amount: '1 litre' },
      { id: 'pirinc', amount: 'Yarım çay bardağı' },
      { id: 'seker', amount: '1 su bardağı' },
      { id: 'un', amount: '2 yemek kaşığı (veya nişasta)' }
    ],
    optionalIngredients: [
      { id: 'yumurta', amount: '1 adet sarısı (üstü kızarması için)' },
      { id: 'tarcin', amount: 'Servis için' },
      { id: 'ceviz', amount: 'Dövülmüş' }
    ],
    spices: [
      { id: 'tarcin', amount: 'İsteğe göre' }
    ],
    instructions: [
      'Pirinci 2 su bardağı suda suyunu çekene kadar haşlayın.',
      'Tencereye sütü ve şekeri ekleyip kaynamaya bırakın.',
      'Bir kasede unu (veya nişastayı) yarım çay bardağı süt ve yumurta sarısıyla pürüzsüz çırpın.',
      'Kaynayan sütten 1 kepçe alıp bu karışıma ekleyin ve ılıtın, ardından tencereye sürekli karıştırarak dökün.',
      'Koyulaşana kadar 5 dakika kaynatıp güveç kaplarına paylaştırın.',
      'Fırın tepsisine güveçleri dizip tepsinin yarısına kadar su doldurun. 200°C fırının ızgara ayarında üstleri yanık olana kadar fırınlayın.'
    ],
    tags: ['tatli', 'sutlu-tatli', 'geleneksel', 'firin'],
    tips: 'Tepsiye soğuk su koymak sütlaçların altının pişip kurumasını önler, sadece üstünün kızarmasını sağlar.'
  },
  {
    id: 'pratik_irmik_helvasi',
    title: 'Tereyağlı Sütlü İrmik Helvası',
    category: 'Tatlı & İkram',
    cuisine: 'Geleneksel Türk',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    difficulty: 'Kolay',
    calories: 320,
    imageEmoji: '🍨',
    description: 'Tereyağında kavrulan mis gibi irmik, ılık sütlü şerbetiyle tam kıvamında helva.',
    requiredIngredients: [
      { id: 'irmik', amount: '1.5 su bardağı' },
      { id: 'tereyagi', amount: '3 yemek kaşığı' },
      { id: 'sut', amount: '2 su bardağı' },
      { id: 'seker', amount: '1 su bardağı' }
    ],
    optionalIngredients: [
      { id: 'cam_fistigi', amount: '1 yemek kaşığı (veya ceviz)' },
      { id: 'tarcin', amount: 'Üzerine' }
    ],
    spices: [
      { id: 'tarcin', amount: 'Yarım tatlı kaşığı' }
    ],
    instructions: [
      'Küçük bir tencerede süt ve şekeri karıştırıp şeker eriyene kadar ılıtın (kaynatmaya gerek yok).',
      'Geniş bir tencerede tereyağını eritin (varsa fıstıkları) ve irmiği ekleyin.',
      'Kısık ateşte irmiğin rengi altın sarısı/açık kahverengi olana kadar sabırla 10-12 dakika kavurun.',
      'Ilık sütlü şerbeti tencereye dikkatlice dökün (sıçrayabilir) ve hızlıca karıştırın.',
      'İrmik tüm sütü çekip toparlanınca kapağını kapatıp 10 dakika demlendirin. Tarçın ve dondurmayla servis yapın.'
    ],
    tags: ['tatli', 'helva', 'geleneksel', '15-dakika'],
    tips: 'İrmiği kısık ateşte sürekli karıştırarak kavurmak helvanın homojen ve lezzetli olmasının sırrıdır.'
  }
];
