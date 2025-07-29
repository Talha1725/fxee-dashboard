import React from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import HomeStatus from "@/components/features/protected/home/homeStatus/HomeStatus";
import HomeNewsAI from "@/components/features/protected/home/homeNewsAI/HomeNewsAI";
import HomeTopScore from "@/components/features/protected/home/homeTopScore/HomeTopScore";

export default function Home() {
  return (
    <ProtectedContentContainer>
      <HomeStatus />
      <HomeNewsAI />
      <HomeTopScore />
    </ProtectedContentContainer>
  );
}
