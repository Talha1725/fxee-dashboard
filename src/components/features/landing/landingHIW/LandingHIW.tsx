import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingHIWHead from "@/components/features/landing/landingHIW/LandingHIWHead";
import LandingHIWContent from "@/components/features/landing/landingHIW/LandingHIWContent";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";

export default function LandingHIW() {
  return (
    <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
      <LandingHIWHead />
      <LandingHIWContent />
      <LandingButton
        color="black"
        icon={
          <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
        }
        text="Get Started Now"
      />
    </LandingMax1440Container>
  );
}
