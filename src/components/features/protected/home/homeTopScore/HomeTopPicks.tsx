"use client";

import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTopPicksHead from "@/components/features/protected/home/homeTopScore/HomeTopPicksHead";
import HomeTopPicksBody from "@/components/features/protected/home/homeTopScore/HomeTopPicksBody";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface HomeTopPicksProps {
  showArrows?: boolean;
}

export default function HomeTopPicks({ showArrows = true }: HomeTopPicksProps) {
  const { theme } = useTheme();
  return (
    <ProtectedCardContainer className={`w-full h-[471px] border-black/5 ${theme === "dark" ? "bg-dark-gradient" : "bg-card-dashboard-main-gradient"}`}>
      <HomeTopPicksHead />
      <HomeTopPicksBody showArrows={showArrows} />
    </ProtectedCardContainer>
  );
}
