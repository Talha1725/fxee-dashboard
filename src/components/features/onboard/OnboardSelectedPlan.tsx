"use client";

import OnboardSelectedPlanContainer from "@/components/features/onboard/OnboardSelectedPlanContainer";
import SubscriptionPlanCard from "@/components/features/onboard/subscription/SubscriptionPlanCard";
import { Button } from "@/components/ui/button";
import { Title24 } from "@/components/ui/typography";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { ChevronLeftIcon } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function OnboardSelectedPlan() {
  const { theme } = useTheme();
  return (
    <OnboardSelectedPlanContainer>
      <Title24>Selected Subscription Plan</Title24>
      <SubscriptionPlanCard
        key={SUBSCRIPTION_PLANS[3].type}
        title={SUBSCRIPTION_PLANS[3].title}
        fitfor={SUBSCRIPTION_PLANS[3].fitfor}
        description={SUBSCRIPTION_PLANS[3].description}
        price={SUBSCRIPTION_PLANS[3].price}
        items={SUBSCRIPTION_PLANS[3].items}
        onClick={() => {}}
        selected={true}
        className="pt-4"
      />
    </OnboardSelectedPlanContainer>
  );
}
