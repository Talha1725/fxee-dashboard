import React from "react";

import LandingContainer from "@/components/features/landing/LandingContainer";
import LandingNavbar from "@/components/features/landing/landingNavbar/LandingNavbar";
import ContactHero from "@/components/features/contact/ContactHero";
import ContactCenter from "@/components/features/contact/contactCenter/ContactCenter";
import LandingTextFlow from "@/components/features/landing/landingTextFlow/LandingTextFlow";
import LandingJOT from "@/components/features/landing/landingJOT/LandingJOT";
import LandingClaim from "@/components/features/landing/landingClaim/LandingClaim";
import LandingFooter from "@/components/features/landing/landingFooter/LandingFooter";

export default function Contact() {
  return (
    <LandingContainer>
      <LandingNavbar />
      <ContactHero />
      <ContactCenter />
      <LandingJOT />
      <LandingTextFlow />
      <div className="mb-20"></div>
      <LandingClaim />
      <LandingFooter />
    </LandingContainer>
  );
}
