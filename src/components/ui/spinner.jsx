import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        default: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
      },
      variant: {
        default: 'text-primary',
        secondary: 'text-secondary-foreground',
        destructive: 'text-destructive',
        muted: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

const Spinner = React.forwardRef(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(spinnerVariants({ size, variant }), className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  }
);

Spinner.displayName = 'Spinner';

// Loading overlay component
const SpinnerOverlay = React.forwardRef(
  ({ className, size = 'lg', label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm',
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-center gap-2">
          <Spinner size={size} />
          {label && (
            <p className="text-sm text-muted-foreground">{label}</p>
          )}
        </div>
      </div>
    );
  }
);

SpinnerOverlay.displayName = 'SpinnerOverlay';

export { Spinner, SpinnerOverlay };