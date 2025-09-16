"use client";
import React, { useRef, useState, useEffect } from "react";

import ProtectedCardContainer from "@/components/features/protected/ProtectedCardContainer";
import HomeTradesItem from "@/components/features/protected/home/homeStatus/HomeTradesItem";
import { Separator } from "@/components/ui/separator";
import { Text18 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ChevronRight } from "lucide-react";
import { useGetDailyRecommendationsQuery } from "@/lib/redux/features/recommendations/recommendationsApi";
import { useGetUsageLimitsQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import { useLocalization } from "@/components/localization-provider";

export default function HomeTrades({ 
  className, 
  scrollToRecommendationId 
}: { 
  className?: string;
  scrollToRecommendationId?: number | null;
}) {
  const { theme } = useTheme();
  const { t } = useLocalization();
  const {
    data: dailyRecommendations,
    error,
    isLoading,
  } = useGetDailyRecommendationsQuery();
  
  // Get usage limits for recommendation analysis
  const { data: usageLimitsResponse } = useGetUsageLimitsQuery();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [skippedCards, setSkippedCards] = useState<any[]>([]);
  const [activeCards, setActiveCards] = useState<any[]>([]);
  const [skippingCardId, setSkippingCardId] = useState<string | null>(null);
  const [restoringCardId, setRestoringCardId] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px tolerance
      setCanScrollRight(!isAtEnd);
    }
  };

  // Initialize active cards when data loads
  useEffect(() => {
    if (dailyRecommendations?.data) {
      // Filter out cards that are already skipped
      const skippedIds = skippedCards.map((card: any) => card.id);
      const filteredCards = dailyRecommendations.data.filter(
        (card: any) => !skippedIds.includes(card.id)
      );
      setActiveCards(filteredCards);
    }
  }, [dailyRecommendations, skippedCards]);

  // Load skipped cards from localStorage on component mount
  useEffect(() => {
    const savedSkippedCards = localStorage.getItem("skippedCards");
    if (savedSkippedCards) {
      try {
        setSkippedCards(JSON.parse(savedSkippedCards));
      } catch (error) {
        console.error("Error loading skipped cards from localStorage:", error);
      }
    }
  }, []);

  // Save skipped cards to localStorage whenever it changes
  useEffect(() => {
    if (skippedCards.length > 0) {
      localStorage.setItem("skippedCards", JSON.stringify(skippedCards));
    } else {
      localStorage.removeItem("skippedCards");
    }
  }, [skippedCards]);

  const handleSkipCard = (cardId: string) => {
    // Start animation
    setSkippingCardId(cardId);

    const cardToSkip = activeCards.find(
      (card) => card.id?.toString() === cardId || card.id === cardId
    );
    if (cardToSkip) {
      // Wait for animation to complete before moving card
      setTimeout(() => {
        setActiveCards((prev) =>
          prev.filter(
            (card) => card.id?.toString() !== cardId && card.id !== cardId
          )
        );
        setSkippedCards((prev) => [...prev, cardToSkip]);
        setSkippingCardId(null);
      }, 300);
    } else if (cardId.startsWith("fallback-")) {
      // Handle fallback cards
      const fallbackCard = {
        id: cardId,
        symbol: "DEMO",
        direction:
          cardId.includes("1") || cardId.includes("3") ? "Long" : "Short",
        title: "Demo trade recommendation",
      };
      setTimeout(() => {
        setSkippedCards((prev) => [...prev, fallbackCard]);
        setSkippingCardId(null);
      }, 300);
    }
  };

  const handleRestoreCard = (cardId: string) => {
    setRestoringCardId(cardId);

    const cardToRestore = skippedCards.find((card) => card.id === cardId);
    if (cardToRestore) {
      // Wait for animation to complete before moving card
      setTimeout(() => {
        setSkippedCards((prev) => prev.filter((card) => card.id !== cardId));
        setActiveCards((prev) => [...prev, cardToRestore]);
        setRestoringCardId(null);
      }, 300);
    }
  };

  // Auto-scroll to target recommendation when data loads
  useEffect(() => {
    if (scrollToRecommendationId && activeCards.length > 0 && scrollContainerRef.current) {
      const targetIndex = activeCards.findIndex(
        (card: any) => card.id === scrollToRecommendationId
      );
      
      if (targetIndex !== -1) {
        // Calculate scroll position - each card is approximately 300px wide + 20px gap
        const scrollPosition = targetIndex * 320; // 300px card + 20px gap
        
        // Scroll to the target recommendation
        setTimeout(() => {
          scrollContainerRef.current?.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [scrollToRecommendationId, activeCards]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Check initial position

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

  return (
    <ProtectedCardContainer
      className={`flex-[1_0_0] self-stretch relative ${
        theme === "dark"
          ? "bg-card-green-gradient"
          : "bg-card-green-gradient-light"
      } border-none min-h-[460px] sm:min-h-[481px] ${className} overflow-hidden`}
    >
      {isAnalyzing && (
        <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 w-full bg-black/20 backdrop-blur-lg z-[999]">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
          <p className="text-white text-sm font-satoshi-medium">{t("analyzing_recommendation")}</p>
        </div>
      )}
      <button
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        className={`absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer transition-opacity duration-200 ${
          canScrollRight ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <ChevronRight className="w-8 h-8 text-white/70" />
      </button>
      <div className="flex justify-between items-center self-stretch">
        <Text18 className="font-satoshi-medium text-white">
          {t("ai_recommended_trades")}
        </Text18>
        <div className="text-sm text-white/70 font-satoshi-medium">
          {usageLimitsResponse?.data?.usageLimits?.recommendation_analysis ? 
            usageLimitsResponse.data.usageLimits.recommendation_analysis.limit === 9999
              ? `∞ ${t("analysis")}`
              : `${usageLimitsResponse.data.usageLimits.recommendation_analysis.remaining}/${usageLimitsResponse.data.usageLimits.recommendation_analysis.limit} ${t("left")}`
            : "Loading..."
          }
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex items-start h-full gap-5 flex-[1_0_0] self-stretch overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Active Cards */}
        {activeCards.length > 0 ? (
          activeCards.map((recommendation, index) => {
            const isSkipping =
              skippingCardId ===
              (recommendation.id?.toString() || index.toString());
            return (
              <React.Fragment key={recommendation.id}>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isSkipping
                      ? "transform translate-x-full opacity-0 scale-95"
                      : "transform translate-x-0 opacity-100 scale-100"
                  } h-full`}
                >
                  <HomeTradesItem
                    recommendation={recommendation}
                    long={recommendation.direction === "Long"}
                    onSkip={() =>
                      handleSkipCard(
                        recommendation.id?.toString() || index.toString()
                      )
                    }
                    onAnalyzeStart={() => setIsAnalyzing(true)}
                    onAnalyzeEnd={() => setIsAnalyzing(false)}
                  />
                </div>
                {index < activeCards.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-full bg-white/5"
                  />
                )}
              </React.Fragment>
            );
          })
        ) : (
          <>
            <HomeTradesItem
              long={true}
              onSkip={() => handleSkipCard("fallback-1")}
            />
            <Separator orientation="vertical" className="h-full bg-white/5" />
            <HomeTradesItem
              long={false}
              onSkip={() => handleSkipCard("fallback-2")}
            />
            <Separator orientation="vertical" className="h-full bg-white/5" />
            <HomeTradesItem
              long={true}
              onSkip={() => handleSkipCard("fallback-3")}
            />
            <Separator orientation="vertical" className="h-full bg-white/5" />
            <HomeTradesItem
              long={false}
              onSkip={() => handleSkipCard("fallback-4")}
            />
          </>
        )}

        {/* Skipped Cards Stack */}
        {skippedCards.length > 0 && (
          <>
            <Separator orientation="vertical" className="h-full bg-white/10" />
            <div className="flex gap-5 h-full">
              {/* <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <Text18 className="font-satoshi-medium text-white">Skipped Trades</Text18>
                <div className="px-3 py-1 bg-orange-400/20 text-orange-300 text-sm font-satoshi-medium rounded-full">
                  {skippedCards.length}
                </div>
              </div> */}
              {skippedCards.map((card, index) => {
                const isRestoring = restoringCardId === card.id;
                return (
                  <React.Fragment key={card.id}>
                    <div
                      className={`relative h-full transition-all duration-300 ease-in-out ${
                        isRestoring
                          ? "transform -translate-x-full opacity-0 scale-95"
                          : "transform translate-x-0 opacity-100 scale-100"
                      }`}
                    >
                      <HomeTradesItem
                        recommendation={card}
                        long={card.direction === "Long"}
                        skipped={true}
                        handleRestoreCard={() => handleRestoreCard(card.id)}
                      />
                    </div>
                    {index < skippedCards.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="w-full bg-white/5"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </>
        )}
      </div>
    </ProtectedCardContainer>
  );
}
