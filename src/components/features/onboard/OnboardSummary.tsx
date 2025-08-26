"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import OnboardSummaryItem from "@/components/features/onboard/OnboardSummaryItem";
import { Button } from "@/components/ui/button";
import { Text18, Title24 } from "@/components/ui/typography";

// Custom hook to handle window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default function OnboardSummary({
  isCrypto,
  isCheckout,
}: {
  isCrypto?: boolean;
  isCheckout?: boolean;
}) {
  const router = useRouter();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
      <Title24 className="text-black dark:text-white">Summary</Title24>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <OnboardSummaryItem title="Plan" value="VIP Plan $399/month" />
        <OnboardSummaryItem title="Cost" value="$399.00" />
        {isCrypto && (
          <OnboardSummaryItem
            title="Crypto Discount"
            value="-$79.80"
            isDiscount
          />
        )}
        <OnboardSummaryItem title="Tax" value="$0.00" />
        <div className="flex flex-col items-start gap-[5px] self-stretch">
          <Text18>Add-Ons</Text18>
          <OnboardSummaryItem
            title={isMobile ? "Extra MetaAPI Trade Simulation Account..." : "Extra MetaAPI Trade Simulation Account ($29/month per account)"}
            value="$29.00"
          />
          <OnboardSummaryItem
            title={isMobile ? "ETH Token Top-Up ($50 = 500 FXEE..." : "ETH Token Top-Up ($50 = 500 FXEE tokens)"}
            value="$50.00"
          />
        </div>
      </div>
      <Text18 className="text-right w-full flex justify-end gap-1 items-end leading-1 my-4">
        Total <Title24 className="text-nowrap text-black dark:text-white">{!isCrypto ? "$449.00" : "$399.20"}</Title24>
      </Text18>
      <Button
        variant="fancy"
        onClick={() => {
          if (isCheckout) {
            router.push("/onboard/4");
          } else {
            router.push("/onboard/3");
          }
        }}
        className="w-full"
      >
        {isCheckout ? "View Contract" : "Checkout"}
      </Button>
    </OnboardCardContainer>
  );
}
