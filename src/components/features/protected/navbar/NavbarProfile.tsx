"use client"
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Moon, Sun, Settings, Search, Bell, User, Wallet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label, PopularBadge } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { THEMES } from "@/lib/constants";

export default function NavbarProfile() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("English");
  return (
    <div className="flex items-center gap-1.5 p-1 rounded-[10px]">
      <Button
        variant="ghost"
        className="bg-black text-white dark:!text-black dark:bg-white font-[700] dark:hover:bg-white/80 hover:bg-black/80 py-2 md:flex hidden"
      >
        Upgrade
        <ChevronUp size={20} className={theme === "dark" ? "text-black" : "text-white"} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="flex items-center gap-2 relative">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Label className="dark:text-white text-black">Reku</Label>
              <PopularBadge className="flex justify-center items-center gap-2.5 p-[3px] absolute left-[21px] bottom-0 rounded-[3px]">
                Pro
              </PopularBadge>
            </div>
            <ChevronDown size={20} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-black bg-white">
          <DropdownMenuItem className="lg:hidden flex items-center gap-2 dark:text-white text-black">
            <User size={16} className="mr-2 text-black dark:text-white/80" />
            <p className="text-black dark:text-white/80">Demo Account</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="md:hidden flex items-center gap-2">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2">
                <Wallet size={16} className="mr-2 text-black dark:text-white/80" />
                <p className="text-black dark:text-white/80">Upgrade</p>
              </div>
              <ChevronUp size={20} className="text-black" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="sm:hidden flex items-center gap-2 dark:text-white text-black">
              <Moon size={16} className="mr-2 text-black dark:text-white/80" />
              <p className="text-black dark:text-white/80">Theme</p>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="dark:bg-black bg-white">
              <DropdownMenuItem 
                onClick={() => setTheme(THEMES.LIGHT)}
                className="dark:text-white text-black"
              >
                <Sun size={16} className="mr-2 text-black dark:text-white/80" />
                <p className="text-black dark:text-white/80">Light</p>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setTheme(THEMES.DARK)}
                className="dark:text-white text-black"
              >
                <Moon size={16} className="mr-2 text-black dark:text-white/80" />
                <p className="text-black dark:text-white/80">Dark</p>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem className="sm:hidden flex items-center gap-2 dark:text-white text-black">
            <Search size={16} className="mr-2 text-black dark:text-white/80" />
            <p className="text-black dark:text-white/80">Search</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="sm:hidden flex items-center gap-2 dark:text-white text-black">
            <Bell size={16} className="mr-2 text-black dark:text-white/80" />
            <p className="text-black dark:text-white/80">Notifications</p>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="sm:hidden flex items-center gap-2 dark:text-white text-black">
              <Settings size={16} className="mr-2 text-black dark:text-white/80" />
              <p className="text-black dark:text-white/80">Language</p>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="dark:bg-black bg-white">
              <DropdownMenuItem 
                onClick={() => setLanguage("English")}
                className="dark:text-white text-black"
              >
                <p className="text-black dark:text-white/80">English</p>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("Spanish")}
                className="dark:text-white text-black"
              >
                <p className="text-black dark:text-white/80">Español</p>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("French")}
                className="dark:text-white text-black"
              >
                <p className="text-black dark:text-white/80">Français</p>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("German")}
                className="dark:text-white text-black"
              >
                <p className="text-black dark:text-white/80">Deutsch</p>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem className="flex items-center gap-2 dark:text-white text-black">
            <User size={16} className="mr-2 text-black dark:text-white/80" />
            <p className="text-black dark:text-white/80">Profile</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
