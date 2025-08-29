"use client";
import React, { useState } from "react";

import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function AboutTechStackCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LandingWhyFxeeCardContainer 
      className={`w-full max-w-[360px] sm:max-w-[480px] md:min-h-[281px] min-h-[230px] sm:min-h-[275px] relative self-auto flex-none overflow-hidden ${isHovered ? "border-gradient-blue-green" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start gap-2.5 lg:w-[460px] z-5">
        <p className="text-white/90 text-[18px] sm:text-[22px] font-regular font-[700] tracking-[-0.44px]">
          {title}
        </p>
        <p className="text-white/40 text-[16px] font-regular tracking-[-0.36px]">
          {description}
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        {children}
      </div>
    </LandingWhyFxeeCardContainer>
  );
}
