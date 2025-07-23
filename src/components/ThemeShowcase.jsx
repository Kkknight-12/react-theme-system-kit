import { Check, Star, Heart, ArrowRight } from 'lucide-react';

export default function ThemeShowcase() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 sm:space-y-12">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
          Theme System Showcase
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          See how the primary color affects different UI elements
        </p>
      </section>

      {/* Navigation Example */}
      <section className="bg-card rounded-lg shadow-lg dark:shadow-2xl overflow-hidden">
        <div className="bg-primary-500 text-white p-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <h2 className="text-lg sm:text-xl font-bold">Dashboard</h2>
              <a href="#" className="hover:opacity-80 transition-opacity hidden sm:inline">Home</a>
              <a href="#" className="hover:opacity-80 transition-opacity hidden sm:inline">Products</a>
              <a href="#" className="hover:opacity-80 transition-opacity hidden sm:inline">Analytics</a>
            </div>
            <button className="bg-white/20 hover:bg-white/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base">
              Settings
            </button>
          </nav>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Navigation Bar
          </h3>
          <p className="text-muted-foreground">
            The navigation uses the primary theme color as background
          </p>
        </div>
      </section>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Button Variants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary Buttons */}
          <div className="bg-card p-6 rounded-lg border border-border shadow dark:shadow-lg">
            <h3 className="font-semibold text-foreground mb-4">Primary Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                Primary Button
              </button>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                Primary Dark
              </button>
              <button className="w-full px-4 py-2 bg-primary-500/10 text-primary-500 rounded-md hover:bg-primary-500/20 transition-colors">
                Primary Light
              </button>
              <button className="w-full px-4 py-2 border-2 border-primary-500 text-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition-colors">
                Primary Outlined
              </button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="bg-card p-6 rounded-lg border border-border shadow dark:shadow-lg">
            <h3 className="font-semibold text-foreground mb-4">Secondary Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                Secondary Button
              </button>
              <button className="w-full px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-700 transition-colors">
                Neutral Button
              </button>
              <button className="w-full px-4 py-2 bg-muted text-foreground rounded-md hover:bg-accent transition-colors">
                Ghost Button
              </button>
              <button className="w-full px-4 py-2 text-primary-500 rounded-md hover:bg-muted transition-colors">
                Text Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards with Primary Accents */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Cards & Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card */}
          <div className="bg-card rounded-lg border border-border shadow dark:shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow">
            <div className="bg-primary-500 h-2"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Premium Features
              </h3>
              <p className="text-muted-foreground mb-4">
                Get access to advanced features and priority support
              </p>
              <a href="#" className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-lg border border-border shadow dark:shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Revenue
              </h3>
              <span className="text-primary-500 bg-primary-500/10 px-2 py-1 rounded text-sm">
                +12.5%
              </span>
            </div>
            <p className="text-3xl font-bold text-primary-500 mb-1">
              $45,231
            </p>
            <p className="text-muted-foreground">
              Compared to last month
            </p>
          </div>

          {/* Action Card */}
          <div className="bg-card rounded-lg border border-border shadow dark:shadow-lg p-6">
            <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-error" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Save to Favorites
            </h3>
            <p className="text-muted-foreground mb-4">
              Keep track of your most important items
            </p>
            <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
              Add to Favorites
            </button>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Form Elements
        </h2>
        <div className="bg-card rounded-lg border border-border shadow dark:shadow-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-foreground font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-background text-foreground"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-foreground font-medium mb-2">
                Select Option
              </label>
              <select className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-background text-foreground">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="checkbox"
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-border rounded"
              />
              <label htmlFor="checkbox" className="text-foreground">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
            >
              Submit Form
            </button>
          </form>
        </div>
      </section>

      {/* Alert Examples */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Alert Messages
        </h2>
        <div className="space-y-4">
          <div className="bg-success/10 border border-success p-4 rounded-lg">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-success mr-2" />
              <p className="text-success">
                <span className="font-semibold">Success!</span> Your changes have been saved.
              </p>
            </div>
          </div>
          <div className="bg-warning/10 border border-warning p-4 rounded-lg">
            <p className="text-warning">
              <span className="font-semibold">Warning!</span> Please review your settings.
            </p>
          </div>
          <div className="bg-error/10 border border-error p-4 rounded-lg">
            <p className="text-error">
              <span className="font-semibold">Error!</span> Something went wrong.
            </p>
          </div>
          <div className="bg-info/10 border border-info p-4 rounded-lg">
            <p className="text-info">
              <span className="font-semibold">Info:</span> New features are available.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Progress & Loading
        </h2>
        <div className="bg-card rounded-lg border border-border shadow dark:shadow-lg p-6 space-y-6">
          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-medium">Upload Progress</span>
              <span className="text-primary-500 font-medium">75%</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
              <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Spinner */}
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
          </div>
        </div>
      </section>

      {/* Badges and Tags */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Badges & Tags
        </h2>
        <div className="bg-card rounded-lg border border-border shadow dark:shadow-lg p-6">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm">
              Primary
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Secondary
            </span>
            <span className="px-3 py-1 bg-success text-white rounded-full text-sm">
              Success
            </span>
            <span className="px-3 py-1 bg-warning text-white rounded-full text-sm">
              Warning
            </span>
            <span className="px-3 py-1 bg-error text-white rounded-full text-sm">
              Error
            </span>
            <span className="px-3 py-1 bg-info text-white rounded-full text-sm">
              Info
            </span>
            <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm">
              Light Primary
            </span>
            <span className="px-3 py-1 border border-primary-500 text-primary-500 rounded-full text-sm">
              Outlined
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}