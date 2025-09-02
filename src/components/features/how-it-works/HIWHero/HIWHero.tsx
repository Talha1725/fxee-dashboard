import React from "react";

import LandingHeroContainer from "@/components/features/landing/landingHero/LandingHeroContainer";
import HIWHeroContent from "@/components/features/how-it-works/HIWHero/HIWHeroContent";

export default function HIWHero() {
  return (
    <LandingHeroContainer>
       <div className="absolute top-[35%] right-[-40%] md:right-0 select-none w-[650px] h-[70px] rounded-full bg-white -rotate-[19deg] opacity-40 md:opacity-100 blur-[100px] md:blur-[180px] overflow-visible"></div>
      <HIWHeroContent />
    </LandingHeroContainer>
  );
}
