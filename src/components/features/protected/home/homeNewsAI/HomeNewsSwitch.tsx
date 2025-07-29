"use client";

import React, { useState } from "react";

import NavbarSwitchContainer from "@/components/features/protected/navbar/NavbarSwitchContainer";
import NavbarSwitchToggleItem from "@/components/features/protected/navbar/NavbarSwitchToggleItem";
import { Text14 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function HomeNewsSwitch() {
  const [activeTab, setActiveTab] = useState("top");

  return (
    <NavbarSwitchContainer>
      <NavbarSwitchToggleItem
        isActive={activeTab === "top"}
        onClick={() => setActiveTab("top")}
      >
        <Text14 className={cn(activeTab === "top" && "text-[#111]")}>
          Top
        </Text14>
      </NavbarSwitchToggleItem>
      <NavbarSwitchToggleItem
        isActive={activeTab === "latest"}
        onClick={() => setActiveTab("latest")}
      >
        <Text14 className={cn(activeTab === "latest" && "text-[#111]")}>
          Latest
        </Text14>
      </NavbarSwitchToggleItem>
    </NavbarSwitchContainer>
  );
}
