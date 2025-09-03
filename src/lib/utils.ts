import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for delays and async operations
export const delay = (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Phone number utilities
export const cleanPhoneNumber = (phone: string) => phone.replace(/\D/g, '');

export const isValidPhoneNumber = (phone: string) => {
  const cleaned = cleanPhoneNumber(phone);
  return cleaned.length >= 10;
};

// Test mode utilities
export const isTestPhoneNumber = (phone: string, testNumbers: string[]) => {
  const cleanPhone = cleanPhoneNumber(phone);
  return testNumbers.some(testNum => 
    cleanPhoneNumber(testNum) === cleanPhone
  );
};
