import * as React from 'react';
import { cn } from '@/lib/utils';

function List({ className, ref, ...props }) {
  return (
    <ul
      ref={ref}
      className={cn('space-y-1', className)}
      {...props}
    />
  );
}
List.displayName = 'List';

function ListItem({ className, selected, disabled, ref, ...props }) {
  return (
    <li
      ref={ref}
      className={cn(
        'rounded-md px-3 py-2 text-sm transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground focus:outline-none',
        selected && 'bg-accent text-accent-foreground font-medium',
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      {...props}
    />
  );
}
ListItem.displayName = 'ListItem';

function ListItemButton({ className, selected, disabled, ref, ...props }) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'w-full text-left rounded-md px-3 py-2 text-sm transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground focus:outline-none',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        selected && 'bg-accent text-accent-foreground font-medium',
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
ListItemButton.displayName = 'ListItemButton';

function ListItemIcon({ className, ref, ...props }) {
  return (
    <span
      ref={ref}
      className={cn('mr-3 inline-flex h-5 w-5 shrink-0 items-center justify-center', className)}
      {...props}
    />
  );
}
ListItemIcon.displayName = 'ListItemIcon';

function ListItemText({ className, primary, secondary, ref, ...props }) {
  return (
    <div ref={ref} className={cn('flex-1', className)} {...props}>
      {primary && <div className="font-medium">{primary}</div>}
      {secondary && <div className="text-sm text-muted-foreground">{secondary}</div>}
    </div>
  );
}
ListItemText.displayName = 'ListItemText';

function ListSubheader({ className, ref, ...props }) {
  return (
    <li
      ref={ref}
      className={cn(
        'px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider',
        className
      )}
      {...props}
    />
  );
}
ListSubheader.displayName = 'ListSubheader';

function ListDivider({ className, ref, ...props }) {
  return (
    <li ref={ref} className={cn('my-1', className)} {...props}>
      <div className="h-px bg-border" />
    </li>
  );
}
ListDivider.displayName = 'ListDivider';

export { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ListDivider };