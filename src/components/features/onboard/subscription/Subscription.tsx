"use client";

import React, { useState } from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import SubscriptionPlan from "@/components/features/onboard/subscription/SubscriptionPlan";
import { PlanType } from "@/types/common";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import OnboardBackButton from "../OnboardBackButton";

export default function Subscription() {
  const [plan, setPlan] = useState<PlanType | null>(null);
  const router = useRouter();
  return (
    <OnboardContentContainer>
      <OnboardBackButton step="1" />
      <OnboardContentHeader
        title="Pricing"
        description="Select Subscription Plan"
      />
      <SubscriptionPlan plan={plan} setPlan={setPlan} />
    </OnboardContentContainer>
  );
}
