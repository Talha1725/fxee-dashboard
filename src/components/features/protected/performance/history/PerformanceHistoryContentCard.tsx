"use client";

import React from "react";

import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import PerformanceHistoryContentCardItem from "./PerformanceHistoryContentCardItem";
import { Text12, Text14, Text16, Text24 } from "@/components/ui/typography";
import { IconEdit, IconTradeUp } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function PerformanceHistoryContentCard({
  isOpen,
}: {
  isOpen: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 shadow-subtle">
      <div className="flex items-center gap-2.5">
        <CurrencyToCryptoPairConverter currency="BTC/USD" size={20} />
        <Text16>BTC/USD</Text16>
      </div>
      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-2.5">
          <Text24>+$5,432</Text24>
          <div className="flex items-center gap-[5px]">
            <IconTradeUp width={16} height={16} color="var(--green)" />
            <Text14 className="text-green">12</Text14>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 py-2 px-2.5 rounded-[10px] bg-card-weak-gradient">
          <Text12 className="font-[400]">Long</Text12>
          <IconTradeUp width={16} height={16} color="var(--green)" />
        </div>
      </div>
      <PerformanceHistoryContentCardItem
        title="Realized P/L"
        value="$5,721.83"
      />
      <PerformanceHistoryContentCardItem
        title="Unrealized P/L"
        value="-$94.48"
      />
      <PerformanceHistoryContentCardItem title="Investment" value="$2,000" />
      <PerformanceHistoryContentCardItem title="Runtime" value="4d 19h" />
      <PerformanceHistoryContentCardItem
        title="Start Time"
        value="May 25, 12:34 PM"
      />
      <div className="flex flex-col justify-center items-center gap-1.5 self-stretch py-2.5 px-3.5 rounded-[8px] bg-card-green-gradient">
        <Text14 className="self-stretch font-[700]">AI Insight</Text14>
        <Text14 className="self-stretch font-[400] text-white/80">
          I detected a breakout above resistance and opened this long position
          to capture the upward momentum.
        </Text14>
      </div>
      <Separator className="bg-transparent" />
      <div className="flex items-start gap-2.5 self-stretch">
        <Button variant="fancy" className="flex-[1_0_0]" disabled={!isOpen}>
          <IconEdit width={20} height={20} />
          Edit
        </Button>
        <Button variant={isOpen ? "danger" : "green"} className="flex-[1_0_0]">
          {isOpen ? "Close Trade" : "Open Trade"}
        </Button>
      </div>
    </div>
  );
}
