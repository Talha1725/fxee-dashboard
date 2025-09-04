"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import LandingPricingPlan from "@/components/features/landing/landingPricing/LandingPricingPlan";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { PlanType } from "@/types/common";

export default function LandingPricingPlans() {
  const [plan, setPlan] = useState<PlanType>("Pro");
  const router = useRouter();

  const handlePlanSelect = (selectedPlan: PlanType) => {
    setPlan(selectedPlan);
    // Store selected plan in localStorage
    localStorage.setItem('selectedPricingPlan', selectedPlan);
    // Route to registration page
    router.push('/signup');
  };

  return (
    <div className="flex items-start flex-wrap w-full gap-5 md:w-[800px] xl:w-[1150px] transition duration-700 mt-5">
      {SUBSCRIPTION_PLANS.map((item, index) => (
        <LandingPricingPlan
          item={item}
          key={index}
          isActive={item.type === plan}
          onClick={() => handlePlanSelect(item.type)}
        />
      ))}
    </div>
  );
}
