"use client";

import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { useGetProfileQuery } from '@/lib/redux/features/auth/authApi';
import { setCredentials, setToken, logout } from '@/lib/redux/features/auth/authSlice';

export default function AuthInitializer() {
  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  // Memoize the decision to fetch profile to prevent unnecessary re-renders
  const shouldFetchProfile = useMemo(() => {
    // Force fetch if user doesn't have subscription data or no user at all
    return !!token && (!user || !user.subscriptionTier);
  }, [token, user]);
  
  // Check localStorage token on component mount and restore if needed
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    
    // If we have a stored token but no Redux token, restore the token to Redux
    if (storedToken && !token) {
      dispatch(setToken(storedToken));
    }
    
    // If no stored token and we have Redux token, clear Redux state
    if (!storedToken && token) {
      dispatch(logout());
    }
  }, [token, dispatch]); // Removed isAuthenticated and user from dependencies
  
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
      dispatch(setCredentials({
        user: {
          ...profileData,
          role: profileData.role || 'user' // Default role if not provided
        },
        token
      }));
    }
  }, [profileData, token, dispatch]);

  // Handle profile fetch error (likely expired token)
  useEffect(() => {
    if (isError && error && token) {
      console.warn('Token might be expired, logging out');
      // Clear invalid token
      localStorage.removeItem('token');
      dispatch(logout());
    }
  }, [isError, error, token, dispatch]);

  // This component doesn't render anything
  return null;
}