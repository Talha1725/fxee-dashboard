import React from "react";

import LandingATCHead from "@/components/features/landing/landingATC/LandingATCHead";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingATCContent from "@/components/features/landing/landingATC/LandingATCContent";

export default function LandingATC() {
  return (
    <LandingMax1440Container className="gap-12.5">
      <LandingATCHead />
      <LandingATCContent />
    </LandingMax1440Container>
  );
}
