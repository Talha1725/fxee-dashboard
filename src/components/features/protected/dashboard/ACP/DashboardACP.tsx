"use client";

import DashboardACPHead from "@/components/features/protected/dashboard/ACP/DashboardACPHead";
import DashboardAPL from "@/components/features/protected/dashboard/ACP/DashboardAPL";
import DashboardActiveAddons from "./DashboardActiveAddons";
import DashboardACPDetail from "./DashboardACPDetail";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardACP() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col items-start gap-4 self-stretch p-5 rounded-[16px] border border-black/15 dark:border-white/5 ${theme === "dark" ? "bg-dark-gradient" : "bg-white"}`}>
      <DashboardACPHead />
      <DashboardAPL />
      <DashboardActiveAddons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 self-stretch">
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
