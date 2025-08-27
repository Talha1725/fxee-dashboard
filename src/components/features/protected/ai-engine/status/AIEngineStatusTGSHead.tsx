import React from "react";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import { IconACP } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useGetUsageLimitsQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";

interface AIEngineStatusTGSHeadProps {
  onRunAnalysis?: () => void;
  isAnalyzing?: boolean;
  activeTab?: string;
}

export default function AIEngineStatusTGSHead({ onRunAnalysis, isAnalyzing, activeTab = "best_trade" }: AIEngineStatusTGSHeadProps) {
  // Fetch usage limits
  const { data: usageLimitsResponse, error, isLoading } = useGetUsageLimitsQuery();
  
  // Get the appropriate limit based on active tab
  const currentLimit = activeTab === "custom_goal" 
    ? usageLimitsResponse?.data?.usageLimits?.custom_analysis
    : usageLimitsResponse?.data?.usageLimits?.proposed_trade;
  return (
    <div className="flex items-start gap-2 self-stretch">
      <DashboardHeadBadge>
        <IconACP width={14} height={14} />
      </DashboardHeadBadge>
      <div className="flex flex-col sm:flex-row items-start gap-2 flex-[1_0_0]">
        <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
          <Text16 className="text-white dark:text-white">Trade Goal Setting</Text16>
          <Text14 className="font-satoshi-regular text-white/80 dark:text-white/80">
            Define your trading parameters
          </Text14>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="white" 
            className="py-2.5 px-[25px]" 
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
              ? `${currentLimit.remaining}/${currentLimit.limit} Analysis Left` 
              : "- Analysis Left"}
          </Text14>
        </div>
      </div>
    </div>
  );
}
