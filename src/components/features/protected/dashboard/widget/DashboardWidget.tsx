"use client";

import React from "react";
import dynamic from "next/dynamic";

import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import { Text14, Text16, Text20 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { IconAIMagic } from "@/components/ui/icon";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  { ssr: false }
);

export default function DashboardWidget({ currency }: { currency: string }) {
  return (
    <div className="flex items-start gap-5 self-stretch">
      <div className="flex flex-col items-start flex-[1_0_0] self-stretch">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex flex-col justify-center items-start py-3 px-4 gap-5 w-[160px] sm:w-[220px] rounded-t-[16px] border-t border-r border-l border-white/5 bg-popover-gradient">
            <div className="flex items-center gap-2.5">
              <CurrencyToCryptoPairConverter currency={currency} size={38} />
              <div className="flex flex-col justify-center items-start">
                <Text20>{currency}</Text20>
                <Text14 className="text-white/40">$0.06642</Text14>
              </div>
            </div>
          </div>
          <Button variant="popular">
            <IconAIMagic />
            <Text16>Analyze with AI</Text16>
          </Button>
        </div>
        <div className="self-stretch">
          <AdvancedRealTimeChart
            symbol={currency.replace("/", "")}
            interval="60"
            timezone="Etc/UTC"
            theme="dark"
            width="100%"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}
