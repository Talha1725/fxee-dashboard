import React from "react";
import Image from "next/image";

import PerformanceStatusCardContainer from "../../performance/status/PerformanceStatusCardContainer";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import ATTChartImage from "@/public/images/att-chart.png";

export default function TradesStatusOT() {
  return (
    <PerformanceStatusCardContainer>
      <div className="relative flex justify-between items-start gap-1.5 self-stretch">
        <Text14>Open Trades</Text14>
        <Image
          src={ATTChartImage}
          alt="ATT Chart Image"
          className="absolute right-0 w-20 h-10 object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text20 className="!font-semibold">6.00</Text20>
        <div className="flex justify-between items-center self-stretch">
          <Text12 className="dark:!text-white/60 !text-black/60 font-[400]">
            Open Trades Decreased
          </Text12>
          <Text12 className="!text-[#EE5050] font-[400]">-12.44%</Text12>
        </div>
      </div>
    </PerformanceStatusCardContainer>
  );
}
