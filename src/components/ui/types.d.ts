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

// Checkbox
export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

// Dialog
export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children?: ReactNode;
}

export interface DialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onInteractOutside?: (event: Event) => void;
}

// Dropdown Menu
export interface DropdownMenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children?: ReactNode;
}

export interface DropdownMenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface DropdownMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  alignOffset?: number;
}

export interface DropdownMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  onSelect?: (event: Event) => void;
}

// Radio Group
export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface RadioGroupItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
}

// Tooltip
export interface TooltipProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  children?: ReactNode;
}

export interface TooltipTriggerProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
}

// Table
export interface TableProps extends HTMLAttributes<HTMLTableElement> {}
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}
export interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement> {}
export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}
export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}

// Skeleton
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

// Collapsible
export interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export interface CollapsibleTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface CollapsibleContentProps extends HTMLAttributes<HTMLDivElement> {}

// Popover
export interface PopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children?: ReactNode;
}

export interface PopoverTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
}

// Scroll Area
export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  scrollHideDelay?: number;
}

// Drawer
export interface DrawerProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children?: ReactNode;
}

export interface DrawerTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {}

// List
export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  ordered?: boolean;
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

// Breadcrumb
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {}
export interface BreadcrumbListProps extends HTMLAttributes<HTMLOListElement> {}
export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {}
export interface BreadcrumbLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}
export interface BreadcrumbPageProps extends HTMLAttributes<HTMLSpanElement> {}
export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLLIElement> {}
export interface BreadcrumbEllipsisProps extends HTMLAttributes<HTMLSpanElement> {}

// Sonner (Toast)
export interface ToasterProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  expand?: boolean;
  duration?: number;
  gap?: number;
  hotkey?: string[];
  offset?: string | number;
  theme?: 'light' | 'dark' | 'system';
}