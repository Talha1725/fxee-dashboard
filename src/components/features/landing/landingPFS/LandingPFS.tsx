import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingPFSHead from "@/components/features/landing/landingPFS/LandingPFSHead";
import LandingPFSContent from "@/components/features/landing/landingPFS/LandingPFSContent";
import LandingButton from "@/components/features/landing/LandingButton";
import LandingPFSPartner from "@/components/features/landing/landingPFS/LandingPFSPartner";
import { IconLandingBtn1 } from "@/components/ui/icon";

export default function LandingPFS() {
  return (
    <LandingMax1440Container className="pb-25 gap-12.5 sm:gap-[70px]">
      <LandingPFSHead />
      <div className="relative w-[112.5%] min-h-[520px] sm:hidden block z-50">
        <div className="w-full h-full absolute z-50 top-0 left-1/2 -translate-x-1/2">
          <LandingPFSContent />
        </div>
      </div>

      <LandingPFSContent className="sm:block hidden" />

      <LandingPFSPartner />
      <LandingButton
        color="black"
        icon={
          <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
        }
        text="Upgrade to Prop Firm Mode"
      />
    </LandingMax1440Container>
  );
}
