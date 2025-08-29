"use client";

import React, { useState } from "react";

import LandingPricingPlan from "@/components/features/landing/landingPricing/LandingPricingPlan";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { PlanType } from "@/types/common";

export default function LandingPricingPlans() {
  const [plan, setPlan] = useState<PlanType>("Pro");

  return (
    <div className="flex items-start flex-wrap w-full md:w-[800px] xl:w-[1200px] transition duration-700">
      {SUBSCRIPTION_PLANS.map((item, index) => (
        <LandingPricingPlan
          item={item}
          key={index}
          isActive={item.type === plan}
          onClick={() => setPlan(item.type)}
          className={`${index == 1 ? "border-gradient-left" : "border-gradient-right"}`}
        />
      ))}
    </div>
  );
}
