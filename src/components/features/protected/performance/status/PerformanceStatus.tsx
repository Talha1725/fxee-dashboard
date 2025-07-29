import React from "react";

import PerformanceStatusATT from "./PerformanceStatusATT";
import PerformanceStatusTPT from "./PerformanceStatusTPT";
import PerformanceStatusWRT from "./PerformanceStatusWRT";
import PerformanceStatusTTT from "./PerformanceStatusTTT";

export default function PerformanceStatus() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 self-stretch">
      <PerformanceStatusATT />
      <PerformanceStatusTPT />
      <PerformanceStatusWRT />
      <PerformanceStatusTTT />
    </div>
  );
}
