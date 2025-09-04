"use client";

import { IconInfoFill } from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import React from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function PerformanceAlert() {
  const { theme } = useTheme();
  return (
    <div className={`flex items-center gap-2 self-stretch py-2.5 px-3 rounded-[8px] ${theme === "dark" ? "bg-alert-gradient" : "bg-gradient-to-b from-[#0000000D] to-[#0000001A]"}`}>
      <IconInfoFill width={20} height={20} />
      <Text14 className="flex-[1_0_0] self-stretch font-[400]">
        AI Auto-trading is active for Forex. Max risk per trade: $50.
      </Text14>
    </div>
  );
}
