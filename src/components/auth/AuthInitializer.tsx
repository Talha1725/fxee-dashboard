"use client";

import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { useGetProfileQuery } from '@/lib/redux/features/auth/authApi';
import { setCredentials, setToken, logout, resetAuthState } from '@/lib/redux/features/auth/authSlice';
import { logAuthStateChange, validateAuthState } from '@/lib/utils/authDebug';

export default function AuthInitializer() {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  const { token, user, isAuthenticated } = authState;
  
  // Log auth state changes for debugging
  useEffect(() => {
    logAuthStateChange('AuthInitializer Mount', authState);
    
    // Validate auth state consistency
    const validation = validateAuthState(authState);
    if (!validation.isValid) {
      console.warn('⚠️ Auth state validation issues on mount:', validation.issues);
    }
  }, [authState]);
  
  // Memoize the decision to fetch profile to prevent unnecessary re-renders
  const shouldFetchProfile = useMemo(() => {
    return !!token && !user;
  }, [token, user]);
  
  // Check localStorage token on component mount and restore if needed
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    
    // If we have a stored token but no Redux token, restore the token to Redux
    if (storedToken && !token) {
      logAuthStateChange('Restoring Token from localStorage', authState, { storedToken });
      dispatch(setToken(storedToken));
    }
    
    // If no stored token and we have Redux token, clear Redux state
    if (!storedToken && token) {
      logAuthStateChange('Clearing Auth State - No localStorage token', authState);
      dispatch(resetAuthState());
    }
  }, [token, dispatch, authState]); // Added authState for debugging
  
  // Only fetch profile if we have a token but no user data
  const { data: profileData, error, isError } = useGetProfileQuery(undefined, {
    skip: !shouldFetchProfile,
    // Add caching to prevent unnecessary refetches
    refetchOnMountOrArgChange: false,
    refetchOnFocus: false,
    refetchOnReconnect: false
  });

  // Handle profile fetch success
  useEffect(() => {
    if (profileData && token) {
      logAuthStateChange('Profile Fetch Success', authState, { profileData });
      dispatch(setCredentials({
        user: {
          ...profileData,
          role: profileData.role || 'user' // Default role if not provided
        },
        token
      }));
    }
  }, [profileData, token, dispatch, authState]);

  // Handle profile fetch error (likely expired token)
  useEffect(() => {
    if (isError && error && token) {
      console.warn('Token might be expired, logging out');
      logAuthStateChange('Profile Fetch Error - Clearing Auth', authState, { error });
      
      // Clear invalid token
      localStorage.removeItem('token');
      dispatch(resetAuthState());
    }
  }, [isError, error, token, dispatch, authState]);

  // This component doesn't render anything
  return null;
}