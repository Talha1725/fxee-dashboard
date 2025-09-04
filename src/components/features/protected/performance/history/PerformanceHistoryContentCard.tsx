"use client";

import React, { useState } from "react";

import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import PerformanceHistoryContentCardItem from "./PerformanceHistoryContentCardItem";
import { Text12, Text14, Text16, Text24 } from "@/components/ui/typography";
import { IconEdit, IconTradeUp, IconTradeDown } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Trade } from "@/data/tradesData";

interface PerformanceHistoryContentCardProps {
  trade: Trade;
  borderRight?: boolean;
}

export default function PerformanceHistoryContentCard({
  trade,
  borderRight,
}: PerformanceHistoryContentCardProps) {
  const { theme } = useTheme();
  const [currentTrade, setCurrentTrade] = useState(trade);

  const handleTradeAction = () => {
    setCurrentTrade(prev => ({
      ...prev,
      status: prev.status === "open" ? "closed" : "open"
    }));
  };

  const isOpen = currentTrade.status === "open";
  const isProfit = currentTrade.isProfit;
  const profitLossFormatted = `${isProfit ? "+" : ""}$${Math.abs(currentTrade.profitLoss).toLocaleString()}`;
  const percentageFormatted = `${isProfit ? "+" : ""}${currentTrade.percentage}%`;

  return (
    <div className={`flex flex-col items-start gap-2.5 shadow-subtle ${borderRight ? "dark:xl:border-r dark:xl:border-r-white/5 xl:pr-5" : ""}`}>
      <div className="flex items-center gap-2.5">
        <CurrencyToCryptoPairConverter currency={currentTrade.pair} size={22} />
        <Text16>{currentTrade.pair}</Text16>
      </div>
      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-2.5">
          <Text24 className={isProfit ? "text-[#3EDC81]" : "text-[#FF6B6B]"}>
            {profitLossFormatted}
          </Text24>
          <div className="flex items-center gap-[5px]">
            {isProfit ? (
              <IconTradeUp width={16} height={16} color={isProfit ? "var(--green)" : "var(--red)"} />
            ) : (
              <IconTradeDown width={16} height={16} color={isProfit ? "var(--green)" : "#FF6B6B"} />
            )}
            <Text14 className={isProfit ? "!text-[#3EDC81]" : "!text-[#FF6B6B]"}>
              {percentageFormatted}
            </Text14>
          </div>
        </div>
        <div className={`flex justify-center items-center gap-1 py-2 px-2.5 rounded-[10px] ${theme === "dark" ? "bg-card-weak-gradient" : "bg-gradient-to-b from-[#00000010] to-[#00000008]"}`}>
          <Text12 className="font-[400]">{currentTrade.type}</Text12>
          {currentTrade.type === "Long" ? (
            <IconTradeUp width={16} height={16} color="var(--green)" />
          ) : (
            <IconTradeDown width={16} height={16} color="var(--red)" />
          )}
        </div>
      </div>
      <PerformanceHistoryContentCardItem
        title="Realized P/L"
        value={currentTrade.realizedPL}
      />
      <PerformanceHistoryContentCardItem
        title="Unrealized P/L"
        value={currentTrade.unrealizedPL}
      />
      <PerformanceHistoryContentCardItem title="Investment" value={currentTrade.investment} />
      <PerformanceHistoryContentCardItem title="Runtime" value={currentTrade.runtime} />
      <PerformanceHistoryContentCardItem
        title="Start Time"
        value={currentTrade.startTime}
      />
      <div className={`flex flex-col justify-center items-center gap-1.5 self-stretch py-2.5 px-3.5 rounded-[8px] ${theme === "dark" ? "bg-card-green-gradient" : "bg-gradient-to-b from-[#085293] to-[#31965b]"}`}>
        <Text14 className="self-stretch font-satoshi-medium !text-white">AI Insight</Text14>
        <Text14 className="self-stretch font-satoshi !text-white/70">
          {currentTrade.aiInsight}
        </Text14>
      </div>
      <Separator className="bg-transparent" />
      <div className="flex items-start gap-2.5 self-stretch">
        <Button variant="fancy" className="flex-[1_0_0]" disabled={!isOpen}>
          <IconEdit width={20} height={20} />
          Edit
        </Button>
        <Button 
          variant={isOpen ? "danger" : "green"} 
          className="flex-[1_0_0] text-white"
          onClick={handleTradeAction}
        >
          {isOpen ? "Close Trade" : "Open Trade"}
        </Button>
      </div>
    </div>
  );
}
