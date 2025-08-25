"use client";

import React from "react";

import AIEngineToolsNIPCardContainer from "./AIEngineToolsNIPCardContainer";
import AIEngineToolsNIPCardHead from "./AIEngineToolsNIPCardHead";
import { IconAIScan } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const TP_DATA = [
  {
    title: "Hit Take-Profit",
    value: "67%",
  },
  {
    title: "Hit Stop-Loss",
    value: "33%",
  },
  {
    title: "Neither TP nor SL",
    value: "14%",
  },
  {
    title: "Risk-Reward Ratio",
    value: "1.5",
  },
];

export default function AIEngineToolsNIPCardTP() {
  const { theme } = useTheme();
  return (
    <AIEngineToolsNIPCardContainer className={theme === "dark" ? "bg-tab-dark-gradient" : "border border-[#0000001A bg-tab-light-gradient"}>
      <AIEngineToolsNIPCardHead
        title="Trade Probability (Next 5 Days)"
        icon={<IconAIScan width={20} height={20} />}
      />
      <div className="flex flex-col items-start gap-0.5 self-stretch">
        {TP_DATA.map((item, index) => (
          <div key={index} className="flex items-center gap-2 self-stretch py-1 px-0">
            <Text14 className="text-black/80 dark:text-white/80 font-[400] flex-[1_0_0]">
              {item.title}
            </Text14>
            <Text16>{item.value}</Text16>
          </div>
        ))}
      </div>
    </AIEngineToolsNIPCardContainer>
  );
}
