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
    <div className={`flex flex-col sm:flex-row justify-between items-center gap-2.5 self-stretch py-3.5 px-3 rounded-[10px] dark:bg-white/3 bg-black/4 dark:border dark:border-white/2`}>
      <div className="flex flex-col items-start gap-2.5 shrink-0 self-stretch flex-[1_0_0]">
        <div className="flex items-center gap-2 self-stretch">
          <DashboardHeadBadge className={`bg-gradient-to-b from-white/20 to-white/60 ${theme === "dark" && "bg-button-grey-gradient"}`}>
            <IconPowerService width={14} height={14} />
          </DashboardHeadBadge>
          <Text16 className="font-satoshi-medium dark:text-white text-black">AI Power Level</Text16>
        </div>
        <DashboardAPLSlider />
      </div>
      <div className="self-stretch flex-[1_0_0] min-h-[56px] w-full">
        <DashboardAPLChart />
      </div>
    </div>
  );
}
