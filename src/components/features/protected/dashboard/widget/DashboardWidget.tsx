"use client";

import React from "react";
import dynamic from "next/dynamic";

import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import { Text14, Text16, Text20 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { IconAIMagic } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  { ssr: false }
);

export default function DashboardWidget({ currency, openModal }: { currency: string, openModal: () => void }) {
  const { theme } = useTheme();
  return (
    <div className="flex items-start gap-5 self-stretch">
      <div className="flex flex-col items-start flex-[1_0_0] self-stretch">
        <div className="flex justify-between items-center self-stretch">
          <button className={`flex flex-col justify-center items-start py-3 px-4 gap-5 w-[160px] sm:w-[220px] rounded-t-[16px] border-t border-r border-l border-black/15 dark:border-white/15 cursor-pointer ${theme === "dark" ? "bg-dark-gradient" : "bg-white"} `} onClick={openModal}>
            <div className="flex items-center gap-2.5">
              <CurrencyToCryptoPairConverter currency={currency} size={38} />
              <div className="flex flex-col justify-center items-start">
                <Text20 className="font-satoshi-medium dark:text-white text-black">{currency}</Text20>
                <Text14 className="font-satoshi-medium dark:text-white/60 text-black/40">$0.06642</Text14>
              </div>
            </div>
          </button>
          <Button variant={theme === "dark" ? "popular" : "darkPopular"}>
            <IconAIMagic />
            <Text16 className="font-satoshi-medium text-white">Analyze with AI</Text16>
          </Button>
        </div>
        <div className="relative self-stretch border dark:border-white/5 border-black/15 rounded-tr-[16px] rounded-b-[16px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-dark-gradient z-50 pointer-events-none"></div>
          <AdvancedRealTimeChart
            symbol={currency.replace("/", "")}
            interval="60"
            timezone="Etc/UTC"
            width="100%"
            height="450"
            theme={theme === "dark" ? "dark" : "light"}
          />
        </div>
      </div>
    </div>
  );
}
