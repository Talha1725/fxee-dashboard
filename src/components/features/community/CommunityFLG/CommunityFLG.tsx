import React from "react";

import CommunityFLGHead from "@/components/features/community/CommunityFLG/CommunityFLGHead";
import CommunityFLGSocials from "@/components/features/community/CommunityFLG/CommunityFLGSocials";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import { LongEllipse } from "@/components/ui/icon";

export default function CommunityFLG() {
  return (
    <LandingMax1440Container className="pt-32 md:pt-25 pb-5 md:pb-15 gap-12.5 sm:gap-[70px] relative">
        <LongEllipse className="absolute md:top-[-30%] -right-[80%] sm:right-1/2 sm:translate-x-1/2 opacity-70 sm:opacity-80" />
      <CommunityFLGHead />
      <CommunityFLGSocials />
    </LandingMax1440Container>
  );
}
