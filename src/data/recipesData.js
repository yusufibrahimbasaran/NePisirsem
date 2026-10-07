export const RECIPES = [
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
    description: 'Domates, biber ve yumurtanın mükemmel uyumu. İster soğanlı ister soğansız, Türk mutfağının vazgeçilmezi.',
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
      '(Soğanlı yapıyorsanız) Soğanları da ekleyip hafif pembeleşene kadar kavurun.',
      'Kabukları soyulup küp küp doğranmış domatesleri ekleyin, tavanın kapağını kapatıp domatesler suyunu salıp çekene kadar kısık ateşte pişirin.',
      'Tuz ve baharatları ekleyip karıştırın.',
      'Yumurtaları kırın; isterseniz sarılarını patlatmadan ya da hafifçe karıştırarak kıvam alana kadar 2-3 dakika pişirin.',
      'İsteğe göre üzerine kaşar serpip eriyince sıcak servis edin.'
    ],
    tags: ['pratik', 'kahvalti', 'vejetaryen', 'ekonomik', '15-dakika'],
    tips: 'Domateslerin sulu ve lezzetli olması menemenin sırrıdır. Fazla pişirip yumurtaları kurutmamaya özen gösterin.'
  },
  {
    id: 'mercimek_corbasi',
    title: 'Lokanta Usulü Mercimek Çorbası',
    category: 'Çorbalar',
    cuisine: 'Türk Mutfağı',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'Kolay',
    calories: 180,
    imageEmoji: '🥣',
    description: 'İçinizi ısıtan, ipeksi kıvamda ve tam kıvamında enfes bir klasik.',
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
      'Tavanın kapağını kapatıp kısık ateşte domatesler sos kıvamına gelene kadar (yaklaşık 8-10 dk) pişirin.',
      'Ocaktan almadan önce bol kekik serpin ve sıcak servis yapın.'
    ],
    tags: ['ana-yemek', 'protein', 'pratik', 'tencere', 'fit'],
    tips: 'Tavukları yüksek ateşte mühürlemek suyunun içinde kalmasını ve lokum gibi olmasını sağlar.'
  },
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
      { id: 'tavuk_gogsu', amount: '250g julyen doğranmış' },
      { id: 'kasar_peyniri', amount: '50g rendelenmiş (veya parmesan)' },
      { id: 'tereyagi', amount: '1 yemek kaşığı' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' },
      { id: 'kekik', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Makarnayı bol tuzlu kaynar suda aldente (hafif diri) kıvamda haşlayıp suyundan 1 çay bardağı ayırarak süzün.',
      'Geniş bir tavada zeytinyağında (varsa tavukları) ardından dilimlenmiş mantarları yüksek ateşte soteleyin.',
      'İnce kıyılmış sarımsağı ekleyip 1 dakika kokusu çıkana kadar çevirin.',
      'Kremayı, tuzu, karabiberi ve kekiği ekleyin. Kısık ateşte 2-3 dakika hafif koyulaşana kadar kaynatın.',
      'Haşlanan makarnayı ve ayırdığınız makarna suyunu tavaya döküp sosla 1 dakika harmanlayın.',
      'Üzerine peynir serpip sıcak servis edin.'
    ],
    tags: ['makarna', 'pratik', 'restoran-tarzi', 'hizli'],
    tips: 'Ayırdığınız makarna suyu nişastalı olduğu için kremanın makarnaya kusursuz yapışmasını sağlar.'
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
      'Geniş bir kapta kıyma, rendelenmiş ve suyu sıkılmış soğan, ezilmiş sarımsak, yumurta, ekmek içi, ince kıyılmış maydanoz ve baharatları 5 dakika iyice yoğurun.',
      'Köfte harcından ceviz büyüklüğünde parçalar alıp yassı köfteler şekillendirin ve 15 dk buzdolabında dinlendirin.',
      'Patatesleri elma dilim şeklinde doğrayın.',
      'Fırın tepsisine sırasıyla patates ve köfteleri dizin. Araya domates dilimleri ve biberleri yerleştirin.',
      '1 yemek kaşığı salçayı 1.5 su bardağı sıcak su ve 2 kaşık zeytinyağı ile çırpıp tepsiye gezdirin.',
      'Önceden ısıtılmış 200°C fırında üzeri kızarıp patatesler yumuşayana kadar (yaklaşık 35-40 dk) pişirin.'
    ],
    tags: ['ana-yemek', 'firin', 'klasik', 'aile-menusu', 'protein'],
    tips: 'Köfte harcını iyice yoğurmak köftelerin pişerken dağılmasını önler ve yumuşak tutar.'
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
    description: 'Kızarmış veya fırınlanmış patlıcanların leziz kıymalı harçla buluştuğu Türk mutfağının baş tacı.',
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
      'Patlıcanları alacalı soyup tuzlu suda 15 dakika bekletin, ardından kurulayın.',
      'Patlıcanları fırında ya da tavada hafifçe kızartıp fırın tepsisine dizin ve ortalarından boyuna bir yarık açın.',
      'Tavada sıvı yağda yemeklik doğranmış soğan ve sarımsağı kavurun. Kıymayı ekleyip suyunu çekene kadar pişirin.',
      'Doğranmış biberleri, küp doğranmış 1 adet domatesi, salçayı ve baharatları ekleyip 5 dakika soteleyin. Maydanozu ekleyip ocaktan alın.',
      'Hazırlanan kıymalı harcı patlıcanların ortasına paylaştırın. Üzerlerine domates ve biber dilimleri koyun.',
      '1 tatlı kaşığı salçayı 1 su bardağı sıcak suyla karıştırıp tepsinin tabanına dökün. 190°C fırında 25-30 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'firin', 'klasik', 'geleneksel'],
    tips: 'Daha hafif bir karnıyarık için patlıcanları fırında yağlı kağıt üzerinde fırçalayarak közleyebilirsiniz.'
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
      'İnce doğranmış soğanı ve sarımsağı ekleyip pembeleşene kadar soteleyin.',
      'Salçayı (ve rendelenmiş domatesi) ekleyip kokusu çıkana kadar 2 dakika kavurun.',
      'Yarım çay bardağı sıcak su ve baharatları ekleyip kısık ateşte 3-4 dakika sosu koyulaştırın.',
      'Makarnayı sosun içine döküp harmanlayın veya makarnanın üzerine döküp peynirle servis edin.'
    ],
    tags: ['makarna', 'pratik', 'ekonomik', '15-dakika', 'protein'],
    tips: 'Kıymayı kavururken topaklanmaması için tahta kaşıkla sürekli ezin.'
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
    description: 'Her yemeğin yanına yakışan, tane tane dökülen mükemmel pirinç pilavı.',
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
      'Pirinçleri ılık ve tuzlu suda 20 dakika bekletip nişastası gidene kadar berrak su akana kadar yıkayın.',
      'Tencereye sıvı yağı ve tereyağını alın. Şehriyeleri ekleyip rengi altın sarısı/kahve olana kadar kavurun.',
      'Süzülmüş pirinçleri ekleyin ve pirinçler şeffaflaşana kadar (yaklaşık 3-4 dakika) orta ateşte kavurun.',
      '3 su bardağı kaynar su (veya et/tavuk suyu) ve tuz ekleyin. 3-4 damla limon suyu sıkın.',
      'Tencerenin kapağını kapatıp önce harlı ateşte kaynatın, ardından en kısık ateşte suyunu tamamen çekene kadar (yaklaşık 12-15 dk) pişirin.',
      'Ocaktan alıp kapağın altına havlu kağıt koyarak 15 dakika demlendirin.'
    ],
    tags: ['pilav', 'klasik', 'vejetaryen', 'yan-yemek'],
    tips: 'Pirinci kavururken kırmadan nazikçe karıştırın ve mutlaka demlenmeye bırakın.'
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
      'Tencereye sıvı yağ ve tereyağını alın. Doğranmış soğan ve biberleri ekleyip 3-4 dakika kavurun.',
      'Salçaları ekleyip kokusu çıkana kadar 1 dakika kavurun.',
      'Küp doğranmış domatesleri ekleyin ve 2 dakika pişirin.',
      'Yıkanmış bulguru ekleyip 2 dakika harmanlayın.',
      '3.5 su bardağı sıcak su, tuz ve baharatları ekleyin.',
      'Kısık ateşte suyunu çekene kadar kapağı kapalı pişirin, ardından 10 dakika demlendirin.'
    ],
    tags: ['pilav', 'vejetaryen', 'pratik', 'ekonomik', 'lifli'],
    tips: 'Bulgur pilavında pilavlık iri taneli köy bulguru kullanırsanız lezzeti ikiye katlanır.'
  },
  {
    id: 'saksuka',
    title: 'Geleneksel Şakşuka / Meze',
    category: 'Meze & Pratik',
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
      'Sırasıyla patates, kabak, patlıcan ve biberleri bol kızgın yağda altın rengi alana kadar kızartıp havlu kağıt serili tabağa alın.',
      'Sos için ayrı bir sos tavasında 2 kaşık zeytinyağında rendelenmiş sarımsakları 30 saniye çevirin.',
      'Rendelenmiş domatesi, salçayı, şekeri, tuzu ve baharatları ekleyip kısık ateşte 8-10 dakika sos kıvamına gelene kadar pişirin.',
      'Kızaran sebzeleri servis tabağına alın, üzerine sıcak sarımsaklı domates sosunu gezdirin.'
    ],
    tags: ['meze', 'vejetaryen', 'pratik', 'akdeniz'],
    tips: 'Şakşuka hem ılık hem de buzdolabında soğutulduktan sonra meze olarak servis edilebilir.'
  },
  {
    id: 'firinda_mucver',
    title: 'Hafif & Pratik Fırında Mücver',
    category: 'Zeytinyağlı & Fit',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Kolay',
    calories: 160,
    imageEmoji: '🥒',
    description: 'Yağda kızartmadan, fırında nar gibi kızaran hafif ve besleyici kabak mücveri.',
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
      'Kabakları rendeleyin ve avucunuzun içinde sularını iyice sıkın (bu adım çok önemlidir).',
      'Bir karıştırma kabına yumurtaları kırıp çırpın. Üzerine zeytinyağını, peyniri, ince kıyılmış yeşillikleri ve baharatları ekleyin.',
      'Suyu sıkılmış kabakları ve unu ekleyip koyu krep kıvamında bir harç elde edin.',
      'Yağlı kağıt serili fırın kabına veya borcama harcı yayın. İsteğe göre üzerine kaşar serpin.',
      '180°C önceden ısıtılmış fırında üzeri altın sarısı kızarana kadar 30-35 dakika pişirin. Ilıyınca dilimleyin.'
    ],
    tags: ['fit', 'firin', 'vejetaryen', 'hafif', 'diyet'],
    tips: 'Kabakların suyunu çok iyi sıkmazsanız mücver fırında sulanır ve hamur kalır.'
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
    description: 'Sadece patates ve yumurta ile harikalar yaratan, son derece doyurucu bir lezzet.',
    requiredIngredients: [
      { id: 'patates', amount: '2 adet orta boy' },
      { id: 'yumurta', amount: '4 adet' },
      { id: 'sogan', amount: '1 adet' },
      { id: 'zeytinyagi', amount: '3 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'kasar_peyniri', amount: '50g' },
      { id: 'sucuk', amount: '50g dilimlenmiş' }
    ],
    spices: [
      { id: 'tuz', amount: '1 tatlı kaşığı' },
      { id: 'karabiber', amount: '1 çay kaşığı' }
    ],
    instructions: [
      'Patatesleri ince yarım ay şeklinde, soğanları piyazlık doğrayın.',
      'Tavada zeytinyağını ısıtın, patates ve soğanları kısık ateşte yumuşayana kadar 10 dakika pişirin (kızartmayın, yumuşatın).',
      'Geniş bir kapta yumurtaları tuz ve karabiberle çırpın.',
      'Tavadaki sıcak patatesleri yumurtanın içine aktarıp hafifçe karıştırın ve 3 dakika bekletin.',
      'Tavayı tekrar orta ateşte ısıtıp karışımı dökün. Alt tabanı kızarınca geniş bir tabak yardımıyla ters çevirip diğer yüzünü de 3-4 dakika pişirin.'
    ],
    tags: ['pratik', 'kahvalti', 'vejetaryen', 'ekonomik', '15-dakika'],
    tips: 'Omleti çevirirken tavanın kapağını veya düz bir servis tabağını hafifçe yağlayın.'
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
    description: 'Yanında pilav ve turşuyla Türk sofralarının en sevilen milli yemeği.',
    requiredIngredients: [
      { id: 'kuru_fasulye', amount: '2 su bardağı (haşlanmış)' },
      { id: 'sogan', amount: '1 adet büyük' },
      { id: 'domates_salcasi', amount: '1.5 yemek kaşığı' },
      { id: 'biber_salcasi', amount: '1 tatlı kaşığı' },
      { id: 'tereyagi', amount: '1 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'sucuk', amount: '100g dilim' },
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
      'Tencereye sıvı yağ ve tereyağını alın, yemeklik doğranmış soğanları (ve varsa et/sucuğu) kavurun.',
      'Biberleri ve salçaları ekleyip kokusu çıkana kadar 2 dakika soteleyin.',
      'Önceden haşlanmış kuru fasulyeleri tencereye ilave edip 2 dakika harmanlayın.',
      'Fasulyelerin üzerini 2 parmak geçecek kadar sıcak su ve baharatları ekleyin.',
      'Kısık ateşte fasulyeler lokum gibi olup suyu özleşene kadar 35-40 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'tencere', 'klasik', 'bakliyat', 'protein'],
    tips: 'Fasulyenin suyunun kıvamlı ve lezzetli olması için bir miktar fasulyeyi kaşığın arkasıyla ezebilirsiniz.'
  },
  {
    id: 'ispanak_yemegi',
    title: 'Zeytinyağlı Pirinçli Ispanak Yemeği',
    category: 'Sebze Yemekleri',
    cuisine: 'Türk Mutfağı',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Kolay',
    calories: 140,
    imageEmoji: '🥬',
    description: 'Demir deposu, yoğurtla servis edilen hafif ve şifalı zeytinyağlı.',
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
      'Salçayı ekleyip kokusu çıkana kadar karıştırın.',
      'İyice yıkanmış ve doğranmış ıspanakları azar azar tencereye ekleyin (ıspanak ısındıkça sönecektir).',
      'Yıkanmış pirinci, tuzu, baharatları ve 1 çay bardağı sıcak suyu ekleyin.',
      'Kapağı kapalı olarak pirinçler yumuşayana kadar kısık ateşte 15-20 dakika pişirin. Yoğurtla servis edin.'
    ],
    tags: ['sebze', 'vejetaryen', 'fit', 'hafif', 'saglikli'],
    tips: 'Ispanakları bol sirkeli suda birkaç kez yıkayarak tüm kumundan arındırın.'
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
    description: 'Restoranların menüsünden eksik olmayan, altın sarısı köri soslu enfes tavuk parçaları.',
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
      'Rendelenmiş veya blenderdan geçirilmiş domatesleri tencereye ekleyip sürekli karıştırın.',
      '3.5 su bardağı sıcak suyu azar azar ekleyerek topaklanmaması için çırpma teliyle karıştırın.',
      'Kaynamaya başlayınca kısık ateşte 10 dakika pişirin.',
      'Ilık sütü yavaşça ekleyin, tuz ve karabiberi katıp 2 dakika daha kaynatın. Üzerine rendelenmiş kaşarla servis edin.'
    ],
    tags: ['corba', 'pratik', 'vejetaryen', 'klasik'],
    tips: 'Sütü eklerken çorbanın kesilmemesi için sütün oda sıcaklığında veya ılık olmasına dikkat edin.'
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
    description: 'Özel yoğurtlu ve salçalı sosuyla marine edilmiş, fırında nar gibi kızaran tavuk ve patatesler.',
    requiredIngredients: [
      { id: 'tavuk_but', amount: '600g (veya tavuk pirzola/göğüs)' },
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
      'Geniş bir kapta yoğurt, salça, zeytinyağı, ezilmiş sarımsak ve baharatları karıştırarak sosu hazırlayın.',
      'Tavuk parçalarını ve elma dilim doğranmış patatesleri bu sosa bulayın.',
      'Fırın tepsisine tavuk ve patatesleri yerleştirin. Araya biber ve domates dilimleri koyun.',
      'Önceden ısıtılmış 200°C fırında tavuklar ve patatesler iyice kızarana kadar 40-45 dakika pişirin.'
    ],
    tags: ['ana-yemek', 'firin', 'protein', 'aile-menusu', 'kolay'],
    tips: 'Tavukları sosta en az 30 dakika bekletirseniz eti çok daha yumuşak ve lezzetli olur.'
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
      'Terbiyesi için ayrı bir kasede yoğurt, yumurta sarısı ve unu pürüzsüz olana kadar çırpın.',
      'Haşlanan pirincin suyundan 1 kepçe alıp ılıklaşması için terbiyeye yavaşça ekleyin ve çırpın.',
      'Terbiyeyi tencereye azar azar dökerken çorbayı sürekli karıştırın.',
      'Kaynayana kadar karıştırmaya devam edin, kaynayınca kısık ateşte 5 dakika pişirin.',
      'Tavada tereyağını eritip bol nane ile köpürtün ve çorbaya dökün. Tuzu en son ocaktan aldıktan sonra ekleyin.'
    ],
    tags: ['corba', 'vejetaryen', 'sifali', 'klasik'],
    tips: 'Yoğurdun kesilmemesi için tuzu mutlaka çorba piştikten ve ocaktan alındıktan sonra ekleyin.'
  },
  {
    id: 'pratik_pankek',
    title: 'Puf Puf Kahvaltılık Pankek',
    category: 'Tatlı & Kahvaltı',
    cuisine: 'Dünya / Kahvaltı',
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    difficulty: 'Kolay',
    calories: 220,
    imageEmoji: '🥞',
    description: 'Bal, peynir veya çikolatayla mükemmel giden süngerimsi yumuşacık pankekler.',
    requiredIngredients: [
      { id: 'un', amount: '1.5 su bardağı' },
      { id: 'sut', amount: '1 su bardağı' },
      { id: 'yumurta', amount: '1 adet' },
      { id: 'seker', amount: '2 yemek kaşığı' },
      { id: 'aycicek_yagi', amount: '2 yemek kaşığı' }
    ],
    optionalIngredients: [
      { id: 'bal', amount: 'Üzeri için' },
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
  {
    id: 'ton_balikli_pratik_salata',
    title: 'Akdeniz Usulü Ton Balıklı Salata',
    category: 'Salata & Fit',
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
      'Sosu salatanın üzerine gezdirip hafifçe harmanlayarak servis edin.'
    ],
    tags: ['salata', 'fit', 'protein', 'pisirmesiz', '5-dakika'],
    tips: 'Salataya ekleyeceğiniz taze limon ve kekik ton balığının lezzetini mükemmel tamamlar.'
  }
];
