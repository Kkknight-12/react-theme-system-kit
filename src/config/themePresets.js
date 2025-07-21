/**
 * Theme Presets Configuration
 * Each preset contains a complete color scheme
 */

export const themePresets = {
  // Default Emerald Theme - Using Triadic Color Scheme
  default: {
    name: 'default',
    label: 'Emerald',
    primary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
      DEFAULT: '#10b981',
    },
    // Secondary: Purple (Triadic - 120° from green)
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
      DEFAULT: '#a855f7',
    },
    // Accent: Amber (High contrast)
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
      DEFAULT: '#f59e0b',
    },
  },

  // Blue Theme - Using Complementary Color Scheme
  blue: {
    name: 'blue',
    label: 'Blue',
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
      DEFAULT: '#3b82f6',
    },
    // Secondary: Orange (Complementary to blue)
    secondary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
      DEFAULT: '#f97316',
    },
    // Accent: Teal (Analogous)
    accent: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
      DEFAULT: '#14b8a6',
    },
  },

  // Purple Theme - Using Triadic Color Scheme
  purple: {
    name: 'purple',
    label: 'Purple',
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
      DEFAULT: '#a855f7',
    },
    // Secondary: Green (Triadic)
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
      DEFAULT: '#22c55e',
    },
    // Accent: Rose (Analogous)
    accent: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519',
      DEFAULT: '#f43f5e',
    },
  },

  // Orange Theme - Using Complementary Color Scheme
  orange: {
    name: 'orange',
    label: 'Orange',
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
      DEFAULT: '#f97316',
    },
    // Secondary: Blue (Complementary)
    secondary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
      DEFAULT: '#3b82f6',
    },
    // Accent: Violet (Split-complementary)
    accent: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
      DEFAULT: '#8b5cf6',
    },
  },

  // Red Theme - Using Split-Complementary Color Scheme
  red: {
    name: 'red',
    label: 'Rose',
    primary: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519',
      DEFAULT: '#f43f5e',
    },
    // Secondary: Teal (Split-complementary)
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
      DEFAULT: '#14b8a6',
    },
    // Accent: Indigo (Triadic)
    accent: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
      DEFAULT: '#6366f1',
    },
  },

  // Teal Theme - Using Analogous Color Scheme
  teal: {
    name: 'teal',
    label: 'Teal',
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
      DEFAULT: '#14b8a6',
    },
    // Secondary: Blue (Analogous)
    secondary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
      DEFAULT: '#0ea5e9',
    },
    // Accent: Coral (Complementary)
    accent: {
      50: '#fff5f5',
      100: '#fed7d7',
      200: '#feb2b2',
      300: '#fc8181',
      400: '#f56565',
      500: '#e53e3e',
      600: '#c53030',
      700: '#9b2c2c',
      800: '#822727',
      900: '#63171b',
      950: '#441114',
      DEFAULT: '#e53e3e',
    },
  },

  // Indigo Theme - Using Complementary Color Scheme
  indigo: {
    name: 'indigo',
    label: 'Indigo',
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
      DEFAULT: '#6366f1',
    },
    // Secondary: Yellow (Complementary)
    secondary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
      DEFAULT: '#eab308',
    },
    // Accent: Pink (Analogous)
    accent: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
      DEFAULT: '#ec4899',
    },
  },

  // Pink Theme - Using Triadic Color Scheme
  pink: {
    name: 'pink',
    label: 'Pink',
    primary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
      DEFAULT: '#ec4899',
    },
    // Secondary: Cyan (Triadic)
    secondary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
      DEFAULT: '#06b6d4',
    },
    // Accent: Lime (Triadic)
    accent: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212',
      900: '#365314',
      950: '#1a2e05',
      DEFAULT: '#84cc16',
    },
  },
};

// Semantic colors - Now theme-aware
export const semanticColors = {
  // Default semantic colors (can be overridden per theme)
  default: {
    success: {
      light: '#10b981',
      DEFAULT: '#10b981',
      dark: '#059669',
    },
    warning: {
      light: '#f59e0b',
      DEFAULT: '#f59e0b',
      dark: '#d97706',
    },
    error: {
      light: '#ef4444',
      DEFAULT: '#ef4444',
      dark: '#dc2626',
    },
    info: {
      light: '#3b82f6',
      DEFAULT: '#3b82f6',
      dark: '#2563eb',
    },
  },
  // Theme-specific semantic colors can be added here
  blue: {
    success: {
      light: '#14b8a6',
      DEFAULT: '#14b8a6',
      dark: '#0d9488',
    },
    warning: {
      light: '#f97316',
      DEFAULT: '#f97316',
      dark: '#ea580c',
    },
    error: {
      light: '#e11d48',
      DEFAULT: '#e11d48',
      dark: '#be123c',
    },
    info: {
      light: '#3b82f6',
      DEFAULT: '#3b82f6',
      dark: '#2563eb',
    },
  },
};

// Get theme preset by name
export function getThemePreset(name) {
  return themePresets[name] || themePresets.default;
}

// Get all available theme names
export function getThemeNames() {
  return Object.keys(themePresets);
}

// Get all theme options for selector
export function getThemeOptions() {
  return Object.values(themePresets).map(preset => ({
    value: preset.name,
    label: preset.label,
    color: preset.primary.DEFAULT,
  }));
}