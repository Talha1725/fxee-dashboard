"use client";
import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import PerformanceSetting from "./setting/PerformanceSetting";
import PerformanceAlert from "./alert/PerformanceAlert";
import PerformanceStatus from "./status/PerformanceStatus";
import PerformanceHistory from "./history/PerformanceHistory";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function Performance() {
  const { isVirtualAccount } = useAccountType();
  return (
    <ProtectedContentContainer className={`${isVirtualAccount ? "overflow-visible" : ""}`}>
      <PerformanceSetting />
      <PerformanceAlert />
      <PerformanceStatus />
      <PerformanceHistory />
    </ProtectedContentContainer>
  );
}
