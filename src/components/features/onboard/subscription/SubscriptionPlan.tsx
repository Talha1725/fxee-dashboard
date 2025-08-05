"use client";

import React from "react";

import SubscriptionPlanCard from "@/components/features/onboard/subscription/SubscriptionPlanCard";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { PlanType } from "@/types/common";
import { useRouter } from "next/navigation";

export default function SubscriptionPlan({
  plan,
  setPlan,
}: {
  plan: PlanType | null;
  setPlan: (plan: PlanType) => void;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-5 self-stretch px-5 lg:px-0">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[18px] self-stretch">
        {SUBSCRIPTION_PLANS.map((planConfig) => (
          <SubscriptionPlanCard
            key={planConfig.type}
            title={planConfig.title}
            fitfor={planConfig.fitfor}
            description={planConfig.description}
            price={planConfig.price}
            items={planConfig.items}
            onClick={() => {
              setPlan(planConfig.type);
              router.push(`/onboard/2`);
            }}
            selected={plan === planConfig.type}
          />
        ))}
      </div>
      <p className="w-full text-center dark:text-white/80 text-black/80 liga font-regular text-[16px] font-normal tracking-[-0.32px] z-50">
        Prices exclude any applicable taxes.
      </p>
    </div>
  );
}
