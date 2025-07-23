import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Home,
  ArrowLeft,
  Search,
  Palette,
  Sparkles,
  RefreshCw,
  Code2,
  Lightbulb,
  Compass,
  Map,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export default function NotFound() {
  const navigate = useNavigate();
  const { theme: currentTheme } = useTheme();
  const [floatingElements, setFloatingElements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Theme colors for floating elements
  const themeColors = [
    'text-blue-500',
    'text-purple-500',
    'text-green-500',
    'text-orange-500',
    'text-pink-500',
    'text-cyan-500',
    'text-yellow-500',
    'text-red-500',
  ];

  // Popular pages for quick navigation
  const popularPages = [
    {
      path: '/demo',
      label: 'Components Demo',
      icon: Code2,
      description: 'Explore our component library',
    },
    {
      path: '/layouts',
      label: 'Layout Examples',
      icon: Compass,
      description: 'See layout templates in action',
    },
    {
      path: '/export',
      label: 'Theme Export',
      icon: Palette,
      description: 'Export your customized theme',
    },
  ];

  // Generate floating UI elements on mount
  useEffect(() => {
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      type: ['button', 'card', 'badge', 'input', 'toggle'][
        Math.floor(Math.random() * 5)
      ],
      color: themeColors[i % themeColors.length],
      size: Math.random() * 40 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setFloatingElements(elements);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would search and redirect
      // For now, we'll just go to the components page
      navigate(`/demo?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const renderFloatingElement = element => {
    const baseClass = 'absolute opacity-20 pointer-events-none animate-float';

    switch (element.type) {
      case 'button':
        return (
          <div
            key={element.id}
            className={cn(baseClass, element.color)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 3}px`,
              height: `${element.size}px`,
              animationDuration: `${element.duration}s`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-full h-full rounded-md border-2 border-current" />
          </div>
        );
      case 'card':
        return (
          <div
            key={element.id}
            className={cn(baseClass, element.color)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 2}px`,
              height: `${element.size * 1.5}px`,
              animationDuration: `${element.duration}s`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-full h-full rounded-lg border-2 border-current">
              <div className="h-1/3 border-b border-current" />
            </div>
          </div>
        );
      case 'badge':
        return (
          <div
            key={element.id}
            className={cn(baseClass, element.color)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 2}px`,
              height: `${element.size * 0.6}px`,
              animationDuration: `${element.duration}s`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-current" />
          </div>
        );
      case 'input':
        return (
          <div
            key={element.id}
            className={cn(baseClass, element.color)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 3}px`,
              height: `${element.size}px`,
              animationDuration: `${element.duration}s`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-full h-full rounded border-2 border-current" />
          </div>
        );
      case 'toggle':
        return (
          <div
            key={element.id}
            className={cn(baseClass, element.color)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 1.5}px`,
              height: `${element.size * 0.8}px`,
              animationDuration: `${element.duration}s`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-current relative">
              <div className="absolute left-1 top-1 bottom-1 w-1/3 rounded-full bg-current opacity-30" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating UI Elements Background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map(renderFloatingElement)}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8">
          {/* 404 Display */}
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl font-bold text-primary-500/20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Palette className="h-20 w-20 sm:h-24 sm:w-24 text-primary-500 animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-sparkle" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Oops! This theme doesn't exist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Looks like this component wandered off into the void. Don't worry,
              we have{' '}
              <span className="text-primary-500 font-semibold">
                8 beautiful themes
              </span>{' '}
              and{' '}
              <span className="text-primary-500 font-semibold">
                45+ components
              </span>{' '}
              waiting for you!
            </p>
          </div>

          {/* Search Bar */}
          <Card className="max-w-xl mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-semibold">Search for components</h3>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Try 'button', 'card', or 'dashboard'..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button type="submit">Search</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
              <Map className="h-5 w-5" />
              Popular destinations
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {popularPages.map(page => {
                const Icon = page.icon;
                return (
                  <Card
                    key={page.path}
                    className="group hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                    onClick={() => navigate(page.path)}
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {page.label}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {page.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate('/')}
              className="min-w-[200px]"
            >
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate(-1)}
              className="min-w-[200px]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Fun Easter Egg */}
          <div className="pt-8">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh to shuffle the floating elements
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(10px) rotate(-5deg);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-10px) rotate(3deg);
            opacity: 0.25;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            transparent 0%,
            var(--tw-gradient-to) 100%
          );
        }
      `}</style>
    </div>
  );
}