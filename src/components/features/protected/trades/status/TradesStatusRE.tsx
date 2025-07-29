import React from "react";
import Image from "next/image";

import PerformanceStatusCardContainer from "../../performance/status/PerformanceStatusCardContainer";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import WRTChartImage from "@/public/images/wrt-chart.png";

export default function TradesStatusRE() {
  return (
    <PerformanceStatusCardContainer>
      <div className="relative flex justify-between items-start gap-1.5 self-stretch">
        <Text14>Risk Exposure</Text14>
        <Image
          src={WRTChartImage}
          alt="ATT Chart Image"
          className="absolute right-0 w-10 h-10 object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text20>+ 66.7%</Text20>
        <div className="flex justify-between items-center self-stretch">
          <Text12 className="text-white/60 font-[400]">
            Capital Increased
          </Text12>
          <Text12 className="text-green font-[400]">+66.7%</Text12>
        </div>
      </div>
    </PerformanceStatusCardContainer>
  );
}
