import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import AboutFOIKCards from "@/components/features/about/aboutFOIK/AboutFOIKCards";

import FOIKBg from "@/public/images/hiw-bg.png";

export default function AboutFOIK() {
  return (
    <div className="relative">
      <Image
        src={FOIKBg}
        alt="FOIK Background"
        className="absolute top-0 right-0 w-[1000px] md:h-[800px] object-cover -z-1"
      />
      <LandingMax1440Container className="py-20 gap-[50px] sm:gap-[70px]">
        <LandingTitle className="text-center">
          What Makes FXEE <br className="block lg:hidden" /> First-of-Its-Kind
        </LandingTitle>
        <AboutFOIKCards />
      </LandingMax1440Container>
    </div>
  );
}
