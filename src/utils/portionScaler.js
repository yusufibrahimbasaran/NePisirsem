// Akıllı Porsiyon & Malzeme Miktarı Ölçeklendirici

export function scaleAmount(amountStr, baseServings, currentServings) {
  if (!amountStr || baseServings <= 0 || currentServings <= 0) return amountStr;
  if (baseServings === currentServings) return amountStr;

  const ratio = currentServings / baseServings;
  let workingStr = amountStr.trim();

  // 1. "Yarım" ifadesi (örn: "Yarım çay bardağı", "Yarım adet")
  if (workingStr.toLowerCase().startsWith('yarım ')) {
    const rest = workingStr.slice(6);
    const scaledNum = 0.5 * ratio;
    return `${formatScaledNumber(scaledNum)} ${rest}`.trim();
  }

  // 2. "Çeyrek" ifadesi (örn: "Çeyrek demet", "Çeyrek çay kaşığı")
  if (workingStr.toLowerCase().startsWith('çeyrek ')) {
    const rest = workingStr.slice(7);
    const scaledNum = 0.25 * ratio;
    return `${formatScaledNumber(scaledNum)} ${rest}`.trim();
  }

  // 3. Aralık belirten ifadeler (örn: "2-3 adet", "4-5 adet", "6-8 dilim", "1.5 - 2 su bardağı")
  const rangeMatch = workingStr.match(/^(\d+(?:[.,]\d+)?)\s*-\s*(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (rangeMatch) {
    const num1 = parseFloat(rangeMatch[1].replace(',', '.'));
    const num2 = parseFloat(rangeMatch[2].replace(',', '.'));
    const unit = rangeMatch[3];

    if (!isNaN(num1) && !isNaN(num2)) {
      const scaled1 = num1 * ratio;
      const scaled2 = num2 * ratio;
      return `${formatScaledNumber(scaled1)}-${formatScaledNumber(scaled2)} ${unit}`.trim();
    }
  }

  // 4. Tekli sayısal ifadeler (örn: "500g", "1.5 su bardağı", "2 adet", "1 paket", "100g")
  const singleMatch = workingStr.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (singleMatch) {
    const num = parseFloat(singleMatch[1].replace(',', '.'));
    const unit = singleMatch[2];

    if (!isNaN(num)) {
      const scaledNum = num * ratio;
      
      // Gram özel formatlaması (örn: 500g * 2 = 1000g -> 1 kg)
      if (unit.toLowerCase().startsWith('g') && !unit.toLowerCase().startsWith('göz') && !unit.toLowerCase().startsWith('güveç')) {
        const restUnit = unit.slice(1).trim();
        if (scaledNum >= 1000) {
          const kg = (scaledNum / 1000).toFixed(1).replace('.0', '');
          return `${kg} kg ${restUnit}`.trim();
        }
        return `${Math.round(scaledNum)}g ${restUnit}`.trim();
      }

      return `${formatScaledNumber(scaledNum)} ${unit}`.trim();
    }
  }

  return amountStr;
}

function formatScaledNumber(num) {
  // Kesirli veya ondalıklı sayıları anlaşılır Türkçe ölçü formatına getir
  if (Math.abs(num - 0.5) < 0.05) return 'Yarım (1/2)';
  if (Math.abs(num - 0.25) < 0.05) return 'Çeyrek (1/4)';
  if (Math.abs(num - 0.75) < 0.05) return '3/4';
  if (Math.abs(num - 1.5) < 0.05) return '1.5';
  if (Math.abs(num - 2.5) < 0.05) return '2.5';
  if (Math.abs(num - 3.5) < 0.05) return '3.5';

  if (Number.isInteger(num)) {
    return num.toString();
  }

  // Ondalıklı kısmı 1 basamağa yuvarla (örn: 2.3333 -> 2.3)
  return parseFloat(num.toFixed(1)).toString();
}
