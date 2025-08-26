"use client";

import { useState } from "react";
import DashboardACPHead from "@/components/features/protected/dashboard/ACP/DashboardACPHead";
import DashboardAPL from "@/components/features/protected/dashboard/ACP/DashboardAPL";
import DashboardActiveAddons from "./DashboardActiveAddons";
import DashboardACPDetail from "./DashboardACPDetail";
// import DashboardPlanSwitcher from "./DashboardPlanSwitcher";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardACP() {
  const { theme } = useTheme();
  const [aiPowerLevel, setAiPowerLevel] = useState<number>(33);

  // Calculate dynamic values based on AI Power Level
  // Processing Power: Linear scaling from 5-20 TFLOPS (5 at 0%, 20 at 100%)
  const processingPower = (5 + (aiPowerLevel / 100) * 15).toFixed(1);
  
  // Response Time: Inverse relationship - lower is better (200ms at 0%, 50ms at 100%)
  const responseTime = Math.round(200 - (aiPowerLevel / 100) * 150);
  
  // Accuracy Rate: Logarithmic curve from 70% to 99% (more realistic)
  // Using a logarithmic formula to have diminishing returns at higher power levels
  const accuracyRate = (70 + (Math.log(aiPowerLevel + 1) / Math.log(101)) * 29).toFixed(2);

  return (
    <div className={`w-full lg:flex-1 h-fit rounded-[16px] border border-black/15 dark:border-white/5 p-[20px] flex flex-col gap-4 ${theme === "dark" ? "bg-dark-gradient" : "bg-white"}`}>
      <DashboardACPHead />
      {/* <DashboardPlanSwitcher /> */}
      <DashboardAPL onPowerLevelChange={setAiPowerLevel} />
      <DashboardActiveAddons />
      <div className="flex flex-wrap gap-1 self-stretch">
        <DashboardACPDetail
          title="Processing Power"
          value={`${processingPower} TFLOPS`}
          description="Neural Processing"
        />
        <DashboardACPDetail
          title="Response Time"
          value={`${responseTime}ms`}
          description="Average Latency"
          isGreen={true}
        />
        <DashboardACPDetail
          title="Accuracy Rate"
          value={`${accuracyRate}%`}
          description="Last 100 signals"
        />
      </div>
    </div>
  );
}
