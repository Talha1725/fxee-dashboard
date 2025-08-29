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
      <Image
        src={HIWBg}
        alt="HIW Background"
        className="absolute bottom-[700px] right-0 w-[1000px] h-[800px] object-cover hidden md:block"
      />
      <div className="absolute bottom-[1100px] -right-20 -z-5 select-none w-[750px] h-[800px] md:hidden block">
        <Image
          src={HIWBg}
          alt="FOIK Background"
          fill
          sizes="(max-width: 860px) 100vw, 860px"
          priority
          className="object-contain"
        />
      </div>
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
        <SupportHIWHead />
        <SupportHIWSteps />
        <LandingButton
          color="black"
          icon={
            <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
          }
          text="Get Started Now"
        />
      </LandingMax1440Container>
    </div>
  );
}
