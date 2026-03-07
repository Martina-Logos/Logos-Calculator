// ============================================================
//  storage.js — Persistent storage layer for Smart Calc
//  Wraps localStorage with safe get/set helpers and
//  dedicated accessors for history, theme, and settings.
// ============================================================

const Storage = (() => {

  // ---- Low-level helpers ----

  function set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('[Storage] set failed:', key, e);
      return false;
    }
  }

  function get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.warn('[Storage] get failed:', key, e);
      return fallback;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.warn('[Storage] remove failed:', key, e);
      return false;
    }
  }

  function clear() {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      console.warn('[Storage] clear failed:', e);
      return false;
    }
  }

  // ---- KEYS ----
  const KEYS = {
    HISTORY:  'calc_history',
    THEME:    'calc_theme',
    MODE:     'calc_mode',
    SETTINGS: 'calc_settings',
  };

  // ---- HISTORY ----
  const MAX_HISTORY = 30;

  function getHistory() {
    return get(KEYS.HISTORY, []);
  }

  function saveHistory(historyArray) {
    const trimmed = historyArray.slice(0, MAX_HISTORY);
    return set(KEYS.HISTORY, trimmed);
  }

  function addHistoryEntry(entry) {
    // entry: { expr, result, time }
    const history = getHistory();
    history.unshift(entry);
    return saveHistory(history);
  }

  function clearHistory() {
    return remove(KEYS.HISTORY);
  }

  // ---- THEME ----
  function getTheme() {
    return get(KEYS.THEME, 'space');
  }

  function saveTheme(key) {
    return set(KEYS.THEME, key);
  }

  // ---- MODE (basic / sci) ----
  function getMode() {
    return get(KEYS.MODE, 'basic');
  }

  function saveMode(mode) {
    return set(KEYS.MODE, mode);
  }

  // ---- SETTINGS (extensible) ----
  const DEFAULT_SETTINGS = {
    angleUnit: 'deg',   // 'deg' | 'rad'
    precision: 10,      // significant figures
  };

  function getSettings() {
    return { ...DEFAULT_SETTINGS, ...get(KEYS.SETTINGS, {}) };
  }

  function saveSetting(key, value) {
    const current = getSettings();
    current[key] = value;
    return set(KEYS.SETTINGS, current);
  }

  // ---- Public API ----
  return {
    // raw
    set, get, remove, clear,
    KEYS,
    // history
    getHistory,
    saveHistory,
    addHistoryEntry,
    clearHistory,
    // theme
    getTheme,
    saveTheme,
    // mode
    getMode,
    saveMode,
    // settings
    getSettings,
    saveSetting,
  };

})();