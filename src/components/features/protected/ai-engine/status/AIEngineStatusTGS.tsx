"use client";
import React, { useState } from "react";

import AIEngineStatusTGSHead from "./AIEngineStatusTGSHead";
import AIEngineStatusTGSSlider from "./AIEngineStatusTGSSlider";
import AIEngineStatusTGSDetail from "./AIEngineStatusTGSDetail";
import AIEngineStatusTGSEditableDetail from "./AIEngineStatusTGSEditableDetail";
import AIEngineStatusTGSCheck from "./AIEngineStatusTGSCheck";
import AIEngineStatusTGSPairSelect from "./AIEngineStatusTGSPairSelect";
import AIEngineStatusTGSTimeframeSelect from "./AIEngineStatusTGSTimeframeSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconCustomGoal,
  IconBestTrade,
  IconSend,
  IconMic,
} from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useCreateProposedTradesMutation } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import type { ProposedTrade } from "@/types/redux";

export default function AIEngineStatusTGS() {
  const { theme } = useTheme();
  
  // State for active tab and proposed trades
  const [activeTab, setActiveTab] = useState("best_trade");
  const [bestTrade, setBestTrade] = useState<ProposedTrade | null>(null);
  
  // State for user selections in Best Trade tab
  const [selectedTradingPair, setSelectedTradingPair] = useState<string>("USDCAD");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("2 Days");
  
  // Mutation for creating proposed trades
  const [createProposedTrades, { isLoading, error }] = useCreateProposedTradesMutation();
  
  // State for editable detail fields
  const [potentialProfit, setPotentialProfit] = useState("$5,000.00");
  const [maximumLoss, setMaximumLoss] = useState("$2,000.00");
  const [riskReward, setRiskReward] = useState("1:2.50");
  
  // Handle Run Analysis button click
  const handleRunAnalysis = async () => {
    if (activeTab === "best_trade") {
      try {
        const result = await createProposedTrades({
          symbol: selectedTradingPair,
          timeframe: selectedTimeframe,
        }).unwrap();
        setBestTrade(result.data || null);
        // The usage limits will automatically refetch due to invalidatesTags: ["ProposedTrade"]
      } catch (err) {
        console.error("Failed to create proposed trades:", err);
      }
    }
  };
  
  return (
    <div className={`w-full lg:flex-1 rounded-[16px] p-5 pb-[25px] flex flex-col gap-4 ${theme === "dark" ? "bg-card-green-gradient" : "bg-light-green-blue-gradient"}`}>
      <AIEngineStatusTGSHead onRunAnalysis={handleRunAnalysis} isAnalyzing={isLoading} />
      <Tabs defaultValue="best_trade" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="custom_goal" className="cursor-pointer text-[#FFFFFFCC] dark:text-[#FFFFFFCC] data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-white dark:data-[state=active]:text-black [&>svg]:fill-white [&>svg]:stroke-white data-[state=active]:[&>svg]:fill-black data-[state=active]:[&>svg]:stroke-black dark:data-[state=active]:[&>svg]:fill-black dark:data-[state=active]:[&>svg]:stroke-black">
            <IconCustomGoal width={20} height={20} />
            Custom Goal
          </TabsTrigger>
          <TabsTrigger value="best_trade" className="cursor-pointer text-[#FFFFFFCC] dark:text-[#FFFFFFCC] data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-white dark:data-[state=active]:text-black [&>svg]:fill-white [&>svg]:stroke-white data-[state=active]:[&>svg]:fill-black data-[state=active]:[&>svg]:stroke-black dark:data-[state=active]:[&>svg]:fill-black dark:data-[state=active]:[&>svg]:stroke-black">
            <IconBestTrade width={20} height={20} />
            Best Trade
          </TabsTrigger>
        </TabsList>
        <TabsContent value="custom_goal" className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 self-stretch ">
            <AIEngineStatusTGSSlider title="Profit Target" value={5000} />
            <AIEngineStatusTGSSlider
              title="Maximum Risk"
              value={5000}
              color="danger"
            />
          </div>
          <div className="flex items-center gap-1 self-stretch ">
            <AIEngineStatusTGSEditableDetail
              title="Potential Profit"
              value={potentialProfit}
              type="profit"
              onSave={setPotentialProfit}
            />
            <AIEngineStatusTGSEditableDetail
              title="Maximum Loss"
              value={maximumLoss}
              type="loss"
              onSave={setMaximumLoss}
            />
            <AIEngineStatusTGSEditableDetail
              title="Risk/Reward"
              value={riskReward}
              type="reward"
              onSave={setRiskReward}
            />
          </div>
          <div className="flex items-start gap-4 self-stretch ">
            <AIEngineStatusTGSCheck
              title="Risk Level"
              switches={[
                { label: "Low Risk", id: "low-risk" },
                { label: "Mid Risk", id: "mid-risk" },
                { label: "High Risk", id: "high-risk" },
              ]}
            />
            <AIEngineStatusTGSCheck
              title="Trading Type"
              switches={[
                { label: "Day Trade", id: "day-trade" },
                { label: "Swing Trade", id: "swing-trade" },
              ]}
            />
            <AIEngineStatusTGSCheck
              title="Trading Version"
              switches={[
                { label: "Basic", id: "basic" },
                { label: "Pro", id: "pro" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 self-stretch ">
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch text-white dark:text-white">Select Trading Pair</Text14>
              <AIEngineStatusTGSPairSelect />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch text-white dark:text-white">Select Timeframe</Text14>
              <AIEngineStatusTGSTimeframeSelect />
            </div>
          </div>
          <Input
            placeholder="Enter Custom Goals...."
            className="w-full !p-4 gap-3 border-none text-white placeholder:text-white"
            backIcon={
              <div className="flex items-center gap-3">
                <IconSend width={20} height={20} opacity={1} className="text-white/60" />
              </div>
            }
          />
        </TabsContent>
        <TabsContent value="best_trade" className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 self-stretch ">
            <AIEngineStatusTGSSlider 
              title="Profit Target" 
              value={bestTrade ? parseFloat(bestTrade.profitTarget) : 5000} 
              disabled={true} 
            />
            <AIEngineStatusTGSSlider
              title="Maximum Risk"
              value={bestTrade ? parseFloat(bestTrade.maximumRisk) : 2000}
              color="danger"
              disabled={true}
            />
          </div>
          <div className="flex items-center gap-1 self-stretch ">
            <AIEngineStatusTGSDetail
              title="Potential Profit"
              value={bestTrade ? `$${parseFloat(bestTrade.potentialProfit).toFixed(2)}` : "$5,000.00"}
              className="text-[#3EDC81] dark:text-[#3EDC81]"
            />
            <AIEngineStatusTGSDetail
              title="Maximum Loss"
              value={bestTrade ? `$${parseFloat(bestTrade.maximumLoss).toFixed(2)}` : "$2,000.00"}
              className="text-[#EA4335] dark:text-[#EA4335]"
            />
            <AIEngineStatusTGSDetail
              title="Risk/Reward"
              value={bestTrade?.riskRewardRatio || "1:2.50"}
              className="bg-gradient-to-b from-[#15B0F8] to-[#0276DB] text-transparent bg-clip-text dark:bg-gradient-to-b dark:from-[#15B0F8] dark:to-[#0276DB] dark:text-transparent dark:bg-clip-text"
            />
          </div>
          <div className="flex items-start gap-4 self-stretch ">
            <AIEngineStatusTGSCheck
              title="Risk Level"
              switches={[
                { label: "Low Risk", id: "low-risk", checked: bestTrade?.riskLevel === "low" },
                { label: "Mid Risk", id: "mid-risk", checked: bestTrade?.riskLevel === "medium" },
                { label: "High Risk", id: "high-risk", checked: bestTrade?.riskLevel === "high" },
              ]}
              disabled={true}
            />
            <AIEngineStatusTGSCheck
              title="Trading Type"
              switches={[
                { label: "Day Trade", id: "day-trade", checked: bestTrade?.tradingType === "day_trade" },
                { label: "Swing Trade", id: "swing-trade", checked: bestTrade?.tradingType === "swing_trade" },
              ]}
              disabled={true}
            />
            <AIEngineStatusTGSCheck
              title="Trading Version"
              switches={[
                { label: "Basic", id: "basic", checked: bestTrade?.tradingVersion === "basic" },
                { label: "Pro", id: "pro", checked: bestTrade?.tradingVersion === "pro" },
              ]}
              disabled={true}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 self-stretch ">
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch text-white dark:text-white">Select Trading Pair</Text14>
              <AIEngineStatusTGSPairSelect 
                disabled={false} 
                value={selectedTradingPair}
                onValueChange={setSelectedTradingPair}
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch text-white dark:text-white">Select Timeframe</Text14>
              <AIEngineStatusTGSTimeframeSelect 
                disabled={false}
                value={selectedTimeframe} 
                onValueChange={setSelectedTimeframe}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
