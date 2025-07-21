/**
 * Sort array of objects by key
 * @param {Array} array - Array to sort
 * @param {string} key - Key to sort by
 * @param {string} order - Sort order ('asc' or 'desc')
 * @returns {Array} Sorted array
 */
export function sortBy(array, key, order = 'asc') {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal === bVal) return 0;
    
    if (order === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
}

/**
 * Group array items by key
 * @param {Array} array - Array to group
 * @param {string|Function} key - Key or function to group by
 * @returns {Object} Grouped object
 */
export function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}

/**
 * Filter array by search term
 * @param {Array} array - Array to filter
 * @param {string} searchTerm - Search term
 * @param {Array} keys - Keys to search in
 * @returns {Array} Filtered array
 */
export function filterBySearch(array, searchTerm, keys) {
  if (!searchTerm) return array;
  
  const term = searchTerm.toLowerCase();
  return array.filter(item => {
    return keys.some(key => {
      const value = item[key];
      if (value == null) return false;
      return String(value).toLowerCase().includes(term);
    });
  });
}

/**
 * Get unique values from array
 * @param {Array} array - Array to process
 * @param {string} key - Optional key for objects
 * @returns {Array} Array of unique values
 */
export function unique(array, key = null) {
  if (key) {
    const seen = new Set();
    return array.filter(item => {
      const value = item[key];
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  }
  return [...new Set(array)];
}

/**
 * Chunk array into smaller arrays
 * @param {Array} array - Array to chunk
 * @param {number} size - Chunk size
 * @returns {Array} Array of chunks
 */
export function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Shuffle array randomly
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get array intersection
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Intersection
 */
export function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

/**
 * Get array difference
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Difference (items in arr1 not in arr2)
 */
export function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

/**
 * Sum array values
 * @param {Array} array - Array of numbers or objects
 * @param {string} key - Optional key for objects
 * @returns {number} Sum
 */
export function sum(array, key = null) {
  return array.reduce((total, item) => {
    const value = key ? item[key] : item;
    return total + (Number(value) || 0);
  }, 0);
}

/**
 * Get array average
 * @param {Array} array - Array of numbers or objects
 * @param {string} key - Optional key for objects
 * @returns {number} Average
 */
export function average(array, key = null) {
  if (array.length === 0) return 0;
  return sum(array, key) / array.length;
}

/**
 * Flatten nested array
 * @param {Array} array - Array to flatten
 * @param {number} depth - Depth to flatten (default: 1)
 * @returns {Array} Flattened array
 */
export function flatten(array, depth = 1) {
  return depth > 0
    ? array.reduce((acc, val) => 
        acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), [])
    : array.slice();
}

/**
 * Remove duplicates from array of objects by key
 * @param {Array} array - Array to process
 * @param {string} key - Key to check for duplicates
 * @returns {Array} Array without duplicates
 */
export function removeDuplicates(array, key) {
  const seen = new Map();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.set(value, true);
    return true;
  });
}

/**
 * Move item in array
 * @param {Array} array - Array to modify
 * @param {number} fromIndex - Source index
 * @param {number} toIndex - Target index
 * @returns {Array} New array with moved item
 */
export function moveItem(array, fromIndex, toIndex) {
  const newArray = [...array];
  const [removed] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, removed);
  return newArray;
}