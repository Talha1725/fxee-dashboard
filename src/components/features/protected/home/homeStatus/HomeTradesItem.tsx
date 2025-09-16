"use client";
import React from "react";

import HomeTokenPair from "@/components/features/protected/home/HomeTokenPair";
import HomeTradesItemBadge from "@/components/features/protected/home/homeStatus/HomeTradesItemBadge";
import {
  IconCancel,
  IconShield,
  IconTradeDown,
  IconTradeUp,
  IconZap,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text18 } from "@/components/ui/typography";
import { DailyRecommendation } from "@/types/redux";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { useAnalyzeRecommendationMutation } from "@/lib/redux/features/recommendations/recommendationsApi";
import { useLocalization } from "@/components/localization-provider";

interface HomeTradesItemProps {
  long?: boolean;
  recommendation?: DailyRecommendation;
  onSkip?: () => void;
  skipped?: boolean;
  handleRestoreCard?: () => void;
  onAnalyzeStart?: () => void;
  onAnalyzeEnd?: () => void;
}

export default function HomeTradesItem({
  long = false,
  recommendation,
  onSkip,
  skipped = false,
  handleRestoreCard,
  onAnalyzeStart,
  onAnalyzeEnd,
}: HomeTradesItemProps) {
  const router = useRouter();
  const [analyzeRecommendation] = useAnalyzeRecommendationMutation();
  const { t } = useLocalization();
  
  // Handle Long/Short button click
  const handleAnalyzeClick = async (clickedDirection: 'long' | 'short') => {
    if (!recommendation?.id) {
      console.error('No recommendation ID available');
      return;
    }
    
    try {
      onAnalyzeStart?.();
      await analyzeRecommendation({
        id: recommendation.id,
        direction: clickedDirection
      }).unwrap();
      
      // Navigate to dashboard to see results
      router.push("/dashboard");
    } catch (error: any) {
      console.error('Failed to analyze recommendation:', error);
      // Handle error - you might want to show a toast or error message
    } finally {
      onAnalyzeEnd?.();
    }
  };

  // Helper function to get time ago
  const getTimeAgo = (createdAt: string) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInMinutes = Math.floor(
      (now.getTime() - created.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return t("just_now");
    if (diffInMinutes < 60) return `${diffInMinutes}${t("minutes_ago_short")}`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}${t("hours_ago")}`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}${t("days_ago")}`;
  };

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
      'usdcad/usd': 'usdcad',
      'usdtry/usd': 'usdtry',
      'usdjpy/usd': 'usdjpy',
      'usdchf/usd': 'usdchf',
      'brent/usd': 'brent',
      'gbpusd/usd': 'gbpusd',
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
      'xrp': 'ripple',
      'btc': 'bitcoin',
    };
    
    const translationKey = symbolMap[symbolLower];
    return translationKey ? t(translationKey as any) : symbol;
  };

  // Helper function to translate analysis titles
  const translateAnalysisTitle = (title: string, symbol: string, profitTier: string) => {
    if (!title) return t("bearish_outlook_on_gold");
    
    // Extract profit tier from the title if it contains profit information
    const profitTierTranslated = getProfitTierInfo(profitTier).label;
    
    // Create a generic translated analysis title
    return `${translateSymbol(symbol)} ${t("analysis")} - ${profitTierTranslated} ${t("signal")}`;
  };
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

  // Use recommendation data if available, otherwise fallback to defaults
  const symbol = recommendation?.symbol || "XAU";
  const displaySymbol = symbol.includes("/") ? symbol : `${symbol}/USD`;
  const direction = recommendation?.direction || (long ? "Long" : "Short");
  const riskRewardRatio = recommendation?.riskRewardRatio || "1:3 RR";
  const description = recommendation
    ? translateAnalysisTitle(recommendation.title, symbol, recommendation.profitTier)
    : t("bearish_outlook_on_gold");
  const profitTierInfo = recommendation
    ? getProfitTierInfo(recommendation.profitTier)
    : { color: "#6B7280", label: "Standard" };

  return (
    <TooltipProvider>
      <div className="flex flex-col items-start gap-5 self-stretch shadow-subtle w-[300px] shrink-0 h-full">
        <HomeTokenPair
          token={symbol}
          pair={displaySymbol}
          iconName="IconCryptoXau"
        />
        <div className="flex items-start content-start gap-2.5 self-stretch flex-wrap">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <HomeTradesItemBadge
                  text={riskRewardRatio}
                  icon={<IconShield width={20} height={20} />}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {t("risk_reward_ratio")}
                <br />
                {t("potential_profit_vs_loss")}
                <br />
                {riskRewardRatio} {t("gain_ratio_per_dollar_risked")}
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <HomeTradesItemBadge
                  text={
                    recommendation ? `${recommendation.confidence}%` : "65%"
                  }
                  icon={<IconZap width={20} height={20} />}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {t("ai_confidence_level")}
                <br />
                {t("algorithms_confidence_in")}
                <br />
                {t("this_trading_recommendation")}
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <HomeTradesItemBadge
                  text={direction === "Long" ? t("long") : t("short")}
                  icon={
                    direction === "Long" ? (
                      <IconTradeUp width={20} height={20} color="#22C55E" />
                    ) : (
                      <IconTradeDown width={20} height={20} color="#FE5749" />
                    )
                  }
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {t("trade_direction")}
                <br />
                {direction === "Long"
                  ? t("long_buy_expecting_price_rise")
                  : t("short_sell_expecting_price_fall")}
              </p>
            </TooltipContent>
          </Tooltip>

          {recommendation && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                  <HomeTradesItemBadge
                    text={profitTierInfo.label}
                    icon={
                      <IconShield
                        width={20}
                        height={20}
                        style={{ color: profitTierInfo.color }}
                      />
                    }
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {t("profit_tier")}
                  <br />
                  {profitTierInfo.label} {t("expected_profit_potential_level")}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className="flex-[1_0_0] self-stretch">
          <p className="text-sm font-satoshi-medium text-white leading-tight line-clamp-3">
            {description}
          </p>
        </div>

        {recommendation && (
          <div className="w-full bg-white/5 rounded-lg p-3">
            <div className="grid grid-cols-3 gap-2 text-center px-2">
              <div>
                <p className="text-white/60 text-xs font-satoshi">{t("entry")}</p>
                <p className="text-white text-sm font-satoshi-medium">
                  {parseFloat(recommendation.entryPrice).toFixed(
                    recommendation.symbol.includes("USD") &&
                      !recommendation.symbol.includes("JPY")
                      ? 5
                      : 4
                  )}
                </p>
              </div>
              <div>
                <p className="text-green-400/80 text-xs font-satoshi">{t("target")}</p>
                <p className="text-green-400 text-sm font-satoshi-medium">
                  {parseFloat(recommendation.targetPrice).toFixed(
                    recommendation.symbol.includes("USD") &&
                      !recommendation.symbol.includes("JPY")
                      ? 5
                      : 4
                  )}
                </p>
              </div>
              <div>
                <p className="text-red-400/80 text-xs font-satoshi">
                  {t("stop_loss")}
                </p>
                <p className="text-red-400 text-sm font-satoshi-medium">
                  {parseFloat(recommendation.stopLoss).toFixed(
                    recommendation.symbol.includes("USD") &&
                      !recommendation.symbol.includes("JPY")
                      ? 5
                      : 4
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 px-2 text-center">
              <div>
                <p className="text-white/60 text-xs font-satoshi">{t("risk_level")}</p>
                <p className="text-white font-satoshi-medium capitalize text-sm">
                  {recommendation.riskLevel}
                </p>
              </div>
              <div>{/* Empty middle section for spacing */}</div>
              <div>
                <p className="text-white/60 text-xs font-satoshi">{t("profit")}</p>
                <p
                  style={{ color: profitTierInfo.color }}
                  className="font-satoshi-medium text-sm"
                >
                  {recommendation.profitPercentage}%
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-start self-stretch gap-2.5">
          <Button
            onClick={() => handleAnalyzeClick(direction.toLowerCase() as 'long' | 'short')}
            variant={direction === "Long" ? "green" : "danger"}
            size="default"
            className="text-white flex-[1_0_0] font-satoshi-medium"
          >
            <p>{direction === "Long" ? t("long") : t("short")}</p>
            {direction === "Long" ? (
              <IconTradeUp width={20} height={20} color="#FFF" />
            ) : (
              <IconTradeDown width={20} height={20} color="#FFF" />
            )}
          </Button>
          {skipped ? (
            <Button
            variant={"grey"}
              onClick={handleRestoreCard}
              className="bg-orange-400/20 hover:bg-orange-400/30 border border-orange-400/30 hover:border-orange-400/50 text-orange-300 hover:text-orange-200 py-1 px-3 rounded-lg font-satoshi-medium transition-all duration-200 flex items-center gap-1 h-10 text-base !w-1/2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {t("restore")}
            </Button>
          ) : (
            <Button
              variant="grey"
              size="default"
              className="flex-[1_0_0] font-satoshi-medium text-white/80"
              onClick={onSkip}
            >
              <p>{t("skip")}</p>
              <IconCancel width={20} height={20} />
            </Button>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
