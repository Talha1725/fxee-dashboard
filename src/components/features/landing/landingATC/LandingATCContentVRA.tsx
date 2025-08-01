import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import LandingATCContentVRACard from "@/components/features/landing/landingATC/LandingATCContentVRACard";

import LandingVRAImage from "@/public/images/landing-vra.png";

export default function LandingATCContentVRA() {
  return (
    <LandingATCContentCardContainer className="gap-2.5 sm:gap-4">
      <Image
        src={LandingVRAImage}
        alt="Fxee"
        className="absolute bottom-0 left-0 w-full h-full select-none"
      />
      <LandingATCContentVRACard />
    </LandingATCContentCardContainer>
  );
}
