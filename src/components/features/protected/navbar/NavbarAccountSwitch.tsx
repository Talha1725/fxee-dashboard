"use client";

import React, { useState } from "react";

import NavbarSwitchToggleItem from "@/components/features/protected/navbar/NavbarSwitchToggleItem";
import NavbarSwitchContainer from "@/components/features/protected/navbar/NavbarSwitchContainer";

export default function NavbarAccountSwitch({
  className,
}: {
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState("virtual-account");

  return (
    <NavbarSwitchContainer className={className}>
      <NavbarSwitchToggleItem
        isActive={activeTab === "virtual-account"}
        onClick={() => setActiveTab("virtual-account")}
      >
        Virtual Account
      </NavbarSwitchToggleItem>
      <NavbarSwitchToggleItem
        isActive={activeTab === "demo-account"}
        onClick={() => setActiveTab("demo-account")}
      >
        Demo Account
      </NavbarSwitchToggleItem>
    </NavbarSwitchContainer>
  );
}
