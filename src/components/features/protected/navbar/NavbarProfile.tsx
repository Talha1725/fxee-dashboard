"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  Settings,
  Search,
  Bell,
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label, PopularBadge } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { THEMES } from "@/lib/constants";
import { logout } from "@/lib/redux/features/auth/authSlice";
import { RootState } from "@/lib/redux/store";
import { showToast } from "@/lib/utils/toast";
import { Select, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectGroup } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { IconUK } from "@/components/ui/icon";
import { IconSearch } from "@/components/ui/icon";
import { IconNotification } from "@/components/ui/icon";
import NavbarThemeSwitch from "@/components/features/protected/navbar/NavbarThemeSwitch";
import NavbarAccountSwitch from "./NavbarAccountSwitch";

export default function NavbarProfile() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");

    // Dispatch logout action
    dispatch(logout());

    // Show success toast
    showToast.success("Logged out successfully");

    // Redirect to signin page and prevent going back
    router.replace("/signin");
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
      <Button
        variant="ghost"
        className="bg-black text-white dark:!text-black dark:bg-white font-[700] dark:hover:bg-white/80 hover:bg-black/80 py-2 md:flex hidden"
      >
        Upgrade
        <ChevronUp
          size={20}
          className={theme === "dark" ? "text-black" : "text-white"}
        />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="flex items-center gap-2 relative">
              <Avatar>
                <AvatarImage src={user?.picture} />
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
          <div className="flex flex-col gap-2 dark:text-white text-black md:hidden">
            <div className="flex items-center gap-2">
              <Button
                variant={theme === "dark" ? "white" : "black"}
                className="font-satoshi-medium w-[141px]"
              >
                <p>Upgrade</p> <ArrowUp className="w-4 h-4 dark:text-black text-white" />
              </Button>
              <div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="flex items-center gap-2 relative">
                    <Avatar>
                      <AvatarImage src={user?.picture} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                    <Label className="dark:text-white text-black">
                      {user?.fullName || user?.userName || "User"}
                    </Label>
                    <PopularBadge className="flex justify-center items-center gap-2.5 p-[3px] absolute left-[21px] bottom-0 rounded-[3px]">
                      Pro
                    </PopularBadge>
                  </div>
                </div>
              </div>
            </div>
            <NavbarAccountSwitch className="text-[12px] sm:text-[14px]" dropdown={true} />
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className={`${theme === "light" && "bg-light-gradient"}`}
              >
                <IconSearch width={20} height={20} />
              </Button>
              <Button
                variant="ghost"
                className={`${theme === "light" && "bg-light-gradient"}`}
              >
                <IconNotification width={20} height={20} />
              </Button>
              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger className="border-none bg-none bg-dark-gradient cursor-pointer shadow-none flex items-center gap-2 px-3 py-2 rounded-lg w-full">
                  <div className="flex items-center gap-2">
                  <IconUK width={16} height={16} />
                  <span className="dark:text-white text-black font-satoshi">
                    {selectedLanguage === "english" && "English"}
                    {selectedLanguage === "spanish" && "Español"}
                    {selectedLanguage === "french" && "Français"}
                    {selectedLanguage === "german" && "Deutsch"}
                  </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="min-w-[120px] dark:bg-black bg-white">
                  <SelectGroup>
                    <SelectItem
                      value="english"
                      className="flex items-center gap-2"
                    >
                      <IconUK width={16} height={16} />
                      <span>English</span>
                    </SelectItem>
                    <SelectItem
                      value="spanish"
                      className="flex items-center gap-2"
                    >
                      <IconUK width={16} height={16} />
                      <span>Español</span>
                    </SelectItem>
                    <SelectItem
                      value="french"
                      className="flex items-center gap-2"
                    >
                      <IconUK width={16} height={16} />
                      <span>Français</span>
                    </SelectItem>
                    <SelectItem
                      value="german"
                      className="flex items-center gap-2"
                    >
                      <IconUK width={16} height={16} />
                      <span>Deutsch</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <NavbarThemeSwitch dropdown={true} />{" "}
            <Button
                variant={theme === "dark" ? "white" : "black"}
                className="font-satoshi-medium w-full"
                onClick={handleLogout}
              >
                <p>Logout</p> <LogOut className="w-4 h-4 dark:text-black text-white" />
              </Button>
          </div>
          <DropdownMenuItem
            onClick={handleLogout}
            className="items-center gap-2 dark:text-white text-black cursor-pointer md:flex hidden"
          >
            <LogOut size={16} className="mr-2 text-black dark:text-white/80" />
            <p className="text-black dark:text-white/80">Logout</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
