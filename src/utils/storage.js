/**
 * Ne Pişirsem? - Merkezi Yerel Veri Depolama & Sürüm Yönetim Modülü (Storage Engine)
 * 
 * Bu modül tüm LocalStorage okuma/yazma işlemlerini tek merkezden güvenli bir şekilde yönetir:
 * - JSON parse/stringify hatalarına karşı try/catch koruması
 * - Şema sürümleme (versioning) ile gelecekteki veri göçlerine (migration) tam uyumluluk
 * - Eski (unversioned) verileri bozmadan geriye dönük uyumlulukla okuma yeteneği
 */

export const STORAGE_VERSION = 1;

/**
 * Tarayıcı LocalStorage erişilebilirliğini kontrol eder
 */
function isStorageAvailable() {
  try {
    return typeof window !== 'undefined' && Boolean(window.localStorage);
  } catch {
    return false;
  }
}

/**
 * LocalStorage'dan güvenli veri okur.
 * Hem yeni sürümlü { version, timestamp, data } zarfını hem de eski düz veriyi destekler.
 * 
 * @param {string} key - Depolama anahtarı
 * @param {any} defaultValue - Bulunamazsa veya hata olursa dönecek varsayılan değer
 * @returns {any}
 */
export function getStorageItem(key, defaultValue = null) {
  if (!isStorageAvailable()) return defaultValue;

  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null || raw === undefined) {
      return defaultValue;
    }

    try {
      const parsed = JSON.parse(raw);
      // Yeni versiyonlu zarf formatı kontrolü
      if (parsed && typeof parsed === 'object' && 'version' in parsed && 'data' in parsed) {
        return parsed.data !== undefined ? parsed.data : defaultValue;
      }
      // Eski / düz formatta saklanmış JSON veri
      return parsed;
    } catch {
      // Eğer JSON objesi/dizisi gibi görünüyorsa ({ veya [) ama parse edilemiyorsa bozuktur
      const trimmed = raw.trim();
      if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        return defaultValue;
      }
      // Düz metin (JSON olmayan string değerler, örn: 'light' veya timestamp string)
      return raw;
    }
  } catch (error) {
    console.warn(`[storage] "${key}" anahtarı okunurken hata oluştu:`, error);
    return defaultValue;
  }
}

/**
 * LocalStorage'a güvenli veri yazar.
 * Veriyi şema sürüm bilgisi ve zaman damgasıyla sarmalar.
 * 
 * @param {string} key - Depolama anahtarı
 * @param {any} value - Saklanacak veri
 * @returns {boolean} - İşlem başarılı mı
 */
export function setStorageItem(key, value) {
  if (!isStorageAvailable()) return false;

  try {
    const payload = {
      version: STORAGE_VERSION,
      updatedAt: Date.now(),
      data: value
    };
    window.localStorage.setItem(key, JSON.stringify(payload));
    return true;
  } catch (error) {
    console.error(`[storage] "${key}" anahtarı kaydedilirken hata oluştu:`, error);
    return false;
  }
}

/**
 * LocalStorage'dan bir anahtarı siler.
 * 
 * @param {string} key 
 */
export function removeStorageItem(key) {
  if (!isStorageAvailable()) return;

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`[storage] "${key}" silinirken hata oluştu:`, error);
  }
}

/**
 * Belirli bir anahtarın sürüm ve meta bilgisini döndürür.
 * İleride veri şeması migration gerektiğinde kullanılır.
 * 
 * @param {string} key 
 * @returns {{ version: number, updatedAt: number|null } | null}
 */
export function getStorageMetadata(key) {
  if (!isStorageAvailable()) return null;

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && 'version' in parsed) {
      return {
        version: parsed.version,
        updatedAt: parsed.updatedAt || null
      };
    }
    return { version: 0, updatedAt: null }; // Eski unversioned veri
  } catch {
    return { version: 0, updatedAt: null };
  }
}
