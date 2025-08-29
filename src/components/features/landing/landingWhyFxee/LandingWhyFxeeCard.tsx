import React from "react";
import Image, { StaticImageData } from "next/image";

import LandingWhyFxeeCardText from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardText";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function LandingWhyFxeeCard({
  title,
  description,
  imageUrl,
  className,
  onMouseEnter,
  onMouseLeave,
  propFirm
}: {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  className?: string;
  propFirm?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <LandingWhyFxeeCardContainer 
      className={`min-h-[360px] sm:min-h-[284px] md:min-h-[380px] xl:min-h-[284px] ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LandingWhyFxeeCardText title={title} description={description} />
      <div className={`absolute bottom-0 ${propFirm ? "right-0": "right-1/2 translate-x-1/2"} sm:translate-x-0 sm:right-0 select-none`}>
        <Image
          src={imageUrl}
          alt={title}
          className={`${propFirm ? "min-w-[90%]" :"min-w-[290px]" } h-auto sm:w-[300px] sm:h-[240px]`}
          width={300}
          height={240}
          priority
        />
      </div>
    </LandingWhyFxeeCardContainer>
  );
}
