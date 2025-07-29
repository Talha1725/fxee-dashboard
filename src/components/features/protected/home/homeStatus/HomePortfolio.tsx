import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTotalPortfolio from "@/components/features/protected/home/homeStatus/HomeTotalPortfolio";
import HomePortfolioChart from "@/components/features/protected/home/homeStatus/HomePortfolioChart";
import { Button } from "@/components/ui/button";
import { IconAIMagic } from "@/components/ui/icon";

export default function HomePortfolio() {
  return (
    <ProtectedCardContainer className="w-full db:max-w-[397px] bg-card-dark-gradient shadow-subtle">
      <div className="flex justify-between items-start self-stretch">
        <HomeTotalPortfolio />
        <Button variant="popular" className="sm:flex hidden">
          <IconAIMagic />
          Start AI Trading
        </Button>
      </div>
      <div className="relative w-full h-full">
        <HomePortfolioChart />
      </div>
    </ProtectedCardContainer>
  );
}
