"use client";

import React, { useState } from "react";

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
}: NavbarAccountSwitchProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.value || "virtual-account");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onValueChange?.(value);
  };

  return (
    <NavbarSwitchContainer className={className} dropdown={dropdown}>
      {items.map((item) => (
        <NavbarSwitchToggleItem
          key={item.value}
          isActive={activeTab === item.value}
          onClick={() => handleTabChange(item.value)}
        >
          {item.icon && (
            <span className="mr-2">
              {React.isValidElement(item.icon) 
                ? React.cloneElement(item.icon, {
                    forceColor: activeTab === item.value ? 'white' : 'black'
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
