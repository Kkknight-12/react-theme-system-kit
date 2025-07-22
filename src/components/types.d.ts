// Type definitions for top-level components

import { ReactNode, HTMLAttributes } from 'react';

// Landing Page
export interface LandingPageProps extends HTMLAttributes<HTMLDivElement> {}

export interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface ThemeOption {
  name: string;
  label: string;
  color: string;
}

// Theme Showcase
export interface ThemeShowcaseProps extends HTMLAttributes<HTMLDivElement> {}

// Shadcn Showcase
export interface ShadcnShowcaseProps extends HTMLAttributes<HTMLDivElement> {}

// Settings Components
export interface SettingsSheetProps extends HTMLAttributes<HTMLDivElement> {}

export interface SimpleSettingsDrawerProps extends HTMLAttributes<HTMLDivElement> {}

export interface OptimizedThemeControlsProps extends HTMLAttributes<HTMLDivElement> {}

// Mock Data Types
export interface User {
  id: string | number;
  name: string;
  email: string;
  role?: string;
  avatar?: string;
  status?: 'active' | 'inactive' | 'pending';
  createdAt?: Date | string;
}

export interface Notification {
  id: string | number;
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  read?: boolean;
  createdAt?: Date | string;
}

export interface Activity {
  id: string | number;
  user: string;
  action: string;
  target?: string;
  timestamp: Date | string;
  type?: string;
}