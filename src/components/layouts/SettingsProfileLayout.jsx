import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Divider } from '@/components/ui/divider'
import {
  Bell,
  Camera,
  Download,
  Globe,
  Lock,
  LogOut,
  Palette,
  Shield,
  Smartphone,
  Trash2,
  User
} from 'lucide-react'
import { useState } from 'react'
import { LayoutBanner } from '@/components/LayoutBanner'

export default function SettingsProfileLayout() {
  const [emailNotifications, setEmailNotifications] = useState({
    marketing: true,
    updates: true,
    security: true,
    newsletter: false
  })
  
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showActivity: true
  })

  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Example Layout Banner */}
          <LayoutBanner 
            title="Settings & Profile" 
            description="form controls, tabs, and user preferences"
          />
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Lock className="mr-2 h-4 w-4" />
                  Security
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Privacy
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Palette className="mr-2 h-4 w-4" />
                  Appearance
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Globe className="mr-2 h-4 w-4" />
                  Language
                </Button>
                <Divider className="my-4" />
                <Button variant="ghost" className="w-full justify-start text-destructive" size="sm">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your profile details and public information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Avatar */}
                      <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80" alt="Profile" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <Button size="sm">
                            <Camera className="mr-2 h-4 w-4" />
                            Change Photo
                          </Button>
                          <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 2MB</p>
                        </div>
                      </div>

                      <Divider />

                      {/* Form Fields */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea 
                            id="bio" 
                            placeholder="Tell us about yourself"
                            defaultValue="Full-stack developer passionate about creating beautiful user experiences."
                            rows={4}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>

                  {/* Connected Accounts */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Connected Accounts</CardTitle>
                      <CardDescription>Manage your connected social accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">G</div>
                          <div>
                            <p className="font-medium">Google</p>
                            <p className="text-sm text-muted-foreground">john.doe@gmail.com</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                      <Divider />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white font-bold">GH</div>
                          <div>
                            <p className="font-medium">GitHub</p>
                            <p className="text-sm text-muted-foreground">Not connected</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>Change your password or enable two-factor authentication</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                      <CardDescription>Add an extra layer of security to your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Enable 2FA</p>
                          <p className="text-sm text-muted-foreground">Use an authenticator app to generate one-time codes</p>
                        </div>
                        <Switch 
                          checked={twoFactor}
                          onCheckedChange={setTwoFactor}
                        />
                      </div>
                      {twoFactor && (
                        <Alert>
                          <Shield className="h-4 w-4" />
                          <AlertTitle>2FA is enabled</AlertTitle>
                          <AlertDescription>
                            Your account is protected with two-factor authentication
                          </AlertDescription>
                        </Alert>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Active Sessions</CardTitle>
                      <CardDescription>Manage your active sessions across devices</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Smartphone className="h-8 w-8 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Chrome on MacBook Pro</p>
                              <p className="text-sm text-muted-foreground">San Francisco, CA • Current session</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Active</Badge>
                        </div>
                        <Divider />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Smartphone className="h-8 w-8 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Safari on iPhone</p>
                              <p className="text-sm text-muted-foreground">San Francisco, CA • 2 hours ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Revoke</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent value="notifications" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Email Notifications</CardTitle>
                      <CardDescription>Choose what emails you want to receive</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Marketing Emails</p>
                          <p className="text-sm text-muted-foreground">Receive emails about new products and features</p>
                        </div>
                        <Switch 
                          checked={emailNotifications.marketing}
                          onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, marketing: checked})}
                        />
                      </div>
                      <Divider />
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Product Updates</p>
                          <p className="text-sm text-muted-foreground">Get notified about important product updates</p>
                        </div>
                        <Switch 
                          checked={emailNotifications.updates}
                          onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, updates: checked})}
                        />
                      </div>
                      <Divider />
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Security Alerts</p>
                          <p className="text-sm text-muted-foreground">Important notifications about your account security</p>
                        </div>
                        <Switch 
                          checked={emailNotifications.security}
                          onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, security: checked})}
                        />
                      </div>
                      <Divider />
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-muted-foreground">Tips, trends, and insights delivered weekly</p>
                        </div>
                        <Switch 
                          checked={emailNotifications.newsletter}
                          onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, newsletter: checked})}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Push Notifications</CardTitle>
                      <CardDescription>Control notifications on your devices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Alert>
                        <Bell className="h-4 w-4" />
                        <AlertTitle>Browser notifications</AlertTitle>
                        <AlertDescription>
                          Enable browser notifications to receive real-time updates
                          <Button variant="outline" size="sm" className="mt-2">
                            Enable Notifications
                          </Button>
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Privacy Tab */}
                <TabsContent value="privacy" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>Control how others see your information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <Label>Profile Visibility</Label>
                        <RadioGroup value={privacy.profileVisibility} onValueChange={(value) => setPrivacy({...privacy, profileVisibility: value})}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="public" id="public" />
                            <Label htmlFor="public" className="font-normal cursor-pointer">
                              Public - Anyone can view your profile
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="friends" id="friends" />
                            <Label htmlFor="friends" className="font-normal cursor-pointer">
                              Friends Only - Only your connections can view
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="private" id="private" />
                            <Label htmlFor="private" className="font-normal cursor-pointer">
                              Private - Only you can view your profile
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <Divider />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Show Email Address</p>
                            <p className="text-sm text-muted-foreground">Display your email on your public profile</p>
                          </div>
                          <Switch 
                            checked={privacy.showEmail}
                            onCheckedChange={(checked) => setPrivacy({...privacy, showEmail: checked})}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Show Activity Status</p>
                            <p className="text-sm text-muted-foreground">Let others see when you're active</p>
                          </div>
                          <Switch 
                            checked={privacy.showActivity}
                            onCheckedChange={(checked) => setPrivacy({...privacy, showActivity: checked})}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Data & Privacy</CardTitle>
                      <CardDescription>Manage your data and account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="mr-2 h-4 w-4" />
                        Download Your Data
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}