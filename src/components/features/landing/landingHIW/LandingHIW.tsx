import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingHIWHead from "@/components/features/landing/landingHIW/LandingHIWHead";
import LandingHIWContent from "@/components/features/landing/landingHIW/LandingHIWContent";
import { LongEllipse } from "@/components/ui/icon";

export default function LandingHIW() {
  return (
    <div className="relative mt-0 md:mt-10">
      <LongEllipse className="absolute top-[-20%] md:top-[-30%] -right-[80%] sm:right-1/2 sm:translate-x-1/2 opacity-70 sm:opacity-100" />
      
      <LandingMax1440Container className="py-25 lg:pb-30 gap-12.5 sm:gap-[70px]">
        <LandingHIWHead />
        <LandingHIWContent />
      </LandingMax1440Container>
    </div>
  );
}
