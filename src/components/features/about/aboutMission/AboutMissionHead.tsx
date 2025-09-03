import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { EllipsLight } from "@/components/ui/icon";

export default function AboutMissionHead() {
  return (
    <div className="flex flex-col items-center gap-5 mb-5 relative">
      <EllipsLight className="absolute top-[-600px] right-[-600px] opacity-30" />
      <LandingTitle className="text-center !text-[56px]">Our Mission</LandingTitle>
      <LandingDescription className="lg:max-w-[734px] text-center text-white md:text-[18px] text-[16px]">
        To remove the guesswork from trading by giving traders access to
        high-performance AI tools that simulate, guide, and improve outcomes —
        whether they’re passing prop firm challenges or scaling personal
        capital.
      </LandingDescription>
    </div>
  );
}
