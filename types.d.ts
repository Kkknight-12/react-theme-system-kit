// Main type definitions export file for React Theme System Kit

// Re-export all types
export * from './src/types';
export * from './src/components/ui/types';
export * from './src/contexts/settings-hooks';
export * from './src/utils/types';
export * from './src/config/types';

// Module declarations for CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Extend Window interface for theme initialization
declare global {
  interface Window {
    __THEME_INITIALIZED__?: boolean;
  }
}