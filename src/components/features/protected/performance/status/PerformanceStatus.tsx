"use client";
import React from "react";

import PerformanceStatusATT from "./PerformanceStatusATT";
import PerformanceStatusTPT from "./PerformanceStatusTPT";
import PerformanceStatusWRT from "./PerformanceStatusWRT";
import PerformanceStatusTTT from "./PerformanceStatusTTT";
import BlurOverlay from "@/components/common/BlurOverlay";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function PerformanceStatus() {
  const { isVirtualAccount } = useAccountType();
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 self-stretch relative overflow-hidden ${isVirtualAccount ? "border-none pointer-events-none shadow-xl rounded-xl" : ""}`}>
      {isVirtualAccount && (
       <BlurOverlay className="translate-y-[0] rounded-[10px]" /> 
      )}
      <PerformanceStatusATT />
      <PerformanceStatusTPT />
      <PerformanceStatusWRT />
      <PerformanceStatusTTT />
    </div>
  );
}
