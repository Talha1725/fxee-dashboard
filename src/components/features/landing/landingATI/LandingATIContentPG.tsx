"use client";
import React, { useState } from "react";

import LandingATICardHead from "@/components/features/landing/landingATI/LandingATICardHead";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";
import guidence from "@/public/images/guidance.svg"
import Image from "next/image";

export default function LandingATIContentPG() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LandingWhyFxeeCardContainer className={`self-stretch min-h-[390px] lg:min-h-auto ${isHovered ? "border-gradient-blue-green" : window.innerWidth > 640 ? "border-gradient-left" : "border-gradient-top-bottom"} overflow-hidden`}
    onMouseEnter={() => {
      setIsHovered(true);
    }}
    onMouseLeave={() => {
      setIsHovered(false);
    }}
    >
      <LandingATICardHead
        title="Personalized Guidance"
        description="Access strategies tailored to your challenge’s rules and timelines."
        paraSize="!text-[16px]"
      />
      <div className="p-5"></div>
      <Image
        src={guidence}
        alt="guidence"
        className="absolute -right-4 -bottom-1"
      />
    </LandingWhyFxeeCardContainer>
  );
}
