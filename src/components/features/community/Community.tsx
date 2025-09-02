import React from "react";

import LandingContainer from "@/components/features/landing/LandingContainer";
import LandingJOT from "@/components/features/landing/landingJOT/LandingJOT";
import LandingNavbar from "@/components/features/landing/landingNavbar/LandingNavbar";
import LandingFooter from "@/components/features/landing/landingFooter/LandingFooter";
import LandingTextFlow from "@/components/features/landing/landingTextFlow/LandingTextFlow";
import LandingClaim from "@/components/features/landing/landingClaim/LandingClaim";
import CommunityHero from "@/components/features/community/CommunityHero/CommunityHero";
import CommunityFLG from "@/components/features/community/CommunityFLG/CommunityFLG";
import CommunityJOT from "./ComunityJOT/CommunityJOT";

export default function Community() {
  return (
    <LandingContainer>
      <LandingNavbar />
      <CommunityHero />
      <CommunityFLG />
      {/* <CommunityJOT /> */}
      <LandingJOT />
      <LandingTextFlow />
      <div className="mb-20"></div>
      <LandingClaim />
      <LandingFooter />
    </LandingContainer>
  );
}
