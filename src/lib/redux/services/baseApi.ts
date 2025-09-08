import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { API_CONFIG } from "@/lib/config/api";
import { logout } from "../features/auth/authSlice";
import { isTokenExpired } from "@/lib/utils/authUtils";
import { showToast } from "@/lib/utils/toast";

// Base query with JWT expiration handling
const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: `${API_CONFIG.BASE_URL}/api`,
  prepareHeaders: (headers, { getState, dispatch }) => {
    // Get token from state
    const token = (getState() as RootState).auth.token;

    if (token) {
      // Check if token is expired before making request
      if (isTokenExpired(token)) {
        console.warn('Token expired before request, logging out');
        localStorage.removeItem('token');
        dispatch(logout());
        showToast.apiError('Your session has expired. Please log in again.');
        
        // Redirect to login page
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        }
        
        return headers;
      }
      
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  credentials: "include",
});

// Enhanced base query with response handling
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  
  // Handle 401/403 responses (token expired or invalid)
  if (result.error && (result.error.status === 401 || result.error.status === 403)) {
    console.warn('Received 401/403, token likely expired, logging out');
    
    // Clear token from localStorage
    localStorage.removeItem('token');
    
    // Dispatch logout action
    api.dispatch(logout());
    
    // Show error message
    showToast.apiError('Your session has expired. Please log in again.');
    
    // Redirect to login page
    if (typeof window !== 'undefined') {
      window.location.href = '/signin';
    }
  }
  
  return result;
};

// Base API configuration
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Payment", "Chat", "Recommendation", "ProposedTrade", "AITools", "TradingPreferences"],
  endpoints: () => ({}),
});
