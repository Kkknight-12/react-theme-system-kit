import { Settings, Sun, Moon, Check } from 'lucide-react';
import { useSettings } from '@/contexts/settings-hooks';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function SettingsSheet() {
  const {
    themeMode = 'light',
    themePreset = 'default',
    onChangeMode = () => {},
    onChangeColor = () => {},
    colorOptions = [],
  } = useSettings() || {};

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 rounded-l-lg rounded-r-none"
          size="default"
          aria-label="Open settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto p-6">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Customize your application appearance
          </SheetDescription>
        </SheetHeader>

        {/* Content */}
        <div className="space-y-6 py-6">
          {/* Theme Mode */}
          <div>
            <h3 className="text-sm font-medium mb-3">Theme Mode</h3>
            <div className="flex gap-2">
              <Button
                variant={themeMode === 'light' ? 'default' : 'outline'}
                onClick={() => onChangeMode('light')}
                className="flex-1"
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
              </Button>
              <Button
                variant={themeMode === 'dark' ? 'default' : 'outline'}
                onClick={() => onChangeMode('dark')}
                className="flex-1"
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </Button>
            </div>
          </div>

          {/* Theme Color */}
          <div>
            <h3 className="text-sm font-medium mb-3">Theme Color</h3>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => onChangeColor(option.value)}
                  variant="ghost"
                  className={cn(
                    "relative h-12 p-0 overflow-hidden",
                    themePreset === option.value && "ring-2 ring-primary ring-offset-2"
                  )}
                  style={{ backgroundColor: option.color }}
                  title={option.label}
                >
                  {themePreset === option.value && (
                    <Check className="absolute inset-0 m-auto h-4 w-4 text-white drop-shadow" />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Additional Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="animations" className="text-sm cursor-pointer">
                Animations
              </Label>
              <Switch id="animations" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="transitions" className="text-sm cursor-pointer">
                Transitions
              </Label>
              <Switch id="transitions" defaultChecked />
            </div>
          </div>

          {/* Info */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs text-muted-foreground">
              Theme settings are saved locally and will persist across sessions.
            </p>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}