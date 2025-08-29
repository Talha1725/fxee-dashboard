"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Check localStorage for token immediately
    const token = localStorage.getItem('token');
    
    if (token) {
      // User has token, redirect to home
      router.replace('/home');
    }
  }, [router]);
  
  // This component doesn't render anything
  return null;
}
