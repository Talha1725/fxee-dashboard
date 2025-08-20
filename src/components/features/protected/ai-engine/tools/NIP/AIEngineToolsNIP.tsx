"use client";
import React from "react";

import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import AIEngineToolsNIPText from "./AIEngineToolsNIPText";
import AIEngineToolsNIPCards from "./AIEngineToolsNIPCards";
import { IconNIP, IconAdd, IconBitcoin, IconCircledEnergy, IconZap, IconAIMagic, IconAnalyse } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import dynamic from "next/dynamic";
import { Text14, Text16, Text20 } from "@/components/ui/typography";
import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import HomeTopPicks from "../../../home/homeTopScore/HomeTopPicks";
import CommonSelect from "@/components/ui/common-select";
import FinancialIndexCard from "@/components/ui/financial-index-card";
import CardBox from "@/components/ui/cardBox";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  { ssr: false }
);

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

const AllocationBar = ({ 
  label, 
  width, 
  opacity = 100 
}: { 
  label: string; 
  width: number; 
  opacity?: number 
}) => (
  <div className="flex items-center gap-[12px]">
    <p className="font-satoshi-bold text-[10.11px] leading-[100%] tracking-[0%] text-black dark:text-white">
      {label}
    </p>
    <div 
      className="h-[18px] rounded-[2.37px] bg-gradient-to-r from-[#0276DB] to-[#3EDC81]"
      style={{ width: `${width}px`, opacity: opacity / 100 }}
    />
  </div>
);

const AllocationBreakdown = () => (
  <div className="flex flex-col gap-[14px] mb-6">
    <AllocationBar label="Forex" width={66} opacity={100} />
    <AllocationBar label="Crypto" width={144} opacity={40} />
  </div>
);

const NumberScale = () => {
  const numbers = [0, 2.0, 4.0, 6.0, 8.0, 10.0];
  
  return (
    <div className="w-[295.42px] h-[14px] flex justify-between items-center pl-[42px] mt-[16px]">
      {numbers.map((num) => (
        <span 
          key={num} 
          className="font-satoshi-medium text-[10.11px] leading-[100%] tracking-[0%] text-black dark:text-white"
        >
          {num}
        </span>
      ))}
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function AIEngineToolsNIP({ 
  currency = "BTC/USD" 
}: { 
  currency?: string 
}) {
  const { theme } = useTheme();

  return (
    <AIEngineToolsCardContainer>
      {/* ====================================================================
          FIRST SECTION - NEWS IMPACT PREDICTOR
      ===================================================================== */}
      <div className="flex flex-col gap-6">
        <AIEngineToolsCardHead
          title="News Impact Predictor"
          description="Realtime Market news analysis with sentiment scoring and impact prediction"
          icon={<IconNIP width={14} height={14} />}
        />
        
        <div className="min-h-[714px] max-h-[714px] overflow-y-auto">
          <div className="flex items-start gap-5 self-stretch">
            <AIEngineToolsNIPText />
            <AIEngineToolsNIPCards />
          </div>
        </div>
      </div>

      {/* ====================================================================
          SECOND SECTION - RSI ANALYZER
      ===================================================================== */}
      <div className="flex flex-col gap-6 mt-12">
        <AIEngineToolsCardHead
          title="RSI Analyzer"
          description="Advanced RSI analysis with AI-powered overbought/oversold"
          icon={<IconNIP width={14} height={14} />}
        />
        
        <div className="min-h-[785px] h-full overflow-y-auto">
          <div className="flex flex-col items-start gap-5 self-stretch md:flex-row md:gap-5">
            {/* Left Side - Chart */}
            <div className="flex-1 min-w-0 w-full md:flex-[2] lg:flex-[2.5] xl:flex-[3]">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col justify-center items-start pt-3 px-4 h-[70px] gap-5 w-[160px] sm:w-[220px] rounded-t-[16px] border-t border-r border-l border-[#0000001A] dark:border-white/15 bg-dark-gradient">
                    <div className="flex items-center gap-2.5">
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
                  </div>
                  <div className="flex flex-col justify-center items-start py-3 px-4 h-[70px] rounded-[16px] border-t border-r border-l border-[#0000001A] dark:border-white/15 bg-dark-gradient">
                    <div className="flex items-center gap-2.5">
                      <IconAdd width={20} height={20} className="text-white" />
                    </div>
                  </div>
                    <IconAnalyse width={40} height={40} />
                </div>
                
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

            {/* Right Side - Cards */}
            <div className="flex flex-col items-start gap-2 w-full mt-5 md:mt-0 md:w-auto md:flex-1">
              <HomeTopPicks showArrows={false} />
              
              <FinancialIndexCard
                symbol="BTC/ETH"
                name="US 100 Index"
                type="TVC"
                currentValue={19967.94}
                change={-134.67}
                changePercent={-0.67}
                lastUpdate="03:22 GMT+5"
                icon={<IconBitcoin width={24} height={24} />}
              />
              
              <CommonSelect
                placeholder="Select a category"
                defaultValue="Trade"
                options={[
                  { value: "Trade", label: "Trade" },
                  { value: "Seasonals", label: "Seasonals" },
                  { value: "Popular", label: "Popular" }
                ]}
                className="w-full min-w-0"
              />
              
              <CommonSelect
                placeholder="Select a category"
                defaultValue="Seasonals"
                options={[
                  { value: "Seasonals", label: "Seasonals" },
                  { value: "Trending", label: "Trending" },
                  { value: "Popular", label: "Popular" }
                ]}
                className="w-full min-w-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          THIRD SECTION - SMART PORTFOLIO ALLOCATOR
      ===================================================================== */}
      <div className="flex flex-col gap-6 mt-12">
        <AIEngineToolsCardHead
          title="Smart Portfolio Allocator"
          description="Leverage AI to automatically distribute your capital across assets based on risk tolerance, market trends, and performance potential."
          icon={<IconNIP width={14} height={14} />}
        />
        
        <div className="min-h-[887px] h-full overflow-y-auto">
          <div className="flex flex-col gap-5 self-stretch md:flex-row md:gap-8">
            {/* Left Side - AI Panel */}
            <div className="w-full md:flex-[2] lg:flex-[2.5] xl:flex-[3] xl:max-w-[800px]">
              <AIEngineToolsNIPCardAI
                title="AI Insight Panel"
                headerAlign="center"
                showHeaderIcon={false}
                showIcon={true}
                showBadges={true}
                showReasoning={true}
                showPrediction={false}
                showActionButton={false}
                isNIPVersion={true}
                badges={[
                  // { text: "Low Risk", icon: <IconShield width={20} height={20} /> },
                  // { text: "95% Accuracy", icon: <IconTarget width={20} height={20} /> },
                  // { text: "Real-time", icon: <IconClock width={20} height={20} /> }
                ]}
              />
            </div>

            {/* Right Side - Portfolio Cards */}
            <div className="flex flex-col gap-4 w-full md:flex-1 md:max-w-[400px]">
              {/* Suggested Allocation Breakdown */}
              <CardBox
                title="Suggested Allocation Breakdown"
                customSize={{
                  width: "w-full",
                  height: "h-[162px]",
                  padding: "p-5"
                }}
              >
                <AllocationBreakdown />
                <NumberScale />
              </CardBox>

              {/* Sub-Breakdown Inside Each Category */}
              <CardBox
                title="Sub-Breakdown Inside Each Category"
                listItems={[
                  { label: "Forex", value: "", highlight: true, style: 'sub-breakdown' },
                  { value: "USD/JPY 30%, EUR/USD 20%, GBP/USD 10%", style: 'sub-breakdown' },
                  { label: "Crypto", value: "", highlight: true, style: 'sub-breakdown' },
                  { value: "BTC 25%, ETH 10%, SOL 5%", style: 'sub-breakdown' },
                ]}
                customSize={{
                  width: "w-full",
                  padding: "p-5"
                }}
              />

              {/* Risk Profile Selector */}
              <CardBox
                title="Risk Profile Selector"
                customSize={{
                  width: "w-full",
                  padding: "p-5"
                }}
              >
                <p className="text-black dark:text-white font-medium mb-2">Your Risk Profile:</p>
                <ul className="list-disc pl-5 text-black dark:text-white space-y-1">
                  <li>Conservative</li>
                  <li>Moderate</li>
                  <li>Aggressive</li>
                </ul>
              </CardBox>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {["Apply Allocation", "Simulate ROI"].map((label) => (
                  <Button
                    key={label}
                    variant={theme === "dark" ? "white" : "black"}
                    className="w-full md:w-[163px] h-[39px] rounded-[10px] border border-white/5 p-[10px]"
                  >
                    <Text14 className="text-white dark:text-[#111] font-satoshi-bold">
                      {label}
                    </Text14>
                  </Button>
                ))}
              </div>

              {/* Rebalance Now Button and Last Updated Text */}
              <div className="flex flex-col mt-4">
                <div className={`flex items-center justify-center w-full h-[52px] rounded-[16px] ${theme === "dark" ? "bg-dark-gradient" : "bg-white"} border border-black/20 cursor-pointer hover:bg-white/10 dark:border-white/[0.1] transition-all duration-200 hover:scale-[1.02]`}>
                  <div className="flex items-center gap-2">
                  <RefreshCcw size={14} className="shrink-0" />
                    <Text14 className="text-black dark:text-white font-satoshi-bold">
                      Rebalance Now
                    </Text14>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <span className="font-satoshi-medium text-[12px] leading-[100%] tracking-[-0.02em] text-black dark:text-white opacity-70">
                    Last updated: 30 seconds ago
                  </span>
                </div>
              </div>

              {/* Mini Allocation History View */}
              <CardBox
                title="Mini Allocation History View"
                listItems={[
                  { label: "Apr 30", value: "", highlight: true, style: 'mini-allocation' },
                  { value: "70% Forex / 30% Crypto", style: 'mini-allocation' },
                  { label: "May 6", value: "", highlight: true, style: 'mini-allocation' },
                  { value: "50% Forex / 50% Crypto", style: 'mini-allocation' },
                ]}
                customSize={{
                  width: "w-full",
                  padding: "p-5"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AIEngineToolsCardContainer>
  );
}
