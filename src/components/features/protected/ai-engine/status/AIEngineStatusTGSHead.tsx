import React from "react";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import { IconACP } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useGetUsageLimitsQuery, useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import { useGetMyAnalysesQuery } from "@/lib/redux/features/recommendations/recommendationsApi";

interface AIEngineStatusTGSHeadProps {
  onRunAnalysis?: () => void;
  isAnalyzing?: boolean;
  activeTab?: string;
}

export default function AIEngineStatusTGSHead({ onRunAnalysis, isAnalyzing, activeTab = "best_trade" }: AIEngineStatusTGSHeadProps) {
  // Fetch usage limits
  const { data: usageLimitsResponse, error, isLoading } = useGetUsageLimitsQuery();
  
  // Fetch last analysis data to show timestamp
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  const { data: lastAnalysisData } = useGetMyAnalysesQuery({ limit: 1 });
  
  // Get the appropriate limit based on active tab
  const currentLimit = activeTab === "custom_goal" 
    ? usageLimitsResponse?.data?.usageLimits?.custom_analysis
    : usageLimitsResponse?.data?.usageLimits?.best_trade;
    
  // Format last analysis timestamp
  const getLastAnalysisTime = () => {
    if (activeTab === "best_trade" && lastTradeData?.data?.createdAt) {
      const date = new Date(lastTradeData.data.createdAt);
      return {
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
      };
    } else if (activeTab === "custom_goal" && lastAnalysisData?.data) {
      const latestAnalysis = Array.isArray(lastAnalysisData.data) ? lastAnalysisData.data[0] : lastAnalysisData.data;
      if (latestAnalysis?.createdAt) {
        const date = new Date(latestAnalysis.createdAt);
        return {
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
        };
      }
    }
    return null;
  };
  
  const lastAnalysisTime = getLastAnalysisTime();
  return (
    <div className="flex items-start gap-2 self-stretch">
      <DashboardHeadBadge>
        <IconACP width={14} height={14} />
      </DashboardHeadBadge>
      <div className="flex flex-row items-start gap-2 flex-[1_0_0]">
        <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
          <Text16 className="text-white dark:text-white">Trade Goal Setting</Text16>
          <Text14 className="font-satoshi-regular text-white/80 dark:text-white/80">
            {lastAnalysisTime 
              ? `Last analysis: ${lastAnalysisTime.date} at ${lastAnalysisTime.time}`
              : "Define your trading parameters"
            }
          </Text14>
        </div>
        <div className="flex md:flex-row flex-col items-center md:gap-2">
          <Button 
            variant="white" 
            className="py-2 md:py-2.5 md:px-[25px] px-2 md:text-base text-xs" 
            onClick={onRunAnalysis}
            disabled={isAnalyzing}
          >
            <Text14 className="text-[#111] dark:text-black">
              {isAnalyzing ? "Analyzing..." : "Run Analysis"}
            </Text14>
          </Button>
          <Text14 className="text-white/80 dark:text-white/80">
            {isLoading 
              ? "Loading..." 
              : error 
              ? "Error loading limits" 
              : currentLimit 
              ? currentLimit.limit === 9999
                ? "∞ Analysis"
                : `${currentLimit.remaining}/${currentLimit.limit} Analysis Left`
              : "- Analysis Left"}
          </Text14>
        </div>
      </div>
    </div>
  );
}
