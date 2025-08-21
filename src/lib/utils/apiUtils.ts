// API Error handling utilities
export const handleApiError = (error: any): string => {
  if (error?.data?.message) {
    return error.data.message;
  }
  
  if (error?.data?.error) {
    return error.data.error;
  }
  
  if (error?.error) {
    return error.error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (error?.status === 401) {
    return "Authentication failed. Please log in again.";
  }
  
  if (error?.status === 403) {
    return "Access denied. You don't have permission to perform this action.";
  }
  
  if (error?.status === 404) {
    return "Resource not found.";
  }
  
  if (error?.status === 429) {
    return "Too many requests. Please try again later.";
  }
  
  if (error?.status >= 500) {
    return "Server error. Please try again later.";
  }
  
  return "An unexpected error occurred. Please try again.";
};

// Centralized response validation and error handling
export const handleApiResponse = (response: any, successCallback?: () => void, errorCallback?: (message: string) => void): boolean => {
  // Check if response indicates failure
  if (response?.success === false) {
    const errorMessage = response.error || response.message || "Operation failed";
    if (errorCallback) {
      errorCallback(errorMessage);
    }
    return false;
  }

  // Check if response indicates success
  if (response?.success === true || response?.status === "success") {
    if (successCallback) {
      successCallback();
    }
    return true;
  }

  // Handle cases where success field might not be present
  if (response?.message?.includes("successful") || response?.message?.includes("verification")) {
    if (successCallback) {
      successCallback();
    }
    return true;
  }

  // Default to success if no clear indication of failure
  if (successCallback) {
    successCallback();
  }
  return true;
};

// Response validation utilities
export const validateAuthResponse = (response: any): boolean => {
  return !!(response?.data?.userData && response?.data?.token);
};

export const validatePaymentResponse = (response: any): boolean => {
  return !!(response?.success && response?.data?.payment);
};

export const validateChatResponse = (response: any): boolean => {
  return !!(response?.success && response?.data?.response);
};

export const validateRecommendationResponse = (response: any): boolean => {
  return !!(response?.success && response?.data);
};

// Token utilities
export const getStoredToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const setStoredToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

export const removeStoredToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

// API URL utilities
export const getApiUrl = (endpoint: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  return `${baseUrl}${endpoint}`;
};

// Request headers utilities
export const getAuthHeaders = (token?: string): Record<string, string> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 8) {
    return { isValid: false, message: "Password must be at least 8 characters long" };
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: "Password must contain at least one lowercase letter" };
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: "Password must contain at least one uppercase letter" };
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: "Password must contain at least one number" };
  }
  
  return { isValid: true };
};

export const validateRequiredFields = (fields: Record<string, any>, requiredFields: string[]): { isValid: boolean; message?: string } => {
  for (const field of requiredFields) {
    if (!fields[field] || fields[field].trim() === '') {
      return { isValid: false, message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` };
    }
  }
  return { isValid: true };
};
