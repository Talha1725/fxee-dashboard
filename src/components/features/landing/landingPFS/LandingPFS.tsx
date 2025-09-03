import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingPFSHead from "@/components/features/landing/landingPFS/LandingPFSHead";
import LandingPFSContent from "@/components/features/landing/landingPFS/LandingPFSContent";
import LandingButton from "@/components/features/landing/LandingButton";
import LandingPFSPartner from "@/components/features/landing/landingPFS/LandingPFSPartner";
import { IconLandingBtn1, LongEllipse } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function LandingPFS() {
  return (
    <LandingMax1440Container className="pb-25 gap-12.5 sm:gap-[70px] relative">
      <LongEllipse className="absolute top-[-30%] md:top-0 -right-[60%] sm:right-[60%] sm:translate-x-1/2 opacity-70 sm:opacity-60" />

      <LandingPFSHead />
      <div className="relative w-[112.5%] min-h-[520px] sm:hidden block z-50">
        <div className="w-full h-full absolute z-50 top-0 left-1/2 -translate-x-1/2">
          <LandingPFSContent />
        </div>
      </div>

      <LandingPFSContent className="sm:block hidden" />

      <LandingPFSPartner heading={false} className="!mt-0 !-mb-5 md:!mb-0" />
      <Button variant="white" className="font-satoshi-medium">
        Upgrade to Prop Firm Mode
      </Button>
    </LandingMax1440Container>
  );
}
