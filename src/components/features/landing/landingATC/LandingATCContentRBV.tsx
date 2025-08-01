import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import LandingATCContentRBVCard from "@/components/features/landing/landingATC/LandingATCContentRBVCard";

import LandingRBVImage from "@/public/images/landing-rbv.png";

export default function LandingATCContentRBV() {
  return (
    <LandingATCContentCardContainer className="gap-2.5 sm:gap-4">
      <Image
        src={LandingRBVImage}
        alt="Fxee"
        priority
        className="absolute bottom-0 left-0 w-[250px] h-[200px] select-none"
      />
      <LandingATCContentRBVCard />
    </LandingATCContentCardContainer>
  );
}
