import React from "react";
import Image from "next/image";

import PerformanceStatusCardContainer from "./PerformanceStatusCardContainer";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import TTTChartImage from "@/public/images/ttt-chart.png";
import { IconPerformanceTTT } from "@/components/ui/icon";

export default function PerformanceStatusTTT() {
  return (
    <PerformanceStatusCardContainer>
      <div className="relative flex justify-between items-start gap-1.5 self-stretch">
        <Text14 className="font-satoshi">Total Trades Till Date </Text14>
        <IconPerformanceTTT
          value="48"
          className="absolute right-0 w-24 h-15 object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text20 className="font-satoshi-medium">48</Text20>
        <div className="flex justify-between items-center self-stretch">
          <Text12 className="dark:text-white/50 text-black/50 font-satoshi">
            Win Rate Increased
          </Text12>
          <Text12 className="dark:text-[#3EDC81] text-[#079744] font-satoshi">+66.7%</Text12>
        </div>
      </div>
    </PerformanceStatusCardContainer>
  );
}
