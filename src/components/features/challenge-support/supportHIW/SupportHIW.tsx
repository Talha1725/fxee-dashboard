import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import SupportHIWHead from "@/components/features/challenge-support/supportHIW/SupportHIWHead";
import SupportHIWSteps from "@/components/features/challenge-support/supportHIW/SupportHIWSteps";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";

import HIWBg from "@/public/images/hiw-bg.png";

export default function SupportHIW() {
  return (
    <div className="relative">
      <LandingMax1440Container className="py-0 md:py-10 gap-12.5 sm:gap-[70px]">
        <SupportHIWHead />
        <SupportHIWSteps />
      </LandingMax1440Container>
    </div>
  );
}
