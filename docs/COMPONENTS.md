# Component Documentation

A comprehensive guide to all UI components in React Theme System Kit.

## Table of Contents

- [Form Components](#form-components)
- [Display Components](#display-components)
- [Layout Components](#layout-components)
- [Navigation Components](#navigation-components)
- [Feedback Components](#feedback-components)
- [Data Display Components](#data-display-components)
- [Overlay Components](#overlay-components)
- [Typography Components](#typography-components)

## Form Components

### Button

A versatile button component with multiple variants and sizes.

```jsx
import { Button } from '@/components/ui/button'

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// With Icons
<Button>
  <Mail className="mr-2 h-4 w-4" />
  Send Email
</Button>

// Loading State
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>

// As Child (for custom elements)
<Button asChild>
  <a href="/home">Home</a>
</Button>
```

**Props:**
- `variant`: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
- `size`: "sm" | "default" | "lg" | "icon"
- `asChild`: boolean - Render as child element
- `disabled`: boolean
- `className`: string
- All standard HTML button attributes

### Input

Text input component with consistent styling.

```jsx
import { Input } from '@/components/ui/input'

// Basic Input
<Input type="text" placeholder="Enter text..." />

// With Label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>

// Different Types
<Input type="password" />
<Input type="number" />
<Input type="date" />
<Input type="file" />

// Disabled State
<Input disabled placeholder="Disabled input" />

// With Error
<Input className="border-destructive" />
```

**Props:**
- `type`: All HTML input types
- `placeholder`: string
- `disabled`: boolean
- `className`: string
- All standard HTML input attributes

### Textarea

Multi-line text input component.

```jsx
import { Textarea } from '@/components/ui/textarea'

// Basic Textarea
<Textarea placeholder="Type your message..." />

// With Rows
<Textarea rows={4} />

// Character Counter Example
function TextareaWithCounter() {
  const [value, setValue] = useState('')
  const maxLength = 200
  
  return (
    <div className="space-y-2">
      <Textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
      />
      <p className="text-sm text-muted-foreground">
        {value.length}/{maxLength} characters
      </p>
    </div>
  )
}
```

**Props:**
- `rows`: number
- `placeholder`: string
- `disabled`: boolean
- `className`: string
- All standard HTML textarea attributes

### Checkbox

Checkbox component with accessible styling.

```jsx
import { Checkbox } from '@/components/ui/checkbox'

// Basic Checkbox
<Checkbox />

// With Label
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Controlled
function ControlledCheckbox() {
  const [checked, setChecked] = useState(false)
  
  return (
    <Checkbox 
      checked={checked}
      onCheckedChange={setChecked}
    />
  )
}

// Indeterminate State
<Checkbox checked="indeterminate" />
```

**Props:**
- `checked`: boolean | "indeterminate"
- `onCheckedChange`: (checked: boolean) => void
- `disabled`: boolean
- `className`: string

### RadioGroup

Radio button group component.

```jsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

// Basic RadioGroup
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>

// Controlled
function ControlledRadioGroup() {
  const [value, setValue] = useState("option-1")
  
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      {/* Radio items */}
    </RadioGroup>
  )
}
```

**Props (RadioGroup):**
- `value`: string
- `defaultValue`: string
- `onValueChange`: (value: string) => void
- `disabled`: boolean

**Props (RadioGroupItem):**
- `value`: string (required)
- `disabled`: boolean

### Select

Dropdown select component with search and custom styling.

```jsx
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'

// Basic Select
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>

// Controlled
function ControlledSelect() {
  const [value, setValue] = useState("")
  
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectContent>
    </Select>
  )
}

// With Groups
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Time</SelectItem>
      <SelectItem value="cst">Central Time</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">GMT</SelectItem>
      <SelectItem value="cet">CET</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

**Props:**
- `value`: string
- `defaultValue`: string
- `onValueChange`: (value: string) => void
- `disabled`: boolean

### Switch

Toggle switch component.

```jsx
import { Switch } from '@/components/ui/switch'

// Basic Switch
<Switch />

// With Label
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>

// Controlled
function ControlledSwitch() {
  const [enabled, setEnabled] = useState(false)
  
  return (
    <Switch 
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  )
}
```

**Props:**
- `checked`: boolean
- `onCheckedChange`: (checked: boolean) => void
- `disabled`: boolean
- `className`: string

### Form

Form component with validation support.

```jsx
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
})

function FormExample() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Display Components

### Card

Container component with header, content, and footer sections.

```jsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// Basic Card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Simple Card
<Card className="p-6">
  <h3 className="font-semibold">Simple Card</h3>
  <p className="text-sm text-muted-foreground">No need for sub-components</p>
</Card>

// Interactive Card
<Card className="cursor-pointer hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Clickable Card</CardTitle>
  </CardHeader>
</Card>
```

**Props (all Card components):**
- `className`: string
- All standard HTML div attributes

### Badge

Small labeling component with various styles.

```jsx
import { Badge } from '@/components/ui/badge'

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

// Custom Colors (using className)
<Badge className="bg-green-500 text-white">Success</Badge>
<Badge className="bg-yellow-500 text-white">Warning</Badge>

// With Icons
<Badge>
  <CheckCircle className="mr-1 h-3 w-3" />
  Verified
</Badge>

// As Status Indicators
<Badge variant={status === 'active' ? 'default' : 'secondary'}>
  {status}
</Badge>
```

**Props:**
- `variant`: "default" | "secondary" | "outline" | "destructive"
- `className`: string

### Alert

Callout component for important information.

```jsx
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// Basic Alert
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// With Icon
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive Alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

**Props:**
- `variant`: "default" | "destructive"
- `className`: string

### Avatar

User avatar component with image and fallback support.

```jsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Basic Avatar
<Avatar>
  <AvatarImage src="https://github.com/username.png" alt="@username" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>

// Different Sizes
<Avatar className="h-8 w-8">
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>

// With Status Indicator
<div className="relative">
  <Avatar>
    <AvatarImage src="/avatar.png" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
</div>
```

### Progress

Progress bar component.

```jsx
import { Progress } from '@/components/ui/progress'

// Basic Progress
<Progress value={33} />

// Different Values
<Progress value={0} />
<Progress value={50} />
<Progress value={100} />

// Custom Styling
<Progress value={75} className="h-2" />

// With Label
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span>75%</span>
  </div>
  <Progress value={75} />
</div>
```

**Props:**
- `value`: number (0-100)
- `className`: string

### Skeleton

Loading placeholder component.

```jsx
import { Skeleton } from '@/components/ui/skeleton'

// Basic Skeletons
<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-4 w-[150px]" />

// Card Skeleton
<Card>
  <CardHeader>
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-3 w-3/4" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-20 w-full" />
  </CardContent>
</Card>

// Avatar Skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>
```

## Layout Components

### Container

Responsive container with max-width constraints.

```jsx
import { Container } from '@/components/ui/container'

// Basic Container
<Container>
  <h1>Content within container</h1>
</Container>

// With Custom Max Width
<Container className="max-w-4xl">
  <p>Narrower container</p>
</Container>

// Full Width Section with Contained Content
<section className="bg-muted">
  <Container className="py-8">
    <h2>Section with background</h2>
  </Container>
</section>
```

### Grid

CSS Grid wrapper component.

```jsx
import { Grid } from '@/components/ui/grid'

// Basic Grid
<Grid cols={3} gap={4}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Responsive Grid
<Grid cols={{ default: 1, md: 2, lg: 3 }} gap={6}>
  {items.map(item => (
    <Card key={item.id}>{item.name}</Card>
  ))}
</Grid>
```

### Stack

Flexbox stack component for vertical/horizontal layouts.

```jsx
import { Stack } from '@/components/ui/stack'

// Vertical Stack (default)
<Stack spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

// Horizontal Stack
<Stack direction="horizontal" spacing={2} align="center">
  <Avatar />
  <div>User Name</div>
  <Badge>Pro</Badge>
</Stack>
```

### Tabs

Tabbed interface component.

```jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Basic Tabs
<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent>
        Account settings here
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    Password settings here
  </TabsContent>
  <TabsContent value="settings">
    Other settings here
  </TabsContent>
</Tabs>

// Controlled Tabs
function ControlledTabs() {
  const [activeTab, setActiveTab] = useState("account")
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      {/* Tab content */}
    </Tabs>
  )
}
```

### Collapsible

Expandable/collapsible content component.

```jsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

// Basic Collapsible
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="sm">
      <ChevronsUpDown className="h-4 w-4" />
      Toggle
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="rounded-md border px-4 py-3">
      Collapsible content goes here
    </div>
  </CollapsibleContent>
</Collapsible>

// Controlled
function ControlledCollapsible() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      {/* Content */}
    </Collapsible>
  )
}
```

### Separator

Visual divider component.

```jsx
import { Separator } from '@/components/ui/separator'

// Horizontal Separator (default)
<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium">React Theme System Kit</h4>
    <p className="text-sm text-muted-foreground">Beautiful themes</p>
  </div>
  <Separator className="my-4" />
  <div>More content below</div>
</div>

// Vertical Separator
<div className="flex h-5 items-center space-x-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
</div>
```

## Navigation Components

### Breadcrumb

Navigation breadcrumb component.

```jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

// Basic Breadcrumb
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Product Name</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// Custom Separator
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### NavigationMenu

Horizontal navigation menu with dropdowns.

```jsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

<
NavigationMenu > < NavigationMenuList > < NavigationMenuItem > < NavigationMenuTrigger > Products < /NavigationMenuTrigger>
<NavigationMenuContent >
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]" >
          <li className="row-span-3" >
            <NavigationMenuLink asChild >
              <a href="/"
                 className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6" >
                <div className="mb-2 mt-4 text-lg font-medium" >
                  React Theme System Kit
                </div >
                <p className="text-sm leading-tight text-muted-foreground" >
                  Beautiful, themeable components
                </p >
              </a >
            </NavigationMenuLink >
          </li >
          <li >
            <NavigationMenuLink asChild >
              <a href="/docs" >Documentation</a >
            </NavigationMenuLink >
          </li >
        </ul >
      </NavigationMenuContent >
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
```

### ScrollArea

Scrollable area with custom scrollbars.

```jsx
import { ScrollArea } from '@/components/ui/scroll-area'

// Basic ScrollArea
<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div className="space-y-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i}>
        <h4 className="text-sm font-medium">Item {i + 1}</h4>
        <p className="text-sm text-muted-foreground">
          Description for item {i + 1}
        </p>
      </div>
    ))}
  </div>
</ScrollArea>

// Horizontal ScrollArea
<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((image) => (
      <figure key={image.id} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img src={image.src} alt={image.alt} className="aspect-[3/4] h-fit w-fit object-cover" />
        </div>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

## Feedback Components

### Toast

Toast notification component using Sonner.

```jsx
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

// Basic Toast
<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>

// Success Toast
<Button onClick={() => toast.success("Successfully saved!")}>
  Success
</Button>

// Error Toast
<Button onClick={() => toast.error("Something went wrong")}>
  Error
</Button>

// Promise Toast
<Button onClick={() => {
  toast.promise(saveSettings(), {
    loading: 'Saving...',
    success: 'Settings saved!',
    error: 'Could not save.',
  })
}}>
  Save Settings
</Button>

// Custom Toast
<Button onClick={() => {
  toast("Event created", {
    description: "Monday, January 3rd at 6:00pm",
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  })
}}>
  Show Custom Toast
</Button>
```

### Spinner

Loading spinner component.

```jsx
import { Spinner } from '@/components/ui/spinner'

// Default Spinner
<Spinner />

// Different Sizes
<Spinner className="h-4 w-4" />
<Spinner className="h-8 w-8" />
<Spinner className="h-12 w-12" />

// With Loading Text
<div className="flex items-center space-x-2">
  <Spinner />
  <span className="text-sm text-muted-foreground">Loading...</span>
</div>

// Full Page Loader
<div className="flex h-screen items-center justify-center">
  <Spinner className="h-8 w-8" />
</div>
```

## Data Display Components

### Table

Data table component with sorting and selection.

```jsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Basic Table
<Table>
  <TableCaption>A list of recent transactions</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

// With Selection
<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-12">
        <Checkbox />
      </TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### List

List component for displaying items.

```jsx
import { List, ListItem } from '@/components/ui/list'

// Basic List
<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>

// With Icons
<List>
  <ListItem>
    <Home className="mr-2 h-4 w-4" />
    Home
  </ListItem>
  <ListItem>
    <User className="mr-2 h-4 w-4" />
    Profile
  </ListItem>
</List>

// Interactive List
<List>
  {items.map((item) => (
    <ListItem
      key={item.id}
      className="cursor-pointer hover:bg-accent"
      onClick={() => handleClick(item)}
    >
      {item.name}
    </ListItem>
  ))}
</List>
```

## Overlay Components

### Dialog

Modal dialog component.

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Basic Dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Controlled Dialog
function ControlledDialog() {
  const [open, setOpen] = useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogContent>
    </Dialog>
  )
}
```

### Sheet

Slide-out panel component.

```jsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Basic Sheet
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      {/* Form content */}
    </div>
  </SheetContent>
</Sheet>

// Different Sides
<Sheet>
  <SheetTrigger asChild>
    <Button>Right Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">Content</SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button>Left Sheet</Button>
  </SheetTrigger>
  <SheetContent side="left">Content</SheetContent>
</Sheet>
```

### Popover

Floating panel component.

```jsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Basic Popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>

// With Form
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Settings</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="width">Width</Label>
        <Input id="width" defaultValue="100%" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="height">Height</Label>
        <Input id="height" defaultValue="25px" />
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### Tooltip

Hoverable tooltip component.

```jsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Basic Tooltip (wrap app with TooltipProvider)
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// With Delay
<TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger asChild>
      <InfoIcon className="h-4 w-4" />
    </TooltipTrigger>
    <TooltipContent>
      <p>Instant tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// Different Sides
<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent side="right">
    <p>Right side tooltip</p>
  </TooltipContent>
</Tooltip>
```

### DropdownMenu

Dropdown menu component.

```jsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

// Basic Dropdown
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// With Icons and Shortcuts
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <Edit className="mr-2 h-4 w-4" />
      Edit
      <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      Copy
      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// With Checkboxes
<DropdownMenuContent>
  <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
    Status Bar
  </DropdownMenuCheckboxItem>
  <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
    Panel
  </DropdownMenuCheckboxItem>
</DropdownMenuContent>
```

### ContextMenu

Right-click context menu.

```jsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

// Basic Context Menu
<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Typography Components

### Label

Form label component.

```jsx
import { Label } from '@/components/ui/label'

// Basic Label
<Label htmlFor="email">Email</Label>

// With Required Indicator
<Label htmlFor="name">
  Name <span className="text-destructive">*</span>
</Label>

// With Helper Text
<div className="space-y-1">
  <Label htmlFor="username">Username</Label>
  <Input id="username" />
  <p className="text-sm text-muted-foreground">
    This will be your display name
  </p>
</div>
```

## Chart Components

### Chart

Recharts wrapper with theme integration.

```jsx
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent 
} from '@/components/ui/chart'
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

// Chart Configuration
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

// Area Chart Example
<ChartContainer config={chartConfig} className="h-[300px]">
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Area
      type="monotone"
      dataKey="desktop"
      stackId="1"
      stroke="var(--color-desktop)"
      fill="var(--color-desktop)"
    />
    <Area
      type="monotone"
      dataKey="mobile"
      stackId="1"
      stroke="var(--color-mobile)"
      fill="var(--color-mobile)"
    />
  </AreaChart>
</ChartContainer>
```

## Utility Components

### AspectRatio

Maintains aspect ratio for content.

```jsx
import { AspectRatio } from '@/components/ui/aspect-ratio'

// 16:9 Video
<div className="w-full">
  <AspectRatio ratio={16 / 9}>
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      className="h-full w-full"
    />
  </AspectRatio>
</div>

// Square Image
<div className="w-[300px]">
  <AspectRatio ratio={1}>
    <img src="/square-image.jpg" className="h-full w-full object-cover" />
  </AspectRatio>
</div>
```

### Command

Command palette component.

```jsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

// Command Palette
function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

## Best Practices

### 1. Accessibility
- Always use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

### 2. Responsive Design
- Use responsive variants for different screen sizes
- Test on mobile devices
- Consider touch interactions

### 3. Theme Integration
- Use CSS variables for colors
- Respect user's theme preference
- Test in both light and dark modes

### 4. Performance
- Lazy load heavy components
- Use React.memo for expensive renders
- Optimize bundle size with tree shaking

### 5. Composition
- Combine components for complex UIs
- Keep components small and focused
- Use compound components pattern

## Component Composition Examples

### Form with Validation

```jsx
function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Send Message
        </Button>
      </form>
    </Form>
  )
}
```

### Data Table with Actions

```jsx
function UserTable({ users }) {
  const [selectedUsers, setSelectedUsers] = useState([])
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox 
                checked={selectedUsers.length === users.length}
                onCheckedChange={(checked) => {
                  setSelectedUsers(checked ? users.map(u => u.id) : [])
                }}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox 
                  checked={selectedUsers.includes(user.id)}
                  onCheckedChange={(checked) => {
                    setSelectedUsers(prev => 
                      checked 
                        ? [...prev, user.id]
                        : prev.filter(id => id !== user.id)
                    )
                  }}
                />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant="outline">{user.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={user.status === 'active' ? 'default' : 'secondary'}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Settings Panel

```jsx
function SettingsPanel() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  })
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose how you want to be notified
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={notifications.email}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, email: checked }))
              }
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications
              </p>
            </div>
            <Switch
              id="push-notifications"
              checked={notifications.push}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, push: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Recharts Documentation](https://recharts.org/)

---

For live examples and interactive demos, visit the `/demo` page in your development environment.