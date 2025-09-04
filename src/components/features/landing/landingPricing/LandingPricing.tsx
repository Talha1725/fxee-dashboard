import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingPricingHead from "@/components/features/landing/landingPricing/LandingPricingHead";
import LandingPricingSwitch from "@/components/features/landing/landingPricing/LandingPricingSwitch";
import LandingPricingPlans from "@/components/features/landing/landingPricing/LandingPricingPlans";

import { EllipsLight } from "@/components/ui/icon";

export default function LandingPricing() {
  return (
    <div id="pricing" className="relative">
      <LandingMax1440Container className="z-1">
        <LandingPricingHead />
        {/* <LandingPricingSwitch /> */}
        <LandingPricingPlans />
      </LandingMax1440Container>
      <EllipsLight
      opacity="0.1"
        className="absolute sm:top-[250px] top-[450px] left-1/2 -translate-x-1/2 -rotate-[147deg] sm:opacity-30"
      />
    </div>
  );
}
