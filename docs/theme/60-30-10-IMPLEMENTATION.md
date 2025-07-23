# 60-30-10 Rule Implementation Guide

## Understanding Our Color System

### Current Mapping (Needs Adjustment)
- **Primary**: Main brand color (currently used for primary buttons)
- **Secondary**: Currently a vibrant complementary color (INCORRECT for 60-30-10)
- **Accent**: Currently used as accent (CORRECT)

### Correct 60-30-10 Implementation

#### 1. **60% - Dominant (Neutrals)**
- `--color-background`: Main page background
- `--color-surface`: Card backgrounds
- Light mode: whites, light grays
- Dark mode: dark grays, blacks

#### 2. **30% - Secondary (Supporting Elements)**
- `--color-muted`: Section backgrounds, sidebars
- `--color-surface-hover`: Hover states
- Should be subtle variations of the dominant color
- NOT a vibrant complementary color

#### 3. **10% - Accent (Call-to-Actions)**
- `--color-accent`: Primary CTAs, important buttons
- `--color-primary`: Can also serve as accent for brand emphasis
- Should be the most vibrant colors

## Implementation Strategy

### Option 1: Redefine Secondary (Recommended)
```css
/* Secondary becomes a muted supporting color */
--color-secondary: var(--color-muted);
--color-secondary-foreground: var(--color-muted-foreground);
```

### Option 2: Create New Variables
```css
/* Add specific 60-30-10 variables */
--color-dominant: var(--color-background);
--color-supporting: var(--color-muted);
--color-emphasis: var(--color-accent);
```

## Component Usage Examples

### Correct Implementation
```jsx
// 60% - Page background
<body className="bg-background">
  
  // 30% - Card/Section (supporting element)
  <Card className="bg-muted">
    
    // 10% - CTA Button (accent)
    <Button className="bg-accent">
      Take Action
    </Button>
    
  </Card>
</body>
```

### Button Hierarchy
1. **Primary Action** (10%): Use accent color
2. **Secondary Action**: Use outline or ghost variant
3. **Tertiary Action**: Use link variant

## Real-World Example

```jsx
// Dashboard Layout
<div className="bg-background min-h-screen">  // 60%
  
  <aside className="bg-muted">  // 30%
    <nav>...</nav>
  </aside>
  
  <main className="bg-background">  // 60%
    
    <Card className="bg-surface">  // Part of 60%
      <Button className="bg-accent">  // 10%
        Create New
      </Button>
    </Card>
    
  </main>
</div>
```

## Color Psychology Applied

- **60% Neutral**: Creates calm, professional foundation
- **30% Muted**: Adds depth without distraction
- **10% Vibrant**: Draws attention to key actions

## Testing the Rule

1. Screenshot your UI
2. Convert to grayscale
3. Check if visual hierarchy still works
4. Measure color distribution:
   - Neutrals should dominate
   - Supporting colors should be subtle
   - Accent should pop but not overwhelm