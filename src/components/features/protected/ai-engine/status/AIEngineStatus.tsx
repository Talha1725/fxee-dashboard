import React from "react";
import DashboardACP from "../../dashboard/ACP/DashboardACP";
import AIEngineStatusTGS from "./AIEngineStatusTGS";

export default function AIEngineStatus() {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      <DashboardACP />
      <AIEngineStatusTGS />
    </div>
  );
}
