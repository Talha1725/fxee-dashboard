import React from "react";

import LandingContainer from "@/components/features/landing/LandingContainer";
import LandingNavbar from "@/components/features/landing/landingNavbar/LandingNavbar";
import LandingClaim from "@/components/features/landing/landingClaim/LandingClaim";
import LandingJOT from "@/components/features/landing/landingJOT/LandingJOT";
import LandingFooter from "@/components/features/landing/landingFooter/LandingFooter";
import LandingTextFlow from "@/components/features/landing/landingTextFlow/LandingTextFlow";
import SupportHero from "@/components/features/challenge-support/supportHero/SupportHero";
import LandingPFS from "@/components/features/landing/landingPFS/LandingPFS";
import SupportHIW from "@/components/features/challenge-support/supportHIW/SupportHIW";
import SupportWhyFxee from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxee";

export default function Support() {
  return (
    <LandingContainer>
      <LandingNavbar />
      <SupportHero />
      <LandingPFS />
      <SupportHIW />
      <SupportWhyFxee />
      <LandingJOT />
      <LandingTextFlow />
      <LandingClaim />
      <LandingFooter />
    </LandingContainer>
  );
}
