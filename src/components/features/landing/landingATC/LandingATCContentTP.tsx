import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import LandingATCContentTPCard from "@/components/features/landing/landingATC/LandingATCContentTPCard";

import LandingTPImage from "@/public/images/landing-tp.png";

export default function LandingATCContentTP() {
  return (
    <LandingATCContentCardContainer className="gap-2.5 sm:gap-4">
      <Image
        src={LandingTPImage}
        alt="Fxee"
        priority
        className="absolute bottom-0 right-0 w-full h-[80px] sm:h-[100px] select-none"
      />
      <LandingATCContentTPCard />
    </LandingATCContentCardContainer>
  );
}
