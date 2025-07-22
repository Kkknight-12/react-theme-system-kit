import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SettingsSheet from '@/components/settings/SettingsSheet.jsx'
import ThemeShowcase from '@/components/ThemeShowcase.jsx'
import ShadcnShowcase from '@/components/ShadcnShowcase.jsx'
import LandingPage from '@/components/LandingPage.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from 'lucide-react'
import './App.css'

function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SettingsSheet />
      
      {/* Navigation Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold hover:text-primary-500 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-xl font-bold">Component Demo</h1>
        </div>
      </div>
      
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  )
}

export default App