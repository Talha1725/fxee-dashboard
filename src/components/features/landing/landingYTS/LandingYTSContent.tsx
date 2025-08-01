import React from "react";

import LandingYTSContentCardano from "@/components/features/landing/landingYTS/LandingYTSContentCardano";
import LandingATCContentNIP from "@/components/features/landing/landingATC/LandingATCContentNIP";
import LandingATCContentACP from "@/components/features/landing/landingATC/LandingATCContentACP";
import LandingYTSContentBTC from "@/components/features/landing/landingYTS/LandingYTSContentBTC";

export default function LandingYTSContent() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2.5">
      <div className="flex flex-col items-end gap-2.5 w-[320px] sm:w-[340px]">
        <LandingYTSContentCardano />
      </div>
      <div className="flex flex-col items-end gap-2.5 w-[320px] sm:w-[340px]">
        <LandingATCContentNIP />
        <LandingATCContentACP />
      </div>
      <div className="flex flex-col items-end gap-2.5 w-[320px] sm:w-[340px]">
        <LandingYTSContentBTC />
      </div>
    </div>
  );
}
