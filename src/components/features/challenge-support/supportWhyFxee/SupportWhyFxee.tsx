import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingButton from "@/components/features/landing/LandingButton";
import LandingDescription from "@/components/features/landing/LandingDescription";
import SupportWhyFxeeCards from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxeeCards";
import SupportWhyFxeeHead from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxeeHead";
import { IconLandingBtn1 } from "@/components/ui/icon";

import LandingATIBg2 from "@/public/images/landing-ati-bg2.png";
import SupportWhyFxeeBg from "@/public/images/support-whyfxee-bg.png";
import SupportWhyFxeeBgMobile from "@/public/images/why-fxee-footer-shade.png";

export default function SupportWhyFxee() {
  return (
    <div className="relative">
      <Image
        src={LandingATIBg2}
        alt="Landing ATI BG 2"
        className="absolute top-0 left-0 w-[500px] h-[700px] object-cover"
      />
      <Image
        src={SupportWhyFxeeBg}
        alt="Support Why FXEE"
        className="absolute bottom-0 right-0 w-[1400px] h-[700px] object-cover md:block hidden"
      />
      <Image
        src={SupportWhyFxeeBgMobile}
        alt="Support Why FXEE"
        className="absolute -bottom-20 right-0 w-[1400px] h-[700px] object-cover md:hidden block"
      />
      <LandingMax1440Container className="py-25 mb-20 md:mb-0 px-0">
        <div className="flex flex-col items-center lg:gap-[164px] gap-[100px]">
          <div className="flex flex-col items-center lg:gap-[70px] sm:gap-[50px] gap-3">
            <SupportWhyFxeeHead />
            <SupportWhyFxeeCards />
            <LandingButton
              color="black"
              icon={
                <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
              }
              text="See the AI in Action"
              className="sm:block hidden"
            />
          </div>
          <div className="flex flex-col items-center gap-10 sm:gap-[70px]">
            <div className="flex flex-col items-center gap-5">
              <LandingTitle className="tracking-[-3.6px] text-center">
                Designed for Results
              </LandingTitle>
              <LandingDescription className="max-w-[734px] text-center">
                We don’t just guess the market — we calculate it. FXEE’s prop
                challenge module was engineered to pass real accounts, with real
                data, in real time.
              </LandingDescription>
            </div>
            <LandingButton
              color="black"
              icon={
                <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
              }
              text="See the AI in Action"
            />
          </div>
        </div>
      </LandingMax1440Container>
    </div>
  );
}
