import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  addDays,
  subDays,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  isAfter,
  isBefore,
  isToday,
  isYesterday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  isThisYear,
  parseISO,
  format
} from 'date-fns';

/**
 * Get start and end of day
 * @param {Date} date - Date
 * @returns {Object} Start and end dates
 */
export function getDayRange(date = new Date()) {
  return {
    start: startOfDay(date),
    end: endOfDay(date)
  };
}

/**
 * Get start and end of week
 * @param {Date} date - Date
 * @returns {Object} Start and end dates
 */
export function getWeekRange(date = new Date()) {
  return {
    start: startOfWeek(date),
    end: endOfWeek(date)
  };
}

/**
 * Get start and end of month
 * @param {Date} date - Date
 * @returns {Object} Start and end dates
 */
export function getMonthRange(date = new Date()) {
  return {
    start: startOfMonth(date),
    end: endOfMonth(date)
  };
}

/**
 * Get start and end of year
 * @param {Date} date - Date
 * @returns {Object} Start and end dates
 */
export function getYearRange(date = new Date()) {
  return {
    start: startOfYear(date),
    end: endOfYear(date)
  };
}

/**
 * Get date ranges for common periods
 * @returns {Object} Common date ranges
 */
export function getCommonDateRanges() {
  const today = new Date();
  
  return {
    today: getDayRange(today),
    yesterday: getDayRange(subDays(today, 1)),
    thisWeek: getWeekRange(today),
    lastWeek: getWeekRange(subWeeks(today, 1)),
    thisMonth: getMonthRange(today),
    lastMonth: getMonthRange(subMonths(today, 1)),
    last7Days: {
      start: startOfDay(subDays(today, 6)),
      end: endOfDay(today)
    },
    last30Days: {
      start: startOfDay(subDays(today, 29)),
      end: endOfDay(today)
    },
    last90Days: {
      start: startOfDay(subDays(today, 89)),
      end: endOfDay(today)
    }
  };
}

/**
 * Check if date is in range
 * @param {Date} date - Date to check
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @returns {boolean} Is in range
 */
export function isDateInRange(date, start, end) {
  return isAfter(date, start) && isBefore(date, end);
}

/**
 * Format date range
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @param {string} formatStr - Date format
 * @returns {string} Formatted range
 */
export function formatDateRange(start, end, formatStr = 'MMM dd') {
  const startStr = format(start, formatStr);
  const endStr = format(end, formatStr);
  
  if (startStr === endStr) {
    return startStr;
  }
  
  return `${startStr} - ${endStr}`;
}

/**
 * Get relative date label
 * @param {Date|string} date - Date
 * @returns {string} Relative label
 */
export function getRelativeDateLabel(date) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(dateObj)) return 'Today';
  if (isYesterday(dateObj)) return 'Yesterday';
  if (isTomorrow(dateObj)) return 'Tomorrow';
  if (isThisWeek(dateObj)) return 'This week';
  if (isThisMonth(dateObj)) return 'This month';
  if (isThisYear(dateObj)) return 'This year';
  
  return format(dateObj, 'MMM dd, yyyy');
}

/**
 * Get time ago string
 * @param {Date|string} date - Date
 * @returns {string} Time ago string
 */
export function getTimeAgo(date) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const now = new Date();
  
  const minutes = differenceInMinutes(now, dateObj);
  const hours = differenceInHours(now, dateObj);
  const days = differenceInDays(now, dateObj);
  
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  
  return `${Math.floor(days / 365)}y ago`;
}

/**
 * Get calendar dates for month view
 * @param {Date} date - Month to display
 * @returns {Array} Array of week arrays
 */
export function getCalendarDates(date) {
  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));
  
  const dates = [];
  let current = start;
  
  while (current <= end) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(current));
      current = addDays(current, 1);
    }
    dates.push(week);
  }
  
  return dates;
}

/**
 * Check if dates are same day
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {boolean} Same day
 */
export function isSameDay(date1, date2) {
  return format(date1, 'yyyy-MM-dd') === format(date2, 'yyyy-MM-dd');
}

/**
 * Get days between dates
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @returns {Array} Array of dates
 */
export function getDaysBetween(start, end) {
  const days = [];
  let current = start;
  
  while (current <= end) {
    days.push(new Date(current));
    current = addDays(current, 1);
  }
  
  return days;
}

/**
 * Parse various date formats
 * @param {any} date - Date to parse
 * @returns {Date} Parsed date
 */
export function parseDate(date) {
  if (!date) return null;
  if (date instanceof Date) return date;
  if (typeof date === 'string') return parseISO(date);
  if (typeof date === 'number') return new Date(date);
  return null;
}