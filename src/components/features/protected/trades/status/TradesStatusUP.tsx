import React from "react";
import Image from "next/image";

import PerformanceStatusCardContainer from "../../performance/status/PerformanceStatusCardContainer";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import TPTChartImage from "@/public/images/tpt-chart.png";

export default function TradesStatusUP() {
  return (
    <PerformanceStatusCardContainer>
      <div className="relative flex justify-between items-start gap-1.5 self-stretch">
        <Text14>Unrealized P&L</Text14>
        <Image
          src={TPTChartImage}
          alt="ATT Chart Image"
          className="absolute right-0 w-32 h-10 object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Text20 className="!font-semibold">
          99,997.49<sup className="font-[400] text-[11px]"> USD</sup>
        </Text20>
        <div className="flex justify-between items-center self-stretch">
          <Text12 className="dark:!text-white/60 !text-black/60 font-[400]">P&L Increased</Text12>
          <Text12 className="!text-[#3EDC81] font-[400]">+3.24%</Text12>
        </div>
      </div>
    </PerformanceStatusCardContainer>
  );
}
