"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  Settings,
  User,
  Wallet,
  LogOut,
  ArrowUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label, PopularBadge } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { logout } from "@/lib/redux/features/auth/authSlice";
import { RootState } from "@/lib/redux/store";
import { showToast } from "@/lib/utils/toast";
import { IconUK } from "@/components/ui/icon";
import NavbarThemeSwitch from "@/components/features/protected/navbar/NavbarThemeSwitch";
import NavbarAccountSwitch from "./NavbarAccountSwitch";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectGroup } from "@/components/ui/select";
import { LANGUAGES, getLanguageByValue } from "@/lib/constants/languages";
import { useUpdateLanguageMutation } from "@/lib/redux/services/userApi";
import { updateUser } from "@/lib/redux/features/auth/authSlice";
import LimitReachModal from "@/components/common/LimitReachModal";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function NavbarProfile() {
  const { theme } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isOpenLimitReach, setIsOpenLimitReach] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { isDemoAccountEnabled } = useAccountType();
  
  const handleOpenUpgradeModal = () => {
    setIsOpenLimitReach(true);
  };

  const handleCloseUpgradeModal = () => {
    setIsOpenLimitReach(false);
  };

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    try {
      setIsLoggingOut(true);
      
      // Clear token from localStorage
      localStorage.removeItem("token");

      // Dispatch logout action
      dispatch(logout());

      // Show success toast
      showToast.success("Logged out successfully");

      // Small delay to ensure toast is visible before redirect
      await new Promise(resolve => setTimeout(resolve, 500));

      // Redirect to signin page and prevent going back          
      router.replace("/signin");
    } catch (error) {
      showToast.error("Failed to logout. Please try again.");
      setIsLoggingOut(false);
    }
  };                                             
                                                             
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

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user) return "U";
    const names = user.fullName?.split(" ") || [];
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return (
      user.fullName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"
    );
  };

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-[10px]">
      {!isDemoAccountEnabled && (
      <Button
        variant="ghost"
        className="bg-black text-white dark:!text-black dark:bg-white font-[700] dark:hover:bg-white/80 hover:bg-black/80 py-2 md:flex hidden"
        onClick={handleOpenUpgradeModal}
      >
        Upgrade
        <ChevronUp
          size={20}
          className={theme === "dark" ? "text-black" : "text-white"}
        />
      </Button>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="flex items-center gap-2 relative">
              <Avatar>
                <AvatarImage src={user?.picture || undefined} />
                <AvatarFallback>{getUserInitials()}</AvatarFallback>
              </Avatar>
              <Label className="dark:text-white text-black lg:block hidden">
                {user?.fullName || user?.userName || "User"}
              </Label>
              <PopularBadge className="flex justify-center items-center gap-2.5 p-[3px] absolute left-[21px] bottom-0 rounded-[3px]">
                Pro
              </PopularBadge>
            </div>
            <ChevronDown size={20} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-[#0D0D0D] bg-white p-5 md:p-2 border dark:border-white/10 border-black/15">
          {/* Desktop User Info Section */}
          <div className="hidden md:block px-2 py-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.picture || undefined} />
                <AvatarFallback>{getUserInitials()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <Label className="dark:text-white text-black font-satoshi-medium">
                  {user?.fullName || user?.userName || "User"}
                </Label>
                <span className="text-sm dark:text-white/60 text-black/60 font-satoshi">
                  {user?.email || "user@example.com"}
                </span>
              </div>
            </div>
          </div>
          
          <DropdownMenuSeparator className="hidden md:block dark:bg-white/10 bg-black/10" />

          <div className="flex flex-col gap-1 sm:gap-2 dark:text-white text-black md:hidden">
            <div className="flex items-center gap-2">
              {!isDemoAccountEnabled && (
              <Button
                variant={theme === "dark" ? "white" : "black"}
                className="font-satoshi-medium w-[120px] sm:w-[141px] text-xs sm:text-sm"
                onClick={handleOpenUpgradeModal}
              >
                <p>Upgrade</p> <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 dark:text-black text-white" />
              </Button>
              )}
              <div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="flex items-center gap-1 sm:gap-2 relative">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src={user?.picture || undefined} />
                      <AvatarFallback className="text-xs sm:text-sm">{getUserInitials()}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <Label className="dark:text-white text-black text-xs sm:text-sm">
                        {user?.fullName || user?.userName || "User"}
                      </Label>
                      <span className="text-xs dark:text-white/60 text-black/60 font-satoshi">
                        {user?.email || "user@example.com"}
                      </span>
                    </div>
                    <PopularBadge className="flex justify-center items-center gap-1.5 sm:gap-2.5 p-[2px] sm:p-[3px] absolute left-[16px] sm:left-[21px] bottom-0 rounded-[3px] text-xs">
                      Pro
                    </PopularBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DropdownMenuSeparator className="md:hidden dark:bg-white/10 bg-black/10 mt-2" />
          
          <div className="flex flex-col gap-2">
            <NavbarAccountSwitch className="text-[12px] sm:text-[14px] md:hidden" dropdown={true} />
            <div className="flex items-center gap-2 md:hidden">

            <Select
                value={selectedLanguage}
                onValueChange={handleLanguageChange}
              >
                <SelectTrigger className="border-none bg-none bg-dark-gradient cursor-pointer shadow-none flex items-center gap-2 px-3 py-2 rounded-lg w-full">
                  <div className="flex items-center gap-2">
                    {currentLanguage.navbarFlag}
                    <span className="dark:text-white text-black font-satoshi">
                      {currentLanguage.shortLabel}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="min-w-[120px] dark:bg-black bg-white z-[999]">
                  <SelectGroup>
                    {LANGUAGES.map((lang) => (
                      <SelectItem
                        key={lang.value}
                        value={lang.value}
                        className="flex items-center gap-2"
                      >
                        <div className="flex items-center gap-2">
                          {lang.navbarFlag}
                          <span>{lang.shortLabel}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div> 
            <div className="md:hidden">
              <NavbarThemeSwitch dropdown={true} />
            </div>
            <Button
                variant={theme === "dark" ? "white" : "black"}
                className="font-satoshi-medium w-full"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? (
                  <div className="flex items-center gap-2">
                    <Spinner size="sm" className={theme === "dark" ? "text-black" : "text-white"} />
                    <p>Logging out...</p>
                  </div>
                ) : (
                  <>
                    <p>Logout</p> <LogOut className="w-4 h-4 dark:text-black text-white" />
                  </>
                )}
              </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <LimitReachModal
        isOpenLimitReach={isOpenLimitReach}
        onCloseLimitReach={handleCloseUpgradeModal}
      />
    </div>
  );
}