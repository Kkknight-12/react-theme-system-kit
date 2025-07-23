import { useState } from 'react';
import { Settings2, Download, Code, Palette, FileCode } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeExporter } from '@/components/ThemeExporter';
import { ThemeCustomizer } from '@/components/ThemeCustomizer';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  exportThemeAsJSON, 
  exportThemeAsCSS, 
  exportThemeAsTailwind,
  exportThemeAsModule 
} from '@/utils/theme-export';

export default function ThemeExport() {
  const [activeTab, setActiveTab] = useState('export');

  // Get sample exports for preview
  const sampleJSON = JSON.stringify(exportThemeAsJSON('sample'), null, 2);
  const sampleCSS = exportThemeAsCSS('sample');
  const sampleTailwind = exportThemeAsTailwind();
  const sampleModule = exportThemeAsModule('sampleTheme');

  return (
    <Container>
      <div className="py-4 sm:py-8 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Theme Export</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Export your customized theme in various formats for use in other projects
          </p>
        </div>

        {/* Theme Customizer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings2 className="h-5 w-5" />
              Customize Your Theme
            </CardTitle>
            <CardDescription>
              Adjust your theme before exporting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeCustomizer />
          </CardContent>
        </Card>

        {/* Export/Import Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="export">Export Theme</TabsTrigger>
            <TabsTrigger value="formats">Format Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="export" className="space-y-6">
            <ThemeExporter />
            
            <Alert>
              <AlertDescription>
                <strong>Tip:</strong> After exporting, you can import the theme file in any project 
                using React Theme System Kit, or integrate the CSS/Tailwind configurations into 
                your existing projects.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="formats" className="space-y-6">
            {/* Format Examples */}
            <div className="grid gap-6">
              {/* JSON Format */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileCode className="h-5 w-5" />
                      JSON Format
                    </span>
                    <Badge>Recommended</Badge>
                  </CardTitle>
                  <CardDescription>
                    Complete theme configuration for importing into other React Theme System Kit projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{sampleJSON.slice(0, 400)}...</code>
                  </pre>
                </CardContent>
              </Card>

              {/* CSS Format */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    CSS Format
                  </CardTitle>
                  <CardDescription>
                    CSS custom properties for direct inclusion in any project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{sampleCSS.slice(0, 400)}...</code>
                  </pre>
                </CardContent>
              </Card>

              {/* Tailwind Format */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Tailwind Config
                  </CardTitle>
                  <CardDescription>
                    Tailwind CSS configuration for existing Tailwind projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{sampleTailwind.slice(0, 400)}...</code>
                  </pre>
                </CardContent>
              </Card>

              {/* Module Format */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    JavaScript Module
                  </CardTitle>
                  <CardDescription>
                    ES6 module for programmatic theme integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{sampleModule.slice(0, 400)}...</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Usage Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use Exported Themes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">JSON Format</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Use the import feature in Theme Export page</li>
                <li>Or add to your theme-presets.js file</li>
                <li>The theme will appear in the theme switcher</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">CSS Format</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Include the CSS file in your project</li>
                <li>Add data-theme="your-theme" to your root element</li>
                <li>CSS variables will be applied automatically</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Tailwind Config</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Copy the configuration to your tailwind.config.js</li>
                <li>Use the color classes in your components</li>
                <li>Works with any Tailwind CSS project</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">JavaScript Module</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Import the module in your theme configuration</li>
                <li>Add to your theme presets array</li>
                <li>Ideal for programmatic theme management</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}