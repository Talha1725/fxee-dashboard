import React, { useState, useEffect, useRef } from "react";

import LandingWhyFxeeCard from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCard";
import proposedTrade from "@/public/images/proposed-trade.svg";
import simulateTrade from "@/public/images/simulate-trade-home.svg";
import aiDashboard from "@/public/images/ai-powered-home.svg";
import propFirm from "@/public/images/ai-control-home.svg";
import transparentBg from "@/public/images/why-fxee-transparent.svg"
import Image from "next/image";

export default function LandingWhyFxeeCards() {
  const [, setHoveredCard] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string>('ai-trade');
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardIds = ['ai-trade', 'prop-firm', 'trade-execution', 'ai-dashboard'];

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Autoplay functionality - only when in view and not user interacting
  useEffect(() => {
    if (!isInView || isUserInteracting) return;

    let intervalId: NodeJS.Timeout;

    // Small delay before starting animations when coming into view
    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        setActiveCard(prev => {
          const currentIndex = cardIds.indexOf(prev);
          const nextIndex = (currentIndex + 1) % cardIds.length;
          return cardIds[nextIndex];
        });
      }, 4000); // Change card every 4 seconds
    }, 1000); // 1 second delay before starting

    return () => {
      clearTimeout(startDelay);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isInView, isUserInteracting, cardIds]);

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
    <div ref={containerRef} className="flex flex-col md:flex-row gap-10 items-start self-stretch xl:w-[84%] mx-auto">
      <div className="flex flex-col items-center md:w-1/2">
        <LandingWhyFxeeCard
          title="AI Trade Advisor"
          description="AI suggests optimal trades or builds custom trade plans (profit target, risk limit, timeframe) - Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci)."
          onMouseEnter={() => handleMouseEnter('ai-trade')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'ai-trade'}
        />
        <LandingWhyFxeeCard
          title="Prop Firm Passing Tool"
          description="Step-by-step system designed to fast-track evaluation success — AI-optimized strategies, progress tracking, and built-in rules compliance to help you secure funding."
          onMouseEnter={() => handleMouseEnter('prop-firm')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'prop-firm'}
        />
        <LandingWhyFxeeCard
          title="Simulated Trade Execution"
          description="Risk-free practice with live-like conditions — execute trades in real-time simulations with auto-tracking of PnL, drawdown, and strategy performance."
          onMouseEnter={() => handleMouseEnter('trade-execution')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'trade-execution'}
        />
        <LandingWhyFxeeCard
          title="AI-Powered Dashboard"
          description="All-in-one control hub — real-time analytics, trade journaling, performance insights, and AI-driven recommendations to refine your edge."
          onMouseEnter={() => handleMouseEnter('ai-dashboard')}
          onMouseLeave={handleMouseLeave}
          isActive={activeCard === 'ai-dashboard'}
        />
      </div>
      <div className="border border-white/20 w-full md:w-[550px] h-[300px] min-[405px]:h-[350px] min-[505px]:h-[400px] sm:h-[500px] md:h-[400px] lg:h-[468px] rounded-md bg-white/5 relative overflow-hidden" style={{ contain: 'layout style paint' }}>
        <Image src={transparentBg} alt="transparent bg" className="absolute w-full bottom-0 left-0 z-50" />
        
        {/* AI Trade Advisor */}
        <Image 
          src={proposedTrade} 
          alt="AI Trade Advisor" 
          className={`w-[85%] min-[505px]:w-[70%] sm:w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 ${
            activeCard === 'ai-trade' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'opacity',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransition: 'opacity 0.3s linear',
            transition: 'opacity 0.3s linear',
            WebkitPerspective: '1000px',
            perspective: '1000px'
          }}
        />
        
        {/* Prop Firm Passing Tool */}
        <Image 
          src={propFirm} 
          alt="Prop Firm Passing Tool" 
          className={`w-[85%] min-[505px]:w-[70%] sm:w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 ${
            activeCard === 'prop-firm' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'opacity',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransition: 'opacity 0.3s linear',
            transition: 'opacity 0.3s linear',
            WebkitPerspective: '1000px',
            perspective: '1000px'
          }}
        />
        
        {/* Simulated Trade Execution */}
        <Image 
          src={simulateTrade} 
          alt="Simulated Trade Execution" 
          className={`w-[85%] min-[505px]:w-[70%] sm:w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 ${
            activeCard === 'trade-execution' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'opacity',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransition: 'opacity 0.3s linear',
            transition: 'opacity 0.3s linear',
            WebkitPerspective: '1000px',
            perspective: '1000px'
          }}
        />
        
        {/* AI-Powered Dashboard */}
        <Image 
          src={aiDashboard} 
          alt="AI-Powered Dashboard" 
          className={`w-[85%] min-[505px]:w-[70%] sm:w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 ${
            activeCard === 'ai-dashboard' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'opacity',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransition: 'opacity 0.3s linear',
            transition: 'opacity 0.3s linear',
            WebkitPerspective: '1000px',
            perspective: '1000px'
          }}
        />
      </div>
    </div>
  );
}
