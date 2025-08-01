import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingPFCHead from "@/components/features/landing/landingPFC/LandingPFCHead";
import LandingPFCContent from "@/components/features/landing/landingPFC/LandingPFCContent";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";

export default function LandingPFC() {
  return (
    <LandingMax1440Container className="gap-12.5 sm:gap-[70px]">
      <LandingPFCHead />
      <LandingPFCContent />
      <LandingButton
        color="black"
        icon={
          <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
        }
        text="Unlock Premium AI Dashboard"
      />
    </LandingMax1440Container>
  );
}
