"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { THEMES, STORAGE_KEYS } from "@/lib/constants";

type Theme = typeof THEMES.LIGHT | typeof THEMES.DARK;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(THEMES.DARK);

  useEffect(() => {
    // Get theme from localStorage on mount
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as Theme;
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      setThemeState(savedTheme);
    } else {
      // Default to dark theme
      setThemeState(THEMES.DARK);
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    const root = document.documentElement;
    
    if (theme === THEMES.DARK) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
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