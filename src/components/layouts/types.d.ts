// Type definitions for layout components

import { ReactNode } from 'react';

// Dashboard Layout
export interface DashboardLayoutProps {
  children?: ReactNode;
}

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface RecentSale {
  name: string;
  email: string;
  amount: string;
  avatar: string;
  image?: string;
}

// E-commerce Layout
export interface EcommerceLayoutProps {
  children?: ReactNode;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number | null;
  rating: number;
  reviews: number;
  image: string;
  badge?: string | null;
  inStock: boolean;
}

export interface ProductFilters {
  categories: string[];
  priceRange: string;
  rating: string;
}

// Settings Profile Layout
export interface SettingsProfileLayoutProps {
  children?: ReactNode;
}

export interface EmailNotificationSettings {
  marketing: boolean;
  updates: boolean;
  security: boolean;
  newsletter: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private';
  showEmail: boolean;
  showActivity: boolean;
}