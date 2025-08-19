"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Text14, Text16, Text18, Text24 } from "@/components/ui/typography";
import { RefreshCcw } from "lucide-react";

interface FinancialIndexCardProps {
  symbol: string;
  name: string;
  type: string;
  currentValue: number;
  change: number;
  changePercent: number;
  lastUpdate: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function FinancialIndexCard({
  symbol,
  name,
  type,
  currentValue,
  change,
  changePercent,
  lastUpdate,
  icon,
  className,
}: FinancialIndexCardProps) {
  const isPositive = change >= 0;

  return (
    <div
      className={cn(
        "w-[336px] h-[176px] rounded-2xl border border-[#0000001A]",
        "bg-[linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%);] dark:bg-[#111]] p-5",
        "flex flex-col justify-between",
        "dark:border-white/[0.1]",
        className
      )}
    >
      {/* Inner Wrapper (exact dimensions) */}
      <div className="w-[296px] h-[136px] flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center gap-2">
          {icon}
          <Text18 className="text-black dark:text-white font-medium font-satoshi-medium">
            {symbol}
          </Text18>
        </div>

        {/* Name + Type */}
        <div className="flex justify-between">
          <Text14 className="text-black dark:text-gray-300 text-base font-satoshi-medium">
            {name}
          </Text14>
          <Text14 className="text-gray-700 dark:text-gray-300 font-satoshi-medium">
            {type}
          </Text14>
        </div>

        {/* Value + Change */}
        <div className="flex justify-between items-end">
          <span className="text-black dark:text-white text-[32px] font-medium font-satoshi-bold">
            {currentValue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <div className="flex flex-col items-end">
            <Text16
              className={cn(
                "font-satoshi-medium",
                isPositive
                  ? "text-[#079744] dark:text-green-400"
                  : "text-[#FF453A] dark:text-red-400"
              )}
            >
              {isPositive ? "+" : ""}
              {change.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text16>
            <Text14
              className={cn(
                "font-satoshi-medium",
                isPositive
                  ? "text-[#079744] dark:text-green-400"
                  : "text-[#FF453A] dark:text-red-400"
              )}
            >
              {isPositive ? "+" : ""}
              {changePercent.toFixed(2)}%
            </Text14>
          </div>
        </div>

        {/* Last Update */}
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <RefreshCcw size={14} className="shrink-0" />
          <Text14 className="font-satoshi-medium">
            Last update at {lastUpdate}
          </Text14>
        </div>
      </div>
    </div>
  );
}
