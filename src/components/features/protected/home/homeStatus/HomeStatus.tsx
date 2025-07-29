import React from "react";

import HomePortfolio from "@/components/features/protected/home/homeStatus/HomePortfolio";
import HomeTrades from "@/components/features/protected/home/homeStatus/HomeTrades";

export default function HomeStatus() {
  return (
    <div className="flex flex-col db:flex-row items-start gap-5 self-stretch">
      <HomePortfolio />
      <HomeTrades />
    </div>
  );
}
