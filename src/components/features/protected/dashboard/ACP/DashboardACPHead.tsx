"use client";

import React from "react";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import { IconACP, IconCircledEnergy } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function DashboardACPHead() {
  const { theme } = useTheme();
  const { isDemoAccountEnabled } = useAccountType();
  return (
    <div className="flex items-start gap-2 self-stretch">
      <DashboardHeadBadge>
        <IconACP width={14} height={14} />
      </DashboardHeadBadge>
      <div className="flex flex-col sm:flex-row items-start gap-2 flex-[1_0_0]">
        <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
          <Text16 className="font-satoshi-medium dark:text-white text-black">AI Control Panel</Text16>
          <Text14 className="dark:text-white/80 text-black/80 font-satoshi">
          View and customize your AI Trading Companion powers
          </Text14>
        </div>
        {!isDemoAccountEnabled && (
        <Button variant={theme === "dark" ? "white" : "black"} className="py-2.5 px-[25px] transition-all cursor-pointer">
          <Text14 className="text-white dark:text-black font-satoshi-medium">Upgrade Power</Text14>
          <IconCircledEnergy width={20} height={20} />
        </Button>
        )}
      </div>
    </div>
  );
}
