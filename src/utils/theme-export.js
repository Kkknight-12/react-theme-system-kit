/**
 * Theme export utilities for saving and sharing custom themes
 */

import { themePresets } from '@/config/themePresets.js';

/**
 * Get current theme configuration from CSS variables
 */
export function getCurrentThemeConfig() {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  const isDark = root.classList.contains('dark');
  
  // Core color variables
  const colorVars = [
    'background', 'foreground',
    'card', 'card-foreground',
    'popover', 'popover-foreground',
    'primary', 'primary-foreground',
    'secondary', 'secondary-foreground',
    'muted', 'muted-foreground',
    'accent', 'accent-foreground',
    'destructive', 'destructive-foreground',
    'border', 'input', 'ring'
  ];
  
  // Chart colors
  const chartVars = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'];
  
  // Get all CSS variable values
  const cssVars = {};
  [...colorVars, ...chartVars].forEach(varName => {
    const value = computedStyle.getPropertyValue(`--${varName}`).trim();
    if (value) {
      cssVars[varName] = value;
    }
  });
  
  // Get other theme properties
  const radius = computedStyle.getPropertyValue('--radius').trim();
  
  return {
    mode: isDark ? 'dark' : 'light',
    cssVars,
    radius
  };
}

/**
 * Export theme as JSON
 */
export function exportThemeAsJSON(name = 'custom-theme', label = 'Custom Theme') {
  const config = getCurrentThemeConfig();
  const currentPreset = localStorage.getItem('theme-preset') || 'blue';
  
  // Get current theme from presets
  const currentTheme = themePresets[currentPreset] || themePresets.default;
  
  // Create theme object in the same format as themePresets
  const theme = {
    name: name.toLowerCase().replace(/\s+/g, '-'),
    label,
    // Include the color scales from current theme
    primary: currentTheme.primary,
    secondary: currentTheme.secondary,
    accent: currentTheme.accent,
    // Include the current CSS variables (for UI colors like background, foreground, etc.)
    cssVars: {
      light: {},
      dark: {}
    }
  };
  
  // Populate CSS vars based on current mode
  const mode = config.mode;
  theme.cssVars[mode] = config.cssVars;
  
  // For the opposite mode, we need to estimate or use defaults
  const oppositeMode = mode === 'light' ? 'dark' : 'light';
  // Just copy the same vars for now (user can customize later)
  theme.cssVars[oppositeMode] = { ...config.cssVars };
  
  // Add radius if different from default
  if (config.radius && config.radius !== '0.5rem') {
    theme.cssVars.light.radius = config.radius;
    theme.cssVars.dark.radius = config.radius;
  }
  
  return theme;
}

/**
 * Export theme as CSS file content
 */
export function exportThemeAsCSS(themeName = 'custom') {
  const config = getCurrentThemeConfig();
  const selector = `[data-theme="${themeName}"]`;
  
  let css = `/* ${themeName} Theme - Exported from React Theme System Kit */\n\n`;
  
  // Light mode variables
  css += `${selector} {\n`;
  Object.entries(config.cssVars).forEach(([key, value]) => {
    css += `  --${key}: ${value};\n`;
  });
  if (config.radius) {
    css += `  --radius: ${config.radius};\n`;
  }
  css += `}\n\n`;
  
  // Dark mode variables (if in dark mode)
  if (config.mode === 'dark') {
    css += `${selector}.dark {\n`;
    Object.entries(config.cssVars).forEach(([key, value]) => {
      css += `  --${key}: ${value};\n`;
    });
    css += `}\n`;
  }
  
  return css;
}

/**
 * Export theme as Tailwind config
 */
export function exportThemeAsTailwind() {
  const config = getCurrentThemeConfig();
  
  let tailwindConfig = `// Tailwind CSS Theme Configuration\n`;
  tailwindConfig += `// Add this to your tailwind.config.js\n\n`;
  tailwindConfig += `module.exports = {\n`;
  tailwindConfig += `  theme: {\n`;
  tailwindConfig += `    extend: {\n`;
  tailwindConfig += `      colors: {\n`;
  
  // Convert CSS variables to Tailwind color config
  Object.entries(config.cssVars).forEach(([key, value]) => {
    if (!key.startsWith('chart-')) {
      const colorName = key.replace('-foreground', '-fg');
      tailwindConfig += `        '${colorName}': 'hsl(${value})',\n`;
    }
  });
  
  tailwindConfig += `      },\n`;
  tailwindConfig += `      borderRadius: {\n`;
  tailwindConfig += `        DEFAULT: '${config.radius || '0.5rem'}',\n`;
  tailwindConfig += `      }\n`;
  tailwindConfig += `    }\n`;
  tailwindConfig += `  }\n`;
  tailwindConfig += `};\n`;
  
  return tailwindConfig;
}

/**
 * Export theme as JavaScript module
 */
export function exportThemeAsModule(name = 'customTheme') {
  const theme = exportThemeAsJSON(name);
  
  let moduleContent = `// ${theme.label} - React Theme System Kit\n\n`;
  moduleContent += `export const ${name} = ${JSON.stringify(theme, null, 2)};\n\n`;
  moduleContent += `// Usage:\n`;
  moduleContent += `// 1. Import this theme in your theme-presets.js\n`;
  moduleContent += `// 2. Add it to the themePresets array\n`;
  moduleContent += `// 3. The theme will be available in the theme switcher\n`;
  
  return moduleContent;
}

/**
 * Download file utility
 */
export function downloadFile(content, filename, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export current theme in specified format
 */
export function exportTheme(format = 'json', themeName = 'custom-theme') {
  const sanitizedName = themeName.toLowerCase().replace(/\s+/g, '-');
  
  switch (format) {
    case 'json': {
      const theme = exportThemeAsJSON(sanitizedName, themeName);
      downloadFile(
        JSON.stringify(theme, null, 2),
        `${sanitizedName}.json`,
        'application/json'
      );
      break;
    }
    
    case 'css': {
      const css = exportThemeAsCSS(sanitizedName);
      downloadFile(css, `${sanitizedName}.css`, 'text/css');
      break;
    }
    
    case 'tailwind': {
      const config = exportThemeAsTailwind();
      downloadFile(config, `${sanitizedName}-tailwind.js`, 'text/javascript');
      break;
    }
    
    case 'module': {
      const module = exportThemeAsModule(sanitizedName);
      downloadFile(module, `${sanitizedName}-theme.js`, 'text/javascript');
      break;
    }
    
    default:
      console.error(`Unknown export format: ${format}`);
  }
}

/**
 * Import theme from JSON
 */
export async function importThemeFromJSON(themeData) {
  if (!themeData.name) {
    throw new Error('Invalid theme data: missing name');
  }
  
  // Check if this is a full theme with color scales
  if (themeData.primary && themeData.secondary && themeData.accent) {
    // This is a full theme preset - add it to themePresets
    themePresets[themeData.name] = themeData;
    
    // Apply the theme using the theme utility
    const { applyTheme } = await import('./theme');
    applyTheme(themeData.name);
    
    // Save theme name
    localStorage.setItem('theme-preset', themeData.name);
  } 
  // Check if it has cssVars for backward compatibility
  else if (themeData.cssVars) {
    // Apply theme based on current mode
    const isDark = document.documentElement.classList.contains('dark');
    const mode = isDark ? 'dark' : 'light';
    const cssVars = themeData.cssVars[mode] || themeData.cssVars.light;
    
    if (!cssVars) {
      throw new Error(`No ${mode} mode configuration in theme`);
    }
    
    // Apply CSS variables
    const root = document.documentElement;
    Object.entries(cssVars).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--${key}`, value);
      }
    });
    
    // Save theme name
    localStorage.setItem('theme-preset', themeData.name);
  } else {
    throw new Error('Invalid theme data: missing color scales or cssVars');
  }
  
  return themeData;
}

/**
 * Import theme from file
 */
export async function importThemeFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        const content = e.target.result;
        if (typeof content !== 'string') {
          throw new Error('File content is not a string');
        }
        const theme = JSON.parse(content);
        const imported = await importThemeFromJSON(theme);
        resolve(imported);
      } catch (error) {
        reject(new Error(`Failed to import theme: ${error.message}`));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsText(file);
  });
}

/**
 * Generate theme preview
 */
export function generateThemePreview(theme) {
  const colors = theme.cssVars?.light || theme.cssVars?.dark || {};
  
  // Return preview HTML directly
  return `
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 8px;
      padding: 16px;
      background: hsl(${colors.background || '0 0% 100%'});
      border-radius: 8px;
    ">
      ${Object.entries(colors)
        .filter(([key]) => !key.includes('foreground') && !key.startsWith('chart-'))
        .map(([key, value]) => `
          <div style="text-align: center;">
            <div style="
              width: 60px;
              height: 60px;
              margin: 0 auto 4px;
              background: hsl(${value});
              border-radius: 8px;
              border: 1px solid hsl(${colors.border || '0 0% 90%'});
            "></div>
            <div style="
              font-size: 12px;
              color: hsl(${colors.foreground || '0 0% 0%'});
            ">${key}</div>
          </div>
        `).join('')}
    </div>
  `;
}