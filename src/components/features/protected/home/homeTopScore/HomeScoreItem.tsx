"use client";

import React from "react";

import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { Text14 } from "@/components/ui/typography";
import { IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useLocalization } from "@/components/localization-provider";

interface HomeScoreItemProps {
  currency: string;
  score: number;
  change: number;
  isUp: boolean;
}
export default function HomeScoreItem({
  currency,
  score,
  change,
  isUp,
}: HomeScoreItemProps) {
  const { theme } = useTheme();
  const { t } = useLocalization();

  // Function to translate currency pairs
  const translateCurrencyPair = (pair: string) => {
    const pairLower = pair.toLowerCase();
    
    // Map currency pairs to translation keys
    const pairMap: Record<string, string> = {
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
      'usd/try': 'usdtry',
      'usd/cad': 'usdcad',
      'usd/jpy': 'usdjpy',
      'usd/chf': 'usdchf',
      'usd/zar': 'usdzar',
      'usd/gbp': 'usdgbp',
      'usd/aud': 'usdaud',
      'usd/eur': 'usdeur',
      'aud/usd': 'audusd',
      'eur/usd': 'eurusd',
      'gbp/usd': 'gbpusd',
      'nzd/usd': 'nzdusd',
      'usdcad/usd': 'usdcad',
      'usdtry/usd': 'usdtry',
      'usdjpy/usd': 'usdjpy',
      'usdchf/usd': 'usdchf',
      'gbpusd/usd': 'gbpusd',
    };
    
    const translationKey = pairMap[pairLower];
    return translationKey ? t(translationKey as any) : pair;
  };

  const translatedCurrency = translateCurrencyPair(currency);

  return (
    <div className="flex justify-between items-center self-stretch py-1.5 px-0 border-b border-white/5">
      <div className="flex items-center gap-2.5">
        <CurrencyToCountryFlagConverter currency={currency} />
        <Text14 className="shrink-0 font-satoshi-medium dark:text-white text-black">{translatedCurrency}</Text14>
      </div>
      <div className="flex justify-end items-center gap-2.5 font-satoshi">
        <Text14 className="w-[65px] overflow-hidden dark:text-white text-black">{score}</Text14>
        <Text14
          className={cn(
            "w-[65px] overflow-hidden",
            isUp ? "text-green" : "text-danger"
          )}
        >
          {change}%
        </Text14>
        {isUp ? (
          <IconTradeUp width={16} height={16} color={theme === "dark" ? "#3EDC81" : "#079744"} />
        ) : (
          <IconTradeDown width={16} height={16} color={theme === "dark" ? "#FF453A" : "#FF453A"} />
        )}
      </div>
    </div>
  );
}
