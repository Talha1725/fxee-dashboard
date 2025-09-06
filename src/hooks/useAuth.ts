import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/redux/store';
import { logout, resetAuthState, setLoading } from '@/lib/redux/features/auth/authSlice';
import { useLogoutMutation } from '@/lib/redux/features/auth/authApi';
import { showToast } from '@/lib/utils/toast';

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // RTK Query logout mutation
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

  // Check if token exists in localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!token && storedToken) {
      // Token exists in localStorage but not in Redux state
      // This could happen on page refresh
      // You might want to validate the token here
    }
  }, [token]);

  const handleLogout = useCallback(async () => {
    if (isLoggingOut || isLoading) return;
    
    try {
      dispatch(setLoading(true));
      
      // Call logout API if available
      try {
        await logoutMutation().unwrap();
      } catch (apiError) {
        // Continue with logout even if API call fails
        console.warn('Logout API call failed, continuing with local logout:', apiError);
      }

      // Clear localStorage
      localStorage.removeItem('token');
      
      // Reset Redux state completely
      dispatch(resetAuthState());
      
      // Show success message
      showToast.success('Logged out successfully');
      
      // Small delay to ensure state is updated
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Redirect to signin page
      router.replace('/signin');
    } catch (error) {
      console.error('Logout error:', error);
      
      // Still clear the Redux state even if there's an error
      dispatch(resetAuthState());
      localStorage.removeItem('token');
      
      showToast.error('Failed to logout properly, but you have been signed out');
      router.replace('/signin');
    }
  }, [dispatch, router, logoutMutation, isLoggingOut, isLoading]);

  const isAuthenticatedUser = isAuthenticated && !!token;
  const isAuthLoading = isLoading || isLoggingOut;

  return {
    user,
    token,
    isAuthenticated: isAuthenticatedUser,
    isLoading: isAuthLoading,
    error,
    logout: handleLogout,
  };
};
