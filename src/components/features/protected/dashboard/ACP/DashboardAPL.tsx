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
    <div className={`w-[380px] h-[82px] rounded-[10px] border border-white/5 gap-[10px] flex items-center pt-[14px] pr-[12px] pb-[14px] pl-[12px] dark:bg-white/3 bg-black/4 dark:border dark:border-white/2`}>
      <div className="w-[244px] h-[54px] gap-[10px] flex flex-col items-start">
        <div className="flex items-center gap-2">
          <DashboardHeadBadge className={`bg-gradient-to-b from-white/20 to-white/60 ${theme === "dark" && "bg-button-grey-gradient"}`}>
            <IconPowerService width={14} height={14} />
          </DashboardHeadBadge>
          <Text16 className="font-satoshi-medium dark:text-white text-black">AI Power Level</Text16>
        </div>
        <DashboardAPLSlider />
      </div>
      <div className="w-[118px] h-[54px] relative">
        <DashboardAPLChart />
      </div>
    </div>
  );
}
