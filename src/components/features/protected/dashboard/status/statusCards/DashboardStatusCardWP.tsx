import React from "react";
import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import { Text12, Text14, Text20 } from "@/components/ui/typography";
import DonutChart from "@/public/images/donut-chart";

export default function DashboardStatusCardWP({proposedTrade}: {proposedTrade: any}) {
  const winProbability = proposedTrade?.winProbability ? parseFloat(proposedTrade.winProbability) : 0;
  const successRate = proposedTrade?.successRate ? parseFloat(proposedTrade.successRate) : 0;
  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[57px] h-[57px]">
        <DonutChart value={winProbability} />
      </div>
      <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">Win Probability</Text14>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <div>
          <Text20 className="dark:text-white text-black font-satoshi-medium">{winProbability > 0 ? '+' : ''}{winProbability.toFixed(2)}%</Text20>
          <Text12 className="dark:text-white/60 text-black/60 font-satoshi-medium">{winProbability}% out of 100%</Text12>
        </div>
        <DashboardStatusCardFooter title="Success Rate" value={successRate} />
      </div>
    </DashboardStatusCardContainer>
  );
}
