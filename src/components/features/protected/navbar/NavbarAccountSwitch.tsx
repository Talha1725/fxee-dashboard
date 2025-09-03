"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

import NavbarSwitchToggleItem from "@/components/features/protected/navbar/NavbarSwitchToggleItem";
import NavbarSwitchContainer from "@/components/features/protected/navbar/NavbarSwitchContainer";

interface SwitchItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface NavbarAccountSwitchProps {
  className?: string;
  dropdown?: boolean;
  items?: SwitchItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  fontSize?: number;
  customPadding?: string;
}

export default function NavbarAccountSwitch({
  className,
  dropdown,
  items = [
    { label: "Virtual Account", value: "virtual-account" },
    { label: "Demo Account", value: "demo-account" }
  ],
  defaultValue,
  onValueChange,
  fontSize = 16,
  customPadding,
}: NavbarAccountSwitchProps) {
  const { theme } = useTheme();
  const { accountType, setAccountType } = useAccountType();
  const [activeTab, setActiveTab] = useState(defaultValue || accountType || "virtual-account");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setAccountType(value as "virtual-account" | "demo-account");
    onValueChange?.(value);
  };

  return (
    <NavbarSwitchContainer className={className} dropdown={dropdown} customPadding={customPadding}>
      {items.map((item) => (
        <NavbarSwitchToggleItem
          key={item.value}
          isActive={activeTab === item.value}
          onClick={() => handleTabChange(item.value)}
          fontSize={fontSize}
        >
          {item.icon && (
            <span className="mr-2">
              {React.isValidElement(item.icon) 
                ? React.cloneElement(item.icon, {
                    forceColor: activeTab === item.value 
                      ? (theme === 'dark' ? 'black' : 'white')  // Selected: black in dark mode, white in light mode
                      : (theme === 'dark' ? 'white' : 'black')  // Not selected: white in dark mode, black in light mode
                  } as any)
                : item.icon
              }
            </span>
          )}
          {item.label}
        </NavbarSwitchToggleItem>
      ))}
    </NavbarSwitchContainer>
  );
}
