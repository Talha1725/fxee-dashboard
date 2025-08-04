import React from "react";

import LandingHeroContainer from "@/components/features/landing/landingHero/LandingHeroContainer";
import HIWHeroContent from "@/components/features/how-it-works/HIWHero/HIWHeroContent";

export default function HIWHero() {
  return (
    <LandingHeroContainer className="lg:min-h-screen">
      <HIWHeroContent />
    </LandingHeroContainer>
  );
}
