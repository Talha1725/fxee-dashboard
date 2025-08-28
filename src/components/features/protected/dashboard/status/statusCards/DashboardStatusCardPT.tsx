"use client";
import React from "react";
import Image from "next/image";

import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";

import AreaImage from "@/public/images/area-chart.png";

export default function DashboardStatusCardPT() {
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  const proposedTrade = lastTradeData?.data;

  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[109px] h-[37px]">
        <Image src={AreaImage} alt="Area" fill />
      </div>
      <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">Proposed Trade</Text14>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <div>
          <Text16 className="dark:text-white text-black font-satoshi-medium">
            ${proposedTrade ? parseFloat(proposedTrade.entryPrice).toFixed(2) : "0.00"} → ${proposedTrade ? parseFloat(proposedTrade.targetPrice).toFixed(2) : "0.00"}
          </Text16>
          <Text12 className="dark:text-white/60 text-black/60 font-satoshi-medium line-clamp-2 break-words">
            {proposedTrade?.aiAnalysis ? 
              (proposedTrade.aiAnalysis.length > 80 ? 
                proposedTrade.aiAnalysis.substring(0, 80) + "..." : 
                proposedTrade.aiAnalysis
              ) : "Awaiting analysis..."}
          </Text12>
        </div>
        <DashboardStatusCardFooter title="Yesterday’s Trade" value={proposedTrade ? parseFloat(proposedTrade.averagePerTrade) / 100 : 3.45} />
      </div>
    </DashboardStatusCardContainer>
  );
}
