import React from "react";
import DashboardACP from "../../dashboard/ACP/DashboardACP";
import AIEngineStatusTGS from "./AIEngineStatusTGS";

export default function AIEngineStatus() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch w-full min-h-[657px]">
      <DashboardACP />
      <AIEngineStatusTGS />
    </div>
  );
}
