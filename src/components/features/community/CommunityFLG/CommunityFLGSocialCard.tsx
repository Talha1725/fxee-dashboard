import React from "react";
import Image, { StaticImageData } from "next/image";

import LandingButton from "@/components/features/landing/LandingButton";
import { IconLandingBtn1 } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CommunityFLGSocialCard({
  title,
  description,
  className,
  buttonText,
  image,
}: {
  title: string;
  description: string;
  className?: string;
  buttonText: string;
  image: StaticImageData;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start self-stretch gap-5 flex-[1_0_0] min-h-[300px] sm:min-h-[284px] md:min-h-[350px] lg:min-h-[284px] p-5 border overflow-hidden select-none",
        className
      )}
    >
      <div className="flex flex-col items-start gap-2.5 w-[310px] z-1">
        <div className="flex flex-col items-start gap-2.5 md:min-h-[110px]">
          <p className="text-white/90 text-[18px] sm:text-[20px] font-regular font-medium leading-normal tracking-[-0.4px]">
            {title}
          </p>
          <p className="w-[265px] text-white/40 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px]">
            {description}
          </p>
        </div>
        <Button variant={"white"} className="font-satoshi-medium text-[16px]">{buttonText}</Button>
      </div>
      <div className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rotate-[15deg] absolute -right-[70px] -bottom-[60px]">
        <Image src={image} alt={title} fill />
      </div>
    </div>
  );
}
