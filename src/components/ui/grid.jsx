import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gridVariants = cva(
  'grid',
  {
    variants: {
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
        none: '',
      },
      gap: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        7: 'gap-7',
        8: 'gap-8',
        9: 'gap-9',
        10: 'gap-10',
        11: 'gap-11',
        12: 'gap-12',
      },
    },
    defaultVariants: {
      cols: 1,
      gap: 4,
    },
  }
);

const Grid = React.forwardRef(
  ({ className, cols, gap, responsive, ...props }, ref) => {
    // Handle responsive grid
    const responsiveClasses = responsive ? {
      'sm:grid-cols-2': cols >= 2,
      'md:grid-cols-3': cols >= 3,
      'lg:grid-cols-4': cols >= 4,
      'xl:grid-cols-5': cols >= 5,
      '2xl:grid-cols-6': cols >= 6,
    } : {};

    return (
      <div
        ref={ref}
        className={cn(
          gridVariants({ cols: responsive ? 1 : cols, gap }),
          responsiveClasses,
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

const GridItem = React.forwardRef(
  ({ className, colSpan, rowSpan, ...props }, ref) => {
    const spanClasses = {
      [`col-span-${colSpan}`]: colSpan,
      [`row-span-${rowSpan}`]: rowSpan,
    };

    return (
      <div
        ref={ref}
        className={cn(spanClasses, className)}
        {...props}
      />
    );
  }
);

GridItem.displayName = 'GridItem';

export { Grid, GridItem, gridVariants };