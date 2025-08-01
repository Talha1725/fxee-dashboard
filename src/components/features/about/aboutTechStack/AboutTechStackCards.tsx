import React from "react";

import AboutTechStackCard from "@/components/features/about/aboutTechStack/AboutTechStackCard";

export default function AboutTechStackCards() {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-10 self-stretch">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 sm:gap-10 self-stretch">
        <AboutTechStackCard
          title="AI Models"
          description="Advanced AI models trained on historical price action"
        />
        <AboutTechStackCard
          title="Pattern Detection"
          description="Chart pattern recognition using machine learning"
        />
      </div>
    </div>
  );
}
