import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dividerVariants = cva(
  'shrink-0 bg-border',
  {
    variants: {
      orientation: {
        horizontal: 'h-[1px] w-full',
        vertical: 'h-full w-[1px]',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

const Divider = React.forwardRef(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    if (children) {
      return (
        <div
          ref={ref}
          className={cn(
            'relative flex items-center',
            orientation === 'horizontal' ? 'w-full' : 'h-full flex-col',
            className
          )}
          {...props}
        >
          <div className={cn(dividerVariants({ orientation }), 'flex-1')} />
          <span
            className={cn(
              'px-3 py-1 text-xs text-muted-foreground bg-background',
              orientation === 'vertical' && 'px-1 py-3'
            )}
          >
            {children}
          </span>
          <div className={cn(dividerVariants({ orientation }), 'flex-1')} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(dividerVariants({ orientation }), className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };