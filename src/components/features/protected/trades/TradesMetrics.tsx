import React from "react";

import TradesStatus from "./status/TradesStatus";
import TradesDetail from "./detail/TradesDetail";

export default function TradesMetrics() {
  return (
    <div className="flex flex-col items-start gap-10 self-stretch">
      <TradesStatus />
      <TradesDetail />
    </div>
  );
}
