import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/redux/store';
import { logout } from '@/lib/redux/features/auth/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Check if token exists in localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!token && storedToken) {
      // Token exists in localStorage but not in Redux state
      // This could happen on page refresh
      // You might want to validate the token here
    }
  }, [token]);

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
