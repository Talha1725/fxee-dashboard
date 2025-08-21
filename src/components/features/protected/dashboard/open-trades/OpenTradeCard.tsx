"use client";
import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { IconEdit, IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { Text14, Text16, Text24 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import DashboardHeadBadge from "../DashboardHeadBadge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface TradingData {
  symbol: string;
  realizedPL: string;
  unrealizedPL: string;
  lotSize: string;
  equityUsed: string;
  resistanceLevel: string;
  stopLoss: string;
  takeProfit: string;
  leverage: string;
  runtime: string;
  startTime: string;
  direction: "long" | "short";
  percentageChange: number;
  aiInsight: string;
  isOpen: boolean;
}

export default function OpenTradeCard({ tradingData }: { tradingData: TradingData }) {
  const { theme } = useTheme();
  const isPositive = tradingData.percentageChange > 0;
  
  return (
    <div>
      <div className="flex items-center gap-2">
        <CurrencyToCountryFlagConverter currency={tradingData.symbol} />
        <Text16 className="font-satoshi-medium dark:text-white text-black">
          {tradingData.symbol}
        </Text16>
      </div>
      <div className="my-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Text24 className="font-satoshi-medium dark:text-white text-black">
            {tradingData.realizedPL}
          </Text24>
          <div className="flex gap-1 items-center">
            {isPositive ? (
              <IconTradeUp
                width={18}
                height={18}
                color={"var(--green)"}
              />
            ) : (
              <IconTradeDown
                width={18}
                height={18}
                color={"var(--danger)"}
              />
            )}
            <p className={`text-sm ${isPositive ? "text-green" : "text-red"} font-satoshi`}>{tradingData.percentageChange.toFixed(2)}%</p>
          </div>
        </div>
        <DashboardHeadBadge className="font-satoshi dark:text-white text-black flex items-center gap-1 px-3 !border-none dark:!border rounded-lg">
          <p className="capitalize">{tradingData.direction}</p>
          {isPositive ? (
            <IconTradeUp
              width={18}
              height={18}
              color={"var(--green)"}
            />
          ) : (
            <IconTradeDown
              width={18}
              height={18}
              color={"var(--danger)"}
            />
          )}
        </DashboardHeadBadge>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Realized P/L
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.realizedPL}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Lot Size
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.lotSize}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Unrealized P/L
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.unrealizedPL}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Equity Used
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.equityUsed}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Resistance Level
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.resistanceLevel}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Stop Loss
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.stopLoss}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Take Profit
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.takeProfit}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Leverage
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.leverage}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Runtime
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.runtime}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        Start Time
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
        {tradingData.startTime}
        </Text14>
      </div>
      <div className={`flex flex-col justify-center items-center gap-1.5 self-stretch py-2.5 px-3.5 rounded-[8px] ${theme === "dark" ? "bg-card-green-gradient" : "bg-light-green-blue-gradient"} mb-5`}>
        <Text14 className="self-stretch font-satoshi-medium text-white">AI Insight</Text14>
        <Text14 className="self-stretch font-satoshi !text-white/80">
          {tradingData.aiInsight}
        </Text14>
      </div>
      <Separator className="bg-transparent" />
      <div className="flex items-start gap-2.5 self-stretch">
        <Button variant="fancy" className="flex-[1_0_0] rounded-lg !border-0 text-white font-satoshi" disabled={!tradingData.isOpen}>
          <IconEdit width={20} height={20} />
          Edit
        </Button>
        <Button variant={tradingData.isOpen ? "danger" : "green"} className="flex-[1_0_0] rounded-lg text-white font-satoshi">
          {tradingData.isOpen ? "Close Trade" : "Open Trade"}
        </Button>
      </div>
    </div>
  );
}
