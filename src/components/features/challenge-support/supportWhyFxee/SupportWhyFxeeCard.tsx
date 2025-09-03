"use client";
import React, { useState } from "react";

import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";
import LandingDescription from "@/components/features/landing/LandingDescription";

export default function SupportWhyFxeeCard({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`w-full min-h-[238px] lg:min-h-[255px] self-stretch ${isHovered ? "border-gradient-blue-green-rounded" : "border-gradient-left-rounded"} p-[1px] relative overflow-hidden`}>
      <div className="w-full h-full rounded-md self-stretch overflow-hidden bg-[#0A0A0A]">
    <LandingWhyFxeeCardContainer 
      className={`${isHovered ? "hover-card-green-gradient" : "bg-gradient-to-r from-white/5 to-[#ffffff06]"} w-full h-full rounded-md self-stretch overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="flex flex-col items-start gap-2.5 self-stretch h-[238px] lg:h-[255px] overflow-hidden">
        <p className="text-white/90 text-[22px] font-regular font-[700] tracking-[-0.44px]">
          {title}
        </p>
        <LandingDescription>{description}</LandingDescription>
      </div>
      {children}
    </LandingWhyFxeeCardContainer>
      </div>
      </div>
  );
}
