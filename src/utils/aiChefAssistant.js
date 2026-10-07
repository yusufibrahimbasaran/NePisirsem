// Akıllı Şef Motoru - Eldeki malzemeleri analiz ederek özel yaratıcı tarifler türetir
export function generateChefSuggestion(selectedIngredients, preferences = {}) {
  if (!selectedIngredients || selectedIngredients.length === 0) {
    return null;
  }

  const ingredientNames = selectedIngredients.map(i => i.name);
  const mainItems = selectedIngredients.slice(0, 4).map(i => i.name).join(', ');

  const cookingStyles = [
    { title: 'Tava Kavurması', time: '15 dk', method: 'hızlı soteleme ve baharatlandırma' },
    { title: 'Fırın Güveci', time: '30 dk', method: 'fırında nar gibi kızartma' },
    { title: 'Kremalı / Soslu Sote', time: '20 dk', method: 'kıvamlı nefis bir sos ile harmanlama' },
    { title: 'Pratik Mutfak Tavası', time: '12 dk', method: 'tek tavada lezzet patlaması' }
  ];

  const randomStyle = cookingStyles[Math.floor(Math.random() * cookingStyles.length)];
  
  return {
    id: 'ai-recipe-' + Date.now(),
    title: `Şefin Özel ${selectedIngredients[0]?.name || 'Mutfak'} ${randomStyle.title}`,
    description: `Dolabınızdaki ${mainItems} malzemelerini en verimli şekilde değerlendiren özel tarif.`,
    prepTime: 8,
    cookTime: parseInt(randomStyle.time),
    difficulty: 'Kolay',
    servings: preferences.servings || 2,
    calories: Math.floor(Math.random() * 150) + 250,
    imageEmoji: '✨👨‍🍳',
    ingredients: ingredientNames,
    steps: [
      `Tüm sebze ve ana malzemeleri (${ingredientNames.slice(0, 3).join(', ')}) eşit büyüklükte küp veya jülyen doğrayın.`,
      `Geniş bir tavaya veya tencereye yağı alın, sırasıyla önce sert sebzeleri veya et türevlerini orta-yüksek ateşte 4-5 dakika soteleyin.`,
      `Kalan malzemeleri ve dilediğiniz baharatları ilave edip aromalarını birbirine geçirin.`,
      `Kısık ateşte ${randomStyle.time} boyunca kapağı kapalı olarak lezzetlerin özleşmesini sağlayın.`,
      `Sıcak olarak dilerseniz yoğurt veya taze yeşillik eşliğinde servis edin.`
    ],
    chefNote: 'Elinizdeki malzemeler birbirini harika dengeliyor. İsteğe göre biraz pul biber ve kekik ekleyerek lezzeti taçlandırabilirsiniz!'
  };
}
