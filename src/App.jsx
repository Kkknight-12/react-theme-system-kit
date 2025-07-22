import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import SettingsSheet from '@/components/settings/SettingsSheet.jsx'
import ThemeShowcase from '@/components/ThemeShowcase.jsx'
import ShadcnShowcase from '@/components/ShadcnShowcase.jsx'
import LandingPage from '@/components/LandingPage.jsx'
import DashboardLayout from '@/components/layouts/DashboardLayout.jsx'
import EcommerceLayout from '@/components/layouts/EcommerceLayout.jsx'
import SettingsProfileLayout from '@/components/layouts/SettingsProfileLayout.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from 'lucide-react'
import './App.css'

// Shared Navigation Component
function Navigation() {
  const location = useLocation()
  
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold hover:text-primary-500 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/demo" className={`text-sm ${location.pathname === '/demo' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>Components</Link>
          <Link to="/dashboard" className={`text-sm ${location.pathname === '/dashboard' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>Dashboard</Link>
          <Link to="/ecommerce" className={`text-sm ${location.pathname === '/ecommerce' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>E-commerce</Link>
          <Link to="/settings" className={`text-sm ${location.pathname === '/settings' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>Settings</Link>
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
function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <SettingsSheet />
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
      </Routes>
    </Router>
  )
}

export default App