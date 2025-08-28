"use client";

import React from "react";
import { useRouter } from "next/navigation";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import CheckoutPlan from "@/components/features/onboard/checkout/CheckoutPlan";
import { useOnboarding } from "@/lib/contexts/OnboardingContext";

export default function Checkout() {
  const { selectedPlan } = useOnboarding();
  const router = useRouter();

  // If no plan is selected, redirect to subscription page
  React.useEffect(() => {
    if (!selectedPlan) {
      router.push("/onboard/1");
    }
  }, [selectedPlan, router]);

  // Show loading or redirect if no plan selected
  if (!selectedPlan) {
    return (
      <OnboardContentContainer>
        <OnboardContentHeader title="Payment Method" description="Check Out" />
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Redirecting to plan selection...</p>
        </div>
      </OnboardContentContainer>
    );
  }

  return (
    <OnboardContentContainer>
      <OnboardContentHeader title="Payment Method" description="Check Out" />
      <CheckoutPlan />
    </OnboardContentContainer>
  );
}
