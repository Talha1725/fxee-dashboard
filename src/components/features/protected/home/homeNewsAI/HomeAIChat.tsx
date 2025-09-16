"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { IconSend, IconTradeUp } from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useTrade } from "@/lib/contexts/TradeContext";
import { useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import { useLocalization } from "@/components/localization-provider";

export default function HomeAIChat() {
  const { theme } = useTheme();
  const { t } = useLocalization();
  const { selectedTrade } = useTrade();
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  
  const latestTrade = lastTradeData?.data;
  const tradeToUse = selectedTrade || latestTrade;

  // Function to translate trading symbols
  const translateSymbol = (symbol: string) => {
    const symbolLower = symbol.toLowerCase();
    
    // Map symbols to translation keys
    const symbolMap: Record<string, string> = {
      'usdtry': 'usdtry',
      'usdcad': 'usdcad',
      'usdjpy': 'usdjpy',
      'usdchf': 'usdchf',
      'usdzar': 'usdzar',
      'usdgbp': 'usdgbp',
      'usdaud': 'usdaud',
      'usdeur': 'usdeur',
      'audusd': 'audusd',
      'eurusd': 'eurusd',
      'gbpusd': 'gbpusd',
      'nzdusd': 'nzdusd',
      'brent': 'brent',
      'crude': 'crude',
      'goldind': 'goldind',
      'xagusd': 'xagusd',
      'xauusd': 'xauusd',
      'bitcoin': 'bitcoin',
      'bnb': 'bnb',
      'dogecoin': 'dogecoin',
      'ethereum': 'eth',
      'ripple': 'ripple',
      'solana': 'solana',
    };
    
    const translationKey = symbolMap[symbolLower];
    return translationKey ? t(translationKey as any) : symbol;
  };

  const translatedSymbol = tradeToUse ? translateSymbol(tradeToUse.symbol) : null;

  return (
    <div className="flex flex-col items-start gap-4.5 self-stretch">
      <div className="flex flex-col items-center gap-5 self-stretch">
        <Input
          placeholder={tradeToUse
          ? `Ask about ${translatedSymbol} trade...`
          : "Ask about trading strategies, risk management..."}
          className="px-4 py-4 gap-3 border h-full font-satoshi-medium dark:placeholder:text-white/40 placeholder:text-black/70 dark:border-transparent border-black/10"
          backIcon={<IconSend height={20} width={20} />}
          InputStyles="dark:placeholder:text-white/40 placeholder:text-black/50 text-[16px] font-satoshi-medium"
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
