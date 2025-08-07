import React from "react";
import Image from "next/image";

import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import { Text12, Text14, Text20 } from "@/components/ui/typography";

import Donut45Image from "@/public/images/donut45.png";

export default function DashboardStatusCardMV() {
  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[57px] h-[57px]">
        <Image src={Donut45Image} alt="Donut" fill />
      </div>
      <Text14 className="z-1 font-satoshi-medium">Market Volatility</Text14>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <div>
          <Text20>-1.23%</Text20>
          <Text12 className="text-white/60 font-satoshi-medium">45% out of 100%</Text12>
        </div>
        <DashboardStatusCardFooter
          title="Yesterday Market Volatility"
          value={-12}
        />
      </div>
    </DashboardStatusCardContainer>
  );
}
