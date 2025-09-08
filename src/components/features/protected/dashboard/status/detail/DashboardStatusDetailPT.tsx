"use client";

import React from "react";

import DashboardStatusDetailCardContainer from "./DashboardStatusDetailCardContainer";
import DashboardStatusDetailCardHead from "./DashboardStatusDetailCardHead";
import DashboardStatusDetailBadge from "./DashboardStatusDetailBadge";
import DashboardStatusDetailSubcardContainer from "./DashboardStatusDetailSubcardContainer";
import DashboardStatusDetailUpgrade from "./DashboardStatusDetailUpgrade";
import { IconAddOns, IconCardPT } from "@/components/ui/icon";
import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { addOnsData, proToolsData } from "@/lib/constants";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import { useGetUserAIToolsQuery } from "@/lib/redux/features/ai-tools/aiToolsApi";

export default function DashboardStatusDetailPT() {
  const { theme } = useTheme();
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  const { data: aiToolsData } = useGetUserAIToolsQuery();
  const proposedTrade = lastTradeData?.data;
  const enabledTools = aiToolsData?.data?.enabledTools || [];

  // Mapping between API tool names and display titles
  const toolNameMapping: { [key: string]: string } = {
    "rsi": "AI RSI Analyzer",
    "fibonacci_retracement": "Fibonacci Retracement Analyzer", 
    "volatility_risk": "Volatility & Risk Analyzer",
    "market_sentiment": "Market Sentiment Aggregator",
    "mass_psychology": "Mass Psychology Analysis",
    "pattern_recognition": "Pattern Recognition Scanner",
    "ai_trend": "AI Trend Forecast",
    "smart_portfolio": "Smart Portfolio Allocator",
    "trade_probability": "Trade Probability Calculator"
  };

  return (
    <DashboardStatusDetailCardContainer className="py-3.5 px-3 h-[350px] sm:h-[400px] lg:max-h-[900px] lg:h-[900px] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Proposed Trade"
          icon={<IconCardPT width={14} height={14} />}
        />
        <div className={`flex items-start gap-2 self-stretch py-2.5 px-3 rounded-[8px] ${theme === "dark" ? "bg-card-green-gradient" : "bg-card-green-gradient-light"}`}>
          <Text14 className="font-satoshi text-white break-words overflow-hidden">
            {proposedTrade?.aiAnalysis || "Long BTC/USD on 4H timeframe. Bull flag pattern forming with strong support at $56,500. Multiple technical indicators showing bullish convergence. Volume increasing on recent candles."}
          </Text14>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex items-start gap-2 self-stretch">
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="dark:text-green text-[#079744] font-satoshi-medium">Entry Price</Text12>
            <Text16 className="font-satoshi-medium dark:text-white text-black">
              ${proposedTrade ? parseFloat(proposedTrade.entryPrice).toFixed(4) : "58,246.7500"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="text-blue font-satoshi-medium">Target</Text12>
            <Text16 className="font-satoshi-medium dark:text-white text-black">
              ${proposedTrade ? parseFloat(proposedTrade.targetPrice).toFixed(4) : "62,000.0000"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
        </div>
        <div className="flex items-start gap-2 self-stretch">
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="dark:text-danger text-[#FF0000] font-satoshi-medium">Stop Loss</Text12>
            <Text16 className="font-satoshi-medium dark:text-white text-black">
              ${proposedTrade ? parseFloat(proposedTrade.stopLossPrice).toFixed(4) : "56,500.0000"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="dark:text-green text-[#079744] font-satoshi-medium">Risk/Reward</Text12>
            <Text16 className="font-satoshi-medium dark:text-white text-black">
              {proposedTrade?.riskRewardRatio || "1:1.5"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Add-Ons"
          icon={<IconAddOns width={14} height={14} />}
        />
        <div className="flex flex-wrap items-start content-start gap-[14px_10px] self-stretch">
          {addOnsData.map((addOn) => {
              // Check if this add-on is enabled by looking up the mapping
              const enabledDisplayTitles = enabledTools.map(tool => toolNameMapping[tool]).filter(Boolean);
              const isEnabled = enabledDisplayTitles.includes(addOn.title);
              
              // Unified text colors - exactly like AI control panel
              const textColorClass = isEnabled
                ? (theme === "dark" ? "text-white" : "text-black")
                : (theme === "dark" ? "text-white/60" : "text-black/60");
              
              // Unified backgrounds - exactly like AI control panel
              const bgClass = isEnabled
                ? (theme === "dark"
                    ? "!bg-card-weak-gradient"
                    : "!bg-gradient-to-b !from-black/20 !to-black/10")
                : (theme === "dark"
                    ? "!bg-card-weak-gradient !opacity-60"
                    : "!bg-gradient-to-b !from-black/5 !to-black/2 !opacity-60");
              
              return (
                <div key={addOn.title} className="relative">
                  <DashboardStatusDetailBadge
                    icon={addOn.icon}
                    title={addOn.title}
                    className={`!p-2 !rounded-[10px] ${bgClass} ${textColorClass}`}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex flex-wrap items-start content-start gap-[10px] self-stretch">
          {proToolsData.map((proTool) => (
            <DashboardStatusDetailBadge
              key={proTool.title}
              icon={proTool.icon}
              title={proTool.title}
              isPro={proTool.isPro}
              className="py-3 px-2.5"
            />
          ))}
        </div>
      </div>
    </DashboardStatusDetailCardContainer>
  );
}
