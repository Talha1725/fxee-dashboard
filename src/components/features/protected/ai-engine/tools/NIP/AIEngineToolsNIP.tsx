"use client";
import React from "react";

import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import AIEngineToolsNIPText from "./AIEngineToolsNIPText";
import AIEngineToolsNIPCards from "./AIEngineToolsNIPCards";
import { IconNIP, IconAdd, IconBitcoin } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import dynamic from "next/dynamic";
import { Text14, Text20 } from "@/components/ui/typography";
import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import HomeTopPicks from "../../../home/homeTopScore/HomeTopPicks";
import CommonSelect from "@/components/ui/common-select";
import FinancialIndexCard from "@/components/ui/financial-index-card";
import CardBox from "@/components/ui/cardBox";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  { ssr: false }
);

export default function AIEngineToolsNIP({ currency = "BTC/USD" }: { currency?: string }) {
  const { theme } = useTheme();

  return (
    <AIEngineToolsCardContainer>
      {/* First Section - Keep as is */}
      <div className="flex flex-col gap-4">
        <AIEngineToolsCardHead
          title="News Impact Predictor"
          description="Realtime Market news analysis with sentiment scoring and impact prediction"
          icon={<IconNIP width={14} height={14} />}
        />
        
        <div className="h-[714px] overflow-y-auto">
          <div className="flex items-start gap-5 self-stretch">
            <AIEngineToolsNIPText />
            <AIEngineToolsNIPCards />
          </div>
        </div>
      </div>

      {/* Second Section - Different height */}
      <div className="flex flex-col gap-4 mt-10">
        <AIEngineToolsCardHead
          title="RSI Analyzer"
          description="Advanced RSI analysis with AI-powered overbought/oversold"
          icon={<IconNIP width={14} height={14} />}
        />
        
        <div className="h-[785px] overflow-y-auto">
          <div className="flex items-start gap-5 self-stretch">
            
            <div className="min-w-[724px] flex-1">
            {/* <div className="flex items-center gap-2.5">
              <CurrencyToCryptoPairConverter currency={currency || "BTC/USD"} size={38} />
              <div className="flex flex-col justify-center items-start">
                <Text20 className="font-satoshi-medium dark:text-white text-black">{currency || "BTC/USD"}</Text20>
                <Text14 className="font-satoshi-medium dark:text-white/60 text-black/40">$0.06642</Text14>
              </div>
            </div> */}
             <div className="mb-2">
              <div className="flex items-center gap-2">
              <div className="flex flex-col justify-center items-start pt-3 px-4 h-[70px] gap-5 w-[160px] sm:w-[220px] rounded-t-[16px] border-t border-r border-l border-[#0000001A] dark:border-white/15 bg-dark-gradient">
                 <div className="flex items-center gap-2.5">
                   <CurrencyToCryptoPairConverter currency={currency} size={38} />
                   <div className="flex flex-col justify-center items-start">
                     <Text20 className="font-satoshi-medium dark:text-white text-black">{currency}</Text20>
                     <Text14 className="font-satoshi-medium dark:text-white/60 text-black/40">$0.06642</Text14>
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
                // symbol={currency.replace("/", "")}
                interval="60"
                timezone="Etc/UTC"
                width="100%"
                height="450"
                theme={theme === "dark" ? "dark" : "light"}
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-[344px]">
             <HomeTopPicks showArrows={false}/>
             <FinancialIndexCard
              symbol="BTC/ETH"
              name="US 100 Index"
              type="TVC"
              currentValue={19967.94}
              change={-134.67}
              changePercent={-0.67}
              lastUpdate="03:22 GMT+5"
              icon={              
              <IconBitcoin width={24} height={24} />
            }
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
          
            {/* <AIEngineToolsNIPCards /> */}
          </div>
        </div>
      </div>

      {/* Third Section - Different height */}
      <div className="flex flex-col gap-4 mt-10">
        <AIEngineToolsCardHead
          title="Smart Portfolio Allocator"
          description="Leverage AI to automatically distribute your capital across assets based on risk tolerance, market trends, and performance potential."
          icon={<IconNIP width={14} height={14} />}
        />
        
        {/* <div className="h-[952px] overflow-y-auto"> */}
          <div className="flex items-start gap-5 self-stretch">
            {/* <AIEngineToolsNIPText /> */}
            <div className="flex-1 min-w-0">
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

            <div className="flex flex-col gap-6 flex-shrink-0">
      
      {/* Suggested Allocation */}
      <CardBox title="Suggested Allocation Breakdown">
        <p className="text-black dark:text-white">Forex</p>
        <div className="h-3 w-32 bg-gradient-to-r from-green-400 to-blue-500 rounded" />
        <p className="text-black dark:text-white">Crypto</p>
        <div className="h-3 w-40 bg-gradient-to-r from-green-300 to-blue-300 rounded" />
      </CardBox>

      {/* Sub-Breakdown (list mode) */}
      <CardBox
        title="Sub-Breakdown Inside Each Category"
        listItems={[
          { label: "Forex", value: "", highlight: true },
          { value: "USD/JPY 30%, EUR/USD 20%, GBP/USD 10%" },
          { label: "Crypto", value: "", highlight: true },
          { value: "BTC 25%, ETH 10%, SOL 5%" },
        ]}
      />

      {/* Risk Profile Selector (children mode) */}
      <CardBox title="Risk Profile Selector">
        <p className="text-black dark:text-white">Your Risk Profile:</p>
        <ul className="list-disc pl-5 text-black dark:text-white">
          <li>Conservative</li>
          <li>Moderate</li>
          <li>Aggressive</li>
        </ul>
      </CardBox>

      {/* Mini Allocation History (list mode) */}
      <CardBox
        title="Mini Allocation History View"
        listItems={[
          { label: "Apr 30", value: "70% Forex / 30% Crypto" },
          { label: "May 6", value: "50% Forex / 50% Crypto" },
        ]}
      />
    </div>
          

            {/* <AIEngineToolsNIPCards /> */}
          </div>
        </div>
    </AIEngineToolsCardContainer>
  );
}
