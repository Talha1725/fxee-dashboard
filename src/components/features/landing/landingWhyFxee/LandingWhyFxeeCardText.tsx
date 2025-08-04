import React from "react";

import LandingDescription from "@/components/features/landing/LandingDescription";

export default function LandingWhyFxeeCardText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 w-full 2xl:w-[310px]">
      <p className="text-white/90 text-[18px] xl:text-[20px] font-regular font-medium tracking-[-0.4px]">
        {title}
      </p>
      <LandingDescription className="w-full sm:w-[214px] md:w-full xl:w-[214px] text-[14px] sm:text-[14px] xl:text-[16px] tracking-[-0.32px]">
        {description}
      </LandingDescription>
    </div>
  );
}
