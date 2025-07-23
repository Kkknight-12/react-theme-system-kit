import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Search,
  Plus,
  Filter,
  Download,
  Mail,
  MoreHorizontal,
  UserPlus,
  Users,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
  Key,
  Send,
  Building2,
  CreditCard,
  BarChart3,
} from 'lucide-react';
import { useState } from 'react';
import { LayoutBanner } from '@/components/LayoutBanner';
import LayoutHeader from '@/components/layouts/LayoutHeader';

export default function SaasUsersLayout() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data
  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      role: 'Admin',
      status: 'Active',
      team: 'Engineering',
      lastActive: '2 hours ago',
      usage: 85,
      joinDate: 'Jan 15, 2024',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      avatar: 'https://i.pravatar.cc/150?u=michael',
      role: 'Editor',
      status: 'Active',
      team: 'Marketing',
      lastActive: '5 mins ago',
      usage: 62,
      joinDate: 'Feb 3, 2024',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@example.com',
      avatar: 'https://i.pravatar.cc/150?u=emily',
      role: 'Viewer',
      status: 'Inactive',
      team: 'Sales',
      lastActive: '3 days ago',
      usage: 23,
      joinDate: 'Dec 10, 2023',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      avatar: 'https://i.pravatar.cc/150?u=james',
      role: 'Editor',
      status: 'Active',
      team: 'Engineering',
      lastActive: '1 hour ago',
      usage: 91,
      joinDate: 'Nov 28, 2023',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa.thompson@example.com',
      avatar: 'https://i.pravatar.cc/150?u=lisa',
      role: 'Admin',
      status: 'Pending',
      team: 'HR',
      lastActive: 'Never',
      usage: 0,
      joinDate: 'Mar 1, 2024',
    },
  ];

  const stats = [
    {
      title: 'Total Users',
      value: '2,345',
      change: '+12%',
      icon: Users,
      description: 'All time',
    },
    {
      title: 'Active Users',
      value: '1,893',
      change: '+5%',
      icon: CheckCircle,
      description: 'Last 30 days',
    },
    {
      title: 'Team Members',
      value: '45',
      change: '+2',
      icon: Building2,
      description: 'Across 8 teams',
    },
    {
      title: 'Avg. Usage',
      value: '73%',
      change: '+8%',
      icon: BarChart3,
      description: 'Per user',
    },
  ];

  const teams = [
    { name: 'Engineering', members: 12, usage: 89 },
    { name: 'Marketing', members: 8, usage: 76 },
    { name: 'Sales', members: 15, usage: 82 },
    { name: 'HR', members: 5, usage: 64 },
    { name: 'Support', members: 10, usage: 91 },
  ];

  const getRoleBadgeVariant = role => {
    switch (role) {
      case 'Admin':
        return 'destructive';
      case 'Editor':
        return 'default';
      case 'Viewer':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusBadgeVariant = status => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = status => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="h-3 w-3" />;
      case 'Inactive':
        return <XCircle className="h-3 w-3" />;
      case 'Pending':
        return <AlertCircle className="h-3 w-3" />;
      default:
        return null;
    }
  };

  const toggleUserSelection = userId => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId],
    );
  };

  const toggleAllUsers = () => {
    setSelectedUsers(prev =>
      prev.length === users.length ? [] : users.map(u => u.id),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Example Layout Banner */}
      <div className="container mx-auto px-4 py-6">
        <LayoutBanner
          title="SaaS User Management"
          description="user tables, team management, and role-based access controls"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        {/* Header */}
        <LayoutHeader
          title="User Management"
          description="Manage your team members and their permissions"
          className="-mx-4 mb-6"
        >
        <Button className="w-full sm:w-auto">
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Users
        </Button>
        </LayoutHeader>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span
                    className={
                      stat.change.startsWith('+')
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="ml-1">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="w-full">
          <TabsTrigger value="users">All Users</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="invitations">Invitations</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          {/* Filters and Search */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col gap-3">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search users by name or email..."
                    className="pl-9 w-full"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select value={filterRole} onValueChange={setFilterRole}>
                    <SelectTrigger className="w-full sm:w-[130px]">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full sm:w-[130px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Users Table */}
              <div className="rounded-md border overflow-x-auto">
                <Table className="min-w-[800px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedUsers.length === users.length}
                          onCheckedChange={toggleAllUsers}
                        />
                      </TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead>Usage</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={() => toggleUserSelection(user.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>
                                {user.name
                                  .split(' ')
                                  .map(n => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getRoleBadgeVariant(user.role)}>
                            <Shield className="mr-1 h-3 w-3" />
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={getStatusBadgeVariant(user.status)}
                            className="gap-1"
                          >
                            {getStatusIcon(user.status)}
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.team}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={user.usage} className="w-16" />
                            <span className="text-sm text-muted-foreground">
                              {user.usage}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {user.lastActive}
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Key className="mr-2 h-4 w-4" />
                                Reset Password
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="mr-2 h-4 w-4" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Remove User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Bulk Actions */}
              {selectedUsers.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">
                    {selectedUsers.length} selected
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Send Email</span>
                      <span className="sm:hidden">Email</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Shield className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Change Role</span>
                      <span className="sm:hidden">Role</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-base">
                    <span>{team.name}</span>
                    <Badge variant="secondary" className="w-fit">
                      {team.members} members
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Team Usage</span>
                      <span className="font-medium">{team.usage}%</span>
                    </div>
                    <Progress value={team.usage} />
                  </div>
                  <Button variant="outline" className="w-full">
                    Manage Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invitations">
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Manage pending user invitations</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-8 text-muted-foreground">
              <Send className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <p>No pending invitations</p>
              <Button variant="outline" className="mt-4">
                <UserPlus className="mr-2 h-4 w-4" />
                Send New Invitation
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                User activity in the last 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    user: 'Sarah Johnson',
                    action: 'logged in',
                    time: '2 mins ago',
                  },
                  {
                    user: 'Michael Chen',
                    action: 'updated profile',
                    time: '15 mins ago',
                  },
                  {
                    user: 'James Wilson',
                    action: 'created new project',
                    time: '1 hour ago',
                  },
                  {
                    user: 'Admin',
                    action: 'invited Lisa Thompson',
                    time: '3 hours ago',
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-muted-foreground">
                        {' '}
                        {activity.action}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}