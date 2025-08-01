import React from "react";

import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function AboutTechStackCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <LandingWhyFxeeCardContainer className="w-full max-w-[360px] sm:max-w-[480px] min-h-[281px] overflow-hidden self-auto flex-none">
      <div className="flex flex-col items-start gap-2.5 w-[460px] z-5">
        <p className="text-white/90 text-[18px] sm:text-[22px] font-regular font-[700] tracking-[-0.44px]">
          {title}
        </p>
        <p className="text-white/40 text-[16px] sm:text-[18px] font-regular tracking-[-0.36px]">
          {description}
        </p>
      </div>
    </LandingWhyFxeeCardContainer>
  );
}
