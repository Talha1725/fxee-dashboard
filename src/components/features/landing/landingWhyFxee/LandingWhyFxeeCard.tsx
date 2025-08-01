import React from "react";
import Image, { StaticImageData } from "next/image";

import LandingWhyFxeeCardText from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardText";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function LandingWhyFxeeCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: StaticImageData;
}) {
  return (
    <LandingWhyFxeeCardContainer className="min-h-[350px] sm:min-h-[284px] md:min-h-[380px] xl:min-h-[284px]">
      <LandingWhyFxeeCardText title={title} description={description} />
      <div className="absolute bottom-0 right-0 select-none">
        <Image
          src={imageUrl}
          alt={title}
          className="w-[200px] xs:w-[280px] sm:w-[300px] h-[180px] sm:h-[240px]"
          width={300}
          height={240}
          priority
        />
      </div>
    </LandingWhyFxeeCardContainer>
  );
}
