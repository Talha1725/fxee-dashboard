"use client";

import { useState, useEffect, useCallback } from "react";
import DashboardACPHead from "@/components/features/protected/dashboard/ACP/DashboardACPHead";
import DashboardAPL from "@/components/features/protected/dashboard/ACP/DashboardAPL";
import DashboardActiveAddons from "./DashboardActiveAddons";
import DashboardACPDetail from "./DashboardACPDetail";
// import DashboardPlanSwitcher from "./DashboardPlanSwitcher";
import { useLocalization } from "@/components/localization-provider";

  const { t } = useLocalization();
  const { enginePower, setEnginePower, isLoading, error } = useAddOns();
  const [aiPowerLevel, setAiPowerLevel] = useState<number>(0);

  // Update local state when engine power from API changes
  useEffect(() => {
    if (error) {
      // On API error, set everything to zero
      setAiPowerLevel(0);
    } else if (enginePower !== aiPowerLevel) {
      // Only update if the value is different to prevent loops
      setAiPowerLevel(enginePower);
    }
  }, [enginePower, error, aiPowerLevel]);

  // Handle power level changes with useCallback to prevent infinite loops
  const handlePowerLevelChange = useCallback((newPowerLevel: number) => {
    if (newPowerLevel !== aiPowerLevel) {
      setAiPowerLevel(newPowerLevel);
      setEnginePower(newPowerLevel);
    }
  }, [setEnginePower, aiPowerLevel]);

  // Calculate dynamic values based on AI Power Level
  // On API error, show zeros for all metrics
  const processingPower = error ? "0.0" : (5 + (aiPowerLevel / 100) * 15).toFixed(1);
  
  // Response Time: Show 0ms on error, otherwise inverse relationship (200ms at 0%, 50ms at 100%)
  const responseTime = error ? 0 : Math.round(200 - (aiPowerLevel / 100) * 150);
  
  // Accuracy Rate: Show 0% on error, otherwise logarithmic curve from 70% to 99%
  const accuracyRate = error ? "0.00" : (70 + (Math.log(aiPowerLevel + 1) / Math.log(101)) * 29).toFixed(2);

  return (
    <div className={`w-full lg:flex-1 h-fit rounded-[16px] border border-black/15 dark:border-white/5 p-[20px] flex flex-col gap-4 ${theme === "dark" ? "bg-dark-gradient" : "bg-white"} ${isLoading ? "opacity-75" : ""}`}>
      <DashboardACPHead />
      {/* <DashboardPlanSwitcher /> */}
      <DashboardAPL value={aiPowerLevel} onPowerLevelChange={handlePowerLevelChange} />
      <DashboardActiveAddons />
      <div className="flex flex-wrap gap-1 self-stretch">
        <DashboardACPDetail
          title="Processing Power"
          value={`${processingPower} TFLOPS`}
          description={error ? "API Error" : "Neural Processing"}
        />
        <DashboardACPDetail
          title="Response Time"
          value={`${responseTime}ms`}
          description={error ? "API Error" : t("average_latency")}
          isGreen={!error}
        />
        <DashboardACPDetail
          title="Accuracy Rate"
          value={`${accuracyRate}%`}
          description={error ? "API Error" : "Last 100 signals"}
        />
      </div>
      {error && (
        <div className="text-center p-2">
          <p className="text-sm text-red-500 dark:text-red-400">
            Unable to connect to AI services. Displaying default values.
          </p>
        </div>
      )}
    </div>
  );
}
