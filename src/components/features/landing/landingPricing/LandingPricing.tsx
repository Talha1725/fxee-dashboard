import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingPricingHead from "@/components/features/landing/landingPricing/LandingPricingHead";
import LandingPricingSwitch from "@/components/features/landing/landingPricing/LandingPricingSwitch";
import LandingPricingPlans from "@/components/features/landing/landingPricing/LandingPricingPlans";

import LandingPricingImage from "@/public/images/landing-pricing.png";

export default function LandingPricing() {
  return (
    <div className="relative">
      <LandingMax1440Container className="pt-25 gap-12.5 sm:gap-[70px] z-1">
        <LandingPricingHead />
        <LandingPricingSwitch />
        <LandingPricingPlans />
      </LandingMax1440Container>
      <Image
        src={LandingPricingImage}
        alt="Landing Pricing"
        className="absolute top-[50px] left-0 -z-5 select-none w-[500px] h-[1200px]"
      />
    </div>
  );
}
