"use client";

import React from 'react';
import { useLocalization } from '@/components/localization-provider';
import { Locale } from '@/types/translations';
import { LANGUAGES } from '@/lib/constants/languages';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

// Map language values to locale codes
const LANGUAGE_TO_LOCALE_MAP: Record<string, Locale> = {
  "English (US)": "en-us",
  "English (UK)": "en-uk", 
  "Spanish": "es",
  "French": "fr",
  "German": "de",
  "Italian": "it",
  "Portuguese": "pt",
  "Russian": "ru",
  "Chinese": "zh",
};

// Map locale codes to language values
const LOCALE_TO_LANGUAGE_MAP: Record<Locale, string> = {
  "en-us": "English (US)",
  "en-uk": "English (UK)",
  "es": "Spanish", 
  "fr": "French",
  "de": "German",
  "it": "Italian",
  "pt": "Portuguese",
  "ru": "Russian",
  "zh": "Chinese",
};

export default function LanguageSelector({ className = '', variant = 'default' }: LanguageSelectorProps) {
  const { locale, setLocale, t } = useLocalization();

  const currentLanguage = LANGUAGES.find(lang => LANGUAGE_TO_LOCALE_MAP[lang.value] === locale);

  const handleLanguageChange = (languageValue: string) => {
    const newLocale = LANGUAGE_TO_LOCALE_MAP[languageValue];
    if (newLocale) {
      setLocale(newLocale);
    }
  };

  if (variant === 'minimal') {
    return (
      <Select value={LOCALE_TO_LANGUAGE_MAP[locale]} onValueChange={handleLanguageChange}>
        <SelectTrigger className={`w-auto border-none bg-transparent focus:ring-0 ${className}`}>
          <SelectValue>
            <span className="flex items-center gap-2">
              <span>{currentLanguage?.navbarFlag}</span>
              <span className="text-sm">{currentLanguage?.shortLabel}</span>
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {LANGUAGES.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              <div className="flex items-center gap-2">
                <span>{language.navbarFlag}</span>
                <span>{language.shortLabel}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-white/70">{t('language')}:</span>
      <Select value={LOCALE_TO_LANGUAGE_MAP[locale]} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-auto border-white/20 bg-white/10 text-white focus:ring-0">
          <SelectValue>
            <span className="flex items-center gap-2">
              <span>{currentLanguage?.flag}</span>
              <span className="text-sm">{currentLanguage?.label}</span>
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {LANGUAGES.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              <div className="flex items-center gap-2">
                <span>{language.flag}</span>
                <span>{language.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
