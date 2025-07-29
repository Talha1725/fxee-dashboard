"use client";

import React, { useState } from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import SubscriptionPlan from "@/components/features/onboard/subscription/SubscriptionPlan";
import { PlanType } from "@/types/common";

export default function Subscription() {
  const [plan, setPlan] = useState<PlanType | null>(null);

  return (
    <OnboardContentContainer>
      <OnboardContentHeader
        title="Pricing"
        description="Select Subscription Plan"
      />
      <SubscriptionPlan plan={plan} setPlan={setPlan} />
    </OnboardContentContainer>
  );
}
