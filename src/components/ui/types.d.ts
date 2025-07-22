// Type definitions for UI components

import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

// Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Badge
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

// Card
export interface CardProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

// Input
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

// Label
export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

// Select
export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children?: ReactNode;
}

// Switch
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

// Tabs
export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  children?: ReactNode;
  className?: string;
}

// Avatar
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {}
export interface AvatarImageProps extends HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}
export interface AvatarFallbackProps extends HTMLAttributes<HTMLSpanElement> {}

// Progress
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

// Textarea
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Sheet/Dialog
export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children?: ReactNode;
}

// Alert
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}
export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

// Chip
export interface ChipProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
  onDelete?: () => void;
}

// Container
export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

// Divider
export interface DividerProps extends HTMLAttributes<HTMLHRElement>, VariantProps<typeof dividerVariants> {}

// Grid
export interface GridProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {}
export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: number;
}

// IconButton
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
  'aria-label': string;
}

// Spinner
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {}
export interface SpinnerOverlayProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

// Stack
export interface StackProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {}

// Chart
export interface ChartConfig {
  [key: string]: {
    label?: string;
    color?: string;
    theme?: {
      light?: string;
      dark?: string;
    };
  };
}

export interface ChartProps {
  config: ChartConfig;
  children?: ReactNode;
  className?: string;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  labelFormatter?: (value: any, payload: any[]) => string;
  formatter?: (value: any, name: string) => string;
  className?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: 'dot' | 'line' | 'dashed';
}