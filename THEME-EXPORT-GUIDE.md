# Theme Export Guide

Export and share your custom themes in multiple formats for easy reuse across projects.

## Features

- 📥 **Export Formats**: JSON, CSS, Tailwind Config, JavaScript Module
- 📤 **Import Support**: Import previously exported themes
- 👁️ **Live Preview**: See theme colors before exporting
- 📋 **Copy to Clipboard**: Quick copy for sharing
- 🎨 **Format Flexibility**: Use exported themes in any project type

## Quick Start

1. Navigate to the Export page: `/export`
2. Customize your theme using the controls
3. Choose export format
4. Download or copy your theme

## Export Formats

### JSON Format (Recommended)

Best for sharing complete theme configurations between React Theme System Kit projects.

```json
{
  "name": "my-custom-theme",
  "label": "My Custom Theme",
  "cssVars": {
    "light": {
      "primary": "222 47% 11%",
      "secondary": "210 40% 96%",
      "background": "0 0% 100%",
      // ... all theme variables
    },
    "dark": {
      "primary": "210 40% 98%",
      "secondary": "217 19% 27%",
      "background": "222 47% 11%",
      // ... all theme variables
    }
  }
}
```

**Usage:**
- Import via the Theme Export page
- Add to `theme-presets.js` for permanent inclusion

### CSS Format

Pure CSS custom properties for any web project.

```css
/* my-custom-theme Theme - Exported from React Theme System Kit */

[data-theme="my-custom-theme"] {
  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222 47% 11%;
  /* ... all variables */
}

[data-theme="my-custom-theme"].dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222 47% 11%;
  /* ... dark mode variables */
}
```

**Usage:**
1. Include CSS file in your project
2. Add `data-theme="my-custom-theme"` to root element
3. Toggle `.dark` class for dark mode

### Tailwind Config

For projects using Tailwind CSS.

```javascript
// Tailwind CSS Theme Configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(222 47% 11%)',
        'primary-fg': 'hsl(210 40% 98%)',
        'secondary': 'hsl(210 40% 96%)',
        'secondary-fg': 'hsl(222 47% 11%)',
        // ... all colors
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      }
    }
  }
};
```

**Usage:**
1. Merge with your `tailwind.config.js`
2. Use color classes: `bg-primary`, `text-secondary-fg`

### JavaScript Module

For programmatic theme integration.

```javascript
// My Custom Theme - React Theme System Kit

export const myCustomTheme = {
  "name": "my-custom-theme",
  "label": "My Custom Theme",
  "cssVars": {
    // ... theme configuration
  }
};

// Usage:
// 1. Import this theme in your theme-presets.js
// 2. Add it to the themePresets array
```

## Importing Themes

### Via UI

1. Go to Theme Export page
2. Click "Import Theme" section
3. Select your `.json` theme file
4. Theme is applied immediately

### Programmatically

```javascript
import { importThemeFromJSON } from '@/utils/theme-export';
import customTheme from './my-theme.json';

// Apply theme
importThemeFromJSON(customTheme);
```

### Adding to Presets

```javascript
// src/contexts/theme-presets.js
import { myCustomTheme } from './themes/my-custom-theme';

export const themePresets = [
  // ... existing presets
  myCustomTheme
];
```

## API Reference

### Export Functions

```javascript
import { 
  exportTheme,
  exportThemeAsJSON,
  exportThemeAsCSS,
  exportThemeAsTailwind,
  exportThemeAsModule
} from '@/utils/theme-export';

// Export in specific format (downloads file)
exportTheme('json', 'my-theme-name');

// Get theme data without downloading
const themeData = exportThemeAsJSON('my-theme', 'My Theme Label');
const cssContent = exportThemeAsCSS('my-theme');
const tailwindConfig = exportThemeAsTailwind();
const moduleCode = exportThemeAsModule('myTheme');
```

### Import Functions

```javascript
import { 
  importThemeFromJSON,
  importThemeFromFile 
} from '@/utils/theme-export';

// Import from object
const theme = {
  name: 'custom',
  cssVars: { /* ... */ }
};
importThemeFromJSON(theme);

// Import from file (async)
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];
const imported = await importThemeFromFile(file);
```

### Utility Functions

```javascript
import { 
  getCurrentThemeConfig,
  generateThemePreview 
} from '@/utils/theme-export';

// Get current theme state
const config = getCurrentThemeConfig();
// Returns: { mode: 'light'|'dark', cssVars: {...}, radius: '0.5rem' }

// Generate HTML preview
const previewHTML = generateThemePreview(themeData);
```

## Integration Examples

### Next.js Project

```javascript
// app/layout.js
import './themes/custom-theme.css';

export default function RootLayout({ children }) {
  return (
    <html data-theme="custom-theme">
      <body>{children}</body>
    </html>
  );
}
```

### Vue.js Project

```vue
<!-- App.vue -->
<template>
  <div id="app" :data-theme="currentTheme">
    <!-- Your app -->
  </div>
</template>

<style>
@import './themes/custom-theme.css';
</style>
```

### Plain HTML

```html
<!DOCTYPE html>
<html data-theme="my-custom-theme">
<head>
  <link rel="stylesheet" href="themes/custom-theme.css">
</head>
<body>
  <div style="background: hsl(var(--background)); color: hsl(var(--foreground));">
    Themed content
  </div>
</body>
</html>
```

## Best Practices

1. **Name Themes Descriptively**
   - Use clear, meaningful names
   - Include version or date if needed
   - Example: `brand-theme-2024`, `dark-neon-v2`

2. **Test Before Exporting**
   - Preview all components
   - Check both light and dark modes
   - Verify color contrast

3. **Document Custom Themes**
   ```javascript
   export const customTheme = {
     name: 'ocean-breeze',
     label: 'Ocean Breeze',
     description: 'A calming blue-green theme inspired by the sea',
     author: 'Your Name',
     version: '1.0.0',
     cssVars: { /* ... */ }
   };
   ```

4. **Version Control**
   - Store theme files in your repository
   - Track changes over time
   - Share with team members

## Troubleshooting

### Theme Not Applying After Import

1. Check browser console for errors
2. Verify JSON format is valid
3. Ensure theme name doesn't conflict
4. Clear localStorage and retry

### Colors Look Different

- HSL values must be space-separated without `hsl()`
- Correct: `"primary": "222 47% 11%"`
- Wrong: `"primary": "hsl(222, 47%, 11%)"`

### Export Button Not Working

- Check browser download permissions
- Try different export format
- Use copy to clipboard instead

## Advanced Usage

### Batch Export

```javascript
// Export all presets
import { themePresets } from '@/contexts/theme-presets';
import { exportTheme } from '@/utils/theme-export';

themePresets.forEach(preset => {
  exportTheme('json', preset.name);
});
```

### Theme Validation

```javascript
function validateTheme(theme) {
  const required = ['name', 'cssVars'];
  const modes = ['light', 'dark'];
  
  // Check required fields
  for (const field of required) {
    if (!theme[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  // Check theme modes
  for (const mode of modes) {
    if (!theme.cssVars[mode]) {
      console.warn(`Missing ${mode} mode configuration`);
    }
  }
  
  return true;
}
```

### Custom Export Format

```javascript
function exportAsScss(theme) {
  let scss = `// ${theme.label}\n\n`;
  
  // Create SCSS variables
  Object.entries(theme.cssVars.light).forEach(([key, value]) => {
    scss += `$${key}: hsl(${value});\n`;
  });
  
  // Create CSS variables
  scss += '\n:root {\n';
  Object.entries(theme.cssVars.light).forEach(([key, value]) => {
    scss += `  --${key}: #{$${key}};\n`;
  });
  scss += '}\n';
  
  return scss;
}
```

## Resources

- [Example Themes](./examples/themes/)
- [Theme Customization Guide](./THEME-CUSTOMIZATION-GUIDE.md)
- [Color Theory for Themes](https://www.smashingmagazine.com/2021/07/color-theory-web-design/)
- [HSL Color Picker](https://hslpicker.com/)