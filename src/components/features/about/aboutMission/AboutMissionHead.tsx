import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";

export default function AboutMissionHead() {
  return (
    <div className="flex flex-col items-center gap-5">
      <LandingTitle className="text-center">Our Mission</LandingTitle>
      <LandingDescription className="max-w-[830px] text-center text-white sm:text-[24px] text-[18px]">
        To remove the guesswork from trading by giving traders access to
        high-performance AI tools that simulate, guide, and improve outcomes —
        whether they’re passing prop firm challenges or scaling personal
        capital.
      </LandingDescription>
    </div>
  );
}
