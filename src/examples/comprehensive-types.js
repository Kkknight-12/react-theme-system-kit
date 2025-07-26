/**
 * Comprehensive example showing all available TypeScript types
 * This demonstrates how to use types in JavaScript with JSDoc
 */

// UI Component Types
/** @type {import('../components/ui/types').ButtonProps} */
const buttonProps = {
  variant: 'outline',
  size: 'lg',
  onClick: () => {},  // Handle click
  disabled: false
};

/** @type {import('../components/ui/types').DialogProps} */
const dialogProps = {
  open: true,
  onOpenChange: (open) => {},  // Handle dialog state
  modal: true
};

/** @type {import('../components/ui/types').DropdownMenuProps} */
const dropdownProps = {
  open: false,
  defaultOpen: false,
  onOpenChange: (open) => {}  // Handle dropdown state
};

/** @type {import('../components/ui/types').TableProps} */
const tableProps = {
  className: 'w-full',
  id: 'data-table'
};

// Layout Component Types
/** @type {import('../components/layout/types').HeaderProps} */
const headerProps = {
  onMenuClick: () => {}  // Handle menu click
};

/** @type {import('../components/layout/types').SidebarMenuItem} */
const menuItem = {
  id: 'dashboard',
  label: 'Dashboard',
  href: '/dashboard',
  badge: 5,
  children: []
};

/** @type {import('../components/layouts/types').Product} */
const product = {
  id: 1,
  name: 'Wireless Headphones',
  price: 299.99,
  originalPrice: 399.99,
  rating: 4.5,
  reviews: 234,
  image: 'https://example.com/product.jpg',
  badge: 'Best Seller',
  inStock: true
};

/** @type {import('../components/layouts/types').DashboardStat} */
const dashboardStat = {
  title: 'Total Revenue',
  value: '$45,231.89',
  change: '+20.1%',
  trend: 'up',
  icon: null, // Replace with actual icon component
  description: 'from last month'
};

// Settings Types
/** @type {import('../types').ThemeSettings} */
const themeSettings = {
  themeMode: 'dark',
  themePreset: 'blue',
  themeStretch: false,
  themeLayout: 'vertical',
  themeContrast: 'default',
  navigationStyle: 'sidebar',
  contentWidth: 'boxed',
  reducedMotion: false
};

// Utility Function Types

/**
 * Example using array utilities
 * @param {number[]} numbers
 */
function processNumbers(numbers) {
  /** @type {typeof import('../utils/types').chunk} */
  const chunk = (arr, size) => {
    // Implementation
    return [];
  };
  
  return chunk(numbers, 3);
}

/**
 * Example using string utilities
 * @param {string} text
 */
function formatText(text) {
  /** @type {typeof import('../utils/types').truncate} */
  const truncate = (str, length, suffix = '...') => {
    // Implementation
    return str.slice(0, length) + suffix;
  };
  
  return truncate(text, 50);
}

/**
 * Example using validation utilities
 * @param {string} email
 * @param {string} password
 */
function validateForm(email, password) {
  /** @type {typeof import('../utils/types').isValidEmail} */
  const isValidEmail = (email) => {
    // Implementation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  /** @type {typeof import('../utils/types').validatePassword} */
  const validatePassword = (pwd) => {
    // Implementation
    return {
      isValid: pwd.length >= 8,
      errors: [],
      strength: 3
    };
  };
  
  return {
    emailValid: isValidEmail(email),
    passwordResult: validatePassword(password)
  };
}

// Component Props with all types
/**
 * @param {import('../components/ui/types').CheckboxProps} props
 */
export function TypedCheckbox(props) {
  // Component implementation
}

/**
 * @param {import('../components/ui/types').TooltipProps} props
 */
export function TypedTooltip(props) {
  // Component implementation
}

/**
 * @param {import('../components/ui/types').RadioGroupProps} props
 */
export function TypedRadioGroup(props) {
  // Component implementation
}

// Mock Data Types
/** @type {import('../components/types').User} */
const user = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
  status: 'active',
  createdAt: new Date()
};

/** @type {import('../components/types').Notification} */
const notification = {
  id: '1',
  title: 'New Message',
  message: 'You have a new message from Jane',
  type: 'info',
  read: false,
  createdAt: new Date()
};

// Export types for use in other files
export const types = {
  buttonProps,
  dialogProps,
  product,
  themeSettings,
  user,
  notification
};