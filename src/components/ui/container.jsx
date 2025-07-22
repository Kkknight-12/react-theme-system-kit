import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const containerVariants = cva(
  'mx-auto w-full',
  {
    variants: {
      size: {
        xs: 'max-w-xs',     // 320px
        sm: 'max-w-sm',     // 384px
        md: 'max-w-md',     // 448px
        lg: 'max-w-lg',     // 512px
        xl: 'max-w-xl',     // 576px
        '2xl': 'max-w-2xl', // 672px
        '3xl': 'max-w-3xl', // 768px
        '4xl': 'max-w-4xl', // 896px
        '5xl': 'max-w-5xl', // 1024px
        '6xl': 'max-w-6xl', // 1152px
        '7xl': 'max-w-7xl', // 1280px
        full: 'max-w-full',
        prose: 'max-w-prose',
        screen: 'max-w-screen-2xl',
      },
      padding: {
        none: '',
        sm: 'px-4 sm:px-6',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-6 sm:px-8 lg:px-10',
        xl: 'px-8 sm:px-10 lg:px-12',
      },
    },
    defaultVariants: {
      size: '7xl',
      padding: 'md',
    },
  }
);

const Container = React.forwardRef(
  ({ className, size, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, padding }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

// Section wrapper with container
const Section = React.forwardRef(
  ({ className, containerSize, containerPadding, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-12 sm:py-16 lg:py-20', className)} {...props}>
        <Container size={containerSize} padding={containerPadding}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Container, Section };