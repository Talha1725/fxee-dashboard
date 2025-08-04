import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import LandingATCContentATFCard from "@/components/features/landing/landingATC/LandingATCContentATFCard";

import LandingATFImage from "@/public/images/landing-atf.png";

export default function LandingATCContentATF() {
  return (
    <LandingATCContentCardContainer>
      <Image
        src={LandingATFImage}
        alt="Fxee"
        priority
        className="absolute top-0 right-0 w-[320px] h-[170px] select-none"
      />
      <LandingATCContentATFCard />
    </LandingATCContentCardContainer>
  );
}
