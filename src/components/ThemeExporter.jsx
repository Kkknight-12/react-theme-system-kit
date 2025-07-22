import { useState } from 'react';
import { Download, Upload, Copy, Check, FileJson, FileCode, Palette } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx';
import { toast } from   "sonner"
import { 
  exportTheme, 
  exportThemeAsJSON, 
  importThemeFromFile,
  generateThemePreview 
} from '@/utils/theme-export';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';

export function ThemeExporter() {
  const [themeName, setThemeName] = useState('my-custom-theme');
  const [exportFormat, setExportFormat] = useState('json');
  const [copied, setCopied] = useState(false);
  const [importing, setImporting] = useState(false);

  const handleExport = () => {
    try {
      exportTheme(exportFormat, themeName);
      toast.success(`Your theme has been exported as ${themeName}.${exportFormat === 'module' ? 'js' : exportFormat}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCopyTheme = async () => {
    try {
      const theme = exportThemeAsJSON(themeName);
      await navigator.clipboard.writeText(JSON.stringify(theme, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Theme configuration copied to clipboard');
    } catch (error) {
      toast.error('Could not copy theme to clipboard');
    }
  };

  const handleImport = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImporting(true);
    try {
      const theme = await importThemeFromFile(file);
      toast.success(`Successfully imported "${theme.label || theme.name}"`);
      // Reset file input
      event.target.value = '';
    } catch (error) {
      toast.error(error.message);
    } finally {
      setImporting(false);
    }
  };

  const formatDescriptions = {
    json: 'Standard JSON format for easy sharing and version control',
    css: 'CSS file with custom properties for direct inclusion',
    tailwind: 'Tailwind configuration for integration with existing projects',
    module: 'JavaScript module for importing into theme presets'
  };

  return (
    <div className="space-y-6">
      {/* Export Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export Current Theme
          </CardTitle>
          <CardDescription>
            Save your customized theme for reuse or sharing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme-name">Theme Name</Label>
            <Input
              id="theme-name"
              value={themeName}
              onChange={(e) => setThemeName(e.target.value)}
              placeholder="Enter theme name"
            />
          </div>

          <div className="space-y-3">
            <Label>Export Format</Label>
            <RadioGroup value={exportFormat} onValueChange={setExportFormat}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formatDescriptions).map(([format, description]) => (
                  <div key={format} className="flex items-start space-x-2">
                    <RadioGroupItem value={format} id={format} className="mt-1" />
                    <Label htmlFor={format} className="font-normal cursor-pointer">
                      <div className="font-medium capitalize">{format}</div>
                      <div className="text-sm text-muted-foreground">{description}</div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleExport} className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Export Theme
            </Button>
            <Button variant="outline" onClick={handleCopyTheme}>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Import Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Import Theme
          </CardTitle>
          <CardDescription>
            Load a previously exported theme configuration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
                id="theme-import"
                disabled={importing}
              />
              <Label
                htmlFor="theme-import"
                className="cursor-pointer inline-flex flex-col items-center gap-2"
              >
                <FileJson className="h-8 w-8 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {importing ? 'Importing...' : 'Click to select theme file'}
                </span>
                <span className="text-xs text-muted-foreground">
                  Supports JSON format
                </span>
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            <Palette className="mr-2 h-4 w-4" />
            Preview Current Theme
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Current Theme Preview</DialogTitle>
            <DialogDescription>
              Visual preview of your current theme colors
            </DialogDescription>
          </DialogHeader>
          <div 
            dangerouslySetInnerHTML={{ 
              __html: generateThemePreview(exportThemeAsJSON(themeName)) 
            }} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}