import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import LandingATCContentACPCard from "@/components/features/landing/landingATC/LandingATCContentACPCard";

import LandingACPImage from "@/public/images/landing-acp.png";

export default function LandingATCContentACP() {
  return (
    <LandingATCContentCardContainer className="gap-2.5">
      <Image
        src={LandingACPImage}
        alt="Fxee"
        priority
        className="absolute top-0 right-0 w-full h-full select-none"
      />
      <LandingATCContentACPCard />
    </LandingATCContentCardContainer>
  );
}
