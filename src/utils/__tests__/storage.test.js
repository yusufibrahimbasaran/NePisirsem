import { describe, it, expect, beforeEach } from 'vitest';
import { 
  getStorageItem, 
  setStorageItem, 
  removeStorageItem, 
  getStorageMetadata, 
  STORAGE_VERSION 
} from '../storage';

let store = {};
const mockLocalStorage = {
  getItem: (key) => (key in store ? store[key] : null),
  setItem: (key, value) => { store[key] = String(value); },
  removeItem: (key) => { delete store[key]; },
  clear: () => { store = {}; }
};

describe('storage - Merkezi LocalStorage Yönetimi', () => {
  beforeEach(() => {
    store = {};
    globalThis.window = { localStorage: mockLocalStorage };
    globalThis.localStorage = mockLocalStorage;
  });

  it('veri yazıldığında şema sürümü (version) ve veri doğru saklanmalı', () => {
    const testData = { name: 'Ayşe Hanım', role: 'Ev Hanımı' };
    const success = setStorageItem('test_user', testData);

    expect(success).toBe(true);

    // Ham localStorage içeriğini kontrol et
    const raw = JSON.parse(localStorage.getItem('test_user'));
    expect(raw.version).toBe(STORAGE_VERSION);
    expect(raw.updatedAt).toBeTypeOf('number');
    expect(raw.data).toEqual(testData);

    // getStorageItem ile okuma
    const retrieved = getStorageItem('test_user');
    expect(retrieved).toEqual(testData);
  });

  it('bulunamayan anahtarlar için varsayılan değeri döndürmeli', () => {
    expect(getStorageItem('non_existing_key', 'default_val')).toBe('default_val');
    expect(getStorageItem('another_missing', null)).toBeNull();
  });

  it('eski formatta (version zarfı olmayan) düz JSON verileri geriye dönük uyumlulukla okuyabilmeli', () => {
    // Eski sistemden kalmış düz JSON
    localStorage.setItem('legacy_favs', JSON.stringify(['menemen', 'corba']));

    const result = getStorageItem('legacy_favs');
    expect(result).toEqual(['menemen', 'corba']);
  });

  it('JSON olmayan düz string değerleri güvenle okuyabilmeli', () => {
    localStorage.setItem('np_theme', 'dark');

    const result = getStorageItem('np_theme');
    expect(result).toBe('dark');
  });

  it('bozuk veya hasarlı JSON stringleri parse hatası vermeden varsayılan değeri döndürmeli', () => {
    localStorage.setItem('corrupted_key', '{ invalid-json ...');

    // Hata fırlatmamalı, varsayılan değeri döndürmeli
    const result = getStorageItem('corrupted_key', { fallback: true });
    expect(result).toEqual({ fallback: true });
  });

  it('removeStorageItem anahtarı başarıyla silmeli', () => {
    setStorageItem('to_delete', 123);
    expect(getStorageItem('to_delete')).toBe(123);

    removeStorageItem('to_delete');
    expect(getStorageItem('to_delete')).toBeNull();
  });

  it('getStorageMetadata sürüm ve güncelleme bilgisini doğru döndürmeli', () => {
    setStorageItem('versioned_item', 'test');
    const meta = getStorageMetadata('versioned_item');

    expect(meta).toBeDefined();
    expect(meta.version).toBe(STORAGE_VERSION);
    expect(meta.updatedAt).toBeTypeOf('number');
  });
});
