import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { AlertCircle, Terminal, Zap, Sparkles, ChevronRight, User, Settings, LogOut, ChevronDown, Info, Navigation, CalendarDays } from "lucide-react"
import { useState, useEffect } from "react"

export default function ShadcnShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false)
  const [checked, setChecked] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [selectedSize, setSelectedSize] = useState("medium")
  const [progress, setProgress] = useState(13)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-primary-500 mb-4">
            Shadcn/UI Component Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete component showcase with 40+ components, all integrated with our multi-theme system.
            Switch themes to see instant updates across all components.
          </p>
        </section>

        {/* Navigation Components */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Navigation className="h-8 w-8 text-primary-500" />
            Navigation
          </h2>
          
          {/* Breadcrumb */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
              <CardDescription>Navigation breadcrumbs for hierarchical pages</CardDescription>
            </CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>

          {/* Dropdown Menu */}
          <Card>
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
              <CardDescription>Contextual menus with keyboard navigation</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Open Menu <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        </section>

        {/* Form Components */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Form Controls</h2>
          
          {/* Basic Inputs */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>Various input types and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here." 
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Checkboxes and Switches */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Toggles & Checkboxes</CardTitle>
              <CardDescription>Interactive form controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Label htmlFor="terms" className="cursor-pointer">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="airplane-mode" className="cursor-pointer">
                  Enable notifications
                </Label>
                <Switch 
                  id="airplane-mode"
                  checked={enabled}
                  onCheckedChange={setEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Radio Groups */}
          <Card>
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
              <CardDescription>Single selection from multiple options</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small" className="cursor-pointer">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large" className="cursor-pointer">Large</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </section>

        {/* Data Display */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Data Display</h2>
          
          {/* Avatar */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
              <CardDescription>User profile images with fallbacks</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback className="bg-primary-500 text-white">AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-secondary-500 text-white">XY</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Data Table</CardTitle>
              <CardDescription>Structured data display</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>
                      <Badge className="bg-success text-white">Paid</Badge>
                    </TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Pending</Badge>
                    </TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>
                      <Badge variant="outline">Unpaid</Badge>
                    </TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
              <CardDescription>Visual progress feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Skeleton Loading */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton Loading States</CardTitle>
              <CardDescription>Content placeholders while loading</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[60%]" />
                  <div className="flex items-center space-x-4 pt-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[200px]" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p>Content has loaded!</p>
                  <div className="flex items-center space-x-4 pt-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Overlays & Popovers */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Overlays & Tooltips</h2>
          
          {/* Tooltips and Popovers */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tooltips & Popovers</CardTitle>
              <CardDescription>Contextual information on hover or click</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Info className="h-4 w-4" />
                    Hover me
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a helpful tooltip</p>
                </TooltipContent>
              </Tooltip>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Open Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Drawer */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
              <CardDescription>Slide-out panels for additional content</CardDescription>
            </CardHeader>
            <CardContent>
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button>Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Edit Profile</DrawerTitle>
                    <DrawerDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="drawer-name">Name</Label>
                      <Input id="drawer-name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="drawer-email">Email</Label>
                      <Input id="drawer-email" type="email" defaultValue="john@example.com" />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button onClick={() => setDrawerOpen(false)}>Save changes</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>

          {/* Toast Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Toast Notifications</CardTitle>
              <CardDescription>Non-intrusive feedback messages</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              <Button
                onClick={() => toast("Event has been created")}
              >
                Default Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => 
                  toast.success("Successfully saved!", {
                    description: "Your changes have been saved.",
                  })
                }
              >
                Success Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => 
                  toast.error("Something went wrong", {
                    description: "Please try again later.",
                  })
                }
              >
                Error Toast
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Layout Components */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Layout & Structure</h2>
          
          {/* Collapsible */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Collapsible Sections</CardTitle>
              <CardDescription>Expandable content areas</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible
                open={isCollapsibleOpen}
                onOpenChange={setIsCollapsibleOpen}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4">
                  <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronRight className={`h-4 w-4 transition-transform ${isCollapsibleOpen ? 'rotate-90' : ''}`} />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Scroll Area */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Scroll Area</CardTitle>
              <CardDescription>Custom scrollable regions</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-72 w-full rounded-md border p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i}>
                    <div className="text-sm py-2">
                      Tag {i + 1}
                    </div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Separator */}
          <Card>
            <CardHeader>
              <CardTitle>Separators</CardTitle>
              <CardDescription>Visual dividers for content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                  <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Original Components - Reorganized */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Core Components</h2>
          
          {/* Buttons */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>All available button styles</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button disabled>Disabled</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <div className="flex gap-2 items-center ml-4">
                <Badge className="bg-success text-white hover:bg-success/90">Success</Badge>
                <Badge className="bg-warning text-white hover:bg-warning/90">Warning</Badge>
                <Badge className="bg-info text-white hover:bg-info/90">Info</Badge>
                <Badge className="bg-primary-500 text-white hover:bg-primary-600">Primary</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Alert Messages</CardTitle>
              <CardDescription>Contextual feedback messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>

              <Alert className="border-success bg-success/10">
                <Zap className="h-4 w-4 text-success" />
                <AlertTitle className="text-success">Success!</AlertTitle>
                <AlertDescription className="text-success">
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>

              <Alert className="border-primary-500 bg-primary-500/10">
                <Sparkles className="h-4 w-4 text-primary-500" />
                <AlertTitle className="text-primary-600">Theme Applied!</AlertTitle>
                <AlertDescription className="text-primary-600">
                  Components are now using your custom theme colors.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tabs Component</CardTitle>
              <CardDescription>Organize content into switchable panels</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@peduarte" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog Component</CardTitle>
              <CardDescription>Modal dialogs for important interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="dialog-name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="dialog-name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="dialog-username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="dialog-username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>

        {/* Theme Integration Info */}
        <section>
          <Card className="border-primary-500/20 bg-primary-500/5">
            <CardHeader>
              <CardTitle className="text-primary-600">🎨 Complete Theme Integration</CardTitle>
              <CardDescription className="text-primary-600/80">
                40+ components, 8 themes, infinite possibilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary-600">What's Included:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>All 40+ shadcn/ui components</li>
                    <li>8 pre-built color themes</li>
                    <li>Instant dark/light mode switching</li>
                    <li>Consistent design system</li>
                    <li>Tailwind v4 integration</li>
                    <li>Fully typed components</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary-600">Theme Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Dynamic theme switching</li>
                    <li>Persistent theme preferences</li>
                    <li>Custom color support</li>
                    <li>Semantic color system</li>
                    <li>Accessible contrast ratios</li>
                    <li>Production optimized</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-center text-muted-foreground">
                Switch themes using the settings panel to see all components update instantly!
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </TooltipProvider>
  )
}