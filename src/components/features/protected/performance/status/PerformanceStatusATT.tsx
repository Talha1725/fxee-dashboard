import React from "react";
import Image from "next/image";

import PerformanceStatusCardContainer from "./PerformanceStatusCardContainer";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import ATTChartImage from "@/public/images/att-chart.png";

export default function PerformanceStatusATT() {
  return (
    <PerformanceStatusCardContainer>
      <div className="relative flex justify-between items-start gap-1.5 self-stretch">
        <Text14>Auto Trades Today</Text14>
        <Image
          src={ATTChartImage}
          alt="ATT Chart Image"
          className="absolute right-0 w-20 h-10 object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text20>12</Text20>
        <div className="flex justify-between items-center self-stretch">
          <Text12 className="text-white/60 font-[400]">
            Total Equity Increased
          </Text12>
          <Text12 className="text-green font-[400]">12.44%</Text12>
        </div>
      </div>
    </PerformanceStatusCardContainer>
  );
}
