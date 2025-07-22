# React Theme System Kit

A modern, production-ready theme system for React applications featuring Tailwind CSS v4, shadcn/ui components, and a sophisticated color management system with OKLCH color space support.

![React Theme System Kit](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-18.3.1-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-4.0-06b6d4.svg)

## ✨ Features

- 🎨 **8 Beautiful Color Themes** - Professionally designed color schemes using color theory principles
- 🌓 **Dark/Light Mode** - Seamless theme switching with no flash of unstyled content (FOUC)
- 🎯 **45+ shadcn/ui Components** - Full component library with consistent theming
- 🚀 **Modern Stack** - Tailwind CSS v4 + Vite for blazing fast development
- 🎭 **OKLCH Color Space** - Perceptually uniform colors for better visual consistency
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and optimized builds
- 🔧 **Easy Customization** - Simple theme configuration with CSS variables

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Basic knowledge of React and Tailwind CSS

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-theme-system-kit.git
cd react-theme-system-kit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open http://localhost:5173 in your browser

## 📦 What's Included

### Color Themes
- **Emerald** (Default) - Fresh and modern green theme
- **Blue** - Professional and trustworthy
- **Purple** - Creative and sophisticated
- **Orange** - Energetic and friendly
- **Rose** - Warm and inviting
- **Teal** - Calm and balanced
- **Indigo** - Deep and thoughtful
- **Pink** - Playful and modern

### Components (45+)
- **Layout**: Container, Grid, Flex, Spacer
- **Navigation**: Breadcrumb, Dropdown Menu, Navigation Menu, Pagination
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, DatePicker
- **Buttons**: Button (6 variants), Icon Button, Button Group
- **Feedback**: Alert, Toast, Progress, Skeleton, Spinner
- **Overlays**: Dialog, Drawer, Popover, Tooltip, Context Menu
- **Data Display**: Table, Card, Badge, Avatar, List
- **Typography**: Heading, Text, Label, Code

## 🛠️ Project Structure

```
react-theme-system-kit/
├── public/
│   └── theme-init.js        # FOUC prevention script
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── theme/          # Theme-specific components
│   │   └── examples/       # Example layouts
│   ├── contexts/
│   │   └── SettingsContext.jsx  # Theme state management
│   ├── config/
│   │   └── themePresets.js      # Theme configurations
│   ├── utils/
│   │   └── theme.js             # Theme utilities
│   ├── styles/
│   │   └── globals.css          # Global styles
│   └── App.jsx                  # Main app component
└── tailwind.config.js           # Tailwind configuration
```

## 🎨 Theme System

### How It Works

The theme system uses CSS custom properties (variables) for dynamic theme switching:

1. **Color Scales**: Each theme defines a full color scale (50-950) for primary, secondary, and accent colors
2. **Semantic Tokens**: Colors are mapped to semantic tokens (background, foreground, card, etc.)
3. **Dark Mode**: Automatic color adjustments for dark mode with proper contrast ratios
4. **OKLCH Colors**: Uses OKLCH color space for perceptually uniform color transitions

### Using Themes in Your Components

```jsx
// Using theme colors with Tailwind classes
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Button
</button>

// Using semantic colors
<div className="bg-card text-card-foreground p-6 rounded-lg">
  Card Content
</div>

// Dark mode support
<div className="bg-white dark:bg-gray-900">
  Adapts to theme mode
</div>
```

### Customizing Themes

1. **Modify Existing Theme**:
   Edit the theme configuration in `src/config/themePresets.js`

2. **Add New Theme**:
```javascript
// In themePresets.js
export const themePresets = {
  // ... existing themes
  mytheme: {
    name: 'mytheme',
    label: 'My Theme',
    primary: {
      50: '#...', // Your color scale
      // ... 100-950
    },
    secondary: { /* ... */ },
    accent: { /* ... */ }
  }
}
```

3. **Update Theme Context**:
   The new theme will automatically appear in the theme selector

## 🔧 Configuration

### Tailwind CSS v4

The project uses Tailwind CSS v4 with a custom configuration:

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colorScale('primary'),
        secondary: colorScale('secondary'),
        // ... more custom scales
      }
    }
  }
}
```

### Vite Configuration

Optimized for production builds with:
- Code splitting
- Tree shaking
- Minification
- Asset optimization

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

### Code Style

- ESLint for code quality
- Prettier for formatting
- Follows React best practices
- Component-first architecture

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

- Documentation: [View Docs](#)
- Issues: [GitHub Issues](https://github.com/yourusername/react-theme-system-kit/issues)
- Email: support@yourcompany.com
- Discord: [Join Community](#)

## 🚀 Roadmap

- [ ] TypeScript support
- [ ] Storybook integration
- [ ] Theme builder tool
- [ ] Next.js integration guide
- [ ] Advanced component patterns
- [ ] Animation presets
- [ ] RTL support

---

Built with ❤️ using React and Tailwind CSS