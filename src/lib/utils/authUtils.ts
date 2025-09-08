import { Dispatch } from 'redux';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { setCredentials, setLoading } from '@/lib/redux/features/auth/authSlice';
import { showToast } from '@/lib/utils/toast';
import { handleApiError, handleApiResponse } from '@/lib/utils/apiUtils';
import { AuthResponse } from '@/types/redux';

// Helper function to extract user and token from response
export const extractAuthData = (response: AuthResponse) => {
  // Structure 1: response.data.user and response.data.token (Google OAuth structure)
  if (response.data && typeof response.data === 'object' && 'user' in response.data && 'token' in response.data) {
    const userData = (response.data as any).user;
    // Create a new object with avatar field mapped from picture if needed
    const user = {
      ...userData,
      avatar: userData.avatar || userData.picture || undefined
    };
    return {
      user,
      token: (response.data as any).token
    };
  }
  
  // Structure 2: response.data.userData and response.data.token (current backend structure)
  if (response.data && typeof response.data === 'object' && 'userData' in response.data && 'token' in response.data) {
    const userData = response.data.userData as any;
    // Create a new object with avatar field mapped from picture if needed
    const user = {
      ...userData,
      avatar: userData.avatar || userData.picture || undefined
    };
    return {
      user,
      token: response.data.token
    };
  }
  
  // Structure 3: response.data.userData and response.token
  if (response.data && typeof response.data === 'object' && 'userData' in response.data && response.token) {
    const userData = response.data.userData as any;
    const user = {
      ...userData,
      avatar: userData.avatar || userData.picture || undefined
    };
    return {
      user,
      token: response.token
    };
  }
  
  // Structure 4: response.token and response.data (user object)
  if (response.token && response.data && typeof response.data === 'object' && 'id' in response.data) {
    const userData = response.data as any;
    const user = {
      ...userData,
      avatar: userData.avatar || userData.picture || undefined
    };
    return {
      user,
      token: response.token
    };
  }
  
  // Structure 5: response.data.token and response.data (user object)
  if (response.data && typeof response.data === 'object' && 'token' in response.data && 'id' in response.data) {
    const userData = response.data as any;
    const user = {
      ...userData,
      avatar: userData.avatar || userData.picture || undefined
    };
    return {
      user,
      token: response.data.token
    };
  }
  
  return null;
};

// Centralized SSO response handler for all authentication methods
export const handleSSOResponse = async (
  response: AuthResponse,
  dispatch: Dispatch,
  router: AppRouterInstance,
  provider: 'google' | 'linkedin' | 'apple' | 'simple'
) => {
  try {
    // Use centralized response handling
    const isSuccess = handleApiResponse(
      response,
      // Success callback
      () => {
        const authData = extractAuthData(response);
        
        if (authData) {
          // Update Redux state
          dispatch(setCredentials({
            user: authData.user,
            token: authData.token || ''
          }));

          // Store token in localStorage
          localStorage.setItem('token', authData.token || '');
          
          // Show success message based on provider
          switch (provider) {
            case 'google':
              showToast.success('Google login successful!');
              break;
            case 'linkedin':
              showToast.success('LinkedIn login successful!');
              break;
            case 'apple':
              showToast.success('Apple login successful!');
              break;
            case 'simple':
              showToast.loginSuccess();
              break;
          }
          
          // Redirect to home and prevent going back to login
          router.replace("/home");
        } else {
          throw new Error("Invalid response format");
        }
      },
      // Error callback
      (errorMessage) => {
        showToast.apiError(errorMessage);
      }
    );

    if (!isSuccess) {
      return false; // Error already handled by callback
    }

    return true;
  } catch (error: any) {
    const errorMessage = handleApiError(error as any);
    showToast.apiError(errorMessage);
    return false;
  }
};

// Generic authentication handler for any login method
export const handleAuthentication = async (
  authPromise: Promise<AuthResponse>,
  dispatch: Dispatch,
  router: AppRouterInstance,
  provider: 'google' | 'linkedin' | 'apple' | 'simple'
) => {
  try {
    dispatch(setLoading(true));
    
    const response = await authPromise;
    const success = await handleSSOResponse(response, dispatch, router, provider);
    
    return success;
  } catch (error: any) {
    const errorMessage = handleApiError(error as any);
    showToast.apiError(errorMessage);
    return false;
  } finally {
    dispatch(setLoading(false));
  }
};

// Provider-specific error messages
export const getProviderErrorMessage = (provider: 'google' | 'linkedin' | 'apple') => {
  switch (provider) {
    case 'google':
      return "Google login failed. Please try again.";
    case 'linkedin':
      return "LinkedIn login failed. Please try again.";
    case 'apple':
      return "Apple login failed. Please try again.";
    default:
      return "Authentication failed. Please try again.";
  }
};

// Provider-specific configuration validation
export const validateProviderConfig = (provider: 'google' | 'linkedin' | 'apple') => {
  switch (provider) {
    case 'google':
      const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (!googleClientId) {
        showToast.apiError("Google OAuth is not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your environment variables.");
        return false;
      }
      return true;
    case 'linkedin':
      const linkedinClientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
      if (!linkedinClientId) {
        showToast.apiError("LinkedIn OAuth is not configured. Please set NEXT_PUBLIC_LINKEDIN_CLIENT_ID in your environment variables.");
        return false;
      }
      return true;
    case 'apple':
      const appleClientId = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;
      if (!appleClientId) {
        showToast.apiError("Apple OAuth is not configured. Please set NEXT_PUBLIC_APPLE_CLIENT_ID in your environment variables.");
        return false;
      }
      return true;
    default:
      return true;
  }
};

// Simplified authentication handler for 2FA verification
export const handle2FAAuthentication = async (
  authData: { token: string; userData: any },
  router: AppRouterInstance,
  dispatch?: Dispatch
) => {
  try {
    // Store token
    localStorage.setItem('token', authData.token);
    
    // Store user data in Redux if dispatch is provided
    if (dispatch && authData.userData) {
      dispatch(setCredentials({
        user: {
          ...authData.userData,
          avatar: authData.userData.avatar || authData.userData.picture || undefined
        },
        token: authData.token
      }));
    }
    
    // Redirect to home
    router.replace("/home");
    
    return true;
  } catch (error) {
    console.error('Authentication error:', error);
    return false;
  }
};

// JWT utility functions
export const decodeJWT = (token: string) => {
  try {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = decodeJWT(token);
    if (!decoded || !decoded.exp) {
      return true; // If we can't decode or no expiration, consider expired
    }
    
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error checking token expiration:', error);
    return true; // If error, consider expired
  }
};

export const getTokenExpirationTime = (token: string): number | null => {
  try {
    const decoded = decodeJWT(token);
    return decoded?.exp ? decoded.exp * 1000 : null; // Convert to milliseconds
  } catch (error) {
    console.error('Error getting token expiration:', error);
    return null;
  }
};

export const handleTokenExpired = (dispatch: Dispatch, router?: AppRouterInstance) => {
  localStorage.removeItem('token');
  dispatch(logout());
  showToast.apiError('Your session has expired. Please log in again.');
  
  if (router) {
    router.replace('/signin');
  } else {
    // If no router provided, try to redirect using window.location
    window.location.href = '/signin';
  }
};
