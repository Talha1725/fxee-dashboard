"use client";
import React from "react";

import DashboardStatusDetailCardContainer from "./DashboardStatusDetailCardContainer";
import DashboardStatusDetailCardHead from "./DashboardStatusDetailCardHead";
import DashboardStatusDetailSubcardContainer from "./DashboardStatusDetailSubcardContainer";
import DashboardAPLChart from "@/components/features/protected/dashboard/ACP/DashboardAPLChart";
import {
  IconAnalysisUsage,
  IconPerformanceMetrics,
  IconTA,
  IconTradeDown,
  IconTradeUp,
  IconWinRate,
} from "@/components/ui/icon";
import {
  Text10,
  Text12,
  Text14,
  Text16,
  Text20,
  Text22,
} from "@/components/ui/typography";

import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";

export default function DashboardStatusDetailTA() {
  const { theme } = useTheme();
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  const proposedTrade = lastTradeData?.data;

  return (
    <DashboardStatusDetailCardContainer className="py-3.5 px-3 bg-[#ECF3F833] dark:bg-white/3 h-80 lg:h-[58rem] overflow-y-auto">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Trade Analysis"
          icon={<IconTA width={14} height={14} />}
        />
        <div className="flex items-center gap-2 self-stretch">
          <DashboardStatusDetailSubcardContainer className="gap-3.5">
            <Text14 className="font-satoshi-medium dark:text-white text-black">Potential Win</Text14>
            <div>
              <Text20 className="dark:text-green text-[#079744] font-satoshi-medium">
                ${proposedTrade ? parseFloat(proposedTrade.potentialWin).toFixed(4) : "58,246.7500"}
              </Text20>
              <div className="flex items-center self-stretch gap-1">
                <IconTradeUp
                  width={14}
                  height={14}
                  color={theme === "dark" ? "var(--color-green)" : "#079744"}
                />
                <Text10 className="dark:text-green text-[#079744] font-satoshi-medium">
                  {proposedTrade?.averageRr || "2.5"}x% R/R ratio
                </Text10>
              </div>
            </div>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="gap-3.5">
            <Text14 className="font-satoshi-medium dark:text-white text-black">Max Risk</Text14>
            <div>
              <Text20 className="dark:text-danger text-[#FF0000] font-satoshi-medium">
                ${proposedTrade ? parseFloat(proposedTrade.maxRiskAmount).toFixed(2) : "62,000.00"}
              </Text20>
              <div className="flex items-center self-stretch gap-1">
                <IconTradeDown
                  width={14}
                  height={14}
                  color={theme === "dark" ? "var(--color-danger)" : "#EA4335"}
                />
                <Text10 className="dark:text-danger text-[#FF0000]">
                  {proposedTrade?.accountRiskPercentage || "1"}% account risk
                </Text10>
              </div>
            </div>
          </DashboardStatusDetailSubcardContainer>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Win Rate Analysis"
          icon={<IconWinRate width={14} height={14} />}
        />
        <div className="flex items-center gap-1 self-stretch">
          <DashboardStatusDetailSubcardContainer className="py-3 px-3">
            <Text12 className="font-satoshi-medium dark:text-white text-black">Wins</Text12>
            <Text16 className="dark:text-green text-[#079744] font-satoshi-medium">
              {proposedTrade?.totalWins || "142"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="py-3 px-3">
            <Text12 className="font-satoshi-medium dark:text-white text-black">Losses</Text12>
            <Text16 className="dark:text-danger text-[#FF0000] font-satoshi-medium">
              {proposedTrade?.totalLosses || "40"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="py-3 px-3">
            <Text12 className="font-satoshi-medium dark:text-white text-black">Avg.RR</Text12>
            <Text16 className="dark:text-blue text-[#007AFF] font-satoshi-medium">
              {proposedTrade?.averageRr || "2.1"}
            </Text16>
          </DashboardStatusDetailSubcardContainer>
        </div>
        <DashboardStatusDetailSubcardContainer className="bg-white dark:bg-white/3 min-h-[193px] px-0 overflow-hidden">
          <div className="inline-flex flex-col items-start gap-1.5 px-2">

            <div className="flex items-end gap-1.5 self-stretch">
              <Text22 className="dark:text-white text-black font-satoshi-medium">
                {proposedTrade?.winRatePercentage || "78"}%
              </Text22>
              <Text14 className="font-satoshi-medium dark:text-white text-black font-satoshi-medium">Win Rate</Text14>
            </div>
            <Text14 className="max-w-[216px] font-satoshi dark:text-white text-black font-satoshi-medium">
              {proposedTrade ? `${parseFloat(proposedTrade.winRatePercentage) > 70 ? 'Consistent performance with a high success ratio' : 'Performance tracking with moderate success ratio'}` : 'Consistent performance with a high success ratio'}
            </Text14>
          </div>
          <div className="relative w-full h-full">
            <DashboardAPLChart height={88} />
          </div>
        </DashboardStatusDetailSubcardContainer>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Analysis Usage"
          icon={<IconAnalysisUsage width={14} height={14} />}
        />
        <DashboardStatusDetailSubcardContainer className="gap-3">
          <div className="inline-flex items-end gap-1.5">
            <Text22 className="dark:text-white text-black font-satoshi-medium">
              {proposedTrade?.maxAnalysisLimit || "200"}
            </Text22>
            <Text12 className="dark:text-white text-black font-satoshi-medium">In Total</Text12>
          </div>
          <div className="flex flex-col items-start gap-3.5 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex flex-col items-center">
                <Text16 className="dark:bg-picton-blue bg-picton-blue text-transparent bg-clip-text font-satoshi-medium">
                  {proposedTrade?.analysesUsed || "156"}
                </Text16>
                <Text14 className="dark:text-white text-black">Used</Text14>
              </div>
              <div className="flex flex-col items-center">
                <Text16 className="bg-picton-blue text-transparent bg-clip-text font-satoshi-medium">
                  {proposedTrade?.analysesRemainingPercentage || "44"}%
                </Text16>
                <Text14 className="dark:text-white text-black">Remaining</Text14>
              </div>
            </div>
            <Progress value={proposedTrade ? parseFloat(proposedTrade.analysesRemainingPercentage) : 44} className="w-full h-3.5" />
          </div>
        </DashboardStatusDetailSubcardContainer>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <div className="flex justify-between items-center self-stretch">
          <DashboardStatusDetailCardHead
            title="Performance Metrics"
            icon={<IconPerformanceMetrics width={14} height={14} />}
          />
          <div className="flex justify-end items-center gap-1">
            <IconTradeUp width={16} height={16} color={theme === "dark" ? "var(--color-green)" : "#079744"} />
            <Text14 className="dark:text-green text-[#079744]">
              +{proposedTrade ? (parseFloat(proposedTrade.winRatePercentage) - 50).toFixed(4) : "24.8000"}%
            </Text14>
          </div>
        </div>
        <div className="flex items-center gap-2.5 self-stretch">
          <DashboardStatusDetailSubcardContainer className="gap-1">
            <div className="flex flex-col items-start gap-3.5 self-stretch">
              <Text14 className="font-satoshi-medium dark:text-white text-black">Total Profit</Text14>
              <Text20 className="dark:text-green text-[#079744] font-satoshi-medium">
                ${proposedTrade ? parseFloat(proposedTrade.totalProfit).toFixed(0) : "28,750"}
              </Text20>
            </div>
            <Text10 className="font-satoshi dark:text-white text-black">
              Based on {proposedTrade?.analysesUsed || "156"} trades
            </Text10>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="gap-1">
            <div className="flex flex-col items-start gap-3.5 self-stretch">
              <Text14 className="font-satoshi-medium dark:text-white text-black">Avg. Per Trade</Text14>
              <Text20 className="dark:text-green text-[#079744] font-satoshi-medium">
                ${proposedTrade ? parseFloat(proposedTrade.averagePerTrade).toFixed(2) : "184.29"}
              </Text20>
            </div>
            <Text10 className="font-satoshi dark:text-white text-black">
              Success Rate: {proposedTrade?.successRate || "78"}%
            </Text10>
          </DashboardStatusDetailSubcardContainer>
        </div>
      </div>
    </DashboardStatusDetailCardContainer>
  );
}
