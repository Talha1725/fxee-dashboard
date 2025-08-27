"use client";

import { useOnboarding } from "@/lib/contexts/OnboardingContext";
import OnboardSelectedPlanContainer from "@/components/features/onboard/OnboardSelectedPlanContainer";
import SubscriptionPlanCard from "@/components/features/onboard/subscription/SubscriptionPlanCard";
import { Title24 } from "@/components/ui/typography";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";

export default function OnboardSelectedPlan() {
  const { selectedPlan } = useOnboarding();
  
  if (!selectedPlan) {
    return null;
  }

  // Find the selected plan configuration
  const planConfig = SUBSCRIPTION_PLANS.find(plan => plan.type === selectedPlan);
  
  if (!planConfig) {
    return null;
  }

  return (
    <OnboardSelectedPlanContainer className="bg-white dark:bg-white/5 z-50">
      <Title24 className="text-black dark:text-white">Selected Subscription Plan</Title24>
      <SubscriptionPlanCard
        key={planConfig.type}
        title={planConfig.title}
        fitfor={planConfig.fitfor}
        description={planConfig.description}
        price={planConfig.price}
        items={planConfig.items}
        onClick={() => {}}
        selected={true}
        className="pt-4"
        alignLeft={true}
        onboard={true}
      />
    </OnboardSelectedPlanContainer>
  );
}
