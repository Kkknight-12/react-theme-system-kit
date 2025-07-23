import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const stackVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        'row-reverse': 'flex-row-reverse',
        col: 'flex-col',
        'col-reverse': 'flex-col-reverse',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      wrap: {
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
        nowrap: 'flex-nowrap',
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
      direction: 'row',
      align: 'stretch',
      justify: 'start',
      wrap: 'nowrap',
      gap: 0,
    },
  }
);

function Stack({ className, direction, align, justify, wrap, gap, ref, ...props }) {
  return (
    <div
      ref={ref}
      className={cn(
        stackVariants({ direction, align, justify, wrap, gap }),
        className
      )}
      {...props}
    />
  );
}

Stack.displayName = 'Stack';

// Convenience components
function HStack({ ref, ...props }) {
  return <Stack ref={ref} direction="row" {...props} />;
}
HStack.displayName = 'HStack';

function VStack({ ref, ...props }) {
  return <Stack ref={ref} direction="col" {...props} />;
}
VStack.displayName = 'VStack';

export { Stack, HStack, VStack };