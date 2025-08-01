import React from "react";

import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";
import LandingButton from "../../landing/LandingButton";
import { IconLandingBtn2 } from "@/components/ui/icon";

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
  return (
    <LandingWhyFxeeCardContainer className="min-h-[350px] sm:min-h-[400px] lg:min-h-[284px] overflow-hidden">
      <div className="flex flex-col items-start gap-2.5 w-full max-w-full lg:max-w-[310px] z-1">
        <div className="text-white/90 text-[18px] sm:text-[20px] font-regular font-medium tracking-[-0.4px]">
          {title}
          <p className="text-white/90 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px]">
            {subtitle}
          </p>
        </div>
        <p className="text-white/40 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px] max-w-full lg:max-w-[265px]">
          {description}
        </p>
        <LandingButton
          color="white"
          icon={
            <IconLandingBtn2 className="absolute -z-1 w-full h-full top-0 left-0" />
          }
          text={buttonText}
          className="w-[250px] h-[44px]"
        />
      </div>
      {children}
    </LandingWhyFxeeCardContainer>
  );
}
