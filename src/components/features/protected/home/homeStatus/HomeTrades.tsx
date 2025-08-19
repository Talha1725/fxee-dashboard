"use client";
import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTradesItem from "@/components/features/protected/home/homeStatus/HomeTradesItem";
import { Separator } from "@/components/ui/separator";
import { Text18 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function HomeTrades({className}: {className?: string}) {
  const { theme } = useTheme();

  return (
    <ProtectedCardContainer className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-card-green-gradient" : "bg-card-green-gradient-light"} border-none overflow-x-hidden ${className}`}>
      <div className="flex self-stretch">
        <Text18 className="font-satoshi-medium text-white">AI Recommended Trades</Text18>
      </div>
      <div className="flex items-start gap-5 flex-[1_0_0] self-stretch overflow-x-scroll scrollbar-hide">
        <HomeTradesItem long={true} />
        <Separator orientation="vertical" className="h-full bg-white/5" />
        <HomeTradesItem long={false} />
        <Separator orientation="vertical" className="h-full bg-white/5" />
        <HomeTradesItem long={true} />
        <Separator orientation="vertical" className="h-full bg-white/5" />
        <HomeTradesItem long={false} />
      </div>
    </ProtectedCardContainer>
  );
}
