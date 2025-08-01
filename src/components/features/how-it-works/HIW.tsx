import React from "react";

import HIWHero from "@/components/features/how-it-works/HIWHero/HIWHero";
import HIWFlow from "@/components/features/how-it-works/HIWFlow/HIWFlow";
import LandingContainer from "@/components/features/landing/LandingContainer";
import LandingNavbar from "@/components/features/landing/landingNavbar/LandingNavbar";
import LandingClaim from "@/components/features/landing/landingClaim/LandingClaim";
import LandingJOT from "@/components/features/landing/landingJOT/LandingJOT";
import LandingFooter from "@/components/features/landing/landingFooter/LandingFooter";
import LandingTextFlow from "@/components/features/landing/landingTextFlow/LandingTextFlow";

export default function HIW() {
  return (
    <LandingContainer>
      <LandingNavbar />
      <HIWHero />
      <HIWFlow />
      <LandingJOT />
      <LandingTextFlow />
      <LandingClaim />
      <LandingFooter />
    </LandingContainer>
  );
}
