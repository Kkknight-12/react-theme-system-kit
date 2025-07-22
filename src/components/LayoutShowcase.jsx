import { useState } from 'react'
import DashboardLayout from '@/components/layouts/DashboardLayout.jsx'
import EcommerceLayout from '@/components/layouts/EcommerceLayout.jsx'
import SettingsProfileLayout from '@/components/layouts/SettingsProfileLayout.jsx'
import SaasUsersLayout from '@/components/layouts/SaasUsersLayout.jsx'
import BlogLayout from '@/components/layouts/BlogLayout.jsx'
import { LayoutDashboard, ShoppingBag, Settings, Users, FileText, Menu, Layers, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const layouts = [
  {
    id: 'dashboard',
    name: 'Dashboard Analytics',
    shortName: 'Dashboard',
    icon: LayoutDashboard,
    component: DashboardLayout,
    description: 'Analytics dashboard with charts and metrics',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    shortName: 'E-commerce',
    icon: ShoppingBag,
    component: EcommerceLayout,
    description: 'Product catalog with shopping features',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    id: 'settings',
    name: 'Settings & Profile',
    shortName: 'Settings',
    icon: Settings,
    component: SettingsProfileLayout,
    description: 'User settings and profile management',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  {
    id: 'users',
    name: 'SaaS User Management',
    shortName: 'SaaS Users',
    icon: Users,
    component: SaasUsersLayout,
    description: 'Team and user administration',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    id: 'blog',
    name: 'Blog & Content',
    shortName: 'Blog',
    icon: FileText,
    component: BlogLayout,
    description: 'Blog posts and content management',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20'
  }
]

function DesktopSidebar({ activeLayout, onLayoutChange, isCollapsed, onToggleCollapse }) {
  return (
    <aside className={cn(
      "relative h-full border-r bg-card/50 backdrop-blur-sm transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className={cn(
          "border-b",
          isCollapsed ? "p-2" : "p-4"
        )}>
          <div className="flex items-center justify-between">
            <div className={cn(
              "flex items-center gap-2",
              isCollapsed && "flex-1 justify-center"
            )}>
              <div className={cn(
                "flex items-center justify-center rounded-lg bg-primary",
                isCollapsed ? "h-8 w-8" : "h-8 w-8"
              )}>
                <Layers className="h-4 w-4 text-primary-foreground" />
              </div>
              {!isCollapsed && (
                <div className="flex-1">
                  <h2 className="text-sm font-semibold">Layout Examples</h2>
                  <p className="text-xs text-muted-foreground">Choose a layout to preview</p>
                </div>
              )}
            </div>
            {/* Collapse Toggle Button */}
            {!isCollapsed && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-md flex-shrink-0"
                onClick={onToggleCollapse}
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
            )}
          </div>
          {/* Collapsed state toggle button */}
          {isCollapsed && (
            <div className="flex justify-center mt-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-md"
                onClick={onToggleCollapse}
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <ScrollArea className={cn(
          "flex-1",
          isCollapsed ? "px-2 py-2" : "p-3"
        )}>
          <nav className="space-y-1">
            {layouts.map((layout) => {
              const Icon = layout.icon
              const isActive = activeLayout === layout.id
              return (
                <button
                  key={layout.id}
                  onClick={() => onLayoutChange(layout.id)}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-lg text-sm transition-all",
                    isCollapsed ? "h-10 justify-center p-0" : "min-h-[2.75rem] px-3 py-2.5",
                    "hover:bg-accent/50",
                    isActive && "bg-accent shadow-sm"
                  )}
                  title={isCollapsed ? layout.name : undefined}
                >
                  <div className={cn(
                    "flex shrink-0 items-center justify-center rounded-md border",
                    isCollapsed ? "h-8 w-8" : "h-8 w-8",
                    isActive ? [layout.bgColor, layout.borderColor] : "border-border bg-background"
                  )}>
                    <Icon className={cn("h-4 w-4", isActive && layout.color)} />
                  </div>
                  {!isCollapsed && (
                    <div className="flex-1 text-left">
                      <div className="font-medium">{layout.shortName}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {layout.description}
                      </div>
                    </div>
                  )}
                </button>
              )
            })}
          </nav>
        </ScrollArea>

        {/* Footer */}
        {!isCollapsed && (
          <div className="border-t p-4">
            <p className="text-xs text-center text-muted-foreground">
              Built with React & Tailwind CSS
            </p>
          </div>
        )}
      </div>
    </aside>
  )
}

function MobileSidebar({ activeLayout, onLayoutChange, isOpen, setIsOpen }) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Layout Examples</h2>
                <p className="text-xs text-muted-foreground">Choose a layout to preview</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 p-3">
            <nav className="space-y-1">
              {layouts.map((layout) => {
                const Icon = layout.icon
                const isActive = activeLayout === layout.id
                return (
                  <button
                    key={layout.id}
                    onClick={() => {
                      onLayoutChange(layout.id)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "w-full flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                      "hover:bg-accent/50",
                      isActive && "bg-accent shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border",
                      isActive ? [layout.bgColor, layout.borderColor] : "border-border bg-background"
                    )}>
                      <Icon className={cn("h-4 w-4", isActive && layout.color)} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{layout.shortName}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {layout.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </nav>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function LayoutShowcase() {
  const [activeLayout, setActiveLayout] = useState('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  
  const activeLayoutData = layouts.find(l => l.id === activeLayout)
  const ActiveComponent = activeLayoutData?.component || DashboardLayout
  const Icon = activeLayoutData?.icon || LayoutDashboard

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
        <DesktopSidebar 
          activeLayout={activeLayout} 
          onLayoutChange={setActiveLayout}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        activeLayout={activeLayout} 
        onLayoutChange={setActiveLayout}
        isOpen={mobileOpen}
        setIsOpen={setMobileOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center gap-4 px-4 lg:px-6">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            
            {/* Page Title */}
            <div className="flex-1 flex items-center gap-3">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md border",
                activeLayoutData?.bgColor,
                activeLayoutData?.borderColor
              )}>
                <Icon className={cn("h-4 w-4", activeLayoutData?.color)} />
              </div>
              <div>
                <h1 className="text-lg font-semibold leading-none">{activeLayoutData?.name}</h1>
                <p className="text-sm text-muted-foreground">{activeLayoutData?.description}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Layout Content */}
        <main className="flex-1 overflow-hidden bg-muted/30">
          <div className="h-full overflow-auto animate-in fade-in-0 duration-200">
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  )
}