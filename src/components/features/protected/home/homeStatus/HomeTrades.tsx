import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTradesItem from "@/components/features/protected/home/homeStatus/HomeTradesItem";
import { Separator } from "@/components/ui/separator";
import { Text18 } from "@/components/ui/typography";

export default function HomeTrades() {
  return (
    <ProtectedCardContainer className="flex-[1_0_0] self-stretch bg-card-green-gradient border-none overflow-x-hidden">
      <div className="flex self-stretch">
        <Text18>AI Recommended Trades</Text18>
      </div>
      <div className="flex items-start gap-5 flex-[1_0_0] self-stretch overflow-x-scroll scrollbar-hide">
        <HomeTradesItem />
        <Separator orientation="vertical" className="h-full bg-white/5" />
        <HomeTradesItem />
        <Separator orientation="vertical" className="h-full bg-white/5" />
        <HomeTradesItem />
        <Separator orientation="vertical" className="h-full bg-white/5" />
        <HomeTradesItem />
      </div>
    </ProtectedCardContainer>
  );
}
