"use client";

import React, { useState } from "react";

import LandingPricingSwitchButton from "@/components/features/landing/landingPricing/LandingPricingSwitchButton";

export default function LandingPricingSwitch() {
  const [isActive, setIsActive] = useState("simulation");

  return (
    <div className="flex justify-center items-center self-stretch my-10">
      <div className="inline-flex gap-3 rounded-xl">
        <LandingPricingSwitchButton
          title="Simulation Account"
          isActive={isActive === "simulation"}
          onClick={() => setIsActive("simulation")}
        />
        <LandingPricingSwitchButton
          title="Propfirm Mode"
          isActive={isActive === "propfirm"}
          onClick={() => setIsActive("propfirm")}
        />
      </div>
    </div>
  );
}
