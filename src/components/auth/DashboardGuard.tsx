"use client";

import { useEffect, useState, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

interface DashboardGuardProps {
  children: React.ReactNode;
}

export default function DashboardGuard({ children }: DashboardGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);
  
  // Get auth state from Redux instead of localStorage
  const { token, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  // Memoize dashboard route check to avoid recalculation
  const isOnDashboardRoute = useMemo(() => {
    return pathname.startsWith('/home') || 
           pathname.startsWith('/dashboard') ||
           pathname.startsWith('/ai-engine') ||
           pathname.startsWith('/copy-trading') ||
           pathname.startsWith('/performance-history') ||
           pathname.startsWith('/trades') ||
           pathname.startsWith('/support') ||
           pathname.startsWith('/tutorial') ||
           pathname.startsWith('/settings') ||
           pathname.startsWith('/wallet');
  }, [pathname]);
  
  useEffect(() => {
    const checkAuth = () => {
      // Use Redux state first, fallback to localStorage only if needed
      const hasValidAuth = isAuthenticated && token;
      
      if (!hasValidAuth && isOnDashboardRoute) {
        // Double-check localStorage as fallback
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
          console.log('No token found, redirecting to signin');
          router.replace('/signin');
          return;
        }
      }
      
      setIsChecking(false);
    };
    
    // Only check if we're on a dashboard route
    if (isOnDashboardRoute) {
      checkAuth();
    } else {
      setIsChecking(false);
    }
  }, [pathname, router, isAuthenticated, token, isOnDashboardRoute]);
  
  // Show loading while checking authentication
  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return <>{children}</>;
}
