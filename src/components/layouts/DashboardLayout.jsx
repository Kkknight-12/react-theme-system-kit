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
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00", avatar: "OM" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$1,299.00", avatar: "JL" },
    { name: "Isabella Nguyen", email: "isabella@email.com", amount: "$899.00", avatar: "IN" },
    { name: "William Kim", email: "will@email.com", amount: "$699.00", avatar: "WK" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$399.00", avatar: "SD" }
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
    <div className="min-h-screen bg-background p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
      </div>

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart Section */}
        <Card className="col-span-full lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Your revenue and sales performance</CardDescription>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 3 months</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <AreaChart data={chartData}>
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
                <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="date" 
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `$${value}`}
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
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
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
                      <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={sale.name} />
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
  )
}