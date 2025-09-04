import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingWhyFxeeHead from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeHead";
import LandingWhyFxeeCards from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCards";
import LandingButton from "@/components/features/landing/LandingButton";
import { EllipsLight, IconLandingBtn1 } from "@/components/ui/icon";

export default function LandingWhyFxee() {
  return (
    <LandingMax1440Container className="px-5 sm:px-10 py-25 2xl:px-25 gap-12.5 sm:gap-[70px] relative">

      <EllipsLight className="absolute top-[-2%] md:top-[-20%] left-1/2 -translate-x-1/2 pointer-events-none" />

      <LandingWhyFxeeHead />
      <LandingWhyFxeeCards />
    </LandingMax1440Container>
  );
}
