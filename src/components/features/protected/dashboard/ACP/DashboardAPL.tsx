"use client";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import DashboardAPLSlider from "@/components/features/protected/dashboard/ACP/DashboardAPLSlider";
import DashboardAPLChart from "@/components/features/protected/dashboard/ACP/DashboardAPLChart";
import { IconPowerService } from "@/components/ui/icon";
import { Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardAPL() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center gap-2.5 self-stretch rounded-[10px] border border-white/2 ${theme === "dark" ? "bg-dark-gradient" : "bg-black/5"} `}>
      <div className="flex flex-col items-start gap-2.5 shrink-0 self-stretch py-3.5 px-3 flex-[1_0_0]">
        <div className="flex items-center gap-2 self-stretch">
          <DashboardHeadBadge>
            <IconPowerService width={14} height={14} />
          </DashboardHeadBadge>
          <Text16 className="font-satoshi-medium">AI Power Level</Text16>
        </div>
        <DashboardAPLSlider />
      </div>
      <div className="self-stretch flex-[1_0_0] h-full sm:w-[50%] xl:w-full">
        <DashboardAPLChart height={83} />
      </div>
    </div>
  );
}