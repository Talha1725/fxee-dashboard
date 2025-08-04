import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";

export default function AboutVisionHead() {
  return (
    <div className="flex flex-col items-center gap-5">
      <LandingTitle className="text-center">Our Vision</LandingTitle>
      <LandingDescription className="max-w-[734px] text-center">
        To lead the global shift toward automated, intelligent, simulation-based
        trading — where humans and AI work together to make smarter decisions.
      </LandingDescription>
    </div>
  );
}
