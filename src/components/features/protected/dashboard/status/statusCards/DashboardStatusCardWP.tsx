import React from "react";
import Image from "next/image";

import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";

import { Text12, Text14, Text20 } from "@/components/ui/typography";

import Donut84Image from "@/public/images/donut84.png";

export default function DashboardStatusCardWP() {
  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[57px] h-[57px]">
        <Image src={Donut84Image} alt="Donut" fill />
      </div>
      <Text14 className="z-1">Win Probability</Text14>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <div>
          <Text20>+5.50%</Text20>
          <Text12 className="text-white/60">84% out of 100%</Text12>
        </div>
        <DashboardStatusCardFooter title="Yesterday Probability" value={84} />
      </div>
    </DashboardStatusCardContainer>
  );
}
