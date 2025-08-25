"use client";

import React from "react";

import { Text14, Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function AIEngineToolsCardHead({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <div className="flex items-start gap-2 self-stretch">
      <div className={`flex justify-center items-center gap-[3px] p-[7px] bg-button-grey-gradient rounded-[7px] ${
        theme === "dark" ? "" : "border border-black/20"
      }`}>
        {icon}
      </div>
      <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
        <Text16 className="text-black/80 dark:text-white/80 font-satoshi-medium">{title}</Text16>
        <Text14 className="text-black/80 dark:text-white/80 self-stretch font-[400] font-satoshi-regular">
          {description}
        </Text14>
      </div>
    </div>
  );
}
