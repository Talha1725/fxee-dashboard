import React, { useState, useEffect } from "react";

import LandingWhyFxeeCard from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCard";
import proposedTrade from "@/public/images/proposed-trade.svg";
import transparentBg from "@/public/images/why-fxee-transparent.svg"
import Image from "next/image";

export default function LandingWhyFxeeCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string>('ai-trade');
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const cardIds = ['ai-trade', 'prop-firm', 'trade-execution', 'ai-dashboard'];

  // Autoplay functionality
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveCard(prev => {
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
    <div className="flex flex-col md:flex-row gap-10 items-start self-stretch xl:w-[84%] mx-auto">
      <div className="flex flex-col items-center md:w-1/2">
        <LandingWhyFxeeCard
          title="AI Trade Advisor"
          description="AI suggests optimal trades or builds custom trade plans (profit target, risk limit, timeframe) - Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci).
"
          onMouseEnter={() => handleMouseEnter('ai-trade')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'ai-trade'}
        />
        <LandingWhyFxeeCard
          title="Prop Firm Passing Tool"
          description="Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci) helping people passs their prop firm challenges - 92% passing rate."
          onMouseEnter={() => handleMouseEnter('prop-firm')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'prop-firm'}
        />
        <LandingWhyFxeeCard
          title="Simulated Trade Execution"
          description="Place and manage trades directly on our custom FXEE dashboard (no broker needed)."
          onMouseEnter={() => handleMouseEnter('trade-execution')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'trade-execution'}
        />
        <LandingWhyFxeeCard
          title="AI-Powered Dashboard"
          description="AI tools for sentiment, news impact, portfolio balance, risk alerts (Premium upgrade). Premium ai analysis with 86% accuracy rate. "
          onMouseEnter={() => handleMouseEnter('ai-dashboard')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'ai-dashboard'}
        />
      </div>
      <div className="border border-white/20 w-full md:w-[550px] h-[300px] min-[405px]:h-[350px] min-[505px]:h-[400px] sm:h-[500px] md:h-[400px] lg:h-[468px] rounded-md bg-white/5 relative overflow-hidden">
      <Image src={transparentBg} alt="transparent bg" className="absolute w-full bottom-0 left-0 z-50" />
      <Image src={proposedTrade} alt="Base Chart" className="w-[85%] min-[505px]:w-[70%] sm:w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2" />

      </div>
    </div>
  );
}
