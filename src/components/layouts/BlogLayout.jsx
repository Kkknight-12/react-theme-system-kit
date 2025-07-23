import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Calendar,
  Clock,
  Tag,
  TrendingUp,
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
  Search,
  ChevronRight,
  Eye,
  User,
  ArrowRight,
  Filter,
  Rss,
  Edit3,
  FileText,
  Hash,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LayoutBanner } from '@/components/LayoutBanner';
import LayoutHeader from '@/components/layouts/LayoutHeader';

export default function BlogLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Mock data
  const featuredPost = {
    id: 1,
    title: 'Building Scalable Design Systems with React and TypeScript',
    excerpt:
      "Learn how to create maintainable, type-safe design systems that scale with your team and product. We'll explore best practices, common pitfalls, and real-world examples.",
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?u=sarah-chen',
      role: 'Senior Frontend Engineer',
    },
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    category: 'Engineering',
    tags: ['React', 'TypeScript', 'Design Systems'],
    publishedAt: 'Mar 15, 2024',
    readTime: '12 min read',
    views: 15420,
    likes: 892,
    comments: 47,
  };

  const posts = [
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt:
        'Explore the emerging technologies and practices shaping the future of web development.',
      author: {
        name: 'Alex Kumar',
        avatar: 'https://i.pravatar.cc/150?u=alex',
      },
      coverImage:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop',
      category: 'Technology',
      tags: ['Web Dev', 'Trends'],
      publishedAt: 'Mar 14, 2024',
      readTime: '8 min read',
      views: 8234,
      likes: 456,
      comments: 23,
    },
    {
      id: 3,
      title: 'Mastering CSS Grid: A Comprehensive Guide',
      excerpt:
        'Dive deep into CSS Grid with practical examples and learn how to create complex layouts effortlessly.',
      author: {
        name: 'Maria Garcia',
        avatar: 'https://i.pravatar.cc/150?u=maria',
      },
      coverImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      category: 'CSS',
      tags: ['CSS', 'Layout', 'Tutorial'],
      publishedAt: 'Mar 13, 2024',
      readTime: '15 min read',
      views: 12567,
      likes: 734,
      comments: 41,
    },
    {
      id: 4,
      title: 'Optimizing React Performance: Tips and Tricks',
      excerpt:
        "Learn practical techniques to improve your React application's performance and user experience.",
      author: {
        name: 'James Wilson',
        avatar: 'https://i.pravatar.cc/150?u=james',
      },
      coverImage:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      category: 'React',
      tags: ['React', 'Performance', 'Optimization'],
      publishedAt: 'Mar 12, 2024',
      readTime: '10 min read',
      views: 9876,
      likes: 623,
      comments: 35,
    },
    {
      id: 5,
      title: 'Getting Started with Next.js 14: App Router Deep Dive',
      excerpt:
        'A comprehensive guide to the new App Router in Next.js 14 with practical examples.',
      author: {
        name: 'Emily Zhang',
        avatar: 'https://i.pravatar.cc/150?u=emily',
      },
      coverImage:
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=300&fit=crop',
      category: 'Next.js',
      tags: ['Next.js', 'React', 'Framework'],
      publishedAt: 'Mar 11, 2024',
      readTime: '18 min read',
      views: 14321,
      likes: 892,
      comments: 56,
    },
    {
      id: 6,
      title: 'The Art of Writing Clean Code: Best Practices',
      excerpt:
        'Discover the principles and practices that lead to maintainable, readable, and efficient code.',
      author: {
        name: 'David Park',
        avatar: 'https://i.pravatar.cc/150?u=david',
      },
      coverImage:
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=300&fit=crop',
      category: 'Best Practices',
      tags: ['Clean Code', 'Programming'],
      publishedAt: 'Mar 10, 2024',
      readTime: '6 min read',
      views: 7654,
      likes: 445,
      comments: 28,
    },
  ];

  const categories = [
    { name: 'All', value: 'all', count: 156 },
    { name: 'Engineering', value: 'engineering', count: 45 },
    { name: 'Design', value: 'design', count: 32 },
    { name: 'Technology', value: 'technology', count: 28 },
    { name: 'React', value: 'react', count: 24 },
    { name: 'CSS', value: 'css', count: 18 },
    { name: 'Best Practices', value: 'best-practices', count: 9 },
  ];

  const popularTags = [
    'React',
    'TypeScript',
    'JavaScript',
    'CSS',
    'Next.js',
    'Design Systems',
    'Performance',
    'Web Dev',
    'Tutorial',
    'Best Practices',
  ];

  const trendingPosts = [
    {
      title: 'Understanding React Server Components',
      views: 23456,
      trend: '+45%',
    },
    {
      title: 'CSS Container Queries: The Future is Here',
      views: 18234,
      trend: '+32%',
    },
    {
      title: 'Building Micro Frontends with Module Federation',
      views: 15678,
      trend: '+28%',
    },
    {
      title: 'The Complete Guide to Web Accessibility',
      views: 12345,
      trend: '+18%',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Example Layout Banner */}
      <div className="container mx-auto px-4 py-6">
        <LayoutBanner
          title="Blog & Content"
          description="article layouts, author profiles, and content management"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        {/* Header */}
        <LayoutHeader
          title="Developer Blog"
          description="Insights, tutorials, and best practices from our engineering team"
          className="-mx-4 mb-6"
        >
          {/* Search */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10 pr-4 w-full"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </LayoutHeader>
        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors',
                      selectedCategory === category.value
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted',
                    )}
                  >
                    <span>{category.name}</span>
                    <Badge
                      variant={
                        selectedCategory === category.value
                          ? 'secondary'
                          : 'outline'
                      }
                    >
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80"
                    >
                      <Hash className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rss className="h-4 w-4" />
                  Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest posts delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Featured Post */}
            <Card className="overflow-hidden pt-0 pb-6">
              <div className="aspect-[3/2] sm:aspect-[2/1] overflow-hidden">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{featuredPost.category}</Badge>
                  <span className="text-sm text-muted-foreground">
                    Featured
                  </span>
                </div>
                <CardTitle className="text-xl sm:text-2xl">
                  <a href="#" className="hover:text-primary transition-colors">
                    {featuredPost.title}
                  </a>
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredPost.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={featuredPost.author.avatar} />
                      <AvatarFallback>
                        {featuredPost.author.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {featuredPost.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {featuredPost.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 sm:px-4"
                    >
                      <Heart className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">
                        {featuredPost.likes}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 sm:px-4"
                    >
                      <MessageSquare className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">
                        {featuredPost.comments}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 sm:px-4"
                    >
                      <Share2 className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Share</span>
                    </Button>
                  </div>
                  <Button className="w-full sm:w-auto">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="latest" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
                <Select value={viewMode} onValueChange={setViewMode}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grid View</SelectItem>
                    <SelectItem value="list">List View</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <TabsContent value="latest" className="space-y-6">
                <div
                  className={cn(
                    'grid gap-6',
                    viewMode === 'grid' ? 'md:grid-cols-2' : 'grid-cols-1',
                  )}
                >
                  {posts.map(post => (
                    <Card
                      key={post.id}
                      className="overflow-hidden pt-0 pb-6 hover:shadow-lg transition-shadow"
                    >
                      {viewMode === 'grid' && (
                        <div className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {post.publishedAt}
                          </span>
                        </div>
                        <CardTitle className="text-xl">
                          <a
                            href="#"
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </a>
                        </CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={post.author.avatar} />
                              <AvatarFallback>
                                {post.author.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {post.readTime}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {post.comments}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <div className="flex items-center gap-2">
                          {post.tags.map(tag => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                  <Button variant="outline">
                    Load More Articles
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="popular">
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>Popular posts based on engagement</p>
                </div>
              </TabsContent>

              <TabsContent value="trending">
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <Card key={index}>
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl font-bold text-muted-foreground">
                            #{index + 1}
                          </div>
                          <div>
                            <h3 className="font-medium">{post.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {post.views.toLocaleString()} views
                            </p>
                          </div>
                        </div>
                        <Badge variant="success" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {post.trend}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}