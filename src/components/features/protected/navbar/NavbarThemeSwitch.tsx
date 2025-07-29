"use client";

import React, { useState } from "react";

import NavbarSwitchContainer from "@/components/features/protected/navbar/NavbarSwitchContainer";
import NavbarSwitchToggleItem from "@/components/features/protected/navbar/NavbarSwitchToggleItem";
import { IconMoon, IconSun } from "@/components/ui/icon";

export default function NavbarThemeSwitch() {
  const [activeTab, setActiveTab] = useState("light");

  return (
    <NavbarSwitchContainer>
      <NavbarSwitchToggleItem
        isActive={activeTab === "light"}
        onClick={() => setActiveTab("light")}
      >
        <IconSun
          width={20}
          height={20}
          color={activeTab === "light" ? "black" : "white"}
        />
      </NavbarSwitchToggleItem>
      <NavbarSwitchToggleItem
        isActive={activeTab === "dark"}
        onClick={() => setActiveTab("dark")}
      >
        <IconMoon
          width={20}
          height={20}
          color={activeTab === "dark" ? "black" : "white"}
        />
      </NavbarSwitchToggleItem>
    </NavbarSwitchContainer>
  );
}
