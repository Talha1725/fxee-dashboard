"use client";
import { useState } from "react";
import { Text14, Text16, Text20 } from "@/components/ui/typography";
import DashboardStatusCardContainer from "../status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "../status/statusCards/DashboardStatusCardFooter";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import bars from "@/public/images/bars.svg";
import CircluarChart from "@/public/images/circular-chart.svg";
import AreaImage from "@/public/images/area-chart.png";
import TradeMeter from "@/public/images/trade-meter";
import DashboardHeadBadge from "../DashboardHeadBadge";
import { IconACP } from "@/components/ui/icon";
import { ChevronUp, ChevronDown } from "lucide-react";
import OpenTradeCard from "./OpenTradeCard";
import { useGetDailyRecommendationsQuery } from "@/lib/redux/features/recommendations/recommendationsApi";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";
import { LockOverlay } from "@/components/ui/lock-overlay";
import { cn } from "@/lib/utils";
import BlurOverlay from "@/components/common/BlurOverlay";

export default function OpenTrades() {
  const [isOpen, setIsOpen] = useState(true);
  const { isVirtualAccount } = useAccountType();
  const {
    data: dailyRecommendations,
    error,
    isLoading,
  } = useGetDailyRecommendationsQuery();

  // Transform API recommendations into trading data format or use static fallback
  const getTradingData = () => {
    if (dailyRecommendations?.data && dailyRecommendations.data.length > 0) {
      return dailyRecommendations.data.slice(0, 6).map((rec, index) => ({
        symbol: rec.symbol.includes("/") ? rec.symbol : `${rec.symbol}/USD`,
        realizedPL: `$${(Math.random() * 5000 + 1000).toFixed(2)}`,
        unrealizedPL:
          rec.direction === "Long"
            ? `+$${rec.profitPercentage}`
            : `-$${rec.profitPercentage}`,
        lotSize: `${(Math.random() * 3 + 0.5).toFixed(1)} Lots`,
        equityUsed: `$${(Math.random() * 3000 + 1000).toFixed(0)}`,
        resistanceLevel: rec.targetPrice,
        stopLoss: rec.stopLoss,
        takeProfit: rec.targetPrice,
        leverage: "20:1",
        runtime: `${Math.floor(Math.random() * 5) + 1}d ${Math.floor(
          Math.random() * 24
        )}h`,
        startTime:
          new Date(rec.createdAt).toLocaleDateString() +
          ", " +
          new Date(rec.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        direction: rec.direction.toLowerCase() as "long" | "short",
        percentageChange: parseFloat(rec.profitPercentage),
        aiInsight: rec.description,
        isOpen: Math.random() > 0.3,
        recommendation: rec,
      }));
    }

    // Fallback static data
    return [
      {
        symbol: "BTC/USD",
        realizedPL: "$5,721.83",
        unrealizedPL: "-$94.48",
        lotSize: "2.00 Lots",
        equityUsed: "$2,000",
        resistanceLevel: "$70,000.00",
        stopLoss: "$62,000.00",
        takeProfit: "$72,000.00",
        leverage: "20:1",
        runtime: "4d 19h",
        startTime: "May 25, 12:34 PM",
        direction: "long" as const,
        percentageChange: 24.8,
        aiInsight:
          "I detected a breakout above resistance and opened this long position to capture the upward momentum.",
        isOpen: true,
      },
      {
        symbol: "ETH/USD",
        realizedPL: "$3,245.67",
        unrealizedPL: "+$156.23",
        lotSize: "1.50 Lots",
        equityUsed: "$1,500",
        resistanceLevel: "$4,200.00",
        stopLoss: "$3,800.00",
        takeProfit: "$4,500.00",
        leverage: "15:1",
        runtime: "2d 8h",
        startTime: "May 26, 9:15 AM",
        direction: "short" as const,
        percentageChange: -12.3,
        aiInsight:
          "Market showing bearish signals with RSI divergence. Short position opened to capitalize on downward movement.",
        isOpen: true,
      },
      {
        symbol: "USD/JPY",
        realizedPL: "$1,890.45",
        unrealizedPL: "-$67.89",
        lotSize: "3.00 Lots",
        equityUsed: "$3,000",
        resistanceLevel: "$155.50",
        stopLoss: "$152.00",
        takeProfit: "$158.00",
        leverage: "25:1",
        runtime: "1d 14h",
        startTime: "May 27, 2:30 PM",
        direction: "long" as const,
        percentageChange: 8.7,
        aiInsight:
          "Strong support level identified with increasing volume. Long position opened for potential reversal.",
        isOpen: false,
      },
    ];
  };

  const tradingData = getTradingData();

  const shouldBeOpen = isOpen && !isVirtualAccount;

  return (
    <div
      className={cn(
        `flex flex-col items-center gap-2.5 p-3 sm:p-5 self-stretch rounded-[16px] border border-black/15 md:border-transparent dark:border-white/5 bg-transparent dark:backdrop-blur-[7px] my-10 sm:my-0 mb-5 relative overflow-hidden ${isVirtualAccount ? "border-none pointer-events-none shadow-xl" : ""}`
      )}
    >
        {isVirtualAccount && <BlurOverlay className="w-full h-full scale-100 translate-y-[0] z-50" />}
      <div className="w-full relative">
        <div
          onClick={() => !isVirtualAccount && setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-2 self-stretch cursor-pointer relative"
        >
        
          <div className="flex items-center justify-between gap-2 self-stretch">
            <DashboardHeadBadge>
              <IconACP width={14} height={14} />
            </DashboardHeadBadge>
            <div className="flex flex-col sm:flex-row items-start gap-2 flex-[1_0_0]">
              <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
                <Text16 className="font-satoshi-medium dark:text-white text-black">
                  Open Trades
                </Text16>
                <Text14 className="dark:text-white/80 text-black/80 font-satoshi">
                  Easily track your active positions in real time{" "}
                </Text14>
              </div>
            </div>
          </div>
          <button
            className="flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            onClick={() => !isVirtualAccount && setIsOpen(!isOpen)}
            disabled={isVirtualAccount}
          >
            {shouldBeOpen ? (
              <ChevronUp className="w-6 h-6 dark:text-white/50 text-black/50 transition-all duration-300" />
            ) : (
              <ChevronDown className="w-6 h-6 dark:text-white/50 text-black/50 transition-all duration-300" />
            )}
          </button>
        </div>

        <div
          id="open-trades"
          className={`transition-all duration-500 ease-in-out  ${
            shouldBeOpen
              ? "max-h-[1100px] opacity-100 mt-5 overflow-auto scrollbar-hide"
              : "max-h-[0px] opacity-0 overflow-hidden mt-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 self-stretch mb-5">
            <DashboardStatusCardContainer>
              <div className="absolute top-0 right-0 w-[80px] h-[45px]">
                <Image src={bars} alt="Candle" fill />
              </div>
              <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
                Auto Trades Today
              </Text14>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <Text20 className="dark:text-white text-black font-satoshi-medium">
                  12
                </Text20>
                <DashboardStatusCardFooter
                  title="Total Equity Increased"
                  value={12.44}
                  icon={false}
                />
              </div>
            </DashboardStatusCardContainer>
            <DashboardStatusCardContainer>
              <div className="absolute top-0 right-0 w-[120px] h-[45px]">
                <Image src={AreaImage} alt="Candle" fill />
              </div>
              <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
                Total P&L Today
              </Text14>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <div className="flex items-start gap-1">
                  <Text20 className="dark:text-white text-black font-satoshi-medium">
                    99,997.4900
                  </Text20>
                  <p className="text-xs dark:text-white text-black font-satoshi-medium ">
                    USD
                  </p>
                </div>
                <DashboardStatusCardFooter
                  title="P&L Increased"
                  value={+3.24}
                  icon={false}
                />
              </div>
            </DashboardStatusCardContainer>
            <DashboardStatusCardContainer>
              <div className="absolute top-0 right-0 w-[50px] h-[45px]">
                <Image src={CircluarChart} alt="Candle" fill />
              </div>
              <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
                Win Rate Today
              </Text14>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <Text20 className="dark:text-white text-black font-satoshi-medium">
                  + 66.7%
                </Text20>
                <DashboardStatusCardFooter
                  title="Win Rate Increased"
                  value={+66.7}
                  icon={false}
                />
              </div>
            </DashboardStatusCardContainer>
            <DashboardStatusCardContainer>
              <div className="absolute top-0 right-0 w-[100px] h-[45px]">
                <TradeMeter value={12.44} />
              </div>
              <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
                Win Rate Today
              </Text14>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <Text20 className="dark:text-white text-black font-satoshi-medium">
                  48
                </Text20>
                <DashboardStatusCardFooter
                  title="Win Rate Increased"
                  value={+66.7}
                  icon={false}
                />
              </div>
            </DashboardStatusCardContainer>
          </div>

          <div className="p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            {tradingData.map((data, index) => (
              <OpenTradeCard key={index} tradingData={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
