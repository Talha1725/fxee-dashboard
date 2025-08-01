import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingATIHead from "@/components/features/landing/landingATI/LandingATIHead";
import LandingATIContent from "@/components/features/landing/landingATI/LandingATIContent";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";

import LandingATIBG1 from "@/public/images/landing-ati-bg1.png";
import LandingATIBG2 from "@/public/images/landing-ati-bg2.png";

export default function LandingATI() {
  return (
    <div className="relative">
      <Image
        src={LandingATIBG1}
        alt="Landing ATI"
        className="absolute bottom-0 right-0 select-none w-[1400px] h-[300px] -z-5"
      />
      <Image
        src={LandingATIBG2}
        alt="Landing ATI"
        className="absolute top-0 left-0 select-none w-[600px] h-[950px]"
      />
      <LandingMax1440Container className="px-0 lg:px-10 py-25 gap-12.5 sm:gap-[70px]">
        <LandingATIHead />
        <LandingATIContent />
        <LandingButton
          color="black"
          icon={
            <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
          }
          text="See the AI in Action"
        />
      </LandingMax1440Container>
    </div>
  );
}
