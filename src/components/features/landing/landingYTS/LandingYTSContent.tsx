import React from "react";
import bracket from "@/public/images/bracket.png";
import confidencePercentage from "@/public/images/confidence-percentage.svg";
import RangeBar from "@/public/images/range-bar-visu.svg";
import GoldChart from "@/public/images/gold-cahrt.svg";
import riskAnalyzer from "@/public/images/risk-analyzer.svg";
import TrendForecast from "@/public/images/trend-forecast.svg";
import Image from "next/image";

export default function LandingYTSContent() {
  return (
   <div className="flex sm:flex-row flex-col items-center gap-3 sm:gap-0">
     <div className="flex flex-col gap-3 w-full sm:w-auto">
      <Image src={confidencePercentage} alt="bracket" className="w-full sm:w-auto" />
      <Image src={riskAnalyzer} alt="bracket" className="w-full sm:w-auto"/>
     </div>
     <Image src={bracket} alt="bracket" className="sm:block hidden" />
     <div className="rounded-md w-full sm:w-auto">
      <Image src={GoldChart} alt="bracket" className="w-full sm:w-auto" />
     </div>
     <Image src={bracket} alt="bracket" className="rotate-180 sm:block hidden" />
     <div className="flex flex-col gap-3 w-full sm:w-auto">
      <Image src={RangeBar} alt="bracket" className="w-full sm:w-auto" />
      <Image src={TrendForecast} alt="bracket" className="w-full sm:w-auto" />
     </div>
   </div>
  );
}
