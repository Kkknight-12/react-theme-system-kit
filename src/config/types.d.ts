// Type definitions for configuration

import { ThemePreset } from '../types';

// Theme presets
export const themePresets: Record<string, ThemePreset>;
export function getThemeOptions(): Array<{ value: string; label: string; color: string }>;