// Type definitions for utility functions

// Theme utilities
export function applyTheme(themeName: string): void;
export function initializeTheme(): void;
export function saveTheme(themeName: string): void;
export function toggleDarkMode(isDark: boolean): void;
export function getThemeFromStorage(): string;
export function getDarkModeFromStorage(): boolean;

// Storage utilities
export interface StorageItem<T = any> {
  value: T;
  expires?: number;
}

export function setItem<T>(key: string, value: T, ttl?: number): void;
export function getItem<T>(key: string): T | null;
export function removeItem(key: string): void;
export function clearStorage(): void;
export function hasItem(key: string): boolean;
export function getStorageSize(): number;

// Date utilities
export interface DateRange {
  start: Date;
  end: Date;
}

export function getDayRange(date?: Date): DateRange;
export function getWeekRange(date?: Date): DateRange;
export function getMonthRange(date?: Date): DateRange;
export function getYearRange(date?: Date): DateRange;
export function getCommonDateRanges(): Record<string, DateRange>;
export function isDateInRange(date: Date, start: Date, end: Date): boolean;
export function formatDateRange(start: Date, end: Date, formatStr?: string): string;
export function getRelativeDateLabel(date: Date | string): string;
export function getTimeAgo(date: Date | string): string;
export function getCalendarDates(date: Date): Date[][];
export function isSameDay(date1: Date, date2: Date): boolean;
export function getDaysBetween(start: Date, end: Date): Date[];
export function parseDate(date: any): Date | null;

// Validation utilities
export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
  strength: number;
}

export interface UsernameValidationResult {
  isValid: boolean;
  errors: string[];
}

export function isValidEmail(email: string): boolean;
export function isValidUrl(url: string): boolean;
export function isValidPhone(phone: string): boolean;
export function validatePassword(password: string): PasswordValidationResult;
export function isValidCreditCard(cardNumber: string): boolean;
export function isValidDate(date: string, format?: string): boolean;
export function validateUsername(username: string): UsernameValidationResult;
export function validateRequired(value: any, fieldName?: string): string | null;
export function validateMinLength(value: string, min: number, fieldName?: string): string | null;
export function validateMaxLength(value: string, max: number, fieldName?: string): string | null;
export function validateRange(value: number, min: number, max: number, fieldName?: string): string | null;
export function validateFileSize(file: File, maxSizeInMB: number): string | null;
export function validateFileType(file: File, allowedTypes: string[]): string | null;

// Class name utility
export type ClassValue = string | number | null | undefined | ClassValue[] | { [key: string]: any };
export function cn(...inputs: ClassValue[]): string;

// Array utilities
export function chunk<T>(array: T[], size: number): T[][];
export function flatten<T>(array: T[][]): T[];
export function unique<T>(array: T[]): T[];
export function groupBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>;
export function sortBy<T>(array: T[], key: keyof T | ((item: T) => any)): T[];
export function shuffle<T>(array: T[]): T[];
export function sample<T>(array: T[], count?: number): T | T[];
export function difference<T>(array1: T[], array2: T[]): T[];
export function intersection<T>(array1: T[], array2: T[]): T[];
export function union<T>(array1: T[], array2: T[]): T[];

// String utilities
export function capitalize(str: string): string;
export function truncate(str: string, length: number, suffix?: string): string;
export function slugify(str: string): string;
export function camelCase(str: string): string;
export function kebabCase(str: string): string;
export function snakeCase(str: string): string;
export function titleCase(str: string): string;
export function stripHtml(str: string): string;
export function escapeHtml(str: string): string;
export function unescapeHtml(str: string): string;
export function highlight(text: string, search: string, className?: string): string;

// Formatter utilities
export function formatCurrency(amount: number, currency?: string, locale?: string): string;
export function formatNumber(num: number, options?: Intl.NumberFormatOptions): string;
export function formatDate(date: Date | string, format?: string): string;
export function formatRelativeTime(date: Date | string): string;
export function formatFileSize(bytes: number, decimals?: number): string;
export function formatDuration(seconds: number): string;
export function formatPercentage(value: number, decimals?: number): string;
export function formatPhoneNumber(phone: string, format?: string): string;
export function formatCreditCard(cardNumber: string): string;

// Color utilities
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null;
export function rgbToHex(r: number, g: number, b: number): string;
export function hexToHsl(hex: string): { h: number; s: number; l: number } | null;
export function hslToHex(h: number, s: number, l: number): string;
export function lighten(color: string, amount: number): string;
export function darken(color: string, amount: number): string;
export function getContrastRatio(color1: string, color2: string): number;
export function isLight(color: string): boolean;
export function isDark(color: string): boolean;
export function getRandomColor(): string;
export function generateColorPalette(baseColor: string, count?: number): string[];