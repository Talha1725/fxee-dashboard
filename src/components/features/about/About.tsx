import React from "react";

import LandingContainer from "@/components/features/landing/LandingContainer";
import LandingNavbar from "@/components/features/landing/landingNavbar/LandingNavbar";
import AboutHero from "@/components/features/about/aboutHero/AboutHero";
import AboutOOS from "@/components/features/about/aboutOOS/AboutOOS";
import AboutFOIK from "@/components/features/about/aboutFOIK/AboutFOIK";
import AboutTechStack from "@/components/features/about/aboutTechStack/AboutTechStack";
import AboutMission from "@/components/features/about/aboutMission/AboutMission";
import AboutVision from "@/components/features/about/aboutVision/AboutVision";
import LandingJOT from "@/components/features/landing/landingJOT/LandingJOT";
import LandingTextFlow from "@/components/features/landing/landingTextFlow/LandingTextFlow";
import LandingClaim from "@/components/features/landing/landingClaim/LandingClaim";
import LandingFooter from "@/components/features/landing/landingFooter/LandingFooter";

export default function About() {
  return (
    <LandingContainer>
      <LandingNavbar />
      <AboutHero />
      <AboutOOS />
      <AboutFOIK />
      <AboutTechStack />
      <AboutMission />
      <AboutVision />
      <LandingJOT />
      <LandingTextFlow />
      <LandingClaim />
      <LandingFooter />
    </LandingContainer>
  );
}
