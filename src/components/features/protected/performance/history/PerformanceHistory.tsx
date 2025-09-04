"use client";
import React from "react";

import { Tabs } from "@/components/ui/tabs";
import PerformanceHistoryFilter from "./PerformanceHistoryFilter";
import PerformanceHistoryContent from "./PerformanceHistoryContent";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function PerformanceHistory() {
  const { theme } = useTheme();
  return (
    <Tabs
      className={`flex flex-col items-center gap-5 self-stretch p-5 rounded-[16px] border dark:border-white/5 border-black/10 ${theme === "dark" ? "bg-card-dashboard-main-gradient" : "bg-white/80"}`}
      defaultValue="all"
    >
      <PerformanceHistoryFilter />
      <PerformanceHistoryContent />
    </Tabs>
  );
}
