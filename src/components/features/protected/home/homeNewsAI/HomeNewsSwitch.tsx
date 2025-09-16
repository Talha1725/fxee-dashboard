"use client";

import React, { useState } from "react";

import NavbarSwitchContainer from "@/components/features/protected/navbar/NavbarSwitchContainer";
import NavbarSwitchToggleItem from "@/components/features/protected/navbar/NavbarSwitchToggleItem";
import { Text14 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useLocalization } from "@/components/localization-provider";

export default function HomeNewsSwitch() {
  const [activeTab, setActiveTab] = useState("top");
  const { t, locale } = useLocalization();

  return (
    <NavbarSwitchContainer key={`news-switch-${locale}`}>
      <NavbarSwitchToggleItem
        isActive={activeTab === "top"}
        onClick={() => setActiveTab("top")}
      >
        <Text14 className={cn(activeTab === "top" && "dark:!text-[#111] !text-white font-satoshi-medium") + "dark:text-white text-black"}>
          {t("top")}
        </Text14>
      </NavbarSwitchToggleItem>
      <NavbarSwitchToggleItem
        isActive={activeTab === "latest"}
        onClick={() => setActiveTab("latest")}
      >
        <Text14 className={cn(activeTab === "latest" && "!text-white dark:!text-[#111] font-satoshi-medium") + "dark:text-white text-black"}>
          {t("latest")}
        </Text14>
      </NavbarSwitchToggleItem>
    </NavbarSwitchContainer>
  );
}
