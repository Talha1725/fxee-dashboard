"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { Locale, TranslationKeys, DEFAULT_LOCALE, RTL_LOCALES, TranslationKey } from '@/types/translations';

interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  direction: 'ltr' | 'rtl';
  isLoading: boolean;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export function LocalizationProvider({ children }: LocalizationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<TranslationKeys | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load translations from JSON file
  const loadTranslations = async (newLocale: Locale) => {
    try {
      setIsLoading(true);
      // Add cache-busting parameter
      const cacheBuster = Date.now() + Math.random();
      const response = await fetch(`/locales/${newLocale}.json?t=${cacheBuster}&v=${Math.random()}`);
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${newLocale}`);
      }
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English if loading fails
      if (newLocale !== DEFAULT_LOCALE) {
        try {
          const fallbackResponse = await fetch(`/locales/${DEFAULT_LOCALE}.json`);
          const fallbackData = await fallbackResponse.json();
          setTranslations(fallbackData);
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Set locale and load translations
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    loadTranslations(newLocale);

    // Update document attributes
    document.documentElement.lang = newLocale;
    document.documentElement.dir = RTL_LOCALES.includes(newLocale) ? 'rtl' : 'ltr';
    
    // Store in localStorage
    localStorage.setItem('fxee-locale', newLocale);
  };

  // Translation function
  const t = useCallback((key: TranslationKey): string => {
    if (!translations) {
      return key;
    }
    
    if (translations[key]) {
      return translations[key];
    }
    
    return key; // Fallback to key if translation not found
  }, [translations, locale]);

  // Get direction based on locale
  const direction = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';

  // Initialize on mount
  useEffect(() => {
    // Check localStorage for saved locale
    const savedLocale = localStorage.getItem('fxee-locale') as Locale;
    const initialLocale = savedLocale && ['en-us', 'en-uk', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh'].includes(savedLocale) 
      ? savedLocale 
      : DEFAULT_LOCALE;
    
    // Set initial locale and load translations
    setLocaleState(initialLocale);
    loadTranslations(initialLocale);
    
    // Update document attributes
    document.documentElement.lang = initialLocale;
    document.documentElement.dir = RTL_LOCALES.includes(initialLocale) ? 'rtl' : 'ltr';
  }, []);

  const value: LocalizationContextType = {
    locale,
    setLocale,
    t,
    direction,
    isLoading,
  };


  return (
    <LocalizationContext.Provider value={value}>
      <div key={`${locale}-${translations ? 'loaded' : 'loading'}`}>
        {children}
      </div>
    </LocalizationContext.Provider>
  );
}

// Hook to use localization
export function useLocalization(): LocalizationContextType {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
}
