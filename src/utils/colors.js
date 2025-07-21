/**
 * Convert hex to RGB
 * @param {string} hex - Hex color
 * @returns {Object} RGB values
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Convert RGB to hex
 * @param {number} r - Red
 * @param {number} g - Green
 * @param {number} b - Blue
 * @returns {string} Hex color
 */
export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Get color with opacity
 * @param {string} color - Hex color
 * @param {number} opacity - Opacity (0-1)
 * @returns {string} RGBA color
 */
export function withOpacity(color, opacity) {
  const rgb = hexToRgb(color);
  if (!rgb) return color;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}

/**
 * Lighten color
 * @param {string} color - Hex color
 * @param {number} amount - Amount to lighten (0-100)
 * @returns {string} Lightened color
 */
export function lighten(color, amount) {
  const rgb = hexToRgb(color);
  if (!rgb) return color;
  
  const factor = amount / 100;
  const r = Math.round(rgb.r + (255 - rgb.r) * factor);
  const g = Math.round(rgb.g + (255 - rgb.g) * factor);
  const b = Math.round(rgb.b + (255 - rgb.b) * factor);
  
  return rgbToHex(r, g, b);
}

/**
 * Darken color
 * @param {string} color - Hex color
 * @param {number} amount - Amount to darken (0-100)
 * @returns {string} Darkened color
 */
export function darken(color, amount) {
  const rgb = hexToRgb(color);
  if (!rgb) return color;
  
  const factor = 1 - (amount / 100);
  const r = Math.round(rgb.r * factor);
  const g = Math.round(rgb.g * factor);
  const b = Math.round(rgb.b * factor);
  
  return rgbToHex(r, g, b);
}

/**
 * Get contrast color (black or white)
 * @param {string} color - Hex color
 * @returns {string} Contrast color
 */
export function getContrastColor(color) {
  const rgb = hexToRgb(color);
  if (!rgb) return '#000000';
  
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

/**
 * Generate color palette
 * @param {string} baseColor - Base hex color
 * @returns {Object} Color palette
 */
export function generatePalette(baseColor) {
  return {
    50: lighten(baseColor, 95),
    100: lighten(baseColor, 90),
    200: lighten(baseColor, 80),
    300: lighten(baseColor, 60),
    400: lighten(baseColor, 30),
    500: baseColor,
    600: darken(baseColor, 10),
    700: darken(baseColor, 30),
    800: darken(baseColor, 50),
    900: darken(baseColor, 70),
    950: darken(baseColor, 85)
  };
}

/**
 * Random hex color
 * @returns {string} Random color
 */
export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Get color from string (consistent color for same string)
 * @param {string} str - Input string
 * @returns {string} Hex color
 */
export function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
}

/**
 * Blend two colors
 * @param {string} color1 - First hex color
 * @param {string} color2 - Second hex color
 * @param {number} ratio - Blend ratio (0-1)
 * @returns {string} Blended color
 */
export function blendColors(color1, color2, ratio = 0.5) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return color1;
  
  const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
  const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
  const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);
  
  return rgbToHex(r, g, b);
}