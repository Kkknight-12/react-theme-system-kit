import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from '@/components/layouts/DashboardLayout.jsx'
import EcommerceLayout from '@/components/layouts/EcommerceLayout.jsx'
import SettingsProfileLayout from '@/components/layouts/SettingsProfileLayout.jsx'
import SaasUsersLayout from '@/components/layouts/SaasUsersLayout.jsx'
import BlogLayout from '@/components/layouts/BlogLayout.jsx'
import { LayoutDashboard, ShoppingBag, Settings, Users, FileText } from 'lucide-react'

const layouts = [
  {
    id: 'dashboard',
    name: 'Dashboard Analytics',
    icon: LayoutDashboard,
    component: DashboardLayout,
    color: 'primary'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    icon: ShoppingBag,
    component: EcommerceLayout,
    color: 'secondary'
  },
  {
    id: 'settings',
    name: 'Settings & Profile',
    icon: Settings,
    component: SettingsProfileLayout,
    color: 'accent'
  },
  {
    id: 'users',
    name: 'SaaS User Management',
    icon: Users,
    component: SaasUsersLayout,
    color: 'purple'
  },
  {
    id: 'blog',
    name: 'Blog & Content',
    icon: FileText,
    component: BlogLayout,
    color: 'green'
  }
]

export default function LayoutShowcase() {
  const [activeLayout, setActiveLayout] = useState('dashboard')
  
  const ActiveComponent = layouts.find(l => l.id === activeLayout)?.component || DashboardLayout

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Layout Examples</h1>
          <p className="text-lg text-muted-foreground">
            Explore different layout patterns built with our theme system
          </p>
        </div>

        <Tabs value={activeLayout} onValueChange={setActiveLayout} className="w-full">
          <TabsList className="w-full grid grid-cols-2 lg:grid-cols-5 h-auto p-1 mb-8">
            {layouts.map((layout) => {
              const Icon = layout.icon
              return (
                <TabsTrigger
                  key={layout.id}
                  value={layout.id}
                  className="flex flex-col gap-2 py-3 data-[state=active]:bg-background"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs sm:text-sm">{layout.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {layouts.map((layout) => (
            <TabsContent key={layout.id} value={layout.id} className="mt-0">
              <div className="rounded-lg border bg-card">
                <layout.component />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}