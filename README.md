# Admin Dashboard Template

A modern, responsive admin dashboard template built with React, Tailwind CSS v4, and shadcn/ui components. Features a dynamic theme system with 8 pre-built color schemes and seamless dark mode support.

![Admin Dashboard Template](https://admin-dashboard-template-knight.vercel.app/og.webp)

## 🌐 Live Demo

[View Live Demo](https://admin-dashboard-template-knight.vercel.app)

## ✨ Features

### 🎨 Advanced Theme System
- **8 Pre-built Themes**: Emerald (default), Blue, Purple, Orange, Rose, Teal, Indigo, and Pink
- **Dark Mode**: Seamless light/dark mode switching with system preference detection
- **Dynamic Color System**: Real-time theme switching with CSS variables
- **Persistent Settings**: Theme preferences saved to localStorage

### 🛠️ Technical Stack
- **React 19**: Latest React features and optimizations
- **Tailwind CSS v4**: Next-generation utility-first CSS framework
- **shadcn/ui**: High-quality, accessible React components
- **Vite**: Lightning-fast build tool and dev server
- **Radix UI**: Unstyled, accessible component primitives

### 📦 Component Library
- **Custom Components**: Theme-aware components showcasing the color system
- **shadcn/ui Components**: Pre-configured with theme integration
  - Buttons, Cards, Dialogs, Sheets
  - Forms, Inputs, Selects, Switches
  - Tabs, Badges, Alerts
  - And more...

### 🎯 Key Features
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **PWA Ready**: Manifest file for installability
- **Performance**: Optimized build with code splitting
- **Accessibility**: WCAG compliant components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kkknight-12/admin-dashboard-template.git
cd admin-dashboard-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Theme Customization

### Using Pre-built Themes

The template includes 8 professionally designed color themes. Switch themes using the settings panel in the top-right corner.

### Creating Custom Themes

Add your custom theme to `src/config/themePresets.js`:

```javascript
export const themePresets = {
  yourTheme: {
    name: 'yourTheme',
    label: 'Your Theme',
    primary: {
      50: '#...', // Lightest
      // ... other shades
      900: '#...', // Darkest
      DEFAULT: '#...',
    },
    secondary: { /* color scale */ },
    accent: { /* color scale */ },
  }
}
```

### Theme Structure

Each theme includes:
- **Primary**: Main brand color
- **Secondary**: Complementary color for variety
- **Accent**: High-contrast color for CTAs and highlights
- **Semantic colors**: Success, warning, error, info (auto-generated)

## 📁 Project Structure

```
admin-template/
├── public/
│   ├── logo.svg          # App logo
│   ├── og.webp           # Open Graph image
│   └── manifest.json     # PWA manifest
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── settings/     # Settings panel components
│   │   └── *.jsx         # Feature components
│   ├── config/
│   │   └── themePresets.js  # Theme configurations
│   ├── contexts/
│   │   └── SettingsContext.jsx  # Global settings state
│   ├── utils/
│   │   ├── theme.js      # Theme utilities
│   │   └── ...           # Other utilities
│   └── index.css         # Tailwind v4 styles
```

## 🛠️ Development

### Adding New Components

1. Create component in `src/components/`
2. Use theme-aware classes:
```jsx
<div className="bg-primary-500 text-primary-foreground">
  <button className="bg-secondary-600 hover:bg-secondary-700">
    Click me
  </button>
</div>
```

### Using shadcn/ui Components

Components are pre-installed and configured. Import and use:
```jsx
import { Button } from "@/components/ui/button"

<Button variant="default">Click me</Button>
```

### Theme Utilities

```javascript
import { applyTheme, getThemeColor } from '@/utils/theme'

// Apply a theme
applyTheme('blue')

// Get specific color value
const primaryColor = getThemeColor('primary', 500)
```

## 📱 Responsive Design

The template uses Tailwind's responsive modifiers:
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific config:
```env
VITE_APP_NAME=Admin Dashboard
VITE_API_URL=https://api.example.com
```

### Build Configuration

Vite configuration is in `vite.config.js`. The project uses:
- React plugin for Fast Refresh
- Path aliases (`@/` for `src/`)
- Optimized chunk splitting

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Other Platforms

Build the project and deploy the `dist` folder:
```bash
npm run build
# Deploy dist/ folder
```

## 📄 License

MIT License - feel free to use this template for personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/Kkknight-12/admin-dashboard-template/issues) with details.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using React, Tailwind CSS v4, and shadcn/ui