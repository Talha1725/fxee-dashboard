import React from "react";

import LandingATICardHead from "@/components/features/landing/landingATI/LandingATICardHead";
import LandingATIContentNIPCard from "@/components/features/landing/landingATI/LandingATIContentNIPCard";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function LandingATIContentRDF() {
  return (
    <LandingWhyFxeeCardContainer className="self-stretch min-h-[390px] lg:min-h-auto">
      <LandingATICardHead
        title="Real-Time Data Feeds"
        description="Sourced from top trading platforms."
      />
      <div className="w-[491px] h-[182px] absolute right-0 bottom-0 overflow-hidden">
        <LandingATIContentNIPCard />
      </div>
    </LandingWhyFxeeCardContainer>
  );
}
