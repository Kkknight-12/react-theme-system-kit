import { createBrowserRouter, RouterProvider } from 'react-router'
import SettingsSheet from '@/components/settings/SettingsSheet.jsx'
import Navigation from '@/components/Navigation.jsx'
import ThemeShowcase from '@/components/ThemeShowcase.jsx'
import ShadcnShowcase from '@/components/ShadcnShowcase.jsx'
import LandingPage from '@/components/LandingPage.jsx'
import LayoutShowcase from '@/components/LayoutShowcase.jsx'
import ThemeExport from '@/components/ThemeExport.jsx'
import NotFound from '@/components/NotFound.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'

// Demo Page Component
function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SettingsSheet />
      <Navigation />
      
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <Tabs defaultValue={"custom"} className="w-full space-y-6">
          <TabsList className='w-full max-w-md mx-auto grid grid-cols-2'>
            <TabsTrigger value="custom" className="text-xs sm:text-sm">Custom Components</TabsTrigger>
            <TabsTrigger value="shadcn" className="text-xs sm:text-sm">Shadcn Components</TabsTrigger>
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

// Layouts Page
function LayoutsPage() {
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <SettingsSheet />
      <Navigation />
      <div className="flex-1 overflow-hidden">
        <LayoutShowcase />
      </div>
    </div>
  )
}

// Export Page
function ExportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeExport />
    </div>
  )
}

// Create the router with simple routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/demo",
    element: <DemoPage />
  },
  {
    path: "/layouts",
    element: <LayoutsPage />
  },
  {
    path: "/export",
    element: <ExportPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App