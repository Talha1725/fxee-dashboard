import React from "react";

import DashboardStatusCards from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCards";
import DashboardStatusDetail from "@/components/features/protected/dashboard/status/detail/DashboardStatusDetail";

export default function DashboardStatus() {
  return (
    // <div className="flex flex-col items-start gap-2.5 p-0 sm:p-5 self-stretch rounded-[16px] border-none sm:border border-white/5 bg-transparent sm:bg-popover-gradient sm:backdrop-blur-[7px]">
      <div className="flex flex-col items-start gap-10 flex-[1_0_0] self-stretch">
        <DashboardStatusCards />
        <DashboardStatusDetail />
      </div>
    // </div>
  );
}
