import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeNewsHead from "@/components/features/protected/home/homeNewsAI/HomeNewsHead";
import HomeNewsBody from "@/components/features/protected/home/homeNewsAI/HomeNewsBody";

export default function HomeNews() {
  return (
    <ProtectedCardContainer className="bg-card-main-gradient h-[471px] overflow-x-hidden">
      <HomeNewsHead />
      <HomeNewsBody />
    </ProtectedCardContainer>
  );
}
