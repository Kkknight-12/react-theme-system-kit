// import SimpleSettingsDrawer from '@/components/settings/SimpleSettingsDrawer.jsx'
import SettingsSheet from '@/components/settings/SettingsSheet.jsx'
import ThemeShowcase from '@/components/ThemeShowcase.jsx'
import ShadcnShowcase from '@/components/ShadcnShowcase.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-background">
      <SettingsSheet />
      
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

export default App