"use client";
import React from "react";

import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import AIEngineToolsNIPText from "./AIEngineToolsNIPText";
import AIEngineToolsNIPCards from "./AIEngineToolsNIPCards";
import { IconNIP, IconAdd, IconBitcoin, IconCircledEnergy } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import dynamic from "next/dynamic";
import { Text14, Text20 } from "@/components/ui/typography";
import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import HomeTopPicks from "../../../home/homeTopScore/HomeTopPicks";
import CommonSelect from "@/components/ui/common-select";
import FinancialIndexCard from "@/components/ui/financial-index-card";
import CardBox from "@/components/ui/cardBox";
import { Button } from "@/components/ui/button";

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
                </div>
              </div>

              <AdvancedRealTimeChart
                interval="60"
                timezone="Etc/UTC"
                width="100%"
                height="600"
                theme={theme === "dark" ? "dark" : "light"}
              />
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
                defaultValue="Seasonal"
                options={[
                  { value: "Seasonal", label: "Seasonal" },
                  { value: "Trending", label: "Trending" },
                  { value: "Popular", label: "Popular" }
                ]}
                className="w-full min-w-0"
              />
              
              <CommonSelect
                placeholder="Select a category"
                defaultValue="Seasonal"
                options={[
                  { value: "Seasonal", label: "Seasonal" },
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
          <div className="flex flex-col gap-5 self-stretch md:flex-row md:gap-5">
            {/* Left Side - AI Panel */}
            <div className="w-full md:flex-[2] lg:flex-[2.5] xl:flex-[3]">
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
              />
            </div>

            {/* Right Side - Portfolio Cards */}
            <div className="flex flex-col gap-8 w-full md:w-auto md:flex-1">
              {/* Suggested Allocation Breakdown */}
              <CardBox
                title="Suggested Allocation Breakdown"
                customSize={{
                  width: "w-full",
                  height: "h-[162px]",
                  padding: "p-[20px]"
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
                  width: "w-full"
                }}
              />

              {/* Risk Profile Selector */}
              <CardBox title="Risk Profile Selector"
                customSize={{
                  width: "w-full"
                }}>
                <p className="text-black dark:text-white">Your Risk Profile:</p>
                <ul className="list-disc pl-5 text-black dark:text-white">
                  <li>Conservative</li>
                  <li>Moderate</li>
                  <li>Aggressive</li>
                </ul>
              </CardBox>

              {/* Action Buttons */}
              <div className="flex gap-[11px] mt-2">
                <Button
                  variant={theme === "dark" ? "white" : "black"}
                  className="w-full md:w-[163px] h-[39px] rounded-[10px] border border-white/5 p-[10px]"
                >
                  <Text14 className="text-white dark:text-[#111] font-satoshi-medium">
                    Apply Allocation
                  </Text14>
                </Button>

                <Button
                  variant={theme === "dark" ? "white" : "black"}
                  className="w-full md:w-[163px] h-[39px] rounded-[10px] border border-white/5 p-[10px]"
                >
                  <Text14 className="text-white dark:text-[#111] font-satoshi-medium">
                    Simulate ROI
                  </Text14>
                </Button>
              </div>

              {/* Rebalance Now Button and Last Updated Text */}
              <div className="flex flex-col mt-2">
                <div className="flex items-center justify-center w-full md:w-[337px] h-[52px] gap-[6px] rounded-[16px] bg-white/5 border border-black/20 pt-[16px] pr-[20px] pb-[16px] pl-[20px] cursor-pointer hover:bg-white/10 transition-colors">
                  <Text14 className="text-black dark:text-white font-satoshi-medium">
                    Rebalance Now
                  </Text14>
                </div>

                <div className="text-center mt-[8px] -mt-6">
                  <span className="font-satoshi-medium text-[12px] leading-[100%] tracking-[-0.02em] text-black dark:text-white">
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
                  width: "w-full"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AIEngineToolsCardContainer>
  );
}
