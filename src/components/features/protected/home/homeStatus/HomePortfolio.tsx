"use client";

import React, { useEffect, useState } from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTotalPortfolio from "@/components/features/protected/home/homeStatus/HomeTotalPortfolio";
import { Button } from "@/components/ui/button";
import { IconAIMagic } from "@/components/ui/icon";
import PortfolioChart from "../PortfolioChart";

export default function HomePortfolio() {
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const chartHeight = (viewportWidth ?? 0) > 880 ? 300 : 240;

  return (
    <ProtectedCardContainer className="!p-0 w-full db:max-w-[397px] bg-white dark:bg-gradient-to-b from-[#F5F5F5] to-[#F5F5F5] dark:from-[#1A1A1A] dark:to-[#1A1A1A] shadow-subtle !pb-2">
      <div className="flex justify-between items-start self-stretch sm:p-5 p-4 !pb-0">
        <HomeTotalPortfolio />
        <Button variant="popular" className="sm:flex hidden text-white font-medium">
          <IconAIMagic />
          Start AI Trading
        </Button>
      </div>
      <div className="relative w-full h-full">
        <PortfolioChart height={chartHeight} />
      </div>
    </ProtectedCardContainer>
  );
}
