import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Sparkles, Palette, Moon, Zap, Code, Smartphone, Shield, ArrowRight, Github, Package, Layers, GitBranch, LayoutDashboard, ShoppingBag, Settings } from "lucide-react"
import { Link } from "react-router-dom"
import SettingsContext from "@/contexts/SettingsContext"
const { useSettings } = SettingsContext
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Palette,
    title: "8 Professional Themes",
    description: "Carefully crafted color schemes using color theory principles"
  },
  {
    icon: Moon,
    title: "Dark/Light Mode",
    description: "Seamless switching with no flash of unstyled content"
  },
  {
    icon: Package,
    title: "45+ Components",
    description: "Full shadcn/ui library with consistent theming"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Powered by Vite and Tailwind CSS v4 for instant HMR"
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Clean code, well-documented, easy to customize"
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Mobile-first design that works on all devices"
  }
]

const themes = [
  { name: "default", label: "Emerald", color: "166" },
  { name: "blue", label: "Blue", color: "259" },
  { name: "purple", label: "Purple", color: "303" },
  { name: "orange", label: "Orange", color: "47" },
  { name: "red", label: "Rose", color: "16" },
  { name: "teal", label: "Teal", color: "182" },
  { name: "indigo", label: "Indigo", color: "277" },
  { name: "pink", label: "Pink", color: "354" }
]

const pricing = [
  {
    name: "Personal",
    price: "$29",
    description: "Perfect for side projects and freelancers",
    features: [
      "All 8 themes included",
      "45+ shadcn/ui components",
      "Lifetime updates",
      "Personal & commercial use",
      "Basic email support"
    ],
    popular: false
  },
  {
    name: "Team",
    price: "$99",
    description: "Best for agencies and development teams",
    features: [
      "Everything in Personal",
      "Team license (up to 10 devs)",
      "Priority support",
      "Custom theme request",
      "Video tutorials access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Team",
      "Unlimited developers",
      "White-label rights",
      "1-on-1 onboarding call",
      "Custom development support"
    ],
    popular: false
  }
]

export default function LandingPage() {
  const { themePreset, onChangeColor, themeMode } = useSettings()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Tailwind CSS v4 + shadcn/ui
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              React Theme System Kit
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build beautiful, themeable React applications with our comprehensive design system. 
              8 professional themes, 45+ components, dark mode, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/demo">
                  View Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get Started - $29
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Beautiful Themes, Instant Switch
            </h2>
            <p className="text-lg text-muted-foreground">
              Click any theme below to see it in action
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => onChangeColor(theme.name)}
                className={cn(
                  "relative p-6 rounded-lg border-2 transition-all",
                  themePreset === theme.name 
                    ? "border-primary-500 bg-primary-500/10" 
                    : "border-border hover:border-primary-500/50"
                )}
              >
                <div 
                  className="w-12 h-12 rounded-full mb-3 mx-auto"
                  style={{ backgroundColor: `oklch(0.65 0.2 ${theme.color})` }}
                />
                <p className="font-medium">{theme.label}</p>
                {themePreset === theme.name && (
                  <Check className="absolute top-2 right-2 h-5 w-5 text-primary-500" />
                )}
              </button>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Live Theme Preview</CardTitle>
              <CardDescription>
                See how components adapt to your selected theme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Card Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is how cards look with your theme
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Another Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Consistent styling across components
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Third Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Dark mode support built-in
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete design system for modern React applications
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Example Layouts */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready-to-Use Layouts
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional layouts that adapt to your theme
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <LayoutDashboard className="h-6 w-6 text-primary-500" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Complete dashboard with charts, stats, and data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    Revenue & sales charts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    KPI metric cards
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    Recent activity feed
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/dashboard">
                    View Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary-500/10 flex items-center justify-center mb-4 group-hover:bg-secondary-500/20 transition-colors">
                  <ShoppingBag className="h-6 w-6 text-secondary-500" />
                </div>
                <CardTitle>E-commerce Store</CardTitle>
                <CardDescription>
                  Modern product catalog with filters and shopping features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary-500" />
                    Product grid & list views
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary-500" />
                    Advanced filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary-500" />
                    Shopping cart UI
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/ecommerce">
                    View E-commerce
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
                  <Settings className="h-6 w-6 text-accent-500" />
                </div>
                <CardTitle>Settings & Profile</CardTitle>
                <CardDescription>
                  Comprehensive user settings and profile management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-500" />
                    Profile management
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-500" />
                    Security settings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-500" />
                    Privacy controls
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/settings">
                    View Settings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Developer Friendly
              </h2>
              <p className="text-lg text-muted-foreground">
                Clean, semantic code that's easy to understand and customize
              </p>
            </div>
            
            <Tabs defaultValue="usage" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="theme">Theme Config</TabsTrigger>
                <TabsTrigger value="custom">Customization</TabsTrigger>
              </TabsList>
              
              <TabsContent value="usage">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple to Use</CardTitle>
                    <CardDescription>
                      Just import and use - all theming is handled automatically
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-lg overflow-x-auto">
                      <code>{`import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="theme">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme Configuration</CardTitle>
                    <CardDescription>
                      Themes use OKLCH color space for perfect consistency
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-lg overflow-x-auto">
                      <code>{`// themePresets.js
export const themePresets = {
  purple: {
    name: 'purple',
    label: 'Purple',
    primary: {
      50: '#faf5ff',
      500: '#a855f7',
      // ... full scale
    },
    secondary: { /* ... */ },
    accent: { /* ... */ }
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="custom">
                <Card>
                  <CardHeader>
                    <CardTitle>Easy Customization</CardTitle>
                    <CardDescription>
                      Use Tailwind classes with theme-aware colors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-lg overflow-x-auto">
                      <code>{`// Theme-aware colors
<div className="bg-primary-500 text-white">
  Primary background
</div>

// Dark mode support
<div className="bg-white dark:bg-gray-900">
  Adapts automatically
</div>

// Semantic colors
<div className="bg-card text-card-foreground">
  Themed card
</div>`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              One-time payment, lifetime updates
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <Card 
                key={plan.name} 
                className={cn(
                  "relative",
                  plan.popular && "border-primary-500 border-2"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built with Modern Tech
            </h2>
            <p className="text-lg text-muted-foreground">
              Using the latest and greatest tools
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#61DAFB]/10 flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <p className="font-semibold">React 18</p>
                <p className="text-sm text-muted-foreground">Latest version</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <p className="font-semibold">Tailwind v4</p>
                <p className="text-sm text-muted-foreground">Next-gen CSS</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <Layers className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <p className="font-semibold">shadcn/ui</p>
                <p className="text-sm text-muted-foreground">Copy & paste</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#646CFF]/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <p className="font-semibold">Vite</p>
                <p className="text-sm text-muted-foreground">Lightning fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-2">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Build Something Beautiful?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get instant access to the React Theme System Kit and start building 
                amazing themed applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/demo">
                    Try Live Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 React Theme System Kit. All rights reserved.</p>
            <p className="mt-2">
              Built with ❤️ using React, Tailwind CSS v4, and shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}