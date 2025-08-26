"use client";

import DashboardACPHead from "@/components/features/protected/dashboard/ACP/DashboardACPHead";
import DashboardAPL from "@/components/features/protected/dashboard/ACP/DashboardAPL";
import DashboardActiveAddons from "./DashboardActiveAddons";
import DashboardACPDetail from "./DashboardACPDetail";
import DashboardPlanSwitcher from "./DashboardPlanSwitcher";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardACP() {
  const { theme } = useTheme();
  return (
    <div className={`w-full lg:flex-1 h-fit rounded-[16px] border border-black/15 dark:border-white/5 p-[20px] flex flex-col gap-4 ${theme === "dark" ? "bg-dark-gradient" : "bg-white"}`}>
      <DashboardACPHead />
      <DashboardPlanSwitcher />
      <DashboardAPL />
      <DashboardActiveAddons />
      <div className="flex flex-wrap gap-1 self-stretch">
        <DashboardACPDetail
          title="Processing Power"
          value="12.4 TFLOPS"
          description="Neutral Processing"
        />
        <DashboardACPDetail
          title="Response Time"
          value="124ms"
          description="Average Latency"
          isGreen={true}
        />
        <DashboardACPDetail
          title="Accuracy Rate"
          value="90.60%"
          description="Last 100 signals"
        />
      </div>
    </div>
  );
}
