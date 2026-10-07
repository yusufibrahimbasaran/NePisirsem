// Akıllı Porsiyon & Malzeme Miktarı Ölçeklendirici

export function scaleAmount(amountStr, baseServings, currentServings) {
  if (!amountStr || baseServings <= 0 || currentServings <= 0) return amountStr;
  if (baseServings === currentServings) return amountStr;

  const ratio = currentServings / baseServings;

  // Özel Türkçe Miktar İfadelerini Dönüştürme
  let workingStr = amountStr.trim();

  // "Yarım" ifadesi -> 0.5
  if (workingStr.toLowerCase().startsWith('yarım ')) {
    const rest = workingStr.slice(6);
    const scaledNum = 0.5 * ratio;
    return formatScaledNumber(scaledNum) + ' ' + rest;
  }

  // "Çeyrek" ifadesi -> 0.25
  if (workingStr.toLowerCase().startsWith('çeyrek ')) {
    const rest = workingStr.slice(7);
    const scaledNum = 0.25 * ratio;
    return formatScaledNumber(scaledNum) + ' ' + rest;
  }

  // Sayısal ifadeleri regex ile yakalama (örn: "500g", "1.5 su bardağı", "2 adet", "2-3 adet", "100g")
  const match = workingStr.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (match) {
    const num = parseFloat(match[1].replace(',', '.'));
    const unit = match[2];

    if (!isNaN(num)) {
      const scaledNum = num * ratio;
      
      // Gram özel formatlaması (1000g -> 1 kg)
      if (unit.toLowerCase().startsWith('g') && !unit.toLowerCase().startsWith('göz')) {
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
  // Kesirli veya ondalıklı sayıları anlaşılır yap
  if (Math.abs(num - 0.5) < 0.05) return 'Yarım (1/2)';
  if (Math.abs(num - 0.25) < 0.05) return 'Çeyrek (1/4)';
  if (Math.abs(num - 0.75) < 0.05) return '3/4';
  if (Math.abs(num - 1.5) < 0.05) return '1.5';
  if (Math.abs(num - 2.5) < 0.05) return '2.5';
  if (Math.abs(num - 3.5) < 0.05) return '3.5';

  if (Number.isInteger(num)) {
    return num.toString();
  }

  // 1 ondalık basamağa yuvarla
  return parseFloat(num.toFixed(1)).toString();
}
