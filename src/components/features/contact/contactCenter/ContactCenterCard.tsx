"use client";

import React, { useState } from "react";

import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";
import LandingButton from "../../landing/LandingButton";
import { IconLandingBtn2 } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function ContactCenterCard({
  title,
  subtitle,
  description,
  buttonText,
  children,
}: {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LandingWhyFxeeCardContainer
      className={`min-h-[350px] sm:min-h-[400px] lg:min-h-[284px] overflow-hidden rounded-lg ${
        isHovered
          ? "border-gradient-blue-green-rounded"
          : "border border-white/20"
      } p-[1px] overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="w-full h-[350px] sm:h-[400px] lg:h-[284px] bg-[#0a0a0a] rounded-lg">
        <div
          className={`w-full h-[350px] sm:h-[400px] lg:h-[284px] p-5 rounded-md  ${
            isHovered ? "hover-card-green-gradient" : "bg-gradient-to-tr from-transparent via-[#ffffff04] to-[#ffffff10] md:bg-[#ffffff06]"
          }`}
        >
          <div className="flex flex-col items-start gap-2.5 w-full max-w-full h-full lg:max-w-[310px] z-1">
            <div className="text-white/90 text-[18px] sm:text-[20px] font-regular font-medium tracking-[-0.4px]">
              {title}
              <p className="text-white/90 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px]">
                {subtitle}
              </p>
            </div>
            <p className="text-white/40 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px] max-w-full lg:max-w-[265px]">
              {description}
            </p>
            <Button
            variant={"white"}
            className="font-satoshi-medium"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      {children}
    </LandingWhyFxeeCardContainer>
  );
}
