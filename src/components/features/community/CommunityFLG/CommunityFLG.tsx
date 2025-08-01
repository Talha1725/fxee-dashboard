import React from "react";

import CommunityFLGHead from "@/components/features/community/CommunityFLG/CommunityFLGHead";
import CommunityFLGSocials from "@/components/features/community/CommunityFLG/CommunityFLGSocials";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";

export default function CommunityFLG() {
  return (
    <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
      <CommunityFLGHead />
      <CommunityFLGSocials />
    </LandingMax1440Container>
  );
}
