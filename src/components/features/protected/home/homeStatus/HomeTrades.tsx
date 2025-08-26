"use client";
import React, { useRef, useState, useEffect } from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTradesItem from "@/components/features/protected/home/homeStatus/HomeTradesItem";
import { Separator } from "@/components/ui/separator";
import { Text18 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ChevronRight } from "lucide-react";
import { useGetDailyRecommendationsQuery } from "@/lib/redux/features/recommendations/recommendationsApi";

export default function HomeTrades({ className }: { className?: string }) {
  const { theme } = useTheme();
  const { data: dailyRecommendations, error, isLoading } = useGetDailyRecommendationsQuery();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px tolerance
      setCanScrollRight(!isAtEnd);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Check initial position
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <ProtectedCardContainer
      className={`flex-[1_0_0] self-stretch relative ${
        theme === "dark"
          ? "bg-card-green-gradient"
          : "bg-card-green-gradient-light"
      } border-none ${className}`}
    >
      <button 
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        className={`absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer transition-opacity duration-200 ${
          canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
        }`}
      >
        <ChevronRight className="w-8 h-8 text-white/70" />
      </button>
      <div className="flex self-stretch">
        <Text18 className="font-satoshi-medium text-white">
          AI Recommended Trades
        </Text18>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex items-start gap-5 flex-[1_0_0] self-stretch overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {dailyRecommendations?.data ? (
          dailyRecommendations.data.map((recommendation, index) => (
            <React.Fragment key={recommendation.id}>
              <HomeTradesItem 
                recommendation={recommendation}
                long={recommendation.direction === "Long"}
              />
              {index < dailyRecommendations.data.length - 1 && (
                <Separator orientation="vertical" className="h-full bg-white/5" />
              )}
            </React.Fragment>
          ))
        ) : (
          <>
            <HomeTradesItem long={true} />
            <Separator orientation="vertical" className="h-full bg-white/5" />
            <HomeTradesItem long={false} />
            <Separator orientation="vertical" className="h-full bg-white/5" />
            <HomeTradesItem long={true} />
            <Separator orientation="vertical" className="h-full bg-white/5" />
            <HomeTradesItem long={false} />
          </>
        )}
      </div>
    </ProtectedCardContainer>
  );
}
