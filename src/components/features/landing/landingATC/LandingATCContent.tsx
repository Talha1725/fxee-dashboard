import React from "react";

import LandingATCContentATF from "@/components/features/landing/landingATC/LandingATCContentATF";
import LandingATCContentNIP from "@/components/features/landing/landingATC/LandingATCContentNIP";
import LandingATCContentTP from "@/components/features/landing/landingATC/LandingATCContentTP";
import LandingATCContentACP from "@/components/features/landing/landingATC/LandingATCContentACP";
import LandingATCContentRBV from "@/components/features/landing/landingATC/LandingATCContentRBV";
import LandingATCContentVRA from "@/components/features/landing/landingATC/LandingATCContentVRA";

export default function LandingATCContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-2.5 overflow-hidden">
      <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-2.5 w-[320px] sm:w-[340px] md:w-[90%] lg:w-[340px]">
        <LandingATCContentATF />
        <LandingATCContentNIP />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col items-start gap-2.5 w-[320px] sm:w-[340px] lg:w-[340px] md:w-[90%]">
        <LandingATCContentTP />
        <LandingATCContentACP />
        <LandingATCContentRBV />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-2.5 w-[320px] sm:w-[340px] lg:w-[340px] md:w-[90%]">
        <LandingATCContentVRA />
      </div>
    </div>
  );
}
