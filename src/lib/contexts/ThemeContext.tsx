"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { THEMES, STORAGE_KEYS } from "@/lib/constants";

type Theme = typeof THEMES.LIGHT | typeof THEMES.DARK;

interface ThemeContextType {
  theme: Theme | null;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme | null>(null);
  const pathname = usePathname();

  // Check if current route is public (landing page or public routes)
  const isPublicRoute = pathname === "/" || 
                       pathname.startsWith("/about") || 
                       pathname.startsWith("/contact") || 
                       pathname.startsWith("/community") || 
                       pathname.startsWith("/how-it-works") || 
                       pathname.startsWith("/challenge-support");

  useEffect(() => {
    if (isPublicRoute) {
      // Force dark mode for public routes
      setThemeState(THEMES.DARK);
    } else {
      // Get theme from localStorage for protected routes
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as Theme;
      if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
        setThemeState(savedTheme);
      } else {
        // Default to light theme if no saved preference
        setThemeState(THEMES.LIGHT);
      }
    }
  }, [isPublicRoute]);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    if (theme) {
      const root = document.documentElement;
      
      if (theme === THEMES.DARK) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      
      // Only save to localStorage for protected routes
      if (!isPublicRoute) {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
      }
    }
  }, [theme, isPublicRoute]);

  const setTheme = (newTheme: Theme) => {
    // Only allow theme changes for protected routes
    if (!isPublicRoute) {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    // Only allow theme toggle for protected routes
    if (!isPublicRoute) {
      setThemeState(prev => {
        if (!prev) return THEMES.LIGHT;
        return prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 