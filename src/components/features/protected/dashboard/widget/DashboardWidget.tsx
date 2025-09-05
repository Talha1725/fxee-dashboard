"use client";

import React from "react";
import dynamic from "next/dynamic";

import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import { Text14, Text16, Text20 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { IconAdd, IconAIMagic } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useRouter } from "next/navigation";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  { ssr: false }
);

export default function DashboardWidget({ 
  currency, 
  actionButton, 
  showPlusIcon = false, 
  openModal,
  dashboard=false
}: { 
  currency: string;
  actionButton?: React.ReactNode;
  showPlusIcon?: boolean;
  openModal?: () => void;
  dashboard?: boolean;
}) {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <div className="flex items-start gap-5 self-stretch">
      <div className="flex flex-col items-start flex-[1_0_0] self-stretch">
        <div className={`flex justify-between items-center self-stretch ${dashboard ? "mb-0" : "mb-2"}`}>
          <div className="flex items-center gap-2">
            <div 
              className={`flex items-center gap-2.5 py-3 px-4 rounded-t-[16px] border-t border-r border-l border-black/15 dark:border-white/15 ${theme === "dark" ? "bg-dark-gradient" : "bg-white"}`}
              onClick={openModal}
              style={{ cursor: openModal ? 'pointer' : 'default' }}
            >
              <CurrencyToCryptoPairConverter currency={currency} size={38} />
              <div className="flex flex-col justify-center items-start">
                <Text20 className="font-satoshi-medium dark:text-white text-black">
                  {currency}
                </Text20>
                <Text14 className="font-satoshi-medium dark:text-white/60 text-black/40">
                  $0.06642
                </Text14>
              </div>
            </div>

            {showPlusIcon && (
              <div className="flex items-center justify-center py-6 px-4 rounded-[16px] border-t border-r border-l border-black/15 dark:border-white/15 bg-dark-gradient">
                <IconAdd width={20} height={20} className="text-black dark:text-white" />
              </div>
            )}
          </div>

          {actionButton ?? (
            <Button onClick={()=> router.push("/ai-engine")} variant="popular">
              <IconAIMagic />
              <Text16 className="font-satoshi-medium text-white">
                Analyze with AI
              </Text16>
            </Button>
          )}
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