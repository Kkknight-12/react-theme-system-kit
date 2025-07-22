import {
  createContext,
  useEffect,
  useReducer,
  useMemo,
} from 'react';
import { getThemeOptions } from '../config/themePresets';
import { applyTheme, initializeTheme, saveTheme } from '../utils/theme';

// Default settings
const defaultSettings = {
  themeMode: 'light',
  themePreset: 'default',
  themeStretch: false,
  themeLayout: 'vertical', // vertical | horizontal
  themeContrast: 'default', // default | bold
};

// Action types
const ActionTypes = {
  SET_THEME_MODE: 'SET_THEME_MODE',
  TOGGLE_THEME_MODE: 'TOGGLE_THEME_MODE',
  SET_THEME_PRESET: 'SET_THEME_PRESET',
  SET_THEME_STRETCH: 'SET_THEME_STRETCH',
  TOGGLE_THEME_STRETCH: 'TOGGLE_THEME_STRETCH',
  SET_THEME_LAYOUT: 'SET_THEME_LAYOUT',
  SET_THEME_CONTRAST: 'SET_THEME_CONTRAST',
  RESET_SETTINGS: 'RESET_SETTINGS',
};

// Reducer function
function settingsReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      };

    case ActionTypes.TOGGLE_THEME_MODE:
      return {
        ...state,
        themeMode: state.themeMode === 'light' ? 'dark' : 'light',
      };

    case ActionTypes.SET_THEME_PRESET:
      return {
        ...state,
        themePreset: action.payload,
      };

    case ActionTypes.SET_THEME_STRETCH:
      return {
        ...state,
        themeStretch: action.payload,
      };

    case ActionTypes.TOGGLE_THEME_STRETCH:
      return {
        ...state,
        themeStretch: !state.themeStretch,
      };

    case ActionTypes.SET_THEME_LAYOUT:
      return {
        ...state,
        themeLayout: action.payload,
      };

    case ActionTypes.SET_THEME_CONTRAST:
      return {
        ...state,
        themeContrast: action.payload,
      };

    case ActionTypes.RESET_SETTINGS:
      return defaultSettings;

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// Split contexts for optimal performance
const SettingsStateContext = createContext(null);
const SettingsActionsContext = createContext(null);

// Export contexts for use in hooks file
export { SettingsStateContext, SettingsActionsContext };

/**
 * Initialize settings from localStorage
 * @returns {Object} Initial settings state
 */
function initializeSettings() {
  try {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return { ...defaultSettings, ...parsed };
    }

    // Check legacy dark mode key
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
      return { ...defaultSettings, themeMode: 'dark' };
    }
  } catch (e) {
    console.error('Failed to load settings:', e);
  }

  return defaultSettings;
}

/**
 * Settings Provider Component - Optimized with split contexts and reducer
 * Manages application-wide settings including theme, layout, and preferences
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export function SettingsProvider({ children }) {
  // Initialize state with reducer
  const [state, dispatch] = useReducer(
    settingsReducer,
    null,
    initializeSettings,
  );

  // Memoized color options - computed once
  const colorOptions = useMemo(() => getThemeOptions(), []);

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();

    // Sync dark mode state on initial load
    const syncInitialMode = () => {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (state.themeMode === 'dark') {
        localStorage.setItem('dark-mode', 'true');
        if (meta) meta.content = '#242424';
      } else {
        localStorage.setItem('dark-mode', 'false');
        if (meta) meta.content = '#ffffff';
      }
    };

    syncInitialMode();
  }, [state.themeMode]); // Re-sync if themeMode changes

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(state));
  }, [state]);

  // Apply theme mode (light/dark)
  useEffect(() => {
    const applyMode = () => {
      const root = document.documentElement;
      const meta = document.querySelector('meta[name="theme-color"]');

      if (state.themeMode === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
        if (meta) meta.content = '#242424';
      } else {
        root.classList.remove('dark');
        localStorage.setItem('dark-mode', 'false');
        if (meta) meta.content = '#ffffff';
      }
    };

    // Apply immediately and after micro-task
    applyMode();
    queueMicrotask(applyMode);
  }, [state.themeMode]);

  // Apply theme preset colors
  useEffect(() => {
    applyTheme(state.themePreset);
    saveTheme(state.themePreset);
  }, [state.themePreset]);

  // Apply stretch layout
  useEffect(() => {
    const root = document.documentElement;
    if (state.themeStretch) {
      root.classList.add('stretch');
    } else {
      root.classList.remove('stretch');
    }
  }, [state.themeStretch]);

  // Create stable actions object - NEVER changes due to dispatch stability
  const actions = useMemo(
    () => ({
      /**
       * Set theme mode directly
       * @param {string} mode - 'light' or 'dark'
       */
      onChangeMode: mode => {
        dispatch({ type: ActionTypes.SET_THEME_MODE, payload: mode });
      },

      /**
       * Toggle between light and dark mode
       */
      onToggleMode: () => {
        dispatch({ type: ActionTypes.TOGGLE_THEME_MODE });
      },

      /**
       * Change color preset
       * @param {string} preset - Theme preset name
       */
      onChangeColor: preset => {
        dispatch({ type: ActionTypes.SET_THEME_PRESET, payload: preset });
      },

      /**
       * Set stretch layout
       * @param {boolean} stretch - Whether to stretch layout
       */
      onChangeStretch: stretch => {
        dispatch({ type: ActionTypes.SET_THEME_STRETCH, payload: stretch });
      },

      /**
       * Toggle stretch layout
       */
      onToggleStretch: () => {
        dispatch({ type: ActionTypes.TOGGLE_THEME_STRETCH });
      },

      /**
       * Change layout
       * @param {string} layout - 'vertical' or 'horizontal'
       */
      onChangeLayout: layout => {
        dispatch({ type: ActionTypes.SET_THEME_LAYOUT, payload: layout });
      },

      /**
       * Change contrast
       * @param {string} contrast - 'default' or 'bold'
       */
      onChangeContrast: contrast => {
        dispatch({ type: ActionTypes.SET_THEME_CONTRAST, payload: contrast });
      },

      /**
       * Reset all settings to defaults
       */
      onResetSetting: () => {
        dispatch({ type: ActionTypes.RESET_SETTINGS });
      },
    }),
    [],
  ); // Empty array - actions never change!

  // Memoize state value with color options
  const stateValue = useMemo(
    () => ({
      ...state,
      colorOptions,
    }),
    [state, colorOptions],
  );

  return (
    <SettingsStateContext.Provider value={stateValue}>
      <SettingsActionsContext.Provider value={actions}>
        {children}
      </SettingsActionsContext.Provider>
    </SettingsStateContext.Provider>
  );
}

// Export just the provider
export default SettingsProvider;