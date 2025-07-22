// Type definitions for React Theme System Kit

export interface ThemePreset {
  name: string;
  label: string;
  primary: Record<string, string>;
  secondary: Record<string, string>;
  accent: Record<string, string>;
}

export interface ThemeSettings {
  themeMode: 'light' | 'dark';
  themePreset: string;
  themeStretch: boolean;
  themeLayout: 'vertical' | 'horizontal' | 'mini';
  themeContrast: 'default' | 'high';
  navigationStyle: 'sidebar' | 'navbar' | 'both';
  contentWidth: 'boxed' | 'fluid';
  reducedMotion: boolean;
}

export interface SettingsContextValue extends ThemeSettings {
  colorOptions: Array<{ value: string; label: string; color: string }>;
  onChangeMode: (mode: 'light' | 'dark') => void;
  onToggleMode: () => void;
  onChangeColor: (preset: string) => void;
  onChangeStretch: (stretch: boolean) => void;
  onToggleStretch: () => void;
  onChangeLayout: (layout: 'vertical' | 'horizontal' | 'mini') => void;
  onChangeContrast: (contrast: 'default' | 'high') => void;
  onResetSetting: () => void;
  onChangeNavigation: (style: 'sidebar' | 'navbar' | 'both') => void;
  onChangeContentWidth: (width: 'boxed' | 'fluid') => void;
  onToggleReducedMotion: () => void;
}

export interface SettingsState extends ThemeSettings {
  colorOptions: Array<{ value: string; label: string; color: string }>;
}

export interface SettingsActions {
  onChangeMode: (mode: 'light' | 'dark') => void;
  onToggleMode: () => void;
  onChangeColor: (preset: string) => void;
  onChangeStretch: (stretch: boolean) => void;
  onToggleStretch: () => void;
  onChangeLayout: (layout: 'vertical' | 'horizontal' | 'mini') => void;
  onChangeContrast: (contrast: 'default' | 'high') => void;
  onResetSetting: () => void;
  onChangeNavigation: (style: 'sidebar' | 'navbar' | 'both') => void;
  onChangeContentWidth: (width: 'boxed' | 'fluid') => void;
  onToggleReducedMotion: () => void;
}