import React from "react";

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
  return (
    <LandingWhyFxeeCardContainer className="w-full max-w-[525px] lg:min-w-[525px] sm:min-h-[288px] min-h-[325px] self-stretch overflow-hidden">
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <p className="text-white/90 text-[22px] font-regular font-[700] tracking-[-0.44px]">
          {title}
        </p>
        <LandingDescription>{description}</LandingDescription>
      </div>
      {children}
    </LandingWhyFxeeCardContainer>
  );
}
