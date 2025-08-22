import React from "react";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import { IconACP } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function AIEngineStatusTGSHead() {
  return (
    <div className="flex items-start gap-2 self-stretch">
      <DashboardHeadBadge>
        <IconACP width={14} height={14} />
      </DashboardHeadBadge>
      <div className="flex flex-col sm:flex-row items-start gap-2 flex-[1_0_0]">
        <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
          <Text16 className="text-white dark:text-white">Trade Goal Setting</Text16>
          <Text14 className="font-satoshi-regular text-white/80 dark:text-white/80">
            Define your trading parameters
          </Text14>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="white" className="py-2.5 px-[25px]">
            <Text14 className="text-[#111] dark:text-black">Run Analysis</Text14>
          </Button>
          <Text14 className="text-white/80 dark:text-white/80">1/20 Analysis Left</Text14>
        </div>
      </div>
    </div>
  );
}
