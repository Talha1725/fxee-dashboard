import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import LandingATCContentNIPCard from "@/components/features/landing/landingATC/LandingATCContentNIPCard";

import LandingNIPImage from "@/public/images/landing-nip.png";

export default function LandingATCContentNIP() {
  return (
    <LandingATCContentCardContainer className="gap-3.5">
      <Image
        src={LandingNIPImage}
        alt="Fxee"
        priority
        className="absolute top-0 right-0 w-full h-full select-none"
      />
      <LandingATCContentNIPCard />
    </LandingATCContentCardContainer>
  );
}
