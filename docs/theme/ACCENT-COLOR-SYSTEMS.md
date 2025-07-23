# Accent Color Systems Guide

This theme system provides **two distinct accent color systems** for different use cases. Understanding when and how to use each one will help you create the perfect design for your application.

## Overview: Two Accent Systems

### 1. Dynamic Ghost Accent Colors
- **Purpose**: Subtle hover states for ghost buttons and interactive elements
- **Generation**: Automatically calculated from your primary color
- **Variables**: `--accent` and `--accent-foreground`
- **Use case**: Ghost buttons, hover backgrounds, subtle interactions

### 2. Vibrant Accent Color Scale
- **Purpose**: Bold, eye-catching accent colors for important UI elements
- **Generation**: Defined in theme presets with full color scale (50-950)
- **Variables**: `--color-accent-50` through `--color-accent-950`
- **Use case**: CTAs, badges, highlights, important buttons

## System 1: Dynamic Ghost Accent Colors

These colors are automatically generated based on your primary color's hue. They're designed for subtle, elegant hover states.

### How It Works
```javascript
// In theme.js - Automatically generated
const accentLight = `oklch(0.94 0.08 ${primaryHue})`;  // Light mode
const accentDark = `oklch(0.22 0.08 ${primaryHue})`;   // Dark mode
```

### Usage in Components
```jsx
// Ghost button with dynamic accent
<button className="hover:bg-accent hover:text-accent-foreground">
  Ghost Button
</button>

// Custom CSS
.ghost-button:hover {
  background-color: var(--accent);
  color: var(--accent-foreground);
}
```

### Customizing Ghost Accent Colors

To adjust the ghost accent colors, modify the values in `src/utils/theme.js`:

```javascript
// Line ~346: Adjust lightness and chroma
const ghostChroma = Math.max(0.08, Math.min(0.12, cssC * 0.4));

// For lighter ghost buttons in light mode (increase first number)
accentLight = `oklch(0.96 ${ghostChroma.toFixed(3)} ${primaryH})`;

// For darker ghost buttons in dark mode (decrease first number)
accentDark = `oklch(0.18 ${ghostChroma.toFixed(3)} ${primaryH})`;
```

## System 2: Vibrant Accent Color Scale

These are the bold, vibrant colors defined in each theme preset. Perfect for CTAs and important UI elements. 

**UPDATED: True Adaptive Accent Colors** - The accent color scale now completely inverts in dark mode for optimal contrast. Each shade changes to provide better visibility against dark backgrounds.

### How Adaptive Accent Scale Works

In light mode, the scale runs from light (50) to dark (950) as normal.
In dark mode, the scale is **inverted**:

```css
/* Light mode → Dark mode mapping */
--accent-50:  oklch(0.977...) → oklch(0.291...)  /* 50 becomes 950 */
--accent-100: oklch(0.946...) → oklch(0.381...)  /* 100 becomes 900 */
--accent-200: oklch(0.902...) → oklch(0.438...)  /* 200 becomes 800 */
--accent-300: oklch(0.827...) → oklch(0.496...)  /* 300 becomes 700 */
--accent-400: oklch(0.714...) → oklch(0.558...)  /* 400 becomes 600 */
--accent-500: oklch(0.627...) → oklch(0.627...)  /* 500 stays same */
--accent-600: oklch(0.558...) → oklch(0.714...)  /* 600 becomes 400 */
--accent-700: oklch(0.496...) → oklch(0.827...)  /* 700 becomes 300 */
--accent-800: oklch(0.438...) → oklch(0.902...)  /* 800 becomes 200 */
--accent-900: oklch(0.381...) → oklch(0.946...)  /* 900 becomes 100 */
--accent-950: oklch(0.291...) → oklch(0.977...)  /* 950 becomes 50 */
```

### What This Means for Your Design

When you use `bg-accent-100` (very light in light mode), it automatically becomes `bg-accent-900` (very dark) in dark mode. This ensures:

1. **Proper contrast**: Light backgrounds become dark, dark text becomes light
2. **Consistent hierarchy**: The visual weight remains the same
3. **No manual dark: variants needed**: The system handles it automatically

### Usage Examples
```jsx
// Vibrant CTA button
<button className="bg-accent-500 hover:bg-accent-600 text-white">
  Get Started
</button>

// Accent badge
<span className="bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-200">
  NEW
</span>

// Using the 5-shade system
<div className="bg-accent-light hover:bg-accent">
  Vibrant Element
</div>
```

### Theme Preset Accent Colors

Each theme has carefully chosen accent colors:
- **Default (Emerald)**: Amber accents for warmth
- **Blue**: Teal accents for harmony
- **Purple**: Rose accents for elegance
- **Orange**: Violet accents for contrast

## Choosing Which System to Use

### Use Dynamic Ghost Accents When:
- Creating ghost/outline buttons
- Adding subtle hover states
- Building minimal, elegant interfaces
- You want colors that always harmonize with the primary color

### Use Vibrant Accent Scale When:
- Creating call-to-action buttons
- Adding badges or alerts
- Highlighting important information
- Building energetic, bold interfaces

## Common Patterns

### Pattern 1: Both Systems Together
```jsx
// Use vibrant for primary CTA
<button className="bg-accent-500 hover:bg-accent-600">
  Primary Action
</button>

// Use ghost for secondary actions
<button className="hover:bg-accent hover:text-accent-foreground">
  Secondary Action
</button>
```

### Pattern 2: Switching Between Systems

If you only want ONE accent system:

**Option A - Only Ghost Accents:**
```css
/* In @theme inline - Comment out the vibrant scale */
/* --color-accent-lighter: var(--color-accent-200); */
/* --color-accent-light: var(--color-accent-400); */
--color-accent: var(--accent);  /* Use ghost accent instead */
/* --color-accent-dark: var(--color-accent-600); */
/* --color-accent-darker: var(--color-accent-800); */
```

**Option B - Only Vibrant Accents:**
```css
/* In @theme inline - Comment out ghost mapping */
/* --color-accent: var(--accent); */
/* --color-accent-foreground: var(--accent-foreground); */

/* Uncomment vibrant scale */
--color-accent: var(--color-accent-500);
--color-accent-dark: var(--color-accent-600);
/* etc... */
```

## Troubleshooting

### Issue: Accent colors not working in dark mode

**Check these items in order:**

1. **CSS Variable Definition Order**
   - Ensure `theme.js` styles are injected AFTER main CSS
   - Check DevTools for `<style id="dynamic-theme-colors">`

2. **Selector Specificity**
   - Ghost accents use `:root.dark` selector
   - Main CSS uses `.dark` selector
   - Make sure dark mode class is on `<html>` element

3. **Variable Mapping**
   - Verify lines 256-257 in `@theme inline` are uncommented
   - Check that `--accent` and `--accent-foreground` exist in DevTools

### Issue: Want different ghost colors per theme

Modify `theme.js` to read custom chroma values from theme presets:

```javascript
// Add to themePresets.js
ghostChroma: {
  light: 0.06,  // More subtle
  dark: 0.10    // More visible
}

// Use in theme.js
const lightChroma = preset.ghostChroma?.light || 0.08;
const darkChroma = preset.ghostChroma?.dark || 0.08;
```

## Best Practices

1. **Consistency**: Pick one system as your primary and stick to it
2. **Accessibility**: Test contrast ratios, especially for ghost accents
3. **Context**: Use vibrant for attention, ghost for interaction
4. **Performance**: The dynamic system recalculates on theme change

## Quick Reference

```css
/* Ghost Accent Variables */
--accent                  /* Dynamic background color */
--accent-foreground       /* Dynamic text color */

/* Vibrant Accent Scale */
--color-accent-50         /* Lightest */
--color-accent-100
--color-accent-200
--color-accent-300
--color-accent-400
--color-accent-500        /* Base accent */
--color-accent-600
--color-accent-700
--color-accent-800
--color-accent-900
--color-accent-950        /* Darkest */

/* Simplified 5-shade system */
--color-accent-lighter    /* Maps to 200 */
--color-accent-light      /* Maps to 400 */
--color-accent            /* Maps to 500 */
--color-accent-dark       /* Maps to 600 */
--color-accent-darker     /* Maps to 800 */
```

Choose the system that best fits your design vision!