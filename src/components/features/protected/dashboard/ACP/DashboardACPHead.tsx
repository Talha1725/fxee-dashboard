import React from "react";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import { IconACP, IconCircledEnergy } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function DashboardACPHead() {
  return (
    <div className="flex items-start gap-2 self-stretch">
      <DashboardHeadBadge>
        <IconACP width={14} height={14} />
      </DashboardHeadBadge>
      <div className="flex flex-col sm:flex-row items-start gap-2 flex-[1_0_0]">
        <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
          <Text16 className="font-satoshi-medium">AI Control Panel</Text16>
          <Text14 className="text-white/80 font-satoshi">
            View and customize your AI Trading Companion powers
          </Text14>
        </div>
        <Button variant="white" className="py-2.5 px-[25px]">
          <Text14 className="text-[#111] font-satoshi-medium">Upgrade Power</Text14>
          <IconCircledEnergy width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}
