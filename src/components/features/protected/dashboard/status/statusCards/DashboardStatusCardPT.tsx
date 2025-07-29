import React from "react";
import Image from "next/image";

import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import { Text12, Text14, Text16 } from "@/components/ui/typography";

import AreaImage from "@/public/images/area-chart.png";

export default function DashboardStatusCardPT() {
  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[109px] h-[37px]">
        <Image src={AreaImage} alt="Area" fill />
      </div>
      <Text14 className="z-1">Proposed Trade</Text14>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <div>
          <Text16>$58,246.75 → $62,000.00</Text16>
          <Text12 className="text-white/60">
            Breakout from Bull Flag Pattern
          </Text12>
        </div>
        <DashboardStatusCardFooter title="Yesterday’s Trade" value={3.45} />
      </div>
    </DashboardStatusCardContainer>
  );
}
