import React from "react";

import LandingATICardHead from "@/components/features/landing/landingATI/LandingATICardHead";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function LandingATIContentPG() {
  return (
    <LandingWhyFxeeCardContainer className="self-stretch min-h-[390px] lg:min-h-auto">
      <LandingATICardHead
        title="Personalized Guidance"
        description="Access strategies tailored to your challenge’s rules and timelines."
      />
    </LandingWhyFxeeCardContainer>
  );
}
