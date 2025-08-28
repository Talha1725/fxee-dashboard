"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import OnboardSummaryItem from "@/components/features/onboard/OnboardSummaryItem";
import { Button } from "@/components/ui/button";
import { Text18, Title24 } from "@/components/ui/typography";
import { useOnboarding } from "@/lib/contexts/OnboardingContext";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { useCreateVIPCheckoutMutation } from "@/lib/redux/features/payments/paymentsApi";
import { toast } from "sonner";

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

// Add-ons data with prices
const ADD_ONS_DATA = [
  {
    value: "metaapi-monthly",
    title: "Extra MetaAPI Trade Simulation Account ($29/month per account)",
    price: 29
  },
  {
    value: "metaapi-reset",
    title: "Extra MetaAPI Trade Simulation Account ($10/ pre reset)",
    price: 10
  },
  {
    value: "metaapi-tool",
    title: "Extra MetaAPI Trade Simulation Account ($9.99/month per tool)",
    price: 9.99
  },
  {
    value: "ai-uses",
    title: "Extra MetaAPI Trade Simulation Account ($10 for 10 additional AI uses)",
    price: 10
  },
  {
    value: "fxee-tokens",
    title: "ETH Token Top-Up ($50 = 500 FXEE tokens)",
    price: 50
  }
];

export default function OnboardSummary({
  isCrypto,
  isCheckout,
}: {
  isCrypto?: boolean;
  isCheckout?: boolean;
}) {
  const router = useRouter();
  const { width } = useWindowSize();
  const { selectedPlan, selectedAddOns } = useOnboarding();
  const isMobile = width < 768;
  const [createVIPCheckout, { isLoading: isCheckoutLoading }] = useCreateVIPCheckoutMutation();

  // Show add-ons section only for VIP plan
  const showAddOns = selectedPlan === "VIP";

  // Get the selected plan configuration
  const planConfig = selectedPlan ? SUBSCRIPTION_PLANS.find(plan => plan.type === selectedPlan) : null;
  const planPrice = planConfig?.price || 0;
  const planTitle = planConfig?.title || "Plan";

  // Calculate add-ons total
  const selectedAddOnsData = ADD_ONS_DATA.filter(addOn => selectedAddOns.includes(addOn.value));
  const addOnsTotal = selectedAddOnsData.reduce((sum, addOn) => sum + addOn.price, 0);

  // Calculate totals
  const subtotal = planPrice + addOnsTotal;
  const total = subtotal; // No crypto discount

  // Remove crypto discount logic
  const shouldShowCryptoDiscount = false;

  const handleCheckout = async () => {
    if (isCheckout && selectedPlan === "VIP") {
      try {
        const result = await createVIPCheckout({
          planId: "VIP",
          metadata: {
            source: "web_app",
            campaign: "onboarding",
            selectedAddOns: selectedAddOns,
            subtotal: subtotal.toString(),
            total: total.toString(),
          },
        }).unwrap();

        // Store trackId in localStorage for later use on thanks page
        if (result.data?.payment?.trackId) {
          localStorage.setItem("paymentTrackId", result.data.payment.trackId);
        }

        // Redirect to checkout URL
        if (result.data?.checkoutUrl) {
          window.location.href = result.data.checkoutUrl;
        } else {
          toast.error("Checkout URL not received. Please try again.");
        }
      } catch (error: any) {
        console.error("Checkout failed:", error);
        toast.error(error.data?.message || "Checkout failed. Please try again.");
      }
    } else if (isCheckout) {
      // For non-VIP plans, redirect to thanks directly
      router.push("/thanks");
    } else {
      router.push("/onboard/3");
    }
  };

  return (
    <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
      <Title24 className="text-black dark:text-white">Summary</Title24>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <OnboardSummaryItem title="Plan" value={`${planTitle} $${planPrice}/month`} />
        <OnboardSummaryItem title="Cost" value={`$${planPrice.toFixed(2)}`} />
        <OnboardSummaryItem title="Tax" value="$0.00" />
        {showAddOns && selectedAddOnsData.length > 0 && (
          <div className="flex flex-col items-start gap-[5px] self-stretch">
            <Text18>Add-Ons</Text18>
            {selectedAddOnsData.map((addOn) => (
              <OnboardSummaryItem
                key={addOn.value}
                title={isMobile ? `${addOn.title.substring(0, 30)}...` : addOn.title}
                value={`$${addOn.price.toFixed(2)}`}
              />
            ))}
          </div>
        )}
      </div>
      <Text18 className="text-right w-full flex justify-end gap-1 items-end leading-1 my-4">
        Total <Title24 className="text-nowrap text-black dark:text-white">${total.toFixed(2)}</Title24>
      </Text18>
      <Button
        variant="fancy"
        onClick={handleCheckout}
        className="w-full"
        disabled={isCheckoutLoading}
      >
        {isCheckoutLoading ? "Processing..." : (isCheckout ? "Checkout" : "View Contract")}
      </Button>
    </OnboardCardContainer>
  );
}
