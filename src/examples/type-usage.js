/**
 * Example file showing how to use TypeScript types in JavaScript with JSDoc
 * This provides IntelliSense and type checking in VS Code and other editors
 */

import { useSettings } from '@/contexts/settings-hooks';
import { Button } from '@/components/ui/button';

/**
 * Example component using typed hooks
 * @returns {JSX.Element}
 */
export function TypedExample() {
  // The useSettings hook is fully typed - hover over it to see all available properties
  const { themeMode, onToggleMode, onChangeColor } = useSettings();

  /**
   * Handle theme change with typed parameter
   * @param {string} preset - Theme preset name
   */
  const handleThemeChange = (preset) => {
    onChangeColor(preset);
  };

  return (
    <div>
      <p>Current theme: {themeMode}</p>
      <Button onClick={onToggleMode}>Toggle Theme</Button>
      <Button onClick={() => handleThemeChange('blue')}>Blue Theme</Button>
    </div>
  );
}

/**
 * Example of using component props with JSDoc
 * @param {import('../components/ui/types').ButtonProps} props
 * @returns {JSX.Element}
 */
export function CustomButton(props) {
  return <Button {...props} />;
}

/**
 * Example of typed product data
 * @type {import('../components/layouts/types').Product}
 */
const exampleProduct = {
  id: 1,
  name: 'Example Product',
  price: 99.99,
  rating: 4.5,
  reviews: 100,
  image: 'https://example.com/product.jpg',
  inStock: true
};

/**
 * Example of typed settings
 * @type {import('../types').ThemeSettings}
 */
const defaultSettings = {
  themeMode: 'light',
  themePreset: 'default',
  themeStretch: false,
  themeLayout: 'vertical',
  themeContrast: 'default',
  navigationStyle: 'sidebar',
  contentWidth: 'boxed',
  reducedMotion: false
};