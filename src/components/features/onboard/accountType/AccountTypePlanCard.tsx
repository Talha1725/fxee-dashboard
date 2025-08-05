"use client";

import React from "react";
import { useRouter } from "next/navigation";

import SubscriptionPlanHeader from "@/components/features/onboard/subscription/SubscriptionPlanHeader";
import SubscriptionPlanItem from "@/components/features/onboard/subscription/SubscriptionPlanItem";
import OnboardPopularPattern from "@/components/features/onboard/OnboardPopularPattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function AccountTypePlanCard({
  item,
}: {
  item: {
    title: string;
    price: string;
    items: string[];
  };
}) {
  const isPopular = item.title !== "Virtual Trading Environment";
  const router = useRouter();
  const {theme} = useTheme()
  return (
    <div
      className={cn(
        `relative flex flex-col items-center gap-4 flex-[1_0_0] self-stretch px-6 pt-[50px] pb-6 rounded-2xl dark:border border-white/30 ${theme === "dark" ? "bg-dark-radial-gradient" : "bg-blue-gradient"} z-50`,
        isPopular && `${theme === "dark" ? "bg-green-radial-gradient" : "bg-light-green-gradient"} border-green-gradient`
      )}
    >
      {isPopular && <OnboardPopularPattern title="Most Popular" />}
      <div className="flex flex-col items-center gap-5 self-stretch">
        <SubscriptionPlanHeader title={item.title} price={item.price} />
        <Button
          variant={isPopular ? "fancy" : "default"}
          onClick={() => {
            router.push("/onboard/6");
          }}
          className={`w-full ${isPopular ? "" : "border-black/20 dark:border-white/20"}`}
        >
          Select
        </Button>
        <div className="flex flex-col flex-[1_0_0] items-start shrink-0 gap-2.5 self-stretch">
          {item.items.map((item, index) => (
            <SubscriptionPlanItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
