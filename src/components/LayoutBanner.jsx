import { Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function LayoutBanner({ title, description }) {
  return (
    <Alert className="mb-6 border-primary-500/20 bg-primary-500/5">
      <Info className="h-4 w-4 text-primary-500" />
      <AlertDescription className="ml-2">
        <strong className="text-primary-700 dark:text-primary-400">Example Layout:</strong>{' '}
        <span className="text-foreground/80">
          This is a sample {title} layout demonstrating how the theme system works with {description}.
        </span>
      </AlertDescription>
    </Alert>
  );
}