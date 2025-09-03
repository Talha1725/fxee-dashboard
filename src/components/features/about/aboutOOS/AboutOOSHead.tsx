import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";

export default function AboutOOSHead() {
  return (
    <div className="flex flex-col items-center gap-5">
      <LandingTitle className="text-center">Our Origin Story</LandingTitle>
      <LandingDescription className="!text-white/50">
        FXEE was born from a bold question:
      </LandingDescription>
    </div>
  );
}
