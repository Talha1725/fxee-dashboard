import React from "react";
import Image from "next/image";

import PerformanceStatusCardContainer from "./PerformanceStatusCardContainer";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import TTTChartImage from "@/public/images/ttt-chart.png";

export default function PerformanceStatusTTT() {
  return (
    <PerformanceStatusCardContainer>
      <div className="relative flex justify-between items-start gap-1.5 self-stretch">
        <Text14>Total Trades Till Date </Text14>
        <Image
          src={TTTChartImage}
          alt="ATT Chart Image"
          className="absolute right-0 w-20 h-10 object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text20>48</Text20>
        <div className="flex justify-between items-center self-stretch">
          <Text12 className="text-white/60 font-[400]">
            Win Rate Increased
          </Text12>
          <Text12 className="text-green font-[400]">+66.7%</Text12>
        </div>
      </div>
    </PerformanceStatusCardContainer>
  );
}
