# Theme Customization Guide

A comprehensive guide to customizing the React Theme System Kit for your projects.

## Table of Contents
- [Quick Start](#quick-start)
- [Understanding the Theme System](#understanding-the-theme-system)
- [Customization Methods](#customization-methods)
- [Creating Custom Themes](#creating-custom-themes)
- [Component Customization](#component-customization)
- [Advanced Techniques](#advanced-techniques)
- [Best Practices](#best-practices)

## Quick Start

### 1. Change Theme Colors

```javascript
// src/pages/Dashboard.jsx or any component
import { useSettings } from '@/contexts/settings-hooks';

function Dashboard() {
  const { onChangeColor } = useSettings();
  
  // Change to a preset theme
  onChangeColor('red');    // Available: blue, red, green, purple, orange, pink
}
```

### 2. Toggle Dark Mode

```javascript
const { onToggleMode } = useSettings();

// Toggle between light/dark
onToggleMode();
```

### 3. Quick CSS Variable Override

```css
/* src/index.css or any CSS file */
:root {
  --primary: 220 90% 56%;        /* Change primary color */
  --primary-foreground: 0 0% 100%; /* Text on primary */
  --radius: 0.75rem;              /* Change border radius */
}
```

## Understanding the Theme System

### Architecture Overview

```
┌─────────────────────┐
│   CSS Variables     │ ← Core theme values (HSL format)
├─────────────────────┤
│  Tailwind Config    │ ← Maps CSS vars to Tailwind classes
├─────────────────────┤
│   Theme Presets     │ ← Predefined color schemes
├─────────────────────┤
│  Settings Context   │ ← Runtime theme switching
└─────────────────────┘
```

### CSS Variables Structure

```css
/* Color variables use HSL format without hsl() wrapper */
--primary: 222 47% 11%;         /* hsl(222, 47%, 11%) */
--secondary: 210 40% 96%;       /* hsl(210, 40%, 96%) */

/* This allows opacity modifiers in Tailwind */
bg-primary/50                   /* 50% opacity */
```

### Theme Variables Reference

```css
/* Core Colors */
--background         /* Page background */
--foreground         /* Default text color */
--primary           /* Primary brand color */
--primary-foreground /* Text on primary */
--secondary         /* Secondary brand color */
--secondary-foreground
--accent            /* Accent/highlight color */
--accent-foreground
--muted             /* Muted backgrounds */
--muted-foreground  /* Muted text */

/* UI States */
--destructive       /* Error/danger color */
--destructive-foreground

/* Component Specific */
--card              /* Card backgrounds */
--card-foreground   /* Card text */
--popover          /* Popover backgrounds */
--popover-foreground
--border           /* Border color */
--input            /* Input backgrounds */
--ring             /* Focus ring color */

/* Layout */
--radius           /* Border radius */
--chart-1 to --chart-5 /* Chart colors */
```

## Customization Methods

### Method 1: Using Theme Presets

```javascript
// src/contexts/theme-presets.js
export const customPresets = {
  brand: {
    name: 'brand',
    label: 'Brand Theme',
    cssVars: {
      light: {
        primary: '350 80% 50%',           // Your brand color
        'primary-foreground': '0 0% 100%',
        secondary: '350 60% 90%',
        'secondary-foreground': '350 80% 20%',
        accent: '350 70% 85%',
        'accent-foreground': '350 80% 20%',
      },
      dark: {
        primary: '350 80% 60%',
        'primary-foreground': '0 0% 10%',
        secondary: '350 30% 20%',
        'secondary-foreground': '350 80% 90%',
      }
    }
  }
};

// Add to theme presets
import { themePresets } from '@/contexts/theme-presets';
themePresets.push(customPresets.brand);
```

### Method 2: Global CSS Override

```css
/* src/styles/custom-theme.css */
@layer base {
  :root {
    /* Custom light theme */
    --background: 0 0% 98%;
    --foreground: 240 10% 10%;
    --primary: 262 80% 50%;
    --primary-foreground: 0 0% 100%;
    
    /* Custom spacing */
    --radius: 1rem;
  }
  
  .dark {
    /* Custom dark theme */
    --background: 240 10% 8%;
    --foreground: 0 0% 95%;
    --primary: 262 80% 65%;
    --primary-foreground: 240 10% 10%;
  }
}
```

### Method 3: Component-Level Customization

```javascript
// Custom Button variant
import { cva } from 'class-variance-authority';

const customButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        brand: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
        neon: 'bg-green-400 text-black shadow-[0_0_20px_rgb(74,222,128,0.5)] hover:shadow-[0_0_30px_rgb(74,222,128,0.8)]',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        xl: 'h-14 px-8 text-lg',
      }
    }
  }
);
```

### Method 4: Runtime Theme Switching

```javascript
// Create a theme switcher component
import { useSettings } from '@/contexts/settings-hooks';

function ThemeSwitcher() {
  const { themePreset, onChangeColor } = useSettings();
  
  const themes = [
    { name: 'blue', color: '#3b82f6' },
    { name: 'brand', color: '#a855f7' },
    { name: 'custom', color: '#f97316' },
  ];
  
  return (
    <div className="flex gap-2">
      {themes.map(theme => (
        <button
          key={theme.name}
          onClick={() => onChangeColor(theme.name)}
          className={cn(
            'w-8 h-8 rounded-full',
            themePreset === theme.name && 'ring-2 ring-offset-2'
          )}
          style={{ backgroundColor: theme.color }}
        />
      ))}
    </div>
  );
}
```

## Creating Custom Themes

### Step-by-Step Custom Theme

1. **Define Your Color Palette**

```javascript
// src/themes/cyberpunk.js
export const cyberpunkTheme = {
  name: 'cyberpunk',
  label: 'Cyberpunk',
  cssVars: {
    light: {
      // Neon colors on light background
      background: '300 20% 99%',
      foreground: '300 5% 10%',
      primary: '180 100% 45%',        // Cyan
      'primary-foreground': '300 5% 10%',
      secondary: '330 100% 50%',      // Magenta
      'secondary-foreground': '0 0% 100%',
      accent: '60 100% 50%',          // Yellow
      'accent-foreground': '300 5% 10%',
      destructive: '0 100% 50%',
      'destructive-foreground': '0 0% 100%',
      border: '300 20% 82%',
      input: '300 20% 90%',
      ring: '180 100% 45%',
      radius: '0.125rem',             // Sharp corners
    },
    dark: {
      // Neon colors on dark background
      background: '240 10% 5%',
      foreground: '0 0% 95%',
      primary: '180 100% 50%',        // Bright cyan
      'primary-foreground': '240 10% 5%',
      secondary: '330 100% 60%',      // Bright magenta
      'secondary-foreground': '240 10% 5%',
      accent: '60 100% 55%',          // Bright yellow
      'accent-foreground': '240 10% 5%',
      destructive: '0 100% 60%',
      'destructive-foreground': '0 0% 100%',
      border: '240 10% 20%',
      input: '240 10% 15%',
      ring: '180 100% 50%',
    }
  }
};
```

2. **Register the Theme**

```javascript
// src/contexts/theme-presets.js
import { cyberpunkTheme } from '@/themes/cyberpunk';

export const themePresets = [
  // ... existing presets
  cyberpunkTheme
];
```

3. **Add Custom Styles**

```css
/* src/themes/cyberpunk.css */
[data-theme="cyberpunk"] {
  /* Custom fonts */
  --font-heading: 'Orbitron', sans-serif;
  --font-body: 'Exo 2', sans-serif;
  
  /* Glow effects */
  --glow-cyan: 0 0 20px hsl(180 100% 50% / 0.5);
  --glow-magenta: 0 0 20px hsl(330 100% 60% / 0.5);
  
  /* Animations */
  --animation-pulse: pulse-neon 2s infinite;
}

/* Neon button style */
[data-theme="cyberpunk"] .btn-primary {
  box-shadow: var(--glow-cyan);
  text-shadow: 0 0 10px currentColor;
  transition: all 0.2s;
}

[data-theme="cyberpunk"] .btn-primary:hover {
  box-shadow: 0 0 30px hsl(180 100% 50% / 0.8);
}

@keyframes pulse-neon {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
```

### Theme with Custom Properties

```javascript
// Advanced theme with extra properties
export const advancedTheme = {
  name: 'advanced',
  label: 'Advanced Theme',
  cssVars: {
    light: {
      // Standard colors
      primary: '250 85% 55%',
      // ... other colors
      
      // Custom properties
      'gradient-start': '250 85% 55%',
      'gradient-end': '280 85% 65%',
      'shadow-color': '250 85% 55%',
      'shadow-opacity': '0.2',
      'transition-speed': '200ms',
      'content-width': '1200px',
    }
  },
  // Custom configuration
  config: {
    animations: true,
    gradients: true,
    shadows: 'soft',
    spacing: 'comfortable'
  }
};
```

## Component Customization

### Customizing Individual Components

```javascript
// Custom Card component
import { Card as BaseCard } from '@/components/ui/Card';
import { cn } from '@/utils/cn';

export function Card({ variant = 'default', ...props }) {
  return (
    <BaseCard
      className={cn(
        // Base styles
        'relative overflow-hidden',
        // Variant styles
        variant === 'gradient' && 'bg-gradient-to-br from-primary/10 to-secondary/10',
        variant === 'glass' && 'bg-background/60 backdrop-blur-md border-white/20',
        variant === 'neon' && 'shadow-[0_0_15px_rgba(var(--primary),0.5)]',
        props.className
      )}
      {...props}
    />
  );
}
```

### Creating Theme-Aware Components

```javascript
// Component that adapts to theme
import { useSettings } from '@/contexts/settings-hooks';

export function ThemedHero({ children }) {
  const { themePreset, themeMode } = useSettings();
  
  const getGradient = () => {
    const gradients = {
      blue: 'from-blue-600 to-cyan-500',
      purple: 'from-purple-600 to-pink-500',
      green: 'from-green-600 to-teal-500',
    };
    return gradients[themePreset] || gradients.blue;
  };
  
  return (
    <div className={cn(
      'relative min-h-[600px] flex items-center',
      themeMode === 'dark' ? 'bg-gradient-to-br' : 'bg-gradient-to-tr',
      getGradient()
    )}>
      {children}
    </div>
  );
}
```

### Extending Component Variants

```javascript
// Extend existing button with new variants
import { Button } from '@/components/ui/Button';
import { buttonVariants } from '@/components/ui/button-variants';

// Create extended variants
const extendedButtonVariants = cva(
  buttonVariants.base(), // Get base styles
  {
    variants: {
      ...buttonVariants.variants(), // Keep existing variants
      variant: {
        ...buttonVariants.variants().variant,
        // Add new variants
        gradient: 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90',
        glow: 'shadow-[0_0_20px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_rgba(var(--primary),0.8)]',
      }
    }
  }
);

export function ExtendedButton({ variant, ...props }) {
  return <Button className={extendedButtonVariants({ variant })} {...props} />;
}
```

## Advanced Techniques

### Dynamic Theme Generation

```javascript
// Generate theme from a base color
function generateThemeFromColor(baseColor) {
  const { h, s, l } = hexToHsl(baseColor);
  
  return {
    primary: `${h} ${s}% ${l}%`,
    'primary-foreground': l > 50 ? '0 0% 0%' : '0 0% 100%',
    secondary: `${h} ${s * 0.3}% ${l * 0.9}%`,
    accent: `${(h + 30) % 360} ${s * 0.8}% ${l * 1.1}%`,
    // ... generate other colors
  };
}

// Usage
const brandTheme = generateThemeFromColor('#7c3aed');
```

### Theme Inheritance

```javascript
// Base theme configuration
const baseTheme = {
  radius: '0.5rem',
  animations: true,
  transitions: {
    default: '150ms ease',
    slow: '300ms ease',
    fast: '100ms ease'
  }
};

// Extend base theme
const customTheme = {
  ...baseTheme,
  name: 'custom',
  cssVars: {
    light: {
      ...generateThemeFromColor('#7c3aed'),
      radius: '0.75rem', // Override base
    }
  }
};
```

### Responsive Themes

```css
/* Different themes for different screen sizes */
@media (max-width: 768px) {
  :root {
    --radius: 0.375rem; /* Smaller radius on mobile */
    --content-padding: 1rem; /* Less padding */
  }
}

@media (min-width: 1536px) {
  :root {
    --radius: 1rem; /* Larger radius on desktop */
    --content-padding: 3rem; /* More padding */
  }
}
```

### Theme Transitions

```javascript
// Smooth theme transitions
export function ThemeProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const changeTheme = (newTheme) => {
    setIsTransitioning(true);
    
    // Add transition class
    document.documentElement.style.transition = 'background-color 300ms, color 300ms';
    
    // Apply theme
    applyTheme(newTheme);
    
    // Remove transition after completion
    setTimeout(() => {
      document.documentElement.style.transition = '';
      setIsTransitioning(false);
    }, 300);
  };
  
  return (
    <div className={cn(isTransitioning && 'pointer-events-none')}>
      {children}
    </div>
  );
}
```

## Best Practices

### 1. Use CSS Variables for Dynamic Values

```css
/* Good: Using CSS variables */
.custom-component {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* Avoid: Hard-coded colors */
.custom-component {
  background: #7c3aed;
  color: white;
}
```

### 2. Maintain Color Contrast

```javascript
// Ensure readable text
const ensureContrast = (bg, fg) => {
  const ratio = getContrastRatio(bg, fg);
  if (ratio < 4.5) {
    // Adjust foreground color
    return isLight(bg) ? darken(fg, 0.2) : lighten(fg, 0.2);
  }
  return fg;
};
```

### 3. Test Theme Combinations

```javascript
// Theme testing utility
export function ThemeTestGrid() {
  const themes = ['blue', 'red', 'green', 'purple'];
  const modes = ['light', 'dark'];
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {themes.map(theme => 
        modes.map(mode => (
          <ThemePreview 
            key={`${theme}-${mode}`}
            theme={theme} 
            mode={mode} 
          />
        ))
      )}
    </div>
  );
}
```

### 4. Document Your Themes

```javascript
/**
 * Corporate Theme
 * 
 * A professional theme designed for business applications
 * - Conservative color palette
 * - High contrast for accessibility
 * - Reduced animations for focus
 * 
 * @colors
 * - Primary: Navy blue (#1e3a8a)
 * - Secondary: Slate gray (#64748b)
 * - Accent: Teal (#14b8a6)
 */
export const corporateTheme = {
  // ... theme definition
};
```

### 5. Performance Optimization

```javascript
// Lazy load theme CSS
const loadThemeStyles = async (themeName) => {
  const themeModule = await import(`./themes/${themeName}.css`);
  return themeModule.default;
};

// Preload critical themes
const preloadThemes = ['default', 'dark'];
preloadThemes.forEach(theme => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = `/themes/${theme}.css`;
  document.head.appendChild(link);
});
```

## Common Customization Scenarios

### E-commerce Theme

```javascript
export const ecommerceTheme = {
  cssVars: {
    light: {
      primary: '15 100% 50%',        // Orange for CTAs
      secondary: '200 100% 45%',     // Trust blue
      accent: '120 60% 45%',         // Success green
      destructive: '0 100% 45%',     // Sale red
      'badge-sale': '0 100% 45%',    // Custom sale badge
      'badge-new': '120 60% 45%',    // New product badge
    }
  }
};
```

### Dark Mode Only App

```javascript
// Force dark mode
export function DarkOnlyProvider({ children }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme-mode', 'dark');
  }, []);
  
  return children;
}
```

### Multi-brand Support

```javascript
const brandThemes = {
  main: { primary: '220 90% 56%' },
  sub1: { primary: '150 70% 45%' },
  sub2: { primary: '30 90% 55%' },
};

function BrandProvider({ brand, children }) {
  useEffect(() => {
    const theme = brandThemes[brand] || brandThemes.main;
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [brand]);
  
  return children;
}
```

## Troubleshooting

### Theme Not Applying

```javascript
// Check theme initialization
useEffect(() => {
  console.log('Current theme:', document.documentElement.getAttribute('data-theme'));
  console.log('CSS variables:', getComputedStyle(document.documentElement).getPropertyValue('--primary'));
}, []);
```

### Color Format Issues

```javascript
// Convert color formats
const convertToHSL = (color) => {
  if (color.startsWith('#')) {
    return hexToHsl(color);
  }
  if (color.startsWith('rgb')) {
    return rgbToHsl(color);
  }
  return color;
};
```

### Flash of Unstyled Content

```html
<!-- Prevent FOUC in index.html -->
<script>
  (function() {
    const theme = localStorage.getItem('theme-preset') || 'blue';
    const mode = localStorage.getItem('theme-mode') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    if (mode === 'dark') document.documentElement.classList.add('dark');
  })();
</script>
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [HSL Color Picker](https://hslpicker.com/)

---

For more examples and live demos, check out the `/examples` directory in the project.