"use client";
import React, { useState } from "react";

import { Tabs } from "@/components/ui/tabs";
import PerformanceHistoryFilter from "./PerformanceHistoryFilter";
import PerformanceHistoryContent from "./PerformanceHistoryContent";
import { useTheme } from "@/lib/contexts/ThemeContext";
import BlurOverlay from "@/components/common/BlurOverlay";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function PerformanceHistory() {
  const { isVirtualAccount } = useAccountType();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Tabs
      className={`flex flex-col items-center gap-5 self-stretch p-5 rounded-[16px] border dark:border-white/5 border-black/10 ${theme === "dark" ? "bg-card-dashboard-main-gradient" : "bg-white/80"} relative ${isVirtualAccount ? "!border-none pointer-events-none shadow-xl rounded-xl" : ""}`}
      value={activeTab}
      onValueChange={setActiveTab}
    >
      {isVirtualAccount && (
       <BlurOverlay className="translate-y-[0] rounded-[10px] dark:!bg-[#1A1A1A]/95 dark:!backdrop-blur-[200px] !border-none" /> 
      )}
      <PerformanceHistoryFilter />
      <PerformanceHistoryContent activeTab={activeTab} />
    </Tabs>
  );
}
