import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingHeroImage from "@/components/features/landing/landingHero/LandingHeroImage";
import LandingHeroText from "@/components/features/landing/landingHero/LandingHeroText";

export default function LandingHeroContent() {
  return (
    <LandingMax1440Container>
      <LandingHeroText />
      <LandingHeroImage />
    </LandingMax1440Container>
  );
}
