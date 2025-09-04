"use client";

import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeAIMessage from "@/components/features/protected/home/homeNewsAI/HomeAIMessage";
import HomeAIChat from "@/components/features/protected/home/homeNewsAI/HomeAIChat";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function HomeAI() {
  const { theme } = useTheme();
  return (
    <ProtectedCardContainer className={`db:max-w-[397px] h-[471px] p-5 flex flex-col justify-between items-center border-black/5 ${theme === "dark" ? "bg-card-main-gradient" : "bg-white"}`}>
      <HomeAIMessage />
      {/* <HomeAIChat /> */}
    </ProtectedCardContainer>
  );
}
