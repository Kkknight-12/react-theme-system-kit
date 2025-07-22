// Type definitions for layout components

import { ReactNode, HTMLAttributes } from 'react';

// Header
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  onMenuClick?: () => void;
}

// Sidebar
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  open?: boolean;
  onClose?: () => void;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  badge?: string | number;
  children?: SidebarMenuItem[];
  onClick?: () => void;
}

// Main Layout
export interface MainLayoutProps {
  children?: ReactNode;
  sidebar?: boolean;
  header?: boolean;
}

// Auth Layout
export interface AuthLayoutProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}