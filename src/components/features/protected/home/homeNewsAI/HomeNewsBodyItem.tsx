import React from "react";

import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { Text14, Text16 } from "@/components/ui/typography";
import { IconCircle, IconChevronRight } from "@/components/ui/icon";

interface HomeNewsBodyItemProps {
  currency: string;
  time: number;
  readTime: number;
  source: string;
}

export default function HomeNewsBodyItem({
  currency,
  time,
  readTime,
  source,
}: HomeNewsBodyItemProps) {
  return (
    <div className="flex items-center gap-1.5 self-stretch">
      <div className="flex flex-col items-start gap-1.5 flex-[1_0_0]">
        <div className="flex items-center gap-2.5 self-stretch">
          <div className="flex items-center gap-[5px]">
            <CurrencyToCountryFlagConverter currency={currency} />
            <Text14 className="text-white/40 shrink-0">{time}minutes ago</Text14>
            <IconCircle width={2} height={2} />
            <Text14 className="text-white/40 shrink-0">{readTime}min read</Text14>
            <IconCircle width={2} height={2} />
            <Text14 className="shrink-0">{source}</Text14>
          </div>
        </div>
        <Text16>
          AUD/USD: Australian Dollar Strengthens Amid Optimism Over China’s
          Economic Recovery
        </Text16>
      </div>
      <IconChevronRight width={20} height={20} className="shrink-0" />
    </div>
  );
}
