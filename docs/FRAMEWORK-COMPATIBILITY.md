# Framework Compatibility Guide

## Overview

React Theme System Kit is built with Vite and React Router. While the core theme system and components are React-based and can work in any React environment, some parts are framework-specific.

## What Works Everywhere

### ✅ Theme System Core
- Theme switching mechanism
- CSS custom properties approach  
- Dark/light mode logic
- Color calculations
- Theme persistence (localStorage)
- Theme export/import functionality

### ✅ All UI Components
All 45+ components can be copied into any React project:
- Button, Card, Dialog, etc.
- They use standard React patterns
- No framework-specific dependencies
- Just React + Tailwind CSS

### ✅ Styling System
- Tailwind CSS utilities
- CSS variables
- OKLCH color system
- Theme presets

### ✅ Utilities
- Color manipulation functions
- Theme utilities
- Storage helpers
- Validation functions

## What Needs Adaptation

### ⚠️ Routing
- **Current**: React Router v6
- **Next.js**: Would need to replace with Next.js routing
- **Remix**: Would need Remix routing
- **Gatsby**: Would need Gatsby routing

### ⚠️ Project Structure
- **Current**: Vite project structure
- **Next.js**: Would need /pages or /app directory
- **Import aliases**: May need adjustment

### ⚠️ Full Page Components
- Landing page
- Demo pages
- Layout showcases
These are tied to React Router and would need refactoring.

## Integration Guide

### For Next.js Projects

1. **Copy the theme system:**
   ```bash
   # Copy these folders to your Next.js project
   src/config/themePresets.js
   src/utils/theme.js
   src/contexts/SettingsContext.jsx
   ```

2. **Copy components you need:**
   ```bash
   # Copy individual components
   src/components/ui/
   ```

3. **Update imports:**
   ```js
   // Change from
   import { Button } from '@/components/ui/button'
   // To your Next.js structure
   import { Button } from '@/components/ui/button'
   ```

4. **Add to _app.js:**
   ```jsx
   import SettingsProvider from '@/contexts/SettingsContext'
   
   function MyApp({ Component, pageProps }) {
     return (
       <SettingsProvider>
         <Component {...pageProps} />
       </SettingsProvider>
     )
   }
   ```

### For Remix Projects

Similar process but:
- Add providers to root.tsx
- Adjust import paths
- Copy needed components

### For Gatsby Projects

- Add providers to gatsby-browser.js
- Copy components to src/components
- Adjust GraphQL queries if needed

## What You're Really Getting

1. **A complete theme system** that can be integrated into any React app
2. **45+ pre-themed components** ready to copy/paste
3. **Example implementations** showing how everything works together
4. **Documentation** on customization and extension

## Honest Limitations

- This is NOT a Next.js template
- This is NOT a drop-in solution for other frameworks
- You WILL need to adapt the routing
- You MAY need to adjust imports and structure

## Best Use Cases

### ✅ Perfect for:
- Starting new Vite/React projects
- Learning how to build theme systems
- Extracting components for existing projects
- Understanding theme architecture

### ⚠️ Requires work for:
- Existing Next.js projects (need to adapt)
- Remix/Gatsby projects (need to adapt)
- Non-React projects (won't work)

## Support

We provide documentation on the theme system architecture, making it easier to integrate into your preferred framework. However, we cannot provide specific support for every framework integration.