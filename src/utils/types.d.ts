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