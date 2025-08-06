"use client";

import React from "react";

import NavbarSwitchContainer from "@/components/features/protected/navbar/NavbarSwitchContainer";
import NavbarSwitchToggleItem from "@/components/features/protected/navbar/NavbarSwitchToggleItem";
import { IconMoon, IconSun } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { THEMES } from "@/lib/constants";

export default function NavbarThemeSwitch() {
  const { theme, setTheme } = useTheme();

  // Don't render until theme is loaded
  if (!theme) return null;

  return (
    <NavbarSwitchContainer>
      <NavbarSwitchToggleItem
        isActive={theme === THEMES.DARK}
        onClick={() => setTheme(THEMES.DARK)}
      >
        <IconMoon
          width={20}
          height={20}
          color={theme === "light" ? "#1D1D1DCC" : "black"}
        />
        <p className="font-satoshi-medium">Dark</p>
      </NavbarSwitchToggleItem>
      <NavbarSwitchToggleItem
        isActive={theme === THEMES.LIGHT}
        onClick={() => setTheme(THEMES.LIGHT)}
      >
        <IconSun
          width={20}
          height={20}
          color={theme === "light"? "white" : "#FFFFFF99"}
        />
        <p className="font-satoshi-medium">Light</p>
      </NavbarSwitchToggleItem>
    </NavbarSwitchContainer>
  );
}
