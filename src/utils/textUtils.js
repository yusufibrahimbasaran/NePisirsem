// Türkçe Karakter Normalizasyonu ve Akıllı Arama Yardımcısı

export function normalizeTurkishText(text) {
  if (!text) return '';
  return text
    .toString()
    .trim()
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u');
}

export function matchesSearch(sourceText, searchQuery) {
  if (!searchQuery || !searchQuery.trim()) return true;
  if (!sourceText) return false;

  const normalizedSource = normalizeTurkishText(sourceText);
  const normalizedQuery = normalizeTurkishText(searchQuery);

  return normalizedSource.includes(normalizedQuery);
}
