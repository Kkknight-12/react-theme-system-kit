import * as React from 'react';
import { X } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const chipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
        warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
        info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Chip = React.forwardRef(
  ({ className, variant, size, onDelete, children, ...props }, ref) => {
    return (
      <div
        className={cn(chipVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="ml-1 -mr-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Remove"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';

export { Chip };