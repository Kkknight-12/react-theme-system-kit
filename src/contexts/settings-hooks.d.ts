// Type definitions for settings hooks

import { SettingsContextValue, SettingsState, SettingsActions } from '../types';

/**
 * Hook to access the complete settings context (state + actions)
 */
export function useSettings(): SettingsContextValue;

/**
 * Hook to access only the settings state (for components that only read settings)
 */
export function useSettingsState(): SettingsState;

/**
 * Hook to access only the settings actions (for components that only modify settings)
 */
export function useSettingsActions(): SettingsActions;