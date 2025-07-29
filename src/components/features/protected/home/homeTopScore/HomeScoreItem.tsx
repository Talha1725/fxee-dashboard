import React from "react";

import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { Text14 } from "@/components/ui/typography";
import { IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

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
  return (
    <div className="flex justify-between items-center self-stretch py-1.5 px-0 border-b border-white/5">
      <div className="flex items-center gap-2.5">
        <CurrencyToCountryFlagConverter currency={currency} />
        <Text14 className="shrink-0">{currency}</Text14>
      </div>
      <div className="flex justify-end items-center gap-2.5">
        <Text14 className="w-[65px] overflow-hidden">{score}</Text14>
        <Text14
          className={cn(
            "w-[65px] overflow-hidden",
            isUp ? "text-green" : "text-danger"
          )}
        >
          {change}%
        </Text14>
        {isUp ? (
          <IconTradeUp width={16} height={16} color="#3EDC81" />
        ) : (
          <IconTradeDown width={16} height={16} color="#FF453A" />
        )}
      </div>
    </div>
  );
}
