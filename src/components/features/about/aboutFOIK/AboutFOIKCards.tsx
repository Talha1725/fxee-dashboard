"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import AboutFOIKCard from "@/components/features/about/aboutFOIK/AboutFOIKCard";

import FOIKImage1 from "@/public/images/foik-1.png";
import FOIKImage2 from "@/public/images/foik-2.png";
import FOIKImage3 from "@/public/images/foik-3.png";
import FOIKImage4 from "@/public/images/landing-hiw-2.png";
import LandingWhyFxeeCard from "../../landing/landingWhyFxee/LandingWhyFxeeCard";
import firstKind from "@/public/images/first-kind.svg";

export default function AboutFOIKCards() {
  const [, setHoveredCard] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string>("ai-trade");
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const cardIds = ["ai-trade", "prop-firm", "trade-execution", "ai-dashboard"];

  // Autoplay functionality
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => {
        const currentIndex = cardIds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % cardIds.length;
        return cardIds[nextIndex];
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [isUserInteracting, cardIds]);

  const handleMouseEnter = (cardId: string) => {
    setIsUserInteracting(true);
    setHoveredCard(cardId);
    setActiveCard(cardId);
  };

  const handleMouseLeave = () => {
    setIsUserInteracting(false);
    setHoveredCard(null);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-10 items-center md:items-start self-stretch xl:w-[84%] mx-auto">
      <div className="flex flex-col items-center sm:w-1/2">
        <LandingWhyFxeeCard
          title="Simulation-First Core"
          description="Built entirely around simulation-first architecture."
          onMouseEnter={() => handleMouseEnter("ai-trade")}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === "ai-trade"}
        />
        <LandingWhyFxeeCard
          title="Unified Trading Hub"
          description="Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci) helping people passs their prop firm challenges - 92% passing rate."
          onMouseEnter={() => handleMouseEnter("prop-firm")}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === "prop-firm"}
        />
        <LandingWhyFxeeCard
          title="AI-Powered Insights"
          description="Place and manage trades directly on our custom FXEE dashboard (no broker needed)."
          onMouseEnter={() => handleMouseEnter("trade-execution")}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === "trade-execution"}
        />
        <LandingWhyFxeeCard
          title="Expert-Built System"
          description="AI tools for sentiment, news impact, portfolio balance, risk alerts (Premium upgrade). Premium ai analysis with 86% accuracy rate. "
          onMouseEnter={() => handleMouseEnter("ai-dashboard")}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === "ai-dashboard"}
        />
      </div>
      <div className="w-full sm:w-1/2 h-full">
        <Image src={firstKind} alt="Base Chart" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
