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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import {
  Filter,
  Grid3x3,
  Heart,
  List,
  Package,
  RotateCcw,
  Search,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LayoutBanner } from '@/components/LayoutBanner';
import LayoutHeader from '@/components/layouts/LayoutHeader';

// Product Image Component with loading state
function ProductImage({ src, alt, className }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-64 bg-muted">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse bg-muted-foreground/20 w-full h-full" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Package className="h-12 w-12 text-muted-foreground" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-all duration-300',
            loading && 'opacity-0',
            className,
          )}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}
    </div>
  );
}

export default function EcommerceLayout() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: 'all',
    rating: 'all',
  });

  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.5,
      reviews: 124,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 499.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      badge: 'New',
      inStock: true,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.2,
      reviews: 256,
      image:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      badge: 'Sale',
      inStock: true,
    },
    {
      id: 4,
      name: 'Noise Cancelling Earbuds',
      price: 179.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 342,
      image:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop',
      badge: null,
      inStock: false,
    },
    {
      id: 5,
      name: '4K Webcam',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.3,
      reviews: 78,
      image:
        'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=300&h=300&fit=crop',
      badge: 'Limited',
      inStock: true,
    },
    {
      id: 6,
      name: 'Mechanical Keyboard RGB',
      price: 149.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 521,
      image:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop',
      badge: null,
      inStock: true,
    },
  ];

  const categories = [
    'Electronics',
    'Audio',
    'Computers',
    'Accessories',
    'Smart Home',
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' },
  ];

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'SSL encrypted checkout',
    },
    { icon: Package, title: 'Fast Delivery', description: '2-3 business days' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Example Layout Banner */}
      <div className="container mx-auto px-4 pt-6">
        <LayoutBanner
          title="E-commerce Store"
          description="product listings, filters, and shopping cart components"
        />
      </div>

      {/* Header */}
      <LayoutHeader
        title="Tech Store"
        description="Discover the latest in technology"
        className="mt-6"
      >
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-10 w-full" />
        </div>
      </LayoutHeader>

      {/* Features Bar */}
      <div className="bg-muted/50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Icon className="h-4 w-4 text-primary-500" />
                  <span className="font-medium">{feature.title}</span>
                  <span className="text-muted-foreground hidden sm:inline">
                    - {feature.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </h2>
                <Button variant="ghost" size="sm">
                  Clear all
                </Button>
              </div>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedFilters.categories.includes(category)}
                        onCheckedChange={checked => {
                          if (checked) {
                            setSelectedFilters({
                              ...selectedFilters,
                              categories: [
                                ...selectedFilters.categories,
                                category,
                              ],
                            });
                          } else {
                            setSelectedFilters({
                              ...selectedFilters,
                              categories: selectedFilters.categories.filter(
                                c => c !== category,
                              ),
                            });
                          }
                        }}
                      />
                      <Label
                        htmlFor={category}
                        className="text-sm cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Price Range */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Price Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedFilters.priceRange}
                    onValueChange={value =>
                      setSelectedFilters({
                        ...selectedFilters,
                        priceRange: value,
                      })
                    }
                  >
                    {priceRanges.map(range => (
                      <div
                        key={range.value}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <RadioGroupItem value={range.value} id={range.value} />
                        <Label
                          htmlFor={range.value}
                          className="text-sm cursor-pointer"
                        >
                          {range.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Rating Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Customer Rating</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <Label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          & up
                        </span>
                      </Label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
              </p>
              <div className="flex items-center gap-2">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    className="rounded-r-none"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    className="rounded-l-none"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div
              className={`grid gap-6 ${viewMode === 'grid' ? 'sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}
            >
              {products.map(product => (
                <Card
                  key={product.id}
                  className="overflow-hidden group pt-0 pb-6"
                >
                  <div className="relative overflow-hidden">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      className="group-hover:scale-105"
                    />
                    {product.badge && (
                      <Badge
                        className="absolute top-3 left-3 z-10"
                        variant={
                          product.badge === 'Sale' ? 'destructive' : 'default'
                        }
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 rounded-full"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 rounded-full"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {!product.inStock && (
                      <p className="text-sm text-destructive mt-2">
                        Out of stock
                      </p>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button
                      className="w-full"
                      disabled={!product.inStock}
                      variant={product.inStock ? 'default' : 'secondary'}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <div className="flex gap-1">
                <Button size="sm" variant="default">
                  1
                </Button>
                <Button size="sm" variant="outline">
                  2
                </Button>
                <Button size="sm" variant="outline">
                  3
                </Button>
                <Button size="sm" variant="outline">
                  4
                </Button>
              </div>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-muted/50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Get the latest products and exclusive offers delivered to your
                inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}