"use client";

import React from "react";

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

export default function NavbarActions() {
  const { theme } = useTheme();
  return (
    <div className="hidden sm:flex items-center gap-1">
      <Button variant="ghost" className={`${theme === "light" && "bg-light-gradient"}`} >
        <IconSearch width={20} height={20} />
      </Button>
      <Button variant="ghost" className={`${theme === "light" && "bg-light-gradient"}`}>
        <IconNotification width={20} height={20} />
      </Button>
      <Select value="uk">
        <SelectTrigger className="border-none bg-none bg-dark-gradient cursor-pointer shadow-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="min-w-[40px] dark:bg-black bg-white">
          <SelectGroup>
            <SelectItem value="uk">
              <IconUK width={20} height={20} />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <NavbarThemeSwitch />
    </div>
  );
}
