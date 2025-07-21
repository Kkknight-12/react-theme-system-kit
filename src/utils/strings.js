/**
 * Convert string to title case
 * @param {string} str - String to convert
 * @returns {string} Title cased string
 */
export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Convert string to slug
 * @param {string} str - String to convert
 * @returns {string} Slugified string
 */
export function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Convert camelCase to kebab-case
 * @param {string} str - String to convert
 * @returns {string} Kebab cased string
 */
export function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Convert kebab-case to camelCase
 * @param {string} str - String to convert
 * @returns {string} Camel cased string
 */
export function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Convert snake_case to camelCase
 * @param {string} str - String to convert
 * @returns {string} Camel cased string
 */
export function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Get initials from name
 * @param {string} name - Full name
 * @param {number} limit - Maximum initials
 * @returns {string} Initials
 */
export function getInitials(name, limit = 2) {
  const words = name.trim().split(' ');
  const initials = words
    .slice(0, limit)
    .map(word => word[0])
    .join('')
    .toUpperCase();
  return initials;
}

/**
 * Pluralize word based on count
 * @param {number} count - Item count
 * @param {string} singular - Singular form
 * @param {string} plural - Plural form (optional)
 * @returns {string} Pluralized string
 */
export function pluralize(count, singular, plural = null) {
  if (count === 1) return `${count} ${singular}`;
  return `${count} ${plural || singular + 's'}`;
}

/**
 * Truncate string in the middle
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} separator - Separator
 * @returns {string} Truncated string
 */
export function truncateMiddle(str, maxLength = 20, separator = '...') {
  if (str.length <= maxLength) return str;
  
  const sepLength = separator.length;
  const charsToShow = maxLength - sepLength;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  
  return str.substr(0, frontChars) + separator + str.substr(str.length - backChars);
}

/**
 * Remove HTML tags from string
 * @param {string} html - HTML string
 * @returns {string} Plain text
 */
export function stripHtmlTags(html) {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Escape HTML special characters
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
export function escapeHtml(str) {
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}

/**
 * Check if string contains substring (case insensitive)
 * @param {string} str - String to search in
 * @param {string} substring - Substring to find
 * @returns {boolean} Whether substring exists
 */
export function containsIgnoreCase(str, substring) {
  return str.toLowerCase().includes(substring.toLowerCase());
}

/**
 * Generate random string
 * @param {number} length - String length
 * @param {string} chars - Characters to use
 * @returns {string} Random string
 */
export function randomString(length = 8, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Highlight text matches
 * @param {string} text - Text to highlight in
 * @param {string} query - Search query
 * @param {string} className - CSS class for highlight
 * @returns {string} HTML with highlights
 */
export function highlightText(text, query, className = 'highlight') {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<span class="${className}">$1</span>`);
}

/**
 * Format bytes to human readable
 * @param {number} bytes - Number of bytes
 * @returns {string} Formatted string
 */
export function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Parse query string
 * @param {string} queryString - Query string to parse
 * @returns {Object} Parsed object
 */
export function parseQueryString(queryString) {
  const params = new URLSearchParams(queryString);
  const result = {};
  
  for (const [key, value] of params) {
    result[key] = value;
  }
  
  return result;
}