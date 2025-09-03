import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import AboutFOIKCards from "@/components/features/about/aboutFOIK/AboutFOIKCards";

import FOIKBg from "@/public/images/hiw-bg.png";
import { EllipsLight } from "@/components/ui/icon";

export default function AboutFOIK() {
  return (
    <div className="relative">
      <LandingMax1440Container className="pt-0 gap-[50px] sm:gap-[70px] relative">
      <EllipsLight
        className="absolute left-1/2 -translate-x-1/2 top-[-300px] opacity-50"
        opacity="0.15"
      />
        <LandingTitle className="text-center">
          What Makes FXEE <br className="lg:block hidden" /> First-of-Its-Kind
        </LandingTitle>
        <AboutFOIKCards />
      </LandingMax1440Container>
    </div>
  );
}
