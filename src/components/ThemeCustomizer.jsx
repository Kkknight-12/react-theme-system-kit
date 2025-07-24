import { useSettings } from '@/contexts/settings-hooks';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Clean theme customization component for the Export page
 * No floating elements - just the controls needed for customization
 */
export function ThemeCustomizer() {
  const { themeMode, themePreset, onToggleMode, onChangeColor } = useSettings();

  const themes = [
    { name: 'default', label: 'Emerald', color: 'hsl(160, 84%, 39%)' },
    { name: 'blue', label: 'Blue', color: 'hsl(217, 91%, 60%)' },
    { name: 'purple', label: 'Purple', color: 'hsl(270, 91%, 65%)' },
    { name: 'orange', label: 'Orange', color: 'hsl(25, 95%, 53%)' },
    { name: 'red', label: 'Rose', color: 'hsl(346, 77%, 50%)' },
    { name: 'teal', label: 'Teal', color: 'hsl(174, 72%, 46%)' },
    { name: 'indigo', label: 'Indigo', color: 'hsl(239, 84%, 67%)' },
    { name: 'pink', label: 'Pink', color: 'hsl(330, 81%, 60%)' },
  ];

  return (
    <div className="space-y-6">
      {/* Theme Mode Toggle */}
      <div className="space-y-2">
        <Label>Theme Mode</Label>
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4" />
          <Switch
            checked={themeMode === 'dark'}
            onCheckedChange={onToggleMode}
            aria-label="Toggle dark mode"
          />
          <Moon className="h-4 w-4" />
        </div>
      </div>

      {/* Color Presets */}
      <div className="space-y-2">
        <Label>Color Preset</Label>
        <RadioGroup value={themePreset} onValueChange={onChangeColor}>
          <div className="grid grid-cols-4 gap-3">
            {themes.map(theme => (
              <div key={theme.name}>
                <RadioGroupItem
                  value={theme.name}
                  id={theme.name}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={theme.name}
                  className={cn(
                    'flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer',
                    'peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary',
                  )}
                >
                  <div
                    className="w-8 h-8 rounded-full mb-2"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="text-xs font-medium">{theme.label}</span>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Current Theme Info */}
      <div className="rounded-lg bg-muted p-4">
        <div className="text-sm space-y-1">
          <p>
            <span className="text-muted-foreground">Mode:</span>{' '}
            <span className="font-medium capitalize">{themeMode}</span>
          </p>
          <p>
            <span className="text-muted-foreground">Preset:</span>{' '}
            <span className="font-medium capitalize">
              {themes.find(t => t.name === themePreset)?.label || themePreset}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}