import { useSettingsActions, useSettingsState, useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Palette, Layout, Maximize2, Type } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

/**
 * Example of an optimized theme toggle that never re-renders
 * Uses only actions from the split context
 */
export function ThemeToggleButton() {
  const renderCount = useRef(0);
  const { onToggleMode } = useSettingsActions();
  
  renderCount.current++;
  
  useEffect(() => {
    console.log(`ThemeToggleButton rendered ${renderCount.current} times`);
  });
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggleMode}
      className="fixed bottom-4 right-4"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

/**
 * Example of a component that only re-renders when theme changes
 * Uses only state from the split context
 */
export function ThemeDisplay() {
  const renderCount = useRef(0);
  const { themeMode, themePreset } = useSettingsState();
  
  renderCount.current++;
  
  useEffect(() => {
    console.log(`ThemeDisplay rendered ${renderCount.current} times`);
  });
  
  return (
    <div className={cn(
      "fixed bottom-4 left-4 p-4 rounded-lg",
      "bg-background border shadow-sm"
    )}>
      <p className="text-sm text-muted-foreground">
        Current theme: <span className="font-medium">{themeMode}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Color preset: <span className="font-medium">{themePreset}</span>
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        Renders: {renderCount.current}
      </p>
    </div>
  );
}

/**
 * Example of action buttons that never re-render
 * Perfect for toolbars and control panels
 */
export function OptimizedActionBar() {
  const renderCount = useRef(0);
  const { 
    onToggleMode,
    onToggleStretch,
    onChangeLayout,
    onChangeContrast,
    onResetSetting
  } = useSettingsActions();
  
  renderCount.current++;
  
  useEffect(() => {
    console.log(`OptimizedActionBar rendered ${renderCount.current} times`);
  });
  
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onToggleMode}
        title="Toggle dark mode"
      >
        <Moon className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={onToggleStretch}
        title="Toggle stretch layout"
      >
        <Maximize2 className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChangeLayout('horizontal')}
        title="Horizontal layout"
      >
        <Layout className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChangeContrast('bold')}
        title="Bold contrast"
      >
        <Type className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={onResetSetting}
        title="Reset settings"
      >
        Reset
      </Button>
      
      <div className="ml-4 text-xs text-muted-foreground self-center">
        Renders: {renderCount.current}
      </div>
    </div>
  );
}

/**
 * Color picker that only re-renders when necessary
 */
export function OptimizedColorPicker() {
  const renderCount = useRef(0);
  const { colorOptions, themePreset } = useSettingsState();
  const { onChangeColor } = useSettingsActions();
  
  renderCount.current++;
  
  useEffect(() => {
    console.log(`OptimizedColorPicker rendered ${renderCount.current} times`);
  });
  
  return (
    <div className="fixed top-20 right-4 p-4 bg-background border rounded-lg shadow-sm">
      <h3 className="text-sm font-medium mb-3">Theme Colors</h3>
      <div className="grid grid-cols-4 gap-2">
        {colorOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onChangeColor(option.value)}
            className={cn(
              "w-10 h-10 rounded-md transition-all",
              "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
              themePreset === option.value && "ring-2 ring-primary"
            )}
            style={{ backgroundColor: option.color }}
            title={option.label}
            aria-label={`Select ${option.label} theme`}
          >
            {themePreset === option.value && (
              <Palette className="h-4 w-4 text-white m-auto" />
            )}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Renders: {renderCount.current}
      </p>
    </div>
  );
}

/**
 * Settings panel that uses both state and actions
 * Shows backward compatibility with useSettings
 */
export function SettingsPanel() {
  const renderCount = useRef(0);
  const { 
    themeMode, 
    themePreset, 
    themeStretch,
    themeLayout,
    themeContrast,
    onChangeMode, 
    onChangeColor,
    onChangeStretch,
    onChangeLayout,
    onChangeContrast
  } = useSettings(); // Using combined hook for backward compatibility
  
  renderCount.current++;
  
  useEffect(() => {
    console.log(`SettingsPanel rendered ${renderCount.current} times`);
  });
  
  return (
    <div className="fixed top-4 left-4 p-6 bg-background border rounded-lg shadow-lg max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Settings Panel</h2>
      
      {/* Theme Mode */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Theme Mode</label>
          <div className="flex gap-2">
            <Button
              variant={themeMode === 'light' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChangeMode('light')}
            >
              <Sun className="h-4 w-4 mr-1" />
              Light
            </Button>
            <Button
              variant={themeMode === 'dark' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChangeMode('dark')}
            >
              <Moon className="h-4 w-4 mr-1" />
              Dark
            </Button>
          </div>
        </div>
        
        {/* Layout */}
        <div>
          <label className="text-sm font-medium mb-2 block">Layout</label>
          <div className="flex gap-2">
            <Button
              variant={themeLayout === 'vertical' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChangeLayout('vertical')}
            >
              Vertical
            </Button>
            <Button
              variant={themeLayout === 'horizontal' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChangeLayout('horizontal')}
            >
              Horizontal
            </Button>
          </div>
        </div>
        
        {/* Contrast */}
        <div>
          <label className="text-sm font-medium mb-2 block">Contrast</label>
          <div className="flex gap-2">
            <Button
              variant={themeContrast === 'default' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChangeContrast('default')}
            >
              Default
            </Button>
            <Button
              variant={themeContrast === 'bold' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChangeContrast('bold')}
            >
              <Type className="h-4 w-4 mr-1" />
              Bold
            </Button>
          </div>
        </div>
        
        {/* Stretch */}
        <div>
          <label className="text-sm font-medium mb-2 block">Stretch Layout</label>
          <Button
            variant={themeStretch ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChangeStretch(!themeStretch)}
            className="w-full"
          >
            <Maximize2 className="h-4 w-4 mr-1" />
            {themeStretch ? 'Enabled' : 'Disabled'}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground mt-4 pt-4 border-t">
          <p>Current preset: <span className="font-medium">{themePreset}</span></p>
          <p>Renders: {renderCount.current}</p>
          <p className="mt-1 text-muted-foreground/70">
            Using combined useSettings() hook - re-renders on any state change
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Performance comparison component
 */
export function PerformanceComparison() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="fixed bottom-20 left-4 right-4 p-4 bg-background border rounded-lg">
      <h3 className="text-sm font-semibold mb-3">Performance Comparison</h3>
      
      <div className="mb-4">
        <Button
          onClick={() => setCounter(c => c + 1)}
          variant="outline"
          size="sm"
          className="w-full"
        >
          Trigger Parent Re-render (Count: {counter})
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className="font-medium mb-1">Action-only components:</p>
          <p className="text-muted-foreground">ThemeToggleButton, OptimizedActionBar</p>
          <p className="text-green-600 font-medium">Never re-render!</p>
        </div>
        
        <div>
          <p className="font-medium mb-1">State-only components:</p>
          <p className="text-muted-foreground">ThemeDisplay, OptimizedColorPicker</p>
          <p className="text-blue-600 font-medium">Only on state change</p>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 pt-3 border-t">
        Check console to see render counts. Notice how action-only components
        maintain render count of 1 even when parent re-renders!
      </p>
    </div>
  );
}

/**
 * Example showing all optimized components together
 */
export default function OptimizedThemeControls() {
  return (
    <>
      {/* Optimized components using split hooks */}
      <ThemeToggleButton />
      <ThemeDisplay />
      <OptimizedActionBar />
      <OptimizedColorPicker />
      
      {/* Backward compatible component */}
      <SettingsPanel />
      
      {/* Performance demo */}
      <PerformanceComparison />
    </>
  );
}