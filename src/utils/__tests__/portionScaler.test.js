import { describe, it, expect } from 'vitest';
import { scaleAmount } from '../portionScaler';

describe('portionScaler - scaleAmount', () => {
  describe('Porsiyon Artırma (Scale Up)', () => {
    it('tam sayı adetleri doğru oranda artırmalı (2 kişilikten 4 kişiliğe)', () => {
      expect(scaleAmount('2 adet yumurta', 2, 4)).toBe('4 adet yumurta');
      expect(scaleAmount('1 su bardağı süt', 2, 4)).toBe('2 su bardağı süt');
    });

    it('gram cinsinden miktarları artırmalı ve 1000g üzerine çıkınca kg olarak biçimlendirmeli', () => {
      expect(scaleAmount('250g un', 2, 4)).toBe('500g un');
      expect(scaleAmount('500g kıyma', 2, 4)).toBe('1 kg kıyma');
      expect(scaleAmount('750g yoğurt', 2, 4)).toBe('1.5 kg yoğurt');
    });

    it('3 katına çıkarma durumunu doğru hesaplamalı', () => {
      expect(scaleAmount('1 tatlı kaşığı tuz', 2, 6)).toBe('3 tatlı kaşığı tuz');
    });
  });

  describe('Porsiyon Azaltma (Scale Down)', () => {
    it('miktarları yarıya indirmeli (4 kişilikten 2 kişiliğe)', () => {
      expect(scaleAmount('4 adet patates', 4, 2)).toBe('2 adet patates');
      expect(scaleAmount('2 yemek kaşığı zeytinyağı', 4, 2)).toBe('1 yemek kaşığı zeytinyağı');
    });

    it('1 birimlik miktarı yarıya indirirken "Yarım (1/2)" biçimini kullanmalı', () => {
      expect(scaleAmount('1 çay kaşığı karabiber', 2, 1)).toBe('Yarım (1/2) çay kaşığı karabiber');
    });
  });

  describe('Küsuratlı ve Özel İfadeler (Decimals, Fractions & Ranges)', () => {
    it('"Yarım" ile başlayan ifadeleri ölçeklemeli', () => {
      // 2 kişilikte yarım çay bardağı -> 4 kişilikte 1 çay bardağı
      expect(scaleAmount('Yarım çay bardağı sıvı yağ', 2, 4)).toBe('1 çay bardağı sıvı yağ');
      // 2 kişilikte yarım -> 1 kişilikte çeyrek
      expect(scaleAmount('Yarım limon suyu', 2, 1)).toBe('Çeyrek (1/4) limon suyu');
    });

    it('"Çeyrek" ile başlayan ifadeleri ölçeklemeli', () => {
      // 2 kişilikte çeyrek demet -> 4 kişilikte yarım demet
      expect(scaleAmount('Çeyrek demet dereotu', 2, 4)).toBe('Yarım (1/2) demet dereotu');
    });

    it('ondalıklı miktarları ölçeklemeli (örn: 1.5 su bardağı)', () => {
      expect(scaleAmount('1.5 su bardağı su', 2, 4)).toBe('3 su bardağı su');
      expect(scaleAmount('1,5 su bardağı un', 2, 4)).toBe('3 su bardağı un');
    });

    it('aralık belirten ifadeleri ölçeklemeli (örn: 2-3 adet)', () => {
      expect(scaleAmount('2-3 diş sarımsak', 2, 4)).toBe('4-6 diş sarımsak');
      expect(scaleAmount('4-6 dilim ekmek', 4, 2)).toBe('2-3 dilim ekmek');
    });

    it('tam bölünmeyen küsuratları 1 ondalık basamağa yuvarlamalı', () => {
      // 1 adet * (4/3) = 1.333 -> "1.3 adet"
      expect(scaleAmount('1 adet soğan', 3, 4)).toBe('1.3 adet soğan');
    });
  });

  describe('Uç Durumlar (Edge Cases)', () => {
    it('porsiyon sayısı değişmediğinde metni olduğu gibi bırakmalı', () => {
      expect(scaleAmount('2 adet domates', 4, 4)).toBe('2 adet domates');
    });

    it('geçersiz veya 0 porsiyon değerlerinde orijinal metni döndürmeli', () => {
      expect(scaleAmount('2 adet', 0, 4)).toBe('2 adet');
      expect(scaleAmount('2 adet', 4, 0)).toBe('2 adet');
      expect(scaleAmount('', 2, 4)).toBe('');
      expect(scaleAmount(null, 2, 4)).toBe(null);
    });

    it('sayı içermeyen sözel ifadeleri korumalı', () => {
      expect(scaleAmount('Bir tutam tuz', 2, 4)).toBe('Bir tutam tuz');
      expect(scaleAmount('Göz kararı zeytinyağı', 2, 4)).toBe('Göz kararı zeytinyağı');
    });
  });
});
