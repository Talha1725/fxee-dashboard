import React from "react";

import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import DonutChart from "@/public/images/donut-chart";

export default function DashboardStatusCardMV() {
  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[57px] h-[57px]">
        <DonutChart value={45} />
      </div>
      <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">Market Volatility</Text14>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <div>
          <Text20 className="dark:text-white text-black font-satoshi-medium">-1.23%</Text20>
          <Text12 className="dark:text-white/60 text-black/60 font-satoshi-medium">45% out of 100%</Text12>
        </div>
        <DashboardStatusCardFooter
          title="Yesterday Market Volatility"
          value={-12}
        />
      </div>
    </DashboardStatusCardContainer>
  );
}
