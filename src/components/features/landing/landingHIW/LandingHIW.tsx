import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingHIWHead from "@/components/features/landing/landingHIW/LandingHIWHead";
import LandingHIWContent from "@/components/features/landing/landingHIW/LandingHIWContent";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";
import firmShade from "@/public/images/hiw-bg.png";
import Image from "next/image";
import { div } from "motion/react-client";

export default function LandingHIW() {
  return (
    <div className="relative">
      <div className="absolute bottom-[-22%] sm:-bottom-[30%] lg:-bottom-[65%] xl:bottom-[-70%] right-0 -z-5 select-none w-[750px] h-[800px] sm:w-[900px] sm:h-[1100px] lg:w-[1050px] lg:h-[2000px]">
        <Image
          src={firmShade}
          alt="FOIK Background"
          fill
          sizes="(max-width: 860px) 100vw, 860px"
          priority
          className="object-contain"
        />
      </div>
      <LandingMax1440Container className="py-25 lg:pb-36 gap-12.5 sm:gap-[70px]">
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
    </div>
  );
}
