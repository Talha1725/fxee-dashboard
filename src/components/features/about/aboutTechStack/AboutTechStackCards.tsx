import React from "react";

import AboutTechStackCard from "@/components/features/about/aboutTechStack/AboutTechStackCard";
import Image from "next/image";
import AiModel from "@/public/images/ai-modal.svg"
import PatternDetection from "@/public/images/detection.svg"
import Overlay from "@/public/images/overlay.svg"
import Planner from "@/public/images/planner.svg"

export default function AboutTechStackCards() {
  return (
    <div className="flex justify-center items-center gap-5 sm:gap-10 self-stretch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 self-stretch">
        <AboutTechStackCard
          title="AI Models"
          description="Advanced AI models trained on historical price action"
          children={
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-[90%] md:w-[80%] md:translate-y-10 translate-y-0">
              <Image src={AiModel} alt="About Tech Stack" className="w-full object-cover" />
            </div>
          }
        />
        <AboutTechStackCard
          title="Pattern Detection"
          description="Chart pattern recognition using machine learning"
          children={
              <Image src={PatternDetection} alt="About Tech Stack" className="w-[330px] md:w-[100%] mx-auto md:translate-x-10 translate-y-5 md:translate-y-0 z-[999]" />
          }
        />
        <AboutTechStackCard
          title="Live Overlays"
          description="Real-time analysis overlays (support/resistance, Fibonacci, RSI, etc.)"
          children={
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-[90%]">
              <Image src={Overlay} alt="About Tech Stack" className="w-full object-cover" />
            </div>
             
          }
        />
        <AboutTechStackCard
          title="Trade Planner"
          description="Proprietary trade plan generation based on risk-goal alignment"
          children={
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-[80%]">
              <Image src={Planner} alt="About Tech Stack" className="w-full object-cover z-50" />
            </div>
             
          }
        />
      </div>
    </div>
  );
}
