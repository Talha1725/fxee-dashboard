"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarThemeSwitch from "@/components/features/protected/navbar/NavbarThemeSwitch";
import { Button } from "@/components/ui/button";
import { IconNotification, IconSearch, IconUK } from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { RootState } from "@/lib/redux/store";
import { LANGUAGES, getLanguageByValue } from "@/lib/constants/languages";
import { useUpdateLanguageMutation } from "@/lib/redux/services/userApi";
import { updateUser } from "@/lib/redux/features/auth/authSlice";
import { showToast } from "@/lib/utils/toast";

export default function NavbarActions() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [updateLanguage] = useUpdateLanguageMutation();
  
  // Get user's current language or default to English (US)
  const [selectedLanguage, setSelectedLanguage] = useState(user?.language || "English (US)");
  const currentLanguage = getLanguageByValue(selectedLanguage);
  
  // Update selected language when user data changes
  useEffect(() => {
    if (user?.language) {
      setSelectedLanguage(user.language);
    }
  }, [user?.language]);
  
  // Handle language change
  const handleLanguageChange = async (newLanguage: string) => {
    try {
      setSelectedLanguage(newLanguage);
      
      // Update language via API - include required user data
      const result = await updateLanguage({ 
        language: newLanguage,
        fullName: user?.fullName,
        userName: user?.userName
      }).unwrap();
      
      // Update Redux store - ensure all required fields are present
      dispatch(updateUser({
        ...result.result,
        role: (result.result.role as "user" | "admin" | "trader") || user?.role || "user"
      }));
      
      showToast.success(`Language changed to ${getLanguageByValue(newLanguage).shortLabel}`);
    } catch (error) {
      // Revert on error
      setSelectedLanguage(user?.language || "English (US)");
      showToast.error("Failed to update language");
    }
  };

  return (
    <div className="hidden sm:flex items-center gap-1">
      <Button variant="ghost" className={`${theme === "light" && "bg-light-gradient"}`} >
        <IconSearch width={20} height={20} />
      </Button>
      <Button variant="ghost" className={`${theme === "light" && "bg-light-gradient"}`}>
        <IconNotification width={20} height={20} />
      </Button>
      <Select
        value={selectedLanguage}
        onValueChange={handleLanguageChange}
      >
        <SelectTrigger className="border-none bg-none bg-dark-gradient cursor-pointer shadow-none flex items-center gap-2 px-2 py-1 rounded-lg min-w-[60px]">
          <div className="flex items-center gap-1">
            {currentLanguage.navbarFlag}
            <span className="dark:text-white text-black font-satoshi text-sm hidden lg:block">
              {currentLanguage.shortLabel}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent className="min-w-[120px] dark:bg-black bg-white">
          <SelectGroup>
            {LANGUAGES.map((language) => (
              <SelectItem
                key={language.value}
                value={language.value}
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  {language.navbarFlag}
                  <span>{language.shortLabel}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <NavbarThemeSwitch />
    </div>
  );
}
