import React from "react";

import LandingATIContentUAC from "@/components/features/landing/landingATI/LandingATIContentUAC";
import LandingATIContentRDF from "@/components/features/landing/landingATI/LandingATIContentRDF";
import LandingATIContentPG from "@/components/features/landing/landingATI/LandingATIContentPG";

export default function LandingATIContent() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[600px] lg:max-w-[1050px] h-full lg:h-[576px] items-start">
      <LandingATIContentUAC />
      <div className="flex flex-col justify-center items-start self-stretch flex-[1_0_0]">
        <LandingATIContentRDF />
        <LandingATIContentPG />
      </div>
    </div>
  );
}
