import React from "react";

import LandingDescription from "@/components/features/landing/LandingDescription";

export default function LandingWhyFxeeCardText({
  title,
  description,
  showDescription = false,
}: {
  title: string;
  description: string;
  showDescription?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 w-full">
      <p className="text-white text-[18px] xl:text-[20px] font-regular font-medium tracking-[-0.4px]">
        {title}
      </p>
      <LandingDescription className={`!text-white text-[14px] sm:text-[14px] xl:text-[16px] tracking-[-0.32px] transition-all duration-300 ease-in-out overflow-hidden ${
        showDescription 
          ? 'max-h-32 opacity-100 transform translate-y-0' 
          : 'max-h-0 opacity-0 transform -translate-y-2'
      }`}>
        {description}
      </LandingDescription>
    </div>
  );
}
