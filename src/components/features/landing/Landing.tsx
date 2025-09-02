import React from "react";

import LandingNavbar from "@/components/features/landing/landingNavbar/LandingNavbar";
import LandingHero from "@/components/features/landing/landingHero/LandingHero";
import LandingWhyFxee from "@/components/features/landing/landingWhyFxee/LandingWhyFxee";
import LandingPFS from "@/components/features/landing/landingPFS/LandingPFS";
import LandingATC from "@/components/features/landing/landingATC/LandingATC";
import LandingHIW from "@/components/features/landing/landingHIW/LandingHIW";
import LandingPFC from "@/components/features/landing/landingPFC/LandingPFC";
import LandingReview from "@/components/features/landing/landingReview/LandingReview";
import LandingPricing from "@/components/features/landing/landingPricing/LandingPricing";
import LandingYTS from "@/components/features/landing/landingYTS/LandingYTS";
import LandingJOT from "@/components/features/landing/landingJOT/LandingJOT";
import LandingTextFlow from "@/components/features/landing/landingTextFlow/LandingTextFlow";
import LandingATI from "@/components/features/landing/landingATI/LandingATI";
import LandingClaim from "@/components/features/landing/landingClaim/LandingClaim";
import LandingFooter from "@/components/features/landing/landingFooter/LandingFooter";
import LandingContainer from "@/components/features/landing/LandingContainer";
import LandingPFSPartner from "./landingPFS/LandingPFSPartner";
import LandingEBS from "./LandingEBS/LandingEBS";

export default function Landing() {
  return (
    <LandingContainer>
      <LandingHero />
      <LandingPFSPartner />
      <LandingWhyFxee />
      <LandingATC />
      <LandingEBS />
      <LandingHIW />
      <LandingTextFlow />

      <LandingPFS />
      <LandingPFC />
      <LandingPricing />
      <LandingReview />
      <LandingYTS />
      <LandingJOT />
      <LandingATI />
      <LandingClaim />
      <LandingFooter />
      <LandingNavbar />
    </LandingContainer>
  );
}
