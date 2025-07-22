/**
 * Local storage utilities with JSON support
 */

/**
 * Get item from localStorage
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value if not found
 * @returns {any} Stored value or default
 */
export function getStorageItem(key, defaultValue = null) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Set item in localStorage
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 * @returns {boolean} Success
 */
export function setStorageItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Remove item from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success
 */
export function removeStorageItem(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Clear all localStorage
 * @returns {boolean} Success
 */
export function clearStorage() {
  try {
    window.localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
}

/**
 * Get storage size
 * @returns {number} Size in bytes
 */
export function getStorageSize() {
  let size = 0;
  for (const key in window.localStorage) {
    if (Object.prototype.hasOwnProperty.call(window.localStorage, key)) {
      size += window.localStorage[key].length + key.length;
    }
  }
  return size;
}

/**
 * Session storage utilities
 */
export const sessionStorage = {
  get: (key, defaultValue = null) => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading sessionStorage key "${key}":`, error);
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error);
      return false;
    }
  },
  
  remove: (key) => {
    try {
      window.sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error);
      return false;
    }
  },
  
  clear: () => {
    try {
      window.sessionStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
      return false;
    }
  }
};