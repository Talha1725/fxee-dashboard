import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingATIHead from "@/components/features/landing/landingATI/LandingATIHead";
import LandingATIContent from "@/components/features/landing/landingATI/LandingATIContent";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";

import LandingATIBG1 from "@/public/images/landing-ati-bg1.png";
import LandingATIBG2 from "@/public/images/landing-ati-bg2.png";
import { Button } from "@/components/ui/button";

export default function LandingATI() {
  return (
    <div className="relative">
      <LandingMax1440Container className="lg:px-32 gap-12.5 sm:gap-[70px]">
        <LandingATIHead />
        <LandingATIContent />
        <Button
          variant="white"
          className="relative font-satoshi-medium"
        >Explore the Platform</Button>
      </LandingMax1440Container>
    </div>
  );
}
