"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

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
  const { accountType, setAccountType, isDemoAccountEnabled } = useAccountType();
  const [activeTab, setActiveTab] = useState(defaultValue || accountType || "virtual-account");

  const handleTabChange = (value: string) => {
    // Disable demo account if user's account type is 'virtual_account'
    if (value === "demo-account" && !isDemoAccountEnabled) {
      return;
    }
    setActiveTab(value);
    setAccountType(value as "virtual-account" | "demo-account");
    onValueChange?.(value);
  };

  return (
    <TooltipProvider>
      <NavbarSwitchContainer className={className} dropdown={dropdown} customPadding={customPadding}>
        {items.map((item) => {
          const isDemoAccount = item.value === "demo-account";
          const isDemoDisabled = isDemoAccount && !isDemoAccountEnabled;
          
          if (isDemoAccount) {
            return (
              <Tooltip key={item.value} delayDuration={300}>
                <TooltipTrigger asChild>
                  <div className="w-full">
                    <NavbarSwitchToggleItem
                      isActive={activeTab === item.value}
                      onClick={() => handleTabChange(item.value)}
                      fontSize={fontSize}
                      className={isDemoDisabled ? "opacity-50 cursor-not-allowed" : ""}
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
                  </div>
                </TooltipTrigger>
                {isDemoDisabled && (
                  <TooltipContent 
                    className={`${
                      theme === 'dark' 
                        ? 'bg-black text-white border-gray-800' 
                        : 'bg-white text-gray-900 border-gray-200'
                    } z-[999]`}
                    side="bottom"
                  >
                    <div className="flex items-center gap-2">
                      <Info size={14} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                      <p>Please upgrade to enable demo account feature</p>
                    </div>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          }

          return (
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
          );
        })}
      </NavbarSwitchContainer>
    </TooltipProvider>
  );
}
