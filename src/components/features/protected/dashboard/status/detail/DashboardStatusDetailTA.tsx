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

export default function DashboardStatusDetailTA() {
  return (
    <DashboardStatusDetailCardContainer className="py-3.5 px-3">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Trade Analysis"
          icon={<IconTA width={14} height={14} />}
        />
        <div className="flex items-center gap-2 self-stretch">
          <DashboardStatusDetailSubcardContainer className="gap-3.5">
            <Text14 className="font-satoshi-medium">Potential Win</Text14>
            <div>
              <Text20 className="text-green font-satoshi-medium">$58,246.75</Text20>
              <div className="flex items-center self-stretch gap-1">
                <IconTradeUp
                  width={14}
                  height={14}
                  color="var(--color-green)"
                />
                <Text10 className="text-green font-satoshi-medium">2.5x% R/R ratio</Text10>
              </div>
            </div>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="gap-3.5">
            <Text14 className="font-satoshi-medium">Max Risk</Text14>
            <div>
              <Text20 className="text-danger font-satoshi-medium">$62,000.00</Text20>
              <div className="flex items-center self-stretch gap-1">
                <IconTradeDown
                  width={14}
                  height={14}
                  color="var(--color-danger)"
                />
                <Text10 className="text-danger">1% account risk</Text10>
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
            <Text12 className="font-satoshi-medium">Wins</Text12>
            <Text16 className="text-green">142</Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="py-3 px-3">
            <Text12 className="font-satoshi-medium">Losses</Text12>
            <Text16 className="text-danger">40</Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="py-3 px-3">
            <Text12 className="font-satoshi-medium">Avg.RR</Text12>
            <Text16 className="text-blue">2.1</Text16>
          </DashboardStatusDetailSubcardContainer>
        </div>
        <DashboardStatusDetailSubcardContainer className="bg-white/3 min-h-[193px]">
          <div className="inline-flex flex-col items-start gap-1.5">
            <div className="flex items-end gap-1.5 self-stretch">
              <Text22>78%</Text22>
              <Text14 className="font-satoshi-medium">Win Rate</Text14>
            </div>
            <Text14 className="max-w-[216px] font-satoshi">
              Consistent performance with a high success ratio
            </Text14>
          </div>
          <div className="relative w-full h-full">
            <DashboardAPLChart />
          </div>
        </DashboardStatusDetailSubcardContainer>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Analysis Usage"
          icon={<IconAnalysisUsage width={14} height={14} />}
        />
        <DashboardStatusDetailSubcardContainer className="bg-white/3 gap-3">
          <div className="inline-flex items-end gap-1.5">
            <Text22>200</Text22>
            <Text12>In Total</Text12>
          </div>
          <div className="flex flex-col items-start gap-3.5 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex flex-col items-center">
                <Text16 className="bg-picton-blue text-transparent bg-clip-text">
                  156
                </Text16>
                <Text14>Used</Text14>
              </div>
              <div className="flex flex-col items-center">
                <Text16 className="bg-picton-blue text-transparent bg-clip-text">
                  44%
                </Text16>
                <Text14>Remaining</Text14>
              </div>
            </div>
            <Progress value={44} className="w-full h-3.5" />
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
            <IconTradeUp width={16} height={16} color="var(--color-green)" />
            <Text14 className="text-green">+24.8%</Text14>
          </div>
        </div>
        <div className="flex items-center gap-2.5 self-stretch">
          <DashboardStatusDetailSubcardContainer className="gap-1">
            <div className="flex flex-col items-start gap-3.5 self-stretch">
              <Text14 className="font-satoshi-medium">Total Profit</Text14>
              <Text20 className="text-green font-satoshi-medium">$28,750</Text20>
            </div>
            <Text10 className="font-satoshi">Based on 156 trades</Text10>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer className="gap-1">
            <div className="flex flex-col items-start gap-3.5 self-stretch">
              <Text14 className="font-satoshi-medium">Avg. Per Trade</Text14>
              <Text20 className="text-green font-satoshi-medium">$184.29</Text20>
            </div>
            <Text10 className="font-satoshi">Success Rate: 78%</Text10>
          </DashboardStatusDetailSubcardContainer>
        </div>
      </div>
    </DashboardStatusDetailCardContainer>
  );
}
