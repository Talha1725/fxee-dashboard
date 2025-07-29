import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeAIMessage from "@/components/features/protected/home/homeNewsAI/HomeAIMessage";
import HomeAIChat from "@/components/features/protected/home/homeNewsAI/HomeAIChat";

export default function HomeAI() {
  return (
    <ProtectedCardContainer className="db:max-w-[397px] h-[471px] p-5 flex flex-col justify-between items-center bg-card-dashboard-main-gradient">
      <HomeAIMessage />
      <HomeAIChat />
    </ProtectedCardContainer>
  );
}
