/**
 * Authentication debugging utilities
 * Helps track auth state issues across different environments
 */

import { AuthState } from '@/types/redux';

export interface AuthDebugInfo {
  timestamp: string;
  user: any;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  localStorageToken: string | null;
  sessionStorage: any;
  url: string;
  userAgent: string;
}

/**
 * Get comprehensive auth debug information
 */
export const getAuthDebugInfo = (authState: AuthState): AuthDebugInfo => {
  return {
    timestamp: new Date().toISOString(),
    user: authState.user,
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    error: authState.error,
    localStorageToken: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    sessionStorage: typeof window !== 'undefined' ? {
      '2fa_verification_data': sessionStorage.getItem('2fa_verification_data'),
    } : {},
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
  };
};

/**
 * Log auth state changes for debugging
 */
export const logAuthStateChange = (action: string, authState: AuthState, additionalInfo?: any) => {
  if (process.env.NODE_ENV === 'development') {
    const debugInfo = getAuthDebugInfo(authState);
    console.group(`🔐 Auth State Change: ${action}`);
    console.log('Auth State:', debugInfo);
    if (additionalInfo) {
      console.log('Additional Info:', additionalInfo);
    }
    console.groupEnd();
  }
};

/**
 * Validate auth state consistency
 */
export const validateAuthState = (authState: AuthState): { isValid: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  // Check for inconsistent states
  if (authState.isAuthenticated && !authState.user) {
    issues.push('Authenticated but no user data');
  }
  
  if (authState.isAuthenticated && !authState.token) {
    issues.push('Authenticated but no token');
  }
  
  if (authState.user && !authState.isAuthenticated) {
    issues.push('User data present but not authenticated');
  }
  
  if (authState.isLoading && authState.error) {
    issues.push('Loading state with error - should not happen');
  }
  
  // Check localStorage consistency
  if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem('token');
    if (authState.token !== storedToken) {
      issues.push('Redux token does not match localStorage token');
    }
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

/**
 * Reset auth state completely (for debugging)
 */
export const resetAuthStateCompletely = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    sessionStorage.clear();
  }
  
  // This should be called with dispatch
  console.log('🧹 Auth state reset completely');
};

/**
 * Monitor auth state changes
 */
export const createAuthStateMonitor = (authState: AuthState) => {
  let previousState: AuthState | null = null;
  
  return (currentState: AuthState) => {
    if (previousState) {
      const changes = Object.keys(currentState).filter(
        key => currentState[key as keyof AuthState] !== previousState![key as keyof AuthState]
      );
      
      if (changes.length > 0) {
        logAuthStateChange('State Update', currentState, { changedFields: changes });
        
        const validation = validateAuthState(currentState);
        if (!validation.isValid) {
          console.warn('⚠️ Auth state validation issues:', validation.issues);
        }
      }
    }
    
    previousState = { ...currentState };
  };
};
