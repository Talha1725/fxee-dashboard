import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeScoreColor from "@/components/features/protected/home/homeTopScore/HomeScoreColor";
import HomeScorePie from "@/components/features/protected/home/homeTopScore/HomeScorePie";
import HomeScoreItem from "@/components/features/protected/home/homeTopScore/HomeScoreItem";
import { Text18 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

export default function HomeScore() {
  return (
    <ProtectedCardContainer className="bg-card-main-gradient db:max-w-[397px] h-[471px] flex flex-col items-center">
      <div className="flex flex-col self-stretch gap-2">
        <Text18>Consistency Score</Text18>
      </div>
      <HomeScorePie score={66} />
      <HomeScoreColor />
      <Separator className="w-full bg-white/5" />
      <div className="flex flex-col items-start self-stretch overflow-y-scroll scrollbar-hide">
        <HomeScoreItem currency="USD/GBP" score={1050} change={2.03} isUp />
        <HomeScoreItem
          currency="USD/JPY"
          score={10054034.43534}
          change={2.03}
          isUp
        />
        <HomeScoreItem
          currency="USD/AUD"
          score={100}
          change={2.03}
          isUp={false}
        />
        <HomeScoreItem
          currency="USD/EUR"
          score={100}
          change={2.03}
          isUp={false}
        />
      </div>
    </ProtectedCardContainer>
  );
}
