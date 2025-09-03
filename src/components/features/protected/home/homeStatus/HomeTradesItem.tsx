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
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface HomeTradesItemProps {
  long?: boolean;
  recommendation?: DailyRecommendation;
}

export default function HomeTradesItem({ long = false, recommendation }: HomeTradesItemProps) {
  // Helper function to get time ago
  const getTimeAgo = (createdAt: string) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  // Helper function to get profit tier color and label
  const getProfitTierInfo = (profitTier: string) => {
    switch (profitTier) {
      case "GREAT_PROFIT":
        return { color: "#22C55E", label: "Great Profit" };
      case "HIGH_PROFIT":
        return { color: "#3EDC81", label: "High Profit" };
      case "MEDIUM_PROFIT":
        return { color: "#F59E0B", label: "Medium Profit" };
      case "LOW_PROFIT":
        return { color: "#EF4444", label: "Low Profit" };
      case "VERY_LOW_PROFIT":
        return { color: "#DC2626", label: "Very Low Profit" };
      default:
        return { color: "#6B7280", label: "Standard" };
    }
  };

  // Use recommendation data if available, otherwise fallback to defaults
  const symbol = recommendation?.symbol || "XAU";
  const displaySymbol = symbol.includes("/") ? symbol : `${symbol}/USD`;
  const direction = recommendation?.direction || (long ? "Long" : "Short");
  const riskRewardRatio = recommendation?.riskRewardRatio || "1:3 RR";
  const timeAgo = recommendation ? getTimeAgo(recommendation.createdAt) : "4 Minutes Ago";
  const description = recommendation?.title || "Bearish outlook on gold; current market trends indicate a possible downturn approaching!";
  const profitTierInfo = recommendation ? getProfitTierInfo(recommendation.profitTier) : { color: "#6B7280", label: "Standard" };
  
  return (
    <TooltipProvider>
      <div className="flex flex-col items-start gap-5 self-stretch shadow-subtle w-[280px] shrink-0">
        <HomeTokenPair token={symbol} pair={displaySymbol} iconName="IconCryptoXau" />
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
              <p>Risk-Reward Ratio<br/>
              Potential profit vs loss.<br/>
              {riskRewardRatio} = gain ratio per $1 risked</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <HomeTradesItemBadge
                  text={recommendation ? `${recommendation.confidence}%` : "65%"}
                  icon={<IconZap width={20} height={20} />}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI Confidence Level<br/>
              Algorithm's confidence in<br/>
              this trading recommendation</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <HomeTradesItemBadge
                  text={direction}
                  icon={direction === "Long" ? 
                    <IconTradeUp width={20} height={20} color="#22C55E" /> : 
                    <IconTradeDown width={20} height={20} color="#FE5749" />
                  }
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Trade Direction<br/>
              {direction === "Long" ? "Long = Buy expecting price rise" : "Short = Sell expecting price fall"}</p>
            </TooltipContent>
          </Tooltip>

          {recommendation && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                  <HomeTradesItemBadge
                    text={profitTierInfo.label}
                    icon={<IconShield width={20} height={20} style={{ color: profitTierInfo.color }} />}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Profit Tier<br/>
                {profitTierInfo.label} expected<br/>
                profit potential level</p>
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
              <p className="text-white/60 text-xs font-satoshi">Entry</p>
              <p className="text-white text-sm font-satoshi-medium">{parseFloat(recommendation.entryPrice).toFixed(recommendation.symbol.includes("USD") && !recommendation.symbol.includes("JPY") ? 5 : 4)}</p>
            </div>
            <div>
              <p className="text-green-400/80 text-xs font-satoshi">Target</p>
              <p className="text-green-400 text-sm font-satoshi-medium">{parseFloat(recommendation.targetPrice).toFixed(recommendation.symbol.includes("USD") && !recommendation.symbol.includes("JPY") ? 5 : 4)}</p>
            </div>
            <div>
              <p className="text-red-400/80 text-xs font-satoshi">Stop Loss</p>
              <p className="text-red-400 text-sm font-satoshi-medium">{parseFloat(recommendation.stopLoss).toFixed(recommendation.symbol.includes("USD") && !recommendation.symbol.includes("JPY") ? 5 : 4)}</p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 px-2 text-center">
            <div>
              <p className="text-white/60 text-xs font-satoshi">Risk Level</p>
              <p className="text-white font-satoshi-medium capitalize text-sm">{recommendation.riskLevel}</p>
            </div>
            <div>
              {/* Empty middle section for spacing */}
            </div>
            <div>
              <p className="text-white/60 text-xs font-satoshi">Profit</p>
              <p style={{ color: profitTierInfo.color }} className="font-satoshi-medium text-sm">{recommendation.profitPercentage}%</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex items-start self-stretch gap-2.5">
        <Button variant={direction === "Long" ? "green" : "danger"} size="default" className="text-white flex-[1_0_0] font-satoshi-medium">
          <p>{direction}</p>
          {direction === "Long" ? 
            <IconTradeUp width={20} height={20} color="#FFF" /> : 
            <IconTradeDown width={20} height={20} color="#FFF" />
          }
        </Button>
        <Button variant="grey" size="default" className="flex-[1_0_0] font-satoshi-medium text-white/80">
          <p>Skip</p>
          <IconCancel width={20} height={20} />
        </Button>
      </div>
      </div>
    </TooltipProvider>
  );
}
