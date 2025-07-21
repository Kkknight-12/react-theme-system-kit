/**
 * Advanced Layout Modes Configuration
 * Multiple layout options for different use cases
 */

export const layoutModes = {
  vertical: {
    name: 'vertical',
    label: 'Vertical',
    description: 'Classic sidebar navigation',
    icon: 'sidebar-left',
    config: {
      navbar: {
        position: 'left',
        width: 280,
        collapsedWidth: 88,
        type: 'fixed',
        showLogo: true,
        showSearch: false,
      },
      header: {
        show: true,
        height: 64,
        position: 'fixed',
        showBreadcrumb: true,
        showSearch: true,
      },
      content: {
        padding: 24,
        maxWidth: '100%',
        centered: false,
      },
      footer: {
        show: true,
        height: 56,
        position: 'relative',
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
  
  horizontal: {
    name: 'horizontal',
    label: 'Horizontal',
    description: 'Top navigation bar',
    icon: 'navbar-top',
    config: {
      navbar: {
        position: 'top',
        height: 64,
        type: 'fixed',
        showLogo: true,
        showSearch: true,
      },
      header: {
        show: false,
      },
      content: {
        padding: 24,
        maxWidth: '1440px',
        centered: true,
      },
      footer: {
        show: true,
        height: 56,
        position: 'relative',
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
  
  compact: {
    name: 'compact',
    label: 'Compact',
    description: 'Mini sidebar with icons only',
    icon: 'sidebar-compact',
    config: {
      navbar: {
        position: 'left',
        width: 88,
        collapsedWidth: 0,
        type: 'fixed',
        showLogo: false,
        showSearch: false,
        iconsOnly: true,
      },
      header: {
        show: true,
        height: 56,
        position: 'fixed',
        showBreadcrumb: true,
        showSearch: true,
      },
      content: {
        padding: 16,
        maxWidth: '100%',
        centered: false,
      },
      footer: {
        show: false,
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
  
  dual: {
    name: 'dual',
    label: 'Dual Navigation',
    description: 'Both top and side navigation',
    icon: 'dual-nav',
    config: {
      navbar: {
        position: 'left',
        width: 240,
        collapsedWidth: 88,
        type: 'fixed',
        showLogo: false,
        showSearch: false,
      },
      header: {
        show: true,
        height: 64,
        position: 'fixed',
        showBreadcrumb: false,
        showSearch: true,
        showMainNav: true,
      },
      content: {
        padding: 20,
        maxWidth: '100%',
        centered: false,
      },
      footer: {
        show: true,
        height: 48,
        position: 'relative',
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
  
  mobile: {
    name: 'mobile',
    label: 'Mobile First',
    description: 'Bottom navigation for mobile',
    icon: 'mobile-nav',
    config: {
      navbar: {
        position: 'bottom',
        height: 56,
        type: 'fixed',
        showLogo: false,
        showSearch: false,
        mobileOnly: true,
      },
      header: {
        show: true,
        height: 48,
        position: 'fixed',
        showBreadcrumb: false,
        showSearch: true,
        simplified: true,
      },
      content: {
        padding: 12,
        maxWidth: '100%',
        centered: false,
      },
      footer: {
        show: false,
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
  
  focus: {
    name: 'focus',
    label: 'Focus Mode',
    description: 'Hide all navigation for distraction-free work',
    icon: 'focus-mode',
    config: {
      navbar: {
        position: 'hidden',
        collapsible: true,
        showOnHover: true,
      },
      header: {
        show: true,
        height: 48,
        position: 'fixed',
        minimal: true,
        showToggle: true,
      },
      content: {
        padding: 32,
        maxWidth: '1200px',
        centered: true,
      },
      footer: {
        show: false,
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
  
  dashboard: {
    name: 'dashboard',
    label: 'Dashboard',
    description: 'Optimized for data-heavy dashboards',
    icon: 'dashboard-layout',
    config: {
      navbar: {
        position: 'left',
        width: 240,
        collapsedWidth: 64,
        type: 'fixed',
        showLogo: true,
        showSearch: false,
        dense: true,
      },
      header: {
        show: true,
        height: 48,
        position: 'fixed',
        showBreadcrumb: true,
        showSearch: false,
        compact: true,
      },
      content: {
        padding: 16,
        maxWidth: '100%',
        centered: false,
        dense: true,
      },
      footer: {
        show: false,
      },
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1440,
    },
  },
  
  creative: {
    name: 'creative',
    label: 'Creative',
    description: 'Unique layout with floating elements',
    icon: 'creative-layout',
    config: {
      navbar: {
        position: 'floating',
        width: 280,
        type: 'overlay',
        showLogo: true,
        showSearch: true,
        glassmorphism: true,
      },
      header: {
        show: true,
        height: 80,
        position: 'relative',
        transparent: true,
        blur: true,
      },
      content: {
        padding: 32,
        maxWidth: '100%',
        centered: false,
        fullHeight: true,
      },
      footer: {
        show: true,
        height: 64,
        position: 'fixed',
        transparent: true,
      },
    },
    effects: {
      parallax: true,
      glassmorphism: true,
      floatingElements: true,
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
};

// Responsive behaviors for each layout
export const responsiveBehaviors = {
  vertical: {
    mobile: {
      navbar: { type: 'drawer', position: 'left' },
      header: { show: true, height: 56 },
      content: { padding: 16 },
    },
    tablet: {
      navbar: { width: 240, collapsedWidth: 88 },
      content: { padding: 20 },
    },
  },
  horizontal: {
    mobile: {
      navbar: { type: 'drawer', position: 'top' },
      content: { padding: 16, centered: false },
    },
    tablet: {
      content: { padding: 20 },
    },
  },
  compact: {
    mobile: {
      navbar: { type: 'drawer', width: 240 },
      header: { height: 48 },
      content: { padding: 12 },
    },
  },
  dual: {
    mobile: {
      navbar: { type: 'drawer' },
      header: { showMainNav: false, height: 56 },
      content: { padding: 16 },
    },
    tablet: {
      navbar: { width: 200 },
    },
  },
};

// Layout transition animations
export const layoutTransitions = {
  default: {
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  smooth: {
    duration: 500,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spring: {
    duration: 700,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  none: {
    duration: 0,
    easing: 'linear',
  },
};

// Apply layout mode
export function applyLayoutMode(modeName, screenSize = 'desktop') {
  const layout = layoutModes[modeName] || layoutModes.vertical;
  const root = document.documentElement;
  
  // Apply layout class
  root.setAttribute('data-layout', modeName);
  
  // Apply responsive overrides
  if (screenSize !== 'desktop' && responsiveBehaviors[modeName]) {
    const responsiveConfig = responsiveBehaviors[modeName][screenSize];
    if (responsiveConfig) {
      // Merge responsive config with base config
      return { ...layout.config, ...responsiveConfig };
    }
  }
  
  return layout.config;
}

// Get layout CSS variables
export function getLayoutCSSVariables(layout) {
  const variables = {};
  
  if (layout.navbar) {
    variables['--navbar-width'] = `${layout.navbar.width}px`;
    variables['--navbar-collapsed-width'] = `${layout.navbar.collapsedWidth}px`;
  }
  
  if (layout.header) {
    variables['--header-height'] = `${layout.header.height}px`;
  }
  
  if (layout.content) {
    variables['--content-padding'] = `${layout.content.padding}px`;
    variables['--content-max-width'] = layout.content.maxWidth;
  }
  
  if (layout.footer) {
    variables['--footer-height'] = `${layout.footer.height}px`;
  }
  
  return variables;
}

// Check if layout supports feature
export function layoutSupportsFeature(layoutName, feature) {
  const layout = layoutModes[layoutName];
  if (!layout) return false;
  
  const features = {
    search: layout.config.navbar?.showSearch || layout.config.header?.showSearch,
    breadcrumb: layout.config.header?.showBreadcrumb,
    footer: layout.config.footer?.show,
    collapsible: layout.config.navbar?.collapsedWidth !== undefined,
    effects: layout.effects !== undefined,
  };
  
  return features[feature] || false;
}

// Get optimal layout for screen size
export function getOptimalLayout(screenWidth) {
  if (screenWidth < 768) return 'mobile';
  if (screenWidth < 1024) return 'compact';
  if (screenWidth < 1440) return 'vertical';
  return 'horizontal';
}