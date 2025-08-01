import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingYTSHead from "@/components/features/landing/landingYTS/LandingYTSHead";
import LandingYTSContent from "@/components/features/landing/landingYTS/LandingYTSContent";

export default function LandingYTS() {
  return (
    <div className="bg-white">
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
        <LandingYTSHead />
        <LandingYTSContent />
      </LandingMax1440Container>
    </div>
  );
}
