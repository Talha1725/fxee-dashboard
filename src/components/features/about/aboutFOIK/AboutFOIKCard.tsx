"use client";
import React, { useState } from "react";

import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function AboutFOIKCard({
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
      className={`w-full max-w-[360px] sm:max-w-[475px] min-h-[232px] overflow-hidden self-auto flex-none ${isHovered ? "border-gradient-blue-green" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start gap-2.5 w-[200px] z-5">
        <p className="text-white/90 text-[18px] sm:text-[20px] font-regular font-medium tracking-[-0.4px]">
          {title}
        </p>
        <p className="text-white/40 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px]">
          {description}
        </p>
      </div>
      {children}
    </LandingWhyFxeeCardContainer>
  );
}
