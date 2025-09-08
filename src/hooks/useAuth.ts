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
    if (isLoggingOut) return;
    
    try {
      try {
        await logoutMutation().unwrap();
      } catch (apiError) {
        console.warn('Logout API call failed, continuing with local logout:', apiError);
      }

      localStorage.removeItem('token');
      
      dispatch(resetAuthState());
      
      showToast.success('Logged out successfully');
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      router.replace('/signin');
    } catch (error) {
      console.error('Logout error:', error);
      
      dispatch(resetAuthState());
      localStorage.removeItem('token');
      
      showToast.error('Failed to logout properly, but you have been signed out');
      router.replace('/signin');
    }
  }, [dispatch, router, logoutMutation, isLoggingOut]);

  const isAuthenticatedUser = isAuthenticated && !!token;

  return {
    user,
    token,
    isAuthenticated: isAuthenticatedUser,
    isLoading: isLoggingOut,
    error,
    logout: handleLogout,
  };
};
