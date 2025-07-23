# TypeScript Support

React Theme System Kit includes comprehensive TypeScript type definitions for better IntelliSense and type checking, even in JavaScript projects.

## Features

- 🎯 **Full IntelliSense support** - Autocomplete for all components and hooks
- 📝 **JSDoc compatibility** - Use types in JavaScript files
- 🚀 **Zero configuration** - Works out of the box with VS Code
- 📦 **Lightweight** - Just .d.ts files, no build step required

## Usage in JavaScript

### Using Typed Hooks

```javascript
import { useSettings } from '@/contexts/settings-hooks';

function MyComponent() {
  // Full autocomplete for all settings properties
  const { themeMode, onToggleMode, onChangeColor } = useSettings();
  
  return (
    <button onClick={onToggleMode}>
      Current theme: {themeMode}
    </button>
  );
}
```

### Using Component Types with JSDoc

```javascript
/**
 * @param {import('@/components/ui/types').ButtonProps} props
 */
function CustomButton(props) {
  return <Button {...props} />;
}
```

### Typing Data Structures

```javascript
/**
 * @type {import('@/components/layouts/types').Product}
 */
const product = {
  id: 1,
  name: 'Premium Headphones',
  price: 299.99,
  rating: 4.5,
  reviews: 124,
  image: 'https://example.com/image.jpg',
  inStock: true
};
```

## Available Types

### Theme Types

- `ThemeSettings` - Complete theme configuration
- `ThemePreset` - Individual theme preset structure
- `SettingsContextValue` - Full settings context type

### UI Component Types

**Form Components:**
- `ButtonProps`, `InputProps`, `TextareaProps`
- `CheckboxProps`, `RadioGroupProps`, `RadioGroupItemProps`
- `SelectProps`, `SwitchProps`

**Display Components:**
- `BadgeProps`, `CardProps`, `AlertProps`
- `AvatarProps`, `ProgressProps`, `SkeletonProps`
- `ChipProps`, `DividerProps`, `SpinnerProps`

**Layout Components:**
- `ContainerProps`, `GridProps`, `StackProps`
- `TabsProps`, `CollapsibleProps`

**Overlay Components:**
- `DialogProps`, `DialogContentProps`, `DialogTriggerProps`
- `DropdownMenuProps`, `DropdownMenuContentProps`, `DropdownMenuItemProps`
- `PopoverProps`, `PopoverContentProps`, `PopoverTriggerProps`
- `TooltipProps`, `TooltipContentProps`, `TooltipTriggerProps`
- `DrawerProps`, `SheetProps`

**Data Display:**
- `TableProps`, `TableRowProps`, `TableCellProps`
- `ListProps`, `ListItemProps`
- `ChartProps`, `ChartConfig`, `ChartTooltipProps`

**Navigation:**
- `BreadcrumbProps`, `BreadcrumbItemProps`
- `ScrollAreaProps`

### Layout Component Types

- `HeaderProps` - Main header component
- `SidebarProps`, `SidebarMenuItem` - Sidebar navigation
- `MainLayoutProps`, `AuthLayoutProps` - Layout wrappers
- `DashboardStat`, `RecentSale` - Dashboard data types
- `Product`, `ProductFilters` - E-commerce types
- `EmailNotificationSettings`, `PrivacySettings` - Settings types

### Utility Types

**Date/Time:**
- `DateRange` - Date range structure
- Date utility functions (getDayRange, getWeekRange, etc.)

**Validation:**
- `PasswordValidationResult` - Password validation response
- `UsernameValidationResult` - Username validation response
- Various validators (email, URL, phone, credit card)

**Array Utilities:**
- `chunk`, `flatten`, `unique`, `groupBy`
- `sortBy`, `shuffle`, `sample`
- `difference`, `intersection`, `union`

**String Utilities:**
- `capitalize`, `truncate`, `slugify`
- `camelCase`, `kebabCase`, `snakeCase`
- `titleCase`, `stripHtml`, `escapeHtml`

**Formatting:**
- `formatCurrency`, `formatNumber`, `formatDate`
- `formatFileSize`, `formatDuration`, `formatPercentage`
- `formatPhoneNumber`, `formatCreditCard`

**Color Utilities:**
- `hexToRgb`, `rgbToHex`, `hexToHsl`, `hslToHex`
- `lighten`, `darken`, `getContrastRatio`
- `isLight`, `isDark`, `generateColorPalette`

### Data Types

- `User` - User data structure
- `Notification` - Notification object
- `Activity` - Activity log entry
- `FeatureItem` - Landing page feature
- `PricingPlan` - Pricing plan structure

## VS Code Setup

VS Code automatically detects the type definitions. For best experience:

1. **Install recommended extensions:**
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter

2. **Enable TypeScript checking in JavaScript (optional):**
   
   Add to `.vscode/settings.json`:
   ```json
   {
     "javascript.validate.enable": true,
     "typescript.validate.enable": true
   }
   ```

## Converting to TypeScript

If you want to convert the project to TypeScript:

1. **Install TypeScript:**
   ```bash
   pnpm install -D typescript @types/react @types/react-dom
   ```

2. **Rename files:**
   - `.jsx` → `.tsx`
   - `.js` → `.ts`

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     plugins: [react({ jsxRuntime: 'automatic' }), tailwindcss()],
     // ... rest of config
   });
   ```

## Type Examples

### Settings Hook Usage

```javascript
// State only (for read-only components)
const { themeMode, themePreset } = useSettingsState();

// Actions only (for control components)
const { onToggleMode, onChangeColor } = useSettingsActions();

// Both state and actions
const settings = useSettings();
```

### Component Props

```javascript
// Button with all typed props
<Button 
  variant="outline"
  size="lg"
  onClick={() => {}}
  disabled={false}
>
  Click me
</Button>

// Card with typed structure
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Validation Utilities

```javascript
import { validatePassword, isValidEmail } from '@/utils/validation';

const passwordResult = validatePassword('MyP@ssw0rd');
// passwordResult.isValid: boolean
// passwordResult.errors: string[]
// passwordResult.strength: number

const emailValid = isValidEmail('user@example.com');
// emailValid: boolean
```

## Benefits

1. **Better Developer Experience**
   - Autocomplete for all props and methods
   - Inline documentation
   - Catch errors before runtime

2. **Easier Refactoring**
   - Find all usages
   - Rename symbols
   - Safe refactoring

3. **Documentation**
   - Types serve as living documentation
   - Self-documenting code
   - Better onboarding for new developers

## Troubleshooting

### Types not showing in VS Code

1. Restart VS Code
2. Check that `jsconfig.json` exists
3. Run "TypeScript: Restart TS Server" from command palette

### Import suggestions not working

Ensure your `jsconfig.json` includes:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Future Enhancements

- Generate types from Zod schemas
- Runtime type validation
- Type-safe API client
- Form validation with types