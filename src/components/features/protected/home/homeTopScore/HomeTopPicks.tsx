import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTopPicksHead from "@/components/features/protected/home/homeTopScore/HomeTopPicksHead";
import HomeTopPicksBody from "@/components/features/protected/home/homeTopScore/HomeTopPicksBody";

export default function HomeTopPicks() {
  return (
    <ProtectedCardContainer className="bg-card-main-gradient h-[471px]">
      <HomeTopPicksHead />
      <HomeTopPicksBody />
    </ProtectedCardContainer>
  );
}
