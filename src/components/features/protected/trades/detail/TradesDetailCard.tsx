"use client";

import React from "react";

import { Text12, Text14, Text20 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { IconLogo2, IconLogo3, IconLogo4 } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface TradesDetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  change: string;
  isUSD: boolean;
  isIncreased: boolean;
  isBalance?: boolean;
}

export default function TradesDetailCard({
  icon,
  title,
  value,
  description,
  change,
  isUSD,
  isIncreased,
  isBalance = false,
}: TradesDetailCardProps) {
  const {theme} = useTheme();
  return (
    <div
      className={cn(
        `relative flex items-start gap-2.5 flex-[1_0_0] py-3.5 px-3 rounded-[10px] ${isBalance ? `border-none border-green-gradient ${theme === "light" ? "" : "bg-trades-card-gradient"}` : theme === "light" ? "trade-card-light-gradient" : "trade-card-gradient"} overflow-hidden`,
  
      )}
    >
      {isBalance && (
        <IconLogo4
          width={103}
          height={137}
          className="absolute top-[-5px] right-[-10px] dark:opacity-10 opacity-50"
        />
      )}
      <div className="flex flex-col gap-7 items-start justify-between self-stretch flex-[1_0_0]">
        <div className="flex items-center gap-1.5">
          <div className={`flex justify-center items-center p-2 rounded-[8px] ${!isBalance ? "bg-button-grey-gradient" : "bg-gradient-to-b dark:from-[#ffffff08] from-[#00000010] dark:to-[#ffffff05] to-[#00000008]"}`}>
            {icon}
          </div>
          <Text14 className={`${isBalance ? "!text-black dark:!text-white" : "!text-white"}`}>{title}</Text14>
        </div>
        <div className="flex flex-col items-start gap-0.5 self-stretch">
          <Text20 className={`${isBalance ? "!text-black dark:!text-white" : "!text-white"}`}>
            {value}
            {isUSD && <sup className="text-[12px]"> USD</sup>}
          </Text20>
          <div className="flex justify-between items-center self-stretch">
            <Text12 className={`font-[400] ${isBalance ? "!text-black/60 dark:!text-white/60" : "!text-white/60 "}`}>{description}</Text12>
            <Text12
              className={cn(
                "font-[400]",
                isIncreased ? "!text-[#3EDC81]" : "!text-[#EE5050]"
              )}
            >
              {change}
            </Text12>
          </div>
        </div>
      </div>
    </div>
  );
}
