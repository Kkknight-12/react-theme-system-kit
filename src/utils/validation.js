/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} Is valid
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate phone number
 * @param {string} phone - Phone to validate
 * @returns {boolean} Is valid
 */
export function isValidPhone(phone) {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4,6}$/;
  return regex.test(phone);
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result
 */
export function validatePassword(password) {
  const result = {
    isValid: true,
    errors: [],
    strength: 0
  };
  
  if (password.length < 8) {
    result.errors.push('Password must be at least 8 characters');
    result.isValid = false;
  }
  
  if (!/[a-z]/.test(password)) {
    result.errors.push('Password must contain lowercase letter');
    result.isValid = false;
  } else {
    result.strength++;
  }
  
  if (!/[A-Z]/.test(password)) {
    result.errors.push('Password must contain uppercase letter');
    result.isValid = false;
  } else {
    result.strength++;
  }
  
  if (!/[0-9]/.test(password)) {
    result.errors.push('Password must contain number');
    result.isValid = false;
  } else {
    result.strength++;
  }
  
  if (!/[^A-Za-z0-9]/.test(password)) {
    result.errors.push('Password must contain special character');
  } else {
    result.strength++;
  }
  
  if (password.length >= 12) {
    result.strength++;
  }
  
  return result;
}

/**
 * Validate credit card number (Luhn algorithm)
 * @param {string} cardNumber - Card number to validate
 * @returns {boolean} Is valid
 */
export function isValidCreditCard(cardNumber) {
  const cleaned = cardNumber.replace(/\s/g, '');
  
  if (!/^\d+$/.test(cleaned)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * Validate date
 * @param {string} date - Date string
 * @param {string} format - Expected format
 * @returns {boolean} Is valid
 */
export function isValidDate(date, format = 'YYYY-MM-DD') {
  if (format === 'YYYY-MM-DD') {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) return false;
    
    const d = new Date(date);
    return d instanceof Date && !isNaN(d);
  }
  
  return false;
}

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {Object} Validation result
 */
export function validateUsername(username) {
  const result = {
    isValid: true,
    errors: []
  };
  
  if (username.length < 3) {
    result.errors.push('Username must be at least 3 characters');
    result.isValid = false;
  }
  
  if (username.length > 20) {
    result.errors.push('Username must be less than 20 characters');
    result.isValid = false;
  }
  
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    result.errors.push('Username can only contain letters, numbers, and underscores');
    result.isValid = false;
  }
  
  if (/^\d/.test(username)) {
    result.errors.push('Username cannot start with a number');
    result.isValid = false;
  }
  
  return result;
}

/**
 * Validate required field
 * @param {any} value - Value to check
 * @param {string} fieldName - Field name for error message
 * @returns {string|null} Error message or null
 */
export function validateRequired(value, fieldName = 'Field') {
  if (value === null || value === undefined || value === '') {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validate min length
 * @param {string} value - Value to check
 * @param {number} min - Minimum length
 * @param {string} fieldName - Field name
 * @returns {string|null} Error message or null
 */
export function validateMinLength(value, min, fieldName = 'Field') {
  if (value && value.length < min) {
    return `${fieldName} must be at least ${min} characters`;
  }
  return null;
}

/**
 * Validate max length
 * @param {string} value - Value to check
 * @param {number} max - Maximum length
 * @param {string} fieldName - Field name
 * @returns {string|null} Error message or null
 */
export function validateMaxLength(value, max, fieldName = 'Field') {
  if (value && value.length > max) {
    return `${fieldName} must be less than ${max} characters`;
  }
  return null;
}

/**
 * Validate number range
 * @param {number} value - Value to check
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {string} fieldName - Field name
 * @returns {string|null} Error message or null
 */
export function validateRange(value, min, max, fieldName = 'Value') {
  if (value < min || value > max) {
    return `${fieldName} must be between ${min} and ${max}`;
  }
  return null;
}

/**
 * Validate file size
 * @param {File} file - File to validate
 * @param {number} maxSizeInMB - Maximum size in MB
 * @returns {string|null} Error message or null
 */
export function validateFileSize(file, maxSizeInMB) {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    return `File size must be less than ${maxSizeInMB}MB`;
  }
  return null;
}

/**
 * Validate file type
 * @param {File} file - File to validate
 * @param {Array} allowedTypes - Allowed MIME types
 * @returns {string|null} Error message or null
 */
export function validateFileType(file, allowedTypes) {
  if (!allowedTypes.includes(file.type)) {
    return `File type must be one of: ${allowedTypes.join(', ')}`;
  }
  return null;
}