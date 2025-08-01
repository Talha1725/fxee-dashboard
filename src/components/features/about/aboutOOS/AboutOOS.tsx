import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import AboutOOSHead from "@/components/features/about/aboutOOS/AboutOOSHead";
import AboutOOSContent from "@/components/features/about/aboutOOS/AboutOOSContent";

export default function AboutOOS() {
  return (
    <LandingMax1440Container className="py-25 gap-[50px] sm:gap-[70px]">
      <AboutOOSHead />
      <AboutOOSContent />
    </LandingMax1440Container>
  );
}
