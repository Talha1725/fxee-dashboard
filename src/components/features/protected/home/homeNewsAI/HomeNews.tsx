"use client";

import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeNewsHead from "@/components/features/protected/home/homeNewsAI/HomeNewsHead";
import HomeNewsBody from "@/components/features/protected/home/homeNewsAI/HomeNewsBody";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function HomeNews() {
  const { theme } = useTheme();
  return (
    <ProtectedCardContainer className={`h-[471px] border-black/5 overflow-x-hidden ${theme === "dark" ? "bg-card-main-gradient" : "bg-white"}`}>
      <HomeNewsHead />
      <HomeNewsBody />
    </ProtectedCardContainer>
  );
}
