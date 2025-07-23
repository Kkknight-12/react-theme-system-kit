import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity,
  BarChart3,
  TrendingUp,
  Calendar,
  Download
} from "lucide-react"
import { useState } from "react"
import { LayoutBanner } from "@/components/LayoutBanner"
import LayoutHeader from "@/components/layouts/LayoutHeader"

export default function DashboardLayout() {
  const [timeRange, setTimeRange] = useState("7d")
  
  // Mock data
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "New Users",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      description: "from last month"
    },
    {
      title: "Sales",
      value: "12,234",
      change: "-5.4%",
      trend: "down",
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Active Now",
      value: "573",
      change: "+8.2%",
      trend: "up",
      icon: Activity,
      description: "vs yesterday"
    }
  ]

  const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00", avatar: "OM", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=36&h=36&fit=crop&q=80" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$1,299.00", avatar: "JL", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&q=80" },
    { name: "Isabella Nguyen", email: "isabella@email.com", amount: "$899.00", avatar: "IN", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=36&h=36&fit=crop&q=80" },
    { name: "William Kim", email: "will@email.com", amount: "$699.00", avatar: "WK", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=36&h=36&fit=crop&q=80" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$399.00", avatar: "SD", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=36&h=36&fit=crop&q=80" }
  ]

  // Generate chart data based on time range
  const generateChartData = () => {
    const now = new Date()
    const data = []
    
    if (timeRange === "7d") {
      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - i)
        data.push({
          date: date.toLocaleDateString('en-US', { weekday: 'short' }),
          fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          revenue: Math.floor(Math.random() * 3000) + 2000,
          sales: Math.floor(Math.random() * 300) + 200
        })
      }
    } else if (timeRange === "30d") {
      // Last 30 days - show weekly data
      for (let i = 4; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - (i * 7))
        data.push({
          date: `Week ${5 - i}`,
          fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          revenue: Math.floor(Math.random() * 15000) + 10000,
          sales: Math.floor(Math.random() * 1500) + 1000
        })
      }
    } else if (timeRange === "90d") {
      // Last 3 months
      for (let i = 2; i >= 0; i--) {
        const date = new Date(now)
        date.setMonth(date.getMonth() - i)
        data.push({
          date: date.toLocaleDateString('en-US', { month: 'short' }),
          fullDate: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          revenue: Math.floor(Math.random() * 50000) + 30000,
          sales: Math.floor(Math.random() * 5000) + 3000
        })
      }
    }
    
    return data
  }

  const chartData = generateChartData()

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
    sales: {
      label: "Sales",  
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Example Layout Banner */}
      <div className="container mx-auto px-4 py-6">
        <LayoutBanner 
          title="Dashboard Analytics" 
          description="charts, stats, and data visualization components"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        {/* Header */}
        <LayoutHeader 
          title="Analytics Dashboard"
          description="Welcome back! Here's what's happening with your business."
          className="-mx-4 mb-6"
        >
        <Button variant="outline" size="sm" className="w-full sm:w-auto">
          <Calendar className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Last 30 days</span>
          <span className="sm:hidden">30 days</span>
        </Button>
        <Button size="sm" className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Download Report</span>
          <span className="sm:hidden">Download</span>
        </Button>
        </LayoutHeader>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className={`inline-flex items-center ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                    {stat.change}
                  </span>
                  {' '}{stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 lg:grid-cols-7">
        {/* Chart Section */}
        <Card className="col-span-full lg:col-span-4 overflow-hidden">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base sm:text-lg">Revenue Overview</CardTitle>
              <CardDescription className="text-sm">Your revenue and sales performance</CardDescription>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 3 months</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="pt-4 px-2 sm:px-6">
            <div className="w-full overflow-x-auto">
              <ChartContainer config={chartConfig} className="h-[250px] sm:h-[300px] lg:h-[350px] min-w-[300px] w-full">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tick={{ fontSize: 11 }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => value >= 1000 ? `${value/1000}k` : value}
                  tick={{ fontSize: 11 }}
                  width={35}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Area
                  dataKey="revenue"
                  type="monotone"
                  fill="url(#fillRevenue)"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                />
                <Area
                  dataKey="sales"
                  type="monotone"
                  fill="url(#fillSales)"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                />
                <ChartLegend content={<ChartLegendContent className="text-xs" />} />
              </AreaChart>
            </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Sales */}
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month</CardDescription>
              </div>
              <Badge variant="secondary">
                <TrendingUp className="mr-1 h-3 w-3" />
                +12.5%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentSales.map((sale, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={sale.image} alt={sale.name} />
                      <AvatarFallback className="text-xs">{sale.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{sale.name}</p>
                      <p className="text-sm text-muted-foreground">{sale.email}</p>
                    </div>
                  </div>
                  <div className="font-medium text-sm">
                    {sale.amount}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </div>

        {/* Progress Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Weekly Goal</CardTitle>
            <CardDescription>75% of target achieved</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">$15,000 of $20,000</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Customer Satisfaction</CardTitle>
            <CardDescription>Based on 1,024 reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={89} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">4.8 out of 5.0 rating</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Order Fulfillment</CardTitle>
            <CardDescription>Last 30 days performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={92} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">92% on-time delivery</p>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  )
}