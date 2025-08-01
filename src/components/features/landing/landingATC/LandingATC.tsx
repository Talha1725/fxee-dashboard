import React from "react";

import LandingATCHead from "@/components/features/landing/landingATC/LandingATCHead";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingATCContent from "@/components/features/landing/landingATC/LandingATCContent";

export default function LandingATC() {
  return (
    <div className="bg-white">
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
        <LandingATCHead />
        <LandingATCContent />
      </LandingMax1440Container>
    </div>
  );
}
