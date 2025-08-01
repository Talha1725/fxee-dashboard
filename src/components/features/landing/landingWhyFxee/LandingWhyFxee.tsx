import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingWhyFxeeHead from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeHead";
import LandingWhyFxeeCards from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCards";
import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";

export default function LandingWhyFxee() {
  return (
    <LandingMax1440Container className="px-5 sm:px-10 py-25 2xl:px-25 gap-12.5 sm:gap-[70px]">
      <LandingWhyFxeeHead />
      <LandingWhyFxeeCards />
      <LandingButton
        color="black"
        icon={
          <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
        }
        text="Join Now"
      />
    </LandingMax1440Container>
  );
}
