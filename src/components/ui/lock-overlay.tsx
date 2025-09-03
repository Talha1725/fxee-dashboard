"use client";

import React from 'react';
import { IconLock } from '@/components/ui/icon';
import { useTheme } from '@/lib/contexts/ThemeContext';

interface LockOverlayProps {
  children: React.ReactNode;
}

export function LockOverlay({ children }: LockOverlayProps) {
  const { theme } = useTheme();

  return (
    <div className="relative cursor-not-allowed">
      {children}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <IconLock 
          width={32} 
          height={32} 
          color={theme === 'dark' ? 'white' : 'black'} 
        />
      </div>
    </div>
  );
}
