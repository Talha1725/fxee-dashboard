"use client";
import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { IconEdit, IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { Text14, Text16, Text24 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import DashboardHeadBadge from "../DashboardHeadBadge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { DailyRecommendation } from "@/types/redux";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { useLocalization } from "@/components/localization-provider";

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
  recommendation?: DailyRecommendation;
}

export default function OpenTradeCard({ tradingData }: { tradingData: TradingData }) {
  const { theme } = useTheme();
  const { t } = useLocalization();
  const isPositive = tradingData.percentageChange > 0;
  const { recommendation } = tradingData;

  // Helper function for profit tier styling
  const getProfitTierInfo = (profitTier: string) => {
    switch (profitTier) {
      case "GREAT_PROFIT":
        return { color: "#22C55E", label: t("great_profit") };
      case "HIGH_PROFIT":
        return { color: "#3EDC81", label: t("high_profit") };
      case "MEDIUM_PROFIT":
        return { color: "#F59E0B", label: t("medium_profit") };
      case "LOW_PROFIT":
        return { color: "#EF4444", label: t("low_profit") };
      case "VERY_LOW_PROFIT":
        return { color: "#DC2626", label: t("very_low_profit") };
      default:
        return { color: "#6B7280", label: t("standard") };
    }
  };

  const profitTierInfo = recommendation ? getProfitTierInfo(recommendation.profitTier) : null;
  
  return (
    <TooltipProvider>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CurrencyToCountryFlagConverter currency={tradingData.symbol} />
            <Text16 className="font-satoshi-medium dark:text-white text-black">
              {tradingData.symbol}
            </Text16>
          </div>
          {profitTierInfo && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className="px-2 py-1 rounded-md text-xs font-satoshi-medium text-white cursor-pointer"
                  style={{ backgroundColor: profitTierInfo.color + "20", color: profitTierInfo.color }}
                >
                  {profitTierInfo.label}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("profit_tier")}<br/>
                {profitTierInfo.label} classification<br/>
                based on return potential</p>
              </TooltipContent>
            </Tooltip>
          )}
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
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-pointer">
              <DashboardHeadBadge className="font-satoshi dark:text-white text-black flex items-center gap-1 px-3 !border-none dark:!border rounded-lg">
                <p className="capitalize">{tradingData.direction === "long" ? t("long") : t("short")}</p>
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
          </TooltipTrigger>
          <TooltipContent>
            <p>Position Direction<br/>
            {tradingData.direction === "long" ? t("long_buy_expecting_price_rise") : t("short_sell_expecting_price_fall")}<br/>
            Status: {isPositive ? "Profitable" : "In Loss"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("entry_price")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {recommendation ? parseFloat(recommendation.entryPrice).toFixed(recommendation.symbol.includes("USD") && !recommendation.symbol.includes("JPY") ? 5 : 2) : tradingData.realizedPL}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("confidence_level")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {recommendation ? `${recommendation.confidence}%` : "75%"}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("risk_level")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black capitalize">
          {recommendation ? recommendation.riskLevel : "Medium"}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("profit_potential")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          <span style={{ color: profitTierInfo?.color }}>
            {recommendation ? `${recommendation.profitPercentage}%` : tradingData.unrealizedPL}
          </span>
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("risk_reward")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {recommendation ? recommendation.riskRewardRatio : "1:2"}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("stop_loss")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black text-red-400">
          {recommendation ? parseFloat(recommendation.stopLoss).toFixed(recommendation.symbol.includes("USD") && !recommendation.symbol.includes("JPY") ? 5 : 2) : tradingData.stopLoss}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("take_profit")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black text-green-400">
          {recommendation ? parseFloat(recommendation.targetPrice).toFixed(recommendation.symbol.includes("USD") && !recommendation.symbol.includes("JPY") ? 5 : 2) : tradingData.takeProfit}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("timeframe")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {recommendation ? recommendation.timeframe : tradingData.leverage}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("valid_until")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black text-xs">
          {recommendation ? new Date(recommendation.validUntil).toLocaleDateString() : tradingData.runtime}
        </Text14>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <Text14 className="font-satoshi dark:text-white/80 text-black">
          {t("created")}
        </Text14>
        <Text14 className="font-satoshi dark:text-white/80 text-black text-xs">
          {recommendation ? new Date(recommendation.createdAt).toLocaleDateString() : tradingData.startTime}
        </Text14>
      </div>
      <div className={`flex flex-col justify-center items-center gap-1.5 self-stretch py-2.5 px-3.5 rounded-[8px] ${theme === "dark" ? "bg-card-green-gradient" : "bg-light-green-blue-gradient"} mb-5`}>
        <Text14 className="self-stretch font-satoshi-medium text-white">{t("ai_insight")}</Text14>
        <Text14 className="self-stretch font-satoshi !text-white/80">
          {tradingData.aiInsight}
        </Text14>
      </div>
      <Separator className="bg-transparent" />
      <div className="flex items-start gap-2.5 self-stretch">
        <Button variant="fancy" className="flex-[1_0_0] rounded-lg !border-0 text-white font-satoshi" disabled={!tradingData.isOpen}>
          <IconEdit width={20} height={20} />
          {t("edit")}
        </Button>
        <Button variant={tradingData.isOpen ? "danger" : "green"} className="flex-[1_0_0] rounded-lg text-white font-satoshi">
          {tradingData.isOpen ? t("close_trade") : t("open_trade")}
        </Button>
      </div>
      </div>
    </TooltipProvider>
  );
}
