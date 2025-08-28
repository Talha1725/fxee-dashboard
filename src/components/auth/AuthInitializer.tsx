"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { useGetProfileQuery } from '@/lib/redux/features/auth/authApi';
import { setCredentials, logout } from '@/lib/redux/features/auth/authSlice';

export default function AuthInitializer() {
  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  // Check localStorage token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log('AuthInitializer Debug:', { 
      reduxToken: !!token, 
      storedToken: !!storedToken, 
      isAuthenticated, 
      user: !!user 
    });
    
    // If we have a stored token but no Redux token, there might be a persistence issue
    if (storedToken && !token) {
      console.warn('Token found in localStorage but not in Redux - possible persistence issue');
    }
  }, [token, isAuthenticated, user]);
  
  // Only fetch profile if we have a token but no user data
  const shouldFetchProfile = !!token && !user;
  
  const { data: profileData, error, isError } = useGetProfileQuery(undefined, {
    skip: !shouldFetchProfile
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