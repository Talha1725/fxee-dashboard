"use client";

import React, { useState } from "react";

import LandingPricingSwitchButton from "@/components/features/landing/landingPricing/LandingPricingSwitchButton";

export default function LandingPricingSwitch() {
  const [isActive, setIsActive] = useState("simulation");

  return (
    <div className="flex justify-center items-center self-stretch transition-all duration-700 ease-in-out">
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
  );
}
