"use client";

import React from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import SubscriptionPlan from "@/components/features/onboard/subscription/SubscriptionPlan";
import { useOnboarding } from "@/lib/contexts/OnboardingContext";
import OnboardBackButton from "../OnboardBackButton";

export default function Subscription() {
  const { selectedPlan, setSelectedPlan } = useOnboarding();
  
  return (
    <OnboardContentContainer>
      <OnboardBackButton step="1" />
      <OnboardContentHeader
        title="Pricing"
        description="Select Subscription Plan"
      />
      <SubscriptionPlan plan={selectedPlan} setPlan={setSelectedPlan} />
    </OnboardContentContainer>
  );
}
