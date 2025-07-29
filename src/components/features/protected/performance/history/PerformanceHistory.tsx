import React from "react";

import { Tabs } from "@/components/ui/tabs";
import PerformanceHistoryFilter from "./PerformanceHistoryFilter";
import PerformanceHistoryContent from "./PerformanceHistoryContent";

export default function PerformanceHistory() {
  return (
    <Tabs
      className="flex flex-col items-center gap-5 self-stretch p-5 rounded-[16px] border border-white/5 bg-card-dashboard-main-gradient"
      defaultValue="all"
    >
      <PerformanceHistoryFilter />
      <PerformanceHistoryContent />
    </Tabs>
  );
}
