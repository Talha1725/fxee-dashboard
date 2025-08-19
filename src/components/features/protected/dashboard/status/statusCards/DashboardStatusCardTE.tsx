import React from "react";
import Image from "next/image";

import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import { Text14, Text20 } from "@/components/ui/typography";
import { Progress } from "@/components/ui/progress";

import CandleImage from "@/public/images/candle.png";

export default function DashboardStatusCardTE() {
  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[80px] h-[45px]">
        <Image src={CandleImage} alt="Candle" fill />
      </div>
      <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">Trading Equity</Text14>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Text20 className="dark:text-white text-black font-satoshi-medium">$100,000.00</Text20>
        <Progress value={50} className="w-full h-[10px]" />
        <DashboardStatusCardFooter title="Yesterday’s Equity" value={100} />
      </div>
    </DashboardStatusCardContainer>
  );
}
