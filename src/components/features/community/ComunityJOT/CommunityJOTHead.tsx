import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";

export default function CommunityJOTHead() {
  return (
    <div className="flex flex-col items-center self-stretch gap-5">
      <LandingTitle className="w-full md:w-[640px] text-center text-[32px] sm:text-[44px] !tracking-[-1.76px] leading-[120%]">
      Be Part of the Revolution      </LandingTitle>
      <LandingDescription className="!text-white/80 text-center text-[16px] sm:text-[18px] tracking-[-0.36px] leading-[150%]">
      FXEE isn’t just a tool — it’s a mindset. Join thousands of forward-thinking traders who are breaking free from outdated systems and moving toward the future.
      </LandingDescription>
    </div>
  );
}
