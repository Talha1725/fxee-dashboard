import React from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTotalPortfolio from "@/components/features/protected/home/homeStatus/HomeTotalPortfolio";
import HomePortfolioChart from "@/components/features/protected/home/homeStatus/HomePortfolioChart";
import { Button } from "@/components/ui/button";
import { IconAIMagic, PortfolioChart } from "@/components/ui/icon";

export default function HomePortfolio() {
  return (
    <ProtectedCardContainer className="!p-0 w-full db:max-w-[397px] bg-white dark:bg-gradient-to-b from-[#F5F5F5] to-[#F5F5F5] dark:from-[#1A1A1A] dark:to-[#1A1A1A] shadow-subtle !pb-2">
      <div className="flex justify-between items-start self-stretch sm:p-5 p-4 !pb-0">
        <HomeTotalPortfolio />
        <Button variant="popular" className="sm:flex hidden">
          <IconAIMagic />
          Start AI Trading
        </Button>
      </div>
      <div className="relative w-full h-full">
        <PortfolioChart width="100%" height="100%" />
      </div>
    </ProtectedCardContainer>
  );
}
