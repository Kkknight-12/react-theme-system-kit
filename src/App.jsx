import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import SettingsSheet from '@/components/settings/SettingsSheet.jsx'
import ThemeShowcase from '@/components/ThemeShowcase.jsx'
import ShadcnShowcase from '@/components/ShadcnShowcase.jsx'
import LandingPage from '@/components/LandingPage.jsx'
import DashboardLayout from '@/components/layouts/DashboardLayout.jsx'
import EcommerceLayout from '@/components/layouts/EcommerceLayout.jsx'
import SettingsProfileLayout from '@/components/layouts/SettingsProfileLayout.jsx'
import SaasUsersLayout from '@/components/layouts/SaasUsersLayout.jsx'
import BlogLayout from '@/components/layouts/BlogLayout.jsx'
import ThemeExport from '@/pages/ThemeExport.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronDown, Layout, FileCode, Download } from 'lucide-react'
import './App.css'

// Shared Navigation Component
function Navigation() {
  const location = useLocation()
  
  const isLayoutPath = ['/dashboard', '/ecommerce', '/settings', '/users', '/blog'].includes(location.pathname)
  
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold hover:text-primary-500 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/demo" className={`text-sm flex items-center gap-1 ${location.pathname === '/demo' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>
            <FileCode className="h-4 w-4" />
            Components
          </Link>
          
          {/* Example Layouts Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={isLayoutPath ? "default" : "ghost"} size="sm" className="gap-1">
                <Layout className="h-4 w-4" />
                Example Layouts
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sample Layouts</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary-500/20" />
                  Dashboard Analytics
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/ecommerce" className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-secondary-500/20" />
                  E-commerce Store
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent-500/20" />
                  Settings & Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/users" className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-purple-500/20" />
                  SaaS User Management
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500/20" />
                  Blog & Content
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/export" className={`text-sm flex items-center gap-1 ${location.pathname === '/export' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>
            <Download className="h-4 w-4" />
            Theme Export
          </Link>
        </div>
      </div>
    </div>
  )
}

function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SettingsSheet />
      <Navigation />
      
      <div className="container mx-auto py-8">
        <Tabs defaultValue={"custom"} className="w-full space-y-6">
          <TabsList className='w-full' >
            <TabsTrigger value="custom">Custom Components</TabsTrigger>
            <TabsTrigger value="shadcn">Shadcn Components</TabsTrigger>
          </TabsList>

          <TabsContent value="custom">
            <ThemeShowcase />
          </TabsContent>

          <TabsContent value="shadcn">
            <ShadcnShowcase />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Layout wrapper with theme controls
function LayoutWrapper({ children, showSettings = true }) {
  return (
    <div className="min-h-screen bg-background">
      {showSettings && <SettingsSheet />}
      <Navigation />
      {children}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/dashboard" element={<LayoutWrapper><DashboardLayout /></LayoutWrapper>} />
        <Route path="/ecommerce" element={<LayoutWrapper><EcommerceLayout /></LayoutWrapper>} />
        <Route path="/settings" element={<LayoutWrapper><SettingsProfileLayout /></LayoutWrapper>} />
        <Route path="/users" element={<LayoutWrapper><SaasUsersLayout /></LayoutWrapper>} />
        <Route path="/blog" element={<LayoutWrapper><BlogLayout /></LayoutWrapper>} />
        <Route path="/export" element={<LayoutWrapper showSettings={false}><ThemeExport /></LayoutWrapper>} />
      </Routes>
    </Router>
  )
}

export default App