import React from "react";
import TradesMetrics from "./TradesMetrics";
import TradesTable from "./table/TradesTable";

export default function TradesAccount() {
  return (
    <div className="flex flex-col items-start gap-10 self-stretch">
      <TradesMetrics />
      <TradesTable />
    </div>
  );
}
