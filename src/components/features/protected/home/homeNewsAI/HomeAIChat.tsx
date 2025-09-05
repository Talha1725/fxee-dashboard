"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { IconSend, IconTradeUp } from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useTrade } from "@/lib/contexts/TradeContext";
import { useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";

export default function HomeAIChat() {
  const { theme } = useTheme();
  const { selectedTrade } = useTrade();
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  
  const latestTrade = lastTradeData?.data;
  const tradeToUse = selectedTrade || latestTrade;
  return (
    <div className="flex flex-col items-start gap-4.5 self-stretch">
      <div className="flex flex-col items-center gap-5 self-stretch">
        <Input
          placeholder={tradeToUse
          ? `Ask about ${tradeToUse.symbol} trade...`
          : "Ask about trading strategies, risk management..."}
          className="w-full !p-4 gap-3 border-none text-white placeholder:text-white"
          backIcon={
            <div className="flex items-center gap-3">
              <IconSend width={20} height={20} opacity={1} className="text-white/60" />
            </div>
          }
        />
        <div className="flex justify-between items-center self-stretch">
          <div className="flex items-center gap-1">
            <IconTradeUp width={20} height={20} color={theme === "dark" ? "#3EDC81" : "#079744"} />
            <Text14 className="text-[#079744] dark:text-green font-satoshi-medium">Bullish Market</Text14>
          </div>
          <div className="flex items-center gap-1">
            <Text14 className="font-satoshi dark:text-white text-black">
              AI Confidence: <span className="text-[#079744] dark:text-green">81%</span>
            </Text14>
          </div>
        </div>
      </div>
    </div>
  );
}
