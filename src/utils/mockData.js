import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

/**
 * Generate mock user data
 * @param {Object} overrides - Override default values
 * @returns {Object} User object
 */
export function generateUser(overrides = {}) {
  const id = 'usr_' + nanoid(12);
  return {
    id,
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    username: faker.internet.username().toLowerCase(),
    avatar: `https://i.pravatar.cc/150?u=${id}`,
    role: faker.helpers.arrayElement(['Admin', 'User', 'Manager', 'Editor']),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    department: faker.helpers.arrayElement(['Sales', 'Marketing', 'Engineering', 'HR', 'Finance']),
    phone: faker.phone.number(),
    location: faker.location.city() + ', ' + faker.location.country(),
    bio: faker.lorem.sentence(),
    joinedAt: faker.date.past({ years: 2 }),
    lastActiveAt: faker.date.recent(),
    ...overrides
  };
}

/**
 * Generate mock product data
 * @param {Object} overrides - Override default values
 * @returns {Object} Product object
 */
export function generateProduct(overrides = {}) {
  const price = faker.number.float({ min: 10, max: 1000, fractionDigits: 2 });
  return {
    id: 'prd_' + nanoid(12),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price,
    salePrice: faker.datatype.boolean() ? price * 0.8 : null,
    category: faker.commerce.department(),
    sku: faker.string.alphanumeric(8).toUpperCase(),
    stock: faker.number.int({ min: 0, max: 500 }),
    rating: faker.number.float({ min: 3, max: 5, fractionDigits: 1 }),
    reviews: faker.number.int({ min: 0, max: 200 }),
    image: faker.image.url(),
    images: Array.from({ length: 4 }, () => faker.image.url()),
    tags: faker.helpers.arrayElements(['New', 'Sale', 'Popular', 'Limited', 'Exclusive'], { min: 0, max: 3 }),
    status: faker.helpers.arrayElement(['Active', 'Draft', 'Out of Stock']),
    createdAt: faker.date.past(),
    ...overrides
  };
}

/**
 * Generate mock order data
 * @param {Object} overrides - Override default values
 * @returns {Object} Order object
 */
export function generateOrder(overrides = {}) {
  const items = faker.number.int({ min: 1, max: 5 });
  const subtotal = faker.number.float({ min: 50, max: 500, fractionDigits: 2 });
  const tax = subtotal * 0.08;
  const shipping = faker.number.float({ min: 0, max: 20, fractionDigits: 2 });
  
  return {
    id: 'ord_' + nanoid(12),
    orderNumber: '#' + faker.number.int({ min: 10000, max: 99999 }),
    customer: generateUser(),
    items,
    subtotal,
    tax,
    shipping,
    total: subtotal + tax + shipping,
    status: faker.helpers.arrayElement(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']),
    paymentMethod: faker.helpers.arrayElement(['Credit Card', 'PayPal', 'Bank Transfer', 'Cash']),
    paymentStatus: faker.helpers.arrayElement(['Paid', 'Pending', 'Failed', 'Refunded']),
    shippingAddress: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country()
    },
    trackingNumber: faker.string.alphanumeric(12).toUpperCase(),
    notes: faker.datatype.boolean() ? faker.lorem.sentence() : null,
    createdAt: faker.date.recent({ days: 30 }),
    updatedAt: faker.date.recent({ days: 7 }),
    ...overrides
  };
}

/**
 * Generate mock transaction data
 * @param {Object} overrides - Override default values
 * @returns {Object} Transaction object
 */
export function generateTransaction(overrides = {}) {
  const amount = faker.number.float({ min: 10, max: 1000, fractionDigits: 2 });
  const type = faker.helpers.arrayElement(['Payment', 'Refund', 'Transfer', 'Withdrawal']);
  
  return {
    id: 'txn_' + nanoid(12),
    reference: 'TXN-' + faker.string.alphanumeric(8).toUpperCase(),
    type,
    amount: type === 'Refund' || type === 'Withdrawal' ? -amount : amount,
    currency: 'USD',
    status: faker.helpers.arrayElement(['Completed', 'Pending', 'Failed', 'Processing']),
    method: faker.helpers.arrayElement(['Credit Card', 'Debit Card', 'Bank Transfer', 'PayPal', 'Stripe']),
    description: faker.finance.transactionDescription(),
    metadata: {
      cardLast4: faker.finance.creditCardNumber().slice(-4),
      bank: faker.company.name() + ' Bank'
    },
    createdAt: faker.date.recent({ days: 30 }),
    ...overrides
  };
}

/**
 * Generate mock notification data
 * @param {Object} overrides - Override default values
 * @returns {Object} Notification object
 */
export function generateNotification(overrides = {}) {
  const types = ['info', 'success', 'warning', 'error'];
  const templates = {
    info: ['New message from {name}', 'System update available', 'Reminder: {event}'],
    success: ['Payment received: ${amount}', 'Order {id} delivered', 'Task completed successfully'],
    warning: ['Low stock alert: {product}', 'Payment pending', 'Account needs attention'],
    error: ['Payment failed', 'Error processing order', 'Action required']
  };
  
  const type = faker.helpers.arrayElement(types);
  const title = faker.helpers.arrayElement(templates[type])
    .replace('{name}', faker.person.firstName())
    .replace('{amount}', faker.number.int({ min: 10, max: 500 }))
    .replace('{id}', faker.string.alphanumeric(6).toUpperCase())
    .replace('{product}', faker.commerce.productName())
    .replace('{event}', faker.lorem.words(3));
  
  return {
    id: 'ntf_' + nanoid(12),
    type,
    title,
    message: faker.lorem.sentence(),
    read: faker.datatype.boolean(),
    icon: type,
    link: faker.datatype.boolean() ? '/dashboard/' + faker.lorem.slug() : null,
    createdAt: faker.date.recent({ days: 7 }),
    ...overrides
  };
}

/**
 * Generate mock activity/event data
 * @param {Object} overrides - Override default values
 * @returns {Object} Activity object
 */
export function generateActivity(overrides = {}) {
  const actions = [
    'created a new product',
    'updated order status',
    'added a comment',
    'uploaded a file',
    'deleted an item',
    'shared a document',
    'completed a task',
    'started a discussion'
  ];
  
  return {
    id: 'act_' + nanoid(12),
    user: generateUser(),
    action: faker.helpers.arrayElement(actions),
    target: faker.lorem.words(2),
    targetId: nanoid(12),
    metadata: {
      before: faker.lorem.word(),
      after: faker.lorem.word()
    },
    ipAddress: faker.internet.ip(),
    userAgent: faker.internet.userAgent(),
    createdAt: faker.date.recent({ days: 7 }),
    ...overrides
  };
}

/**
 * Generate multiple items
 * @param {Function} generator - Generator function
 * @param {number} count - Number of items
 * @param {Function} modifierFn - Optional modifier function
 * @returns {Array} Array of generated items
 */
export function generateMultiple(generator, count = 10, modifierFn = null) {
  return Array.from({ length: count }, (_, index) => {
    const item = generator();
    return modifierFn ? modifierFn(item, index) : item;
  });
}

/**
 * Generate mock data by type
 * @param {string} type - Type of data to generate
 * @param {number} count - Number of items
 * @returns {Array|Object} Generated data
 */
export function generateMockData(type, count = 1) {
  const generators = {
    user: generateUser,
    product: generateProduct,
    order: generateOrder,
    transaction: generateTransaction,
    notification: generateNotification,
    activity: generateActivity
  };
  
  const generator = generators[type];
  if (!generator) {
    throw new Error(`Unknown mock data type: ${type}`);
  }
  
  return count === 1 ? generator() : generateMultiple(generator, count);
}