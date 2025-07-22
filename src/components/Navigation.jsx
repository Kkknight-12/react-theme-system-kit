import { Link, useLocation } from 'react-router'
import { ArrowLeft, Layout, FileCode, Download } from 'lucide-react'

// Shared Navigation Component
export default function Navigation() {
  const location = useLocation()
  
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
          
          <Link to="/layouts" className={`text-sm flex items-center gap-1 ${location.pathname === '/layouts' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>
            <Layout className="h-4 w-4" />
            Example Layouts
          </Link>
          
          <Link to="/export" className={`text-sm flex items-center gap-1 ${location.pathname === '/export' ? 'font-medium text-primary-500' : 'hover:text-primary-500'}`}>
            <Download className="h-4 w-4" />
            Theme Export
          </Link>
        </div>
      </div>
    </div>
  )
}