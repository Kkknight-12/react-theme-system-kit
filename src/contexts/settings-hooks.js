import { useContext } from 'react';
import { SettingsStateContext, SettingsActionsContext } from './SettingsContext';

/**
 * Custom hook to use settings state
 * @returns {Object} Settings state
 * @throws {Error} When used outside of SettingsProvider
 */
export const useSettingsState = () => {
  const context = useContext(SettingsStateContext);
  if (!context) {
    throw new Error('useSettingsState must be used within SettingsProvider');
  }
  return context;
};

/**
 * Custom hook to use settings actions
 * @returns {Object} Settings actions
 * @throws {Error} When used outside of SettingsProvider
 */
export const useSettingsActions = () => {
  const context = useContext(SettingsActionsContext);
  if (!context) {
    throw new Error('useSettingsActions must be used within SettingsProvider');
  }
  return context;
};

/**
 * Combined hook for backward compatibility
 * @returns {Object} Settings state and actions
 */
export const useSettings = () => {
  const state = useSettingsState();
  const actions = useSettingsActions();
  return { ...state, ...actions };
};