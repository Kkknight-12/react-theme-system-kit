/**
 * Theme utility functions for Tailwind v4
 */

import { themePresets } from '../config/themePresets';
import convert from 'color-convert';

/**
 * Get appropriate contrast color (white or black) for a given background
 * @param {string} hex - Hex color code
 * @returns {string} OKLCH color for text
 */
function getContrastColor(hex) {
  if (!hex) return 'oklch(0.985 0 0)'; // Default to white

  // Simple luminance check - in production, use proper WCAG contrast calculation
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark colors, dark for light colors
  return luminance > 0.5 ? 'oklch(0.13 0.02 264)' : 'oklch(0.985 0 0)';
}

/**
 * Simple hex to RGB conversion
 * @param {string} hex - Hex color code
 * @returns {object} RGB values
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}

/**
 * Extract OKLCH hue from hex color using color-convert
 * @param {string} hex - Hex color code
 * @returns {number} OKLCH hue value (0-360)
 */
function getHueFromHex(hex) {
  try {
    // Remove # if present
    const cleanHex = hex.replace('#', '');
    
    // Convert hex to OKLCH
    // color-convert uses scales: L (0-100), C (0-32), H (0-360)
    const [l, c, h] = convert.hex.oklch(cleanHex);
    
    // Return the hue value (already in 0-360 range)
    return h || 0;
  } catch (error) {
    console.warn('Failed to convert hex to OKLCH:', error);
    // Fallback to a neutral hue
    return 0;
  }
}

/**
 * Convert hex color to OKLCH
 * @param {string} hex - Hex color code
 * @returns {string} OKLCH color string
 */
function hexToOklch(hex) {
  // This is a simplified conversion - in production, use a library like culori
  // For now, we'll use predefined OKLCH values for each theme
  const oklchMap = {
    // Emerald/Green theme
    '#ecfdf5': 'oklch(0.98 0.04 166)',
    '#d1fae5': 'oklch(0.96 0.08 166)',
    '#a7f3d0': 'oklch(0.91 0.14 166)',
    '#6ee7b7': 'oklch(0.84 0.20 166)',
    '#34d399': 'oklch(0.74 0.22 166)',
    '#10b981': 'oklch(0.64 0.20 166)',
    '#059669': 'oklch(0.54 0.18 166)',
    '#047857': 'oklch(0.44 0.14 166)',
    '#065f46': 'oklch(0.36 0.11 166)',
    '#064e3b': 'oklch(0.30 0.09 166)',
    '#022c22': 'oklch(0.20 0.08 166)',

    // Blue theme
    '#eff6ff': 'oklch(0.97 0.014 254)',
    '#dbeafe': 'oklch(0.93 0.032 255)',
    '#bfdbfe': 'oklch(0.88 0.059 254)',
    '#93c5fd': 'oklch(0.81 0.105 251)',
    '#60a5fa': 'oklch(0.71 0.165 254)',
    '#3b82f6': 'oklch(0.62 0.214 259)',
    '#2563eb': 'oklch(0.55 0.245 262)',
    '#1d4ed8': 'oklch(0.49 0.243 264)',
    '#1e40af': 'oklch(0.42 0.199 265)',
    '#1e3a8a': 'oklch(0.38 0.146 265)',
    '#172554': 'oklch(0.28 0.091 267)',

    // Purple theme
    '#faf5ff': 'oklch(0.977 0.014 308)',
    '#f3e8ff': 'oklch(0.946 0.033 307)',
    '#e9d5ff': 'oklch(0.902 0.063 306)',
    '#d8b4fe': 'oklch(0.827 0.119 306)',
    '#c084fc': 'oklch(0.714 0.203 305)',
    '#a855f7': 'oklch(0.627 0.265 303)',
    '#9333ea': 'oklch(0.558 0.288 302)',
    '#7c3aed': 'oklch(0.496 0.265 301)',
    '#6b21a8': 'oklch(0.438 0.218 303)',
    '#581c87': 'oklch(0.381 0.176 304)',
    '#3b0764': 'oklch(0.291 0.149 302)',

    // Orange theme
    '#fff7ed': 'oklch(0.98 0.016 73)',
    '#ffedd5': 'oklch(0.954 0.038 75)',
    '#fed7aa': 'oklch(0.901 0.076 70)',
    '#fdba74': 'oklch(0.837 0.128 66)',
    '#fb923c': 'oklch(0.75 0.183 55)',
    '#f97316': 'oklch(0.705 0.213 47)',
    '#ea580c': 'oklch(0.646 0.222 41)',
    '#c2410c': 'oklch(0.553 0.195 38)',
    '#9a3412': 'oklch(0.47 0.157 37)',
    '#7c2d12': 'oklch(0.408 0.123 38)',
    '#431407': 'oklch(0.266 0.079 36)',

    // Rose/Red theme
    '#fff1f2': 'oklch(0.969 0.015 12)',
    '#ffe4e6': 'oklch(0.941 0.03 12)',
    '#fecdd3': 'oklch(0.892 0.058 10)',
    '#fda4af': 'oklch(0.81 0.117 11)',
    '#fb7185': 'oklch(0.712 0.194 13)',
    '#f43f5e': 'oklch(0.645 0.246 16)',
    '#e11d48': 'oklch(0.586 0.253 17)',
    '#be123c': 'oklch(0.514 0.222 16)',
    '#9f1239': 'oklch(0.455 0.188 13)',
    '#881337': 'oklch(0.41 0.159 10)',
    '#4c0519': 'oklch(0.271 0.105 12)',

    // Teal theme
    '#f0fdfa': 'oklch(0.984 0.014 180)',
    '#ccfbf1': 'oklch(0.953 0.051 180)',
    '#99f6e4': 'oklch(0.91 0.096 180)',
    '#5eead4': 'oklch(0.855 0.138 181)',
    '#2dd4bf': 'oklch(0.777 0.152 181)',
    '#14b8a6': 'oklch(0.704 0.14 182)',
    '#0d9488': 'oklch(0.6 0.118 184)',
    '#0f766e': 'oklch(0.511 0.096 186)',
    '#115e59': 'oklch(0.437 0.078 188)',
    '#134e4a': 'oklch(0.386 0.063 188)',
    '#042f2e': 'oklch(0.277 0.046 192)',

    // Indigo theme
    '#eef2ff': 'oklch(0.962 0.018 272)',
    '#e0e7ff': 'oklch(0.93 0.034 272)',
    '#c7d2fe': 'oklch(0.87 0.065 274)',
    '#a5b4fc': 'oklch(0.785 0.115 274)',
    '#818cf8': 'oklch(0.673 0.182 276)',
    '#6366f1': 'oklch(0.585 0.233 277)',
    '#4f46e5': 'oklch(0.511 0.262 276)',
    '#4338ca': 'oklch(0.457 0.24 277)',
    '#3730a3': 'oklch(0.398 0.195 277)',
    '#312e81': 'oklch(0.359 0.144 278)',
    '#1e1b4b': 'oklch(0.257 0.09 281)',

    // Pink theme
    '#fdf2f8': 'oklch(0.971 0.014 343)',
    '#fce7f3': 'oklch(0.948 0.028 342)',
    '#fbcfe8': 'oklch(0.899 0.061 343)',
    '#f9a8d4': 'oklch(0.823 0.12 346)',
    '#f472b6': 'oklch(0.718 0.202 349)',
    '#ec4899': 'oklch(0.656 0.241 354)',
    '#db2777': 'oklch(0.592 0.249 0.584)',
    '#be185d': 'oklch(0.525 0.223 3.958)',
    '#9d174d': 'oklch(0.459 0.187 3.815)',
    '#831843': 'oklch(0.408 0.153 2.432)',
    '#500724': 'oklch(0.284 0.109 3.907)',

    // Yellow theme
    '#fefce8': 'oklch(0.987 0.029 102)',
    '#fef9c3': 'oklch(0.973 0.071 102)',
    '#fef08a': 'oklch(0.946 0.137 102)',
    '#fde047': 'oklch(0.901 0.204 98)',
    '#facc15': 'oklch(0.848 0.213 94)',
    '#eab308': 'oklch(0.788 0.192 95)',
    '#ca8a04': 'oklch(0.673 0.177 89)',
    '#a16207': 'oklch(0.548 0.139 84)',
    '#854d0e': 'oklch(0.469 0.113 83)',
    '#713f12': 'oklch(0.414 0.092 82)',
    '#422006': 'oklch(0.298 0.065 77)',

    // Green theme
    '#f0fdf4': 'oklch(0.982 0.029 145)',
    '#dcfce7': 'oklch(0.961 0.069 143)',
    '#bbf7d0': 'oklch(0.926 0.119 145)',
    '#86efac': 'oklch(0.869 0.167 149)',
    '#4ade80': 'oklch(0.796 0.198 149)',
    '#22c55e': 'oklch(0.724 0.21 142)',
    '#16a34a': 'oklch(0.618 0.182 144)',
    '#15803d': 'oklch(0.523 0.144 145)',
    '#166534': 'oklch(0.449 0.119 145)',
    '#14532d': 'oklch(0.393 0.095 146)',
    '#052e16': 'oklch(0.271 0.069 147)',

    // Cyan theme
    '#ecfeff': 'oklch(0.986 0.016 201)',
    '#cffafe': 'oklch(0.965 0.048 199)',
    '#a5f3fc': 'oklch(0.926 0.092 198)',
    '#67e8f9': 'oklch(0.869 0.147 198)',
    '#22d3ee': 'oklch(0.796 0.177 199)',
    '#06b6d4': 'oklch(0.703 0.177 206)',
    '#0891b2': 'oklch(0.601 0.152 213)',
    '#0e7490': 'oklch(0.506 0.124 218)',
    '#155e75': 'oklch(0.434 0.098 220)',
    '#164e63': 'oklch(0.382 0.077 222)',
    '#083344': 'oklch(0.293 0.059 227)',

    // Lime theme
    '#f7fee7': 'oklch(0.978 0.036 119)',
    '#ecfccb': 'oklch(0.958 0.083 122)',
    '#d9f99d': 'oklch(0.922 0.155 122)',
    '#bef264': 'oklch(0.869 0.235 124)',
    '#a3e635': 'oklch(0.823 0.273 126)',
    '#84cc16': 'oklch(0.765 0.265 127)',
    '#65a30d': 'oklch(0.649 0.217 130)',
    '#4d7c0f': 'oklch(0.527 0.166 131)',
    '#3f6212': 'oklch(0.452 0.134 132)',
    '#365314': 'oklch(0.397 0.108 133)',
    '#1a2e05': 'oklch(0.271 0.072 134)',

    // Violet theme
    '#f5f3ff': 'oklch(0.97 0.016 293)',
    '#ede9fe': 'oklch(0.949 0.032 293)',
    '#ddd6fe': 'oklch(0.911 0.062 293)',
    '#c4b5fd': 'oklch(0.841 0.116 293)',
    '#a78bfa': 'oklch(0.739 0.187 293)',
    '#8b5cf6': 'oklch(0.631 0.249 293)',
    '#7c3aed': 'oklch(0.555 0.263 294)',
    '#6d28d9': 'oklch(0.487 0.252 294)',
    '#5b21b6': 'oklch(0.425 0.221 295)',
    '#4c1d95': 'oklch(0.374 0.183 296)',
    '#2e1065': 'oklch(0.271 0.139 298)',

    // Sky/Light Blue theme
    '#f0f9ff': 'oklch(0.977 0.013 235)',
    '#e0f2fe': 'oklch(0.951 0.025 236)',
    '#bae6fd': 'oklch(0.900 0.052 237)',
    '#7dd3fc': 'oklch(0.811 0.095 237)',
    '#38bdf8': 'oklch(0.710 0.153 237)',
    '#0ea5e9': 'oklch(0.634 0.198 241)',
    '#0284c7': 'oklch(0.544 0.184 244)',
    '#0369a1': 'oklch(0.470 0.156 246)',
    '#075985': 'oklch(0.410 0.129 247)',
    '#0c4a6e': 'oklch(0.359 0.106 249)',
    '#082f49': 'oklch(0.271 0.077 252)',

    // Coral/Red-Orange theme
    '#fff5f5': 'oklch(0.976 0.010 16)',
    '#fed7d7': 'oklch(0.916 0.041 17)',
    '#feb2b2': 'oklch(0.830 0.084 17)',
    '#fc8181': 'oklch(0.723 0.139 16)',
    '#f56565': 'oklch(0.649 0.189 17)',
    '#e53e3e': 'oklch(0.584 0.217 18)',
    '#c53030': 'oklch(0.507 0.200 18)',
    '#9b2c2c': 'oklch(0.437 0.169 17)',
    '#822727': 'oklch(0.384 0.142 16)',
    '#63171b': 'oklch(0.320 0.122 13)',
    '#441114': 'oklch(0.252 0.088 11)',
  };

  // If hex color not found in map, generate a reasonable OKLCH value
  // based on the hex color's hue
  if (!oklchMap[hex]) {
    const hue = getHueFromHex(hex);
    // Return a medium lightness color with moderate chroma
    // This ensures we get a color in the same hue family rather than a gray
    return `oklch(0.65 0.15 ${hue})`;
  }

  return oklchMap[hex];
}

// Cache for generated CSS to avoid recomputation
const themeCache = new Map();

/**
 * Apply theme colors to CSS variables
 * This function only updates color scales (primary, secondary, accent)
 * It does NOT update UI colors that need dark mode switching (foreground, background, etc.)
 * Those are handled by the CSS bridge variables in index.css
 * @param {string} themeName - Name of the theme preset
 */
export function applyTheme(themeName) {
  const preset = themePresets[themeName];
  if (!preset) return;

  const root = document.documentElement;

  // Check cache first
  if (themeCache.has(themeName)) {
    const styleId = 'dynamic-theme-colors';
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = themeCache.get(themeName);
    saveTheme(themeName);
    return;
  }

  // Create a style element for dynamic theme updates
  const styleId = 'dynamic-theme-colors';
  let styleElement = document.getElementById(styleId);

  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  // Convert primary color to OKLCH for accent color generation
  const primaryHex = (preset.primary['500'] || preset.primary.DEFAULT).replace('#', '');
  
  let accentLight, accentDark;
  
  try {
    // Get OKLCH values from primary color
    // color-convert scales: L (0-100), C (0-32), H (0-360)
    const [primaryL, primaryC, primaryH] = convert.hex.oklch(primaryHex);
    
    // Convert to CSS OKLCH scales: L (0-1), C (0-0.4), H (0-360)
    const cssL = primaryL / 100;
    const cssC = (primaryC / 32) * 0.4;
    
    // Generate accent colors for ghost buttons based on article recommendations:
    // - Ghost buttons use lower chroma (0.05-0.15) for subtle appearance
    // - Light mode: high lightness (90-95%), medium-low chroma
    // - Dark mode: low lightness (20-25%), medium-low chroma
    
    // Calculate appropriate chroma for ghost buttons
    // Use 40% of the primary color's chroma, with min 0.08 and max 0.12
    const ghostChroma = Math.max(0.08, Math.min(0.12, cssC * 0.4));
    
    accentLight = `oklch(0.94 ${ghostChroma.toFixed(3)} ${primaryH})`;
    accentDark = `oklch(0.22 ${ghostChroma.toFixed(3)} ${primaryH})`;
    
    console.log('Primary color OKLCH:', `L: ${cssL.toFixed(2)}, C: ${cssC.toFixed(3)}, H: ${primaryH}`);
    console.log('Ghost button chroma:', ghostChroma.toFixed(3));
    console.log('Light accent:', accentLight);
    console.log('Dark accent:', accentDark);
  } catch (error) {
    console.error('Failed to generate accent colors:', error);
    // Fallback to neutral colors
    accentLight = `oklch(0.94 0.01 0)`;
    accentDark = `oklch(0.22 0.01 0)`;
  }

  // Generate CSS that overrides the theme variables
  const css = `
    /* Dynamic theme colors for Tailwind v4 */
    /* IMPORTANT: Only updates color scales, not UI colors that need dark mode */
    :root {
      /* Primary colors - These don't change in dark mode */
      ${Object.entries(preset.primary)
        .filter(([shade]) => shade !== 'DEFAULT')
        .map(([shade, hex]) => {
          const oklch = hexToOklch(hex);
          return `--color-primary-${shade}: ${oklch};`;
        })
        .join('\n      ')}
      
      /* Secondary colors - Theme specific vibrant colors */
      ${
        preset.secondary
          ? Object.entries(preset.secondary)
              .filter(([shade]) => shade !== 'DEFAULT')
              .map(([shade, hex]) => {
                const oklch = hexToOklch(hex);
                return `--color-secondary-${shade}: ${oklch};`;
              })
              .join('\n      ')
          : ''
      }
      
      /* Accent colors - Theme specific accent colors */
      ${
        preset.accent
          ? Object.entries(preset.accent)
              .filter(([shade]) => shade !== 'DEFAULT')
              .map(([shade, hex]) => {
                const oklch = hexToOklch(hex);
                return `--color-accent-${shade}: ${oklch};`;
              })
              .join('\n      ')
          : ''
      }
      
      /* Update 5-shade system mapping for primary */
      --color-primary-lighter: var(--color-primary-200);
      --color-primary-light: var(--color-primary-400);
      --color-primary: var(--color-primary-500);
      --color-primary-dark: var(--color-primary-600);
      --color-primary-darker: var(--color-primary-800);
      
      /* Update 5-shade system mapping for secondary */
      --color-secondary-lighter: var(--color-secondary-200);
      --color-secondary-light: var(--color-secondary-400);
      --color-secondary: var(--color-secondary-500);
      --color-secondary-dark: var(--color-secondary-600);
      --color-secondary-darker: var(--color-secondary-800);
      
      /* Update 5-shade system mapping for accent */
      --color-accent-lighter: var(--color-accent-200);
      --color-accent-light: var(--color-accent-400);
      --color-accent: var(--color-accent-500);
      --color-accent-dark: var(--color-accent-600);
      --color-accent-darker: var(--color-accent-800);
      
      /* Dynamic accent for ghost buttons - light mode */
      --accent: ${accentLight};
      --accent-foreground: var(--color-primary-800);
    }
    
    /* Dark mode overrides */
    :root.dark {
      /* Dynamic accent for ghost buttons - dark mode */
      --accent: ${accentDark};
      --accent-foreground: var(--color-primary-200);
    }
  `;

  styleElement.textContent = css;

  // Cache the generated CSS
  themeCache.set(themeName, css);

  // Store the current theme
  saveTheme(themeName);
}

/**
 * Get current theme from localStorage
 * @returns {string} Current theme name
 */
export function getCurrentTheme() {
  return localStorage.getItem('theme-preset') || 'default';
}

/**
 * Save theme to localStorage
 * @param {string} themeName - Theme name to save
 */
export function saveTheme(themeName) {
  localStorage.setItem('theme-preset', themeName);
}

/**
 * Initialize theme on app load
 */
export function initializeTheme() {
  const savedTheme = getCurrentTheme();
  applyTheme(savedTheme);
}

/**
 * Update theme-color meta tag for mobile browsers
 * @param {boolean} isDark - Whether dark mode is active
 */
function updateThemeColorMeta(isDark) {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    // Use your app's actual background colors from index.css
    // Dark: oklch(14.1% 0.005 286) ≈ #242424
    // Light: oklch(100% 0 0) = #ffffff
    themeColorMeta.content = isDark ? '#242424' : '#ffffff';
  }
}

/**
 * Toggle dark mode
 */
export function toggleDarkMode() {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');

  if (isDark) {
    root.classList.remove('dark');
    localStorage.setItem('dark-mode', 'false');
    updateThemeColorMeta(false);
  } else {
    root.classList.add('dark');
    localStorage.setItem('dark-mode', 'true');
    updateThemeColorMeta(true);
  }
}

/**
 * Initialize dark mode on app load
 */
export function initializeDarkMode() {
  const isDark = localStorage.getItem('dark-mode') === 'true';
  const root = document.documentElement;

  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Set initial theme-color meta tag
  updateThemeColorMeta(isDark);
}