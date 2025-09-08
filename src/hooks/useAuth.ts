import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/redux/store';
import { logout } from '@/lib/redux/features/auth/authSlice';
import { isTokenExpired, handleTokenExpired } from '@/lib/utils/authUtils';

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Check if token exists in localStorage on mount and validate expiration
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    
    if (storedToken && isTokenExpired(storedToken)) {
      // Token is expired, remove it and logout
      handleTokenExpired(dispatch, router);
      return;
    }
    
    if (!token && storedToken) {
      // Token exists in localStorage but not in Redux state
      // This could happen on page refresh
      // Token is valid, let AuthInitializer handle it
    }
  }, [token, dispatch, router]);


  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    router.push('/signin');
  };

  const isAuthenticatedUser = isAuthenticated && !!token;

  return {
    user,
    token,
    isAuthenticated: isAuthenticatedUser,
    isLoading,
    error,
    logout: handleLogout,
  };
};
