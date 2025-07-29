import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import PerformanceSetting from "./setting/PerformanceSetting";
import PerformanceAlert from "./alert/PerformanceAlert";
import PerformanceStatus from "./status/PerformanceStatus";
import PerformanceHistory from "./history/PerformanceHistory";

export default function Performance() {
  return (
    <ProtectedContentContainer>
      <PerformanceSetting />
      <PerformanceAlert />
      <PerformanceStatus />
      <PerformanceHistory />
    </ProtectedContentContainer>
  );
}
