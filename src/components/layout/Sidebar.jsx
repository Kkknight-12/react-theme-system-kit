import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  Settings,
  Mail,
  Calendar,
  MessageSquare,
  Layers,
  ChevronRight,
  ChevronLeft,
  Package,
  CreditCard,
  TrendingUp,
  Shield,
  Database,
  Palette,
  FileCode
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const navigation = [
  {
    title: 'Dashboards',
    icon: Home,
    items: [
      { name: 'Analytics', href: '/dashboards/analytics' },
      { name: 'E-commerce', href: '/dashboards/ecommerce' },
      { name: 'CRM', href: '/dashboards/crm' },
      { name: 'Banking', href: '/dashboards/banking' },
      { name: 'Crypto', href: '/dashboards/crypto' },
    ]
  },
  {
    title: 'Apps',
    icon: Layers,
    items: [
      { name: 'Email', href: '/apps/email', icon: Mail },
      { name: 'Chat', href: '/apps/chat', icon: MessageSquare },
      { name: 'Calendar', href: '/apps/calendar', icon: Calendar },
      { name: 'Kanban', href: '/apps/kanban', icon: Layers },
    ]
  },
  {
    title: 'E-commerce',
    icon: ShoppingCart,
    items: [
      { name: 'Products', href: '/ecommerce/products', icon: Package },
      { name: 'Orders', href: '/ecommerce/orders', icon: FileText },
      { name: 'Customers', href: '/ecommerce/customers', icon: Users },
      { name: 'Invoices', href: '/ecommerce/invoices', icon: CreditCard },
    ]
  },
  {
    title: 'Users',
    icon: Users,
    items: [
      { name: 'User List', href: '/users/list' },
      { name: 'User Grid', href: '/users/grid' },
      { name: 'User Profile', href: '/users/profile' },
      { name: 'Add User', href: '/users/add' },
    ]
  },
  {
    title: 'Pages',
    icon: FileText,
    items: [
      { name: 'Authentication', href: '/pages/auth', icon: Shield },
      { name: 'Error Pages', href: '/pages/errors' },
      { name: 'Utility Pages', href: '/pages/utility' },
      { name: 'Pricing', href: '/pages/pricing' },
    ]
  },
  {
    title: 'Components',
    icon: Palette,
    items: [
      { name: 'Forms', href: '/components/forms' },
      { name: 'Tables', href: '/components/tables' },
      { name: 'Charts', href: '/components/charts', icon: BarChart3 },
      { name: 'UI Elements', href: '/components/ui' },
    ]
  },
];

export default function Sidebar({ open, collapsed, onCollapsedChange, onOpenChange }) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(['Dashboards']);

  const toggleSection = (title) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (href) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-background border-r transition-all duration-300",
          "flex flex-col",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          collapsed ? "w-20" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <FileCode className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <span className="font-semibold text-lg">Theme Kit</span>
            )}
          </Link>
          
          {/* Collapse button - desktop only */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCollapsedChange(!collapsed)}
            className="hidden lg:flex"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="px-2 space-y-1">
            {navigation.map((section) => (
              <Collapsible
                key={section.title}
                open={expandedSections.includes(section.title) && !collapsed}
                onOpenChange={() => toggleSection(section.title)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3",
                      collapsed && "justify-center"
                    )}
                  >
                    <section.icon className="h-5 w-5 shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{section.title}</span>
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform",
                          expandedSections.includes(section.title) && "rotate-90"
                        )} />
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                
                {!collapsed && (
                  <CollapsibleContent className="pl-11 pr-2 pb-1 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          "hover:bg-accent hover:text-accent-foreground",
                          isActive(item.href) && "bg-accent text-accent-foreground font-medium"
                        )}
                      >
                        {item.icon && <item.icon className="h-4 w-4" />}
                        {item.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ))}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t p-4">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3",
              collapsed && "justify-center"
            )}
            asChild
          >
            <Link to="/settings">
              <Settings className="h-5 w-5" />
              {!collapsed && <span>Settings</span>}
            </Link>
          </Button>
        </div>
      </aside>
    </>
  );
}