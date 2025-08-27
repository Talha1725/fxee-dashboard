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
import { useCreateProposedTradesMutation, useGetUsageLimitsQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import { useCreateCustomAnalysisMutation, useGetMyAnalysesQuery } from "@/lib/redux/features/recommendations/recommendationsApi";
import { useAnalysis } from "@/lib/contexts/AnalysisContext";
import type { ProposedTrade, CustomAnalysisRequest } from "@/types/redux";

interface AIEngineStatusTGSProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  bestTrade: ProposedTrade | null;
  setBestTrade: (trade: ProposedTrade | null) => void;
  customAnalysis: any;
  setCustomAnalysis: (analysis: any) => void;
}

export default function AIEngineStatusTGS({
  activeTab,
  setActiveTab,
  bestTrade,
  setBestTrade,
  customAnalysis,
  setCustomAnalysis
}: AIEngineStatusTGSProps) {
  const { theme } = useTheme();
  const { setAnalysisData } = useAnalysis();
  
  // State for user selections in Best Trade tab
  const [selectedTradingPair, setSelectedTradingPair] = useState<string>("USDCAD");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("2 Days");
  
  // State for Custom Goal tab selections
  const [customTradingPair, setCustomTradingPair] = useState<string>("EURUSD");
  const [customTimeframe, setCustomTimeframe] = useState<string>("2 Days");
  const [customGoals, setCustomGoals] = useState<string>("");
  
  // State for custom goal toggle selections
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<"low" | "mid" | "high">("mid");
  const [selectedTradingType, setSelectedTradingType] = useState<"day_trade" | "swing_trade">("swing_trade");
  const [selectedTradingVersion, setSelectedTradingVersion] = useState<"basic" | "pro">("pro");
  
  // State for custom goal sliders
  const [profitTargetValue, setProfitTargetValue] = useState<number>(5000);
  const [maxRiskValue, setMaxRiskValue] = useState<number>(2000);
  
  // Mutations for creating proposed trades and custom analysis
  const [createProposedTrades, { isLoading: isBestTradeLoading, error: bestTradeError }] = useCreateProposedTradesMutation();
  const [createCustomAnalysis, { isLoading: isCustomAnalysisLoading, error: customAnalysisError }] = useCreateCustomAnalysisMutation();
  
  // Query for refetching latest analysis after creation
  const { refetch: refetchLatestAnalysis } = useGetMyAnalysesQuery({ limit: 1 });
  
  // Query for refetching usage limits
  const { refetch: refetchUsageLimits } = useGetUsageLimitsQuery();
  
  // State for editable detail fields (Best Trade)
  const [potentialProfit, setPotentialProfit] = useState("$5,000.00");
  const [maximumLoss, setMaximumLoss] = useState("$2,000.00");
  const [riskReward, setRiskReward] = useState("1:2.50");
  
  // State for editable detail fields (Custom Goal)
  const [customPotentialProfit, setCustomPotentialProfit] = useState("$5,000.00");
  const [customMaximumLoss, setCustomMaximumLoss] = useState("$2,000.00");
  const [customRiskReward, setCustomRiskReward] = useState("1:2.50");
  
  // Helper function to parse currency string to number
  const parseCurrencyToNumber = (currency: string): number => {
    return parseFloat(currency.replace(/[$,]/g, ""));
  };

  // Helper function to parse risk/reward string to number
  const parseRiskRewardToNumber = (riskReward: string): number => {
    const parts = riskReward.split(":");
    return parts.length === 2 ? parseFloat(parts[1]) : 2.5;
  };

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
    } else if (activeTab === "custom_goal") {
      try {
        const customAnalysisData: CustomAnalysisRequest = {
          profitTarget: profitTargetValue,
          maxRisk: maxRiskValue,
          riskLevel: selectedRiskLevel,
          tradingType: selectedTradingType,
          tradingVersion: selectedTradingVersion,
          symbol: customTradingPair,
          timeFrame: customTimeframe,
          customGoals: customGoals,
          potentialProfit: parseCurrencyToNumber(customPotentialProfit),
          maximumLoss: parseCurrencyToNumber(customMaximumLoss),
          riskReward: parseRiskRewardToNumber(customRiskReward),
        };
        
        // Create the analysis
        await createCustomAnalysis(customAnalysisData).unwrap();
        
        // After successful creation, fetch the latest analysis using GET endpoint
        const latestAnalysisResponse = await refetchLatestAnalysis();
        
        if (latestAnalysisResponse.data?.success && latestAnalysisResponse.data?.data) {
          // Handle both array format (my-analyses) and single object format (latest analysis)
          const latestAnalysis = Array.isArray(latestAnalysisResponse.data.data) 
            ? latestAnalysisResponse.data.data[0] 
            : latestAnalysisResponse.data.data;
          
          if (latestAnalysis) {
            // Set the analysis data in context
            setAnalysisData(latestAnalysis);
            
            // Also set local state for the status component
            setCustomAnalysis(latestAnalysis);
          }
        }
        
        // Refetch usage limits to update the UI
        refetchUsageLimits();
      } catch (err) {
        console.error("Failed to create custom analysis:", err);
      }
    }
  };

  // Helper functions for toggle interactions
  const handleRiskLevelToggle = (level: "low" | "mid" | "high") => {
    setSelectedRiskLevel(level);
  };

  const handleTradingTypeToggle = (type: "day_trade" | "swing_trade") => {
    setSelectedTradingType(type);
  };

  const handleTradingVersionToggle = (version: "basic" | "pro") => {
    setSelectedTradingVersion(version);
  };
  
  return (
    <div className={`w-full lg:flex-1 rounded-[16px] p-5 pb-[25px] flex flex-col gap-4 ${theme === "dark" ? "bg-card-green-gradient" : "bg-light-green-blue-gradient"}`}>
      <AIEngineStatusTGSHead 
        onRunAnalysis={handleRunAnalysis} 
        isAnalyzing={isBestTradeLoading || isCustomAnalysisLoading} 
        activeTab={activeTab}
      />
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
            <AIEngineStatusTGSSlider 
              title="Profit Target" 
              value={profitTargetValue} 
              onValueChange={setProfitTargetValue}
            />
            <AIEngineStatusTGSSlider
              title="Maximum Risk"
              value={maxRiskValue}
              color="danger"
              onValueChange={setMaxRiskValue}
            />
          </div>
          <div className="flex items-center gap-1 self-stretch ">
            <AIEngineStatusTGSEditableDetail
              title="Potential Profit"
              value={customPotentialProfit}
              type="profit"
              onSave={setCustomPotentialProfit}
            />
            <AIEngineStatusTGSEditableDetail
              title="Maximum Loss"
              value={customMaximumLoss}
              type="loss"
              onSave={setCustomMaximumLoss}
            />
            <AIEngineStatusTGSEditableDetail
              title="Risk/Reward"
              value={customRiskReward}
              type="reward"
              onSave={setCustomRiskReward}
            />
          </div>
          <div className="flex items-start gap-4 self-stretch ">
            <AIEngineStatusTGSCheck
              title="Risk Level"
              switches={[
                { label: "Low Risk", id: "low-risk", checked: selectedRiskLevel === "low" },
                { label: "Mid Risk", id: "mid-risk", checked: selectedRiskLevel === "mid" },
                { label: "High Risk", id: "high-risk", checked: selectedRiskLevel === "high" },
              ]}
              onSwitchChange={(id) => {
                const riskLevel = id === "low-risk" ? "low" : id === "mid-risk" ? "mid" : "high";
                handleRiskLevelToggle(riskLevel);
              }}
            />
            <AIEngineStatusTGSCheck
              title="Trading Type"
              switches={[
                { label: "Day Trade", id: "day-trade", checked: selectedTradingType === "day_trade" },
                { label: "Swing Trade", id: "swing-trade", checked: selectedTradingType === "swing_trade" },
              ]}
              onSwitchChange={(id) => {
                const tradingType = id === "day-trade" ? "day_trade" : "swing_trade";
                handleTradingTypeToggle(tradingType);
              }}
            />
            <AIEngineStatusTGSCheck
              title="Trading Version"
              switches={[
                { label: "Basic", id: "basic", checked: selectedTradingVersion === "basic" },
                { label: "Pro", id: "pro", checked: selectedTradingVersion === "pro" },
              ]}
              onSwitchChange={(id) => {
                const tradingVersion = id === "basic" ? "basic" : "pro";
                handleTradingVersionToggle(tradingVersion);
              }}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 self-stretch ">
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch text-white dark:text-white">Select Trading Pair</Text14>
              <AIEngineStatusTGSPairSelect 
                disabled={false}
                value={customTradingPair}
                onValueChange={setCustomTradingPair}
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch text-white dark:text-white">Select Timeframe</Text14>
              <AIEngineStatusTGSTimeframeSelect 
                disabled={false}
                value={customTimeframe}
                onValueChange={setCustomTimeframe}
              />
            </div>
          </div>
          <Input
            placeholder="Enter Custom Goals...."
            value={customGoals}
            onChange={(e) => setCustomGoals(e.target.value)}
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
