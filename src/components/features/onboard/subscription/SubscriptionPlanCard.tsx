import React from "react";

import SubscriptionPlanHeader from "@/components/features/onboard/subscription/SubscriptionPlanHeader";
import OnboardPopularPattern from "@/components/features/onboard/OnboardPopularPattern";
import SubscriptionCardContainer from "@/components/features/onboard/subscription/SubscriptionCardContainer";
import SubscriptionPlanItem from "@/components/features/onboard/subscription/SubscriptionPlanItem";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconCheck } from "@/components/ui/icon";

interface SubscriptionPlanCardProps {
  title: string;
  description: string;
  fitfor: string;
  price: number;
  items: string[];
  onClick: () => void;
  selected: boolean;
  className?: string;
}

export default function SubscriptionPlanCard({
  title,
  description,
  fitfor,
  price,
  items,
  onClick,
  selected,
  className,
}: SubscriptionPlanCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center self-stretch flex-[1_0_0] gap-4 pt-[50px] px-4 pb-4 rounded-2xl relative",
        className,
        title === "Pro"
          ? "bg-green-radial-gradient border-green-gradient"
          : "bg-dark-radial-gradient border border-white/30"
      )}
    >
      {title === "Pro" && <OnboardPopularPattern title="Most Popular" />}
      <SubscriptionCardContainer fitfor={fitfor}>
        <SubscriptionPlanHeader
          title={title}
          price={`$${price}/month`}
          description={description}
        />
        <Button
          onClick={onClick}
          variant={title === "Pro" || selected ? "fancy" : "default"}
          className="w-full"
        >
          {selected ? "Selected" : "Select"}
          {selected && <IconCheck width={20} height={20} />}
        </Button>
        <div className="flex flex-col flex-[1_0_0] items-start shrink-0 gap-2.5 self-stretch">
          {items.map((item, index) => (
            <SubscriptionPlanItem key={index} item={item} />
          ))}
        </div>
        {title === "Pro" && (
          <div className="absolute bottom-0 right-0 left-0">
            <div className="h-[4px] w-[214px] rounded-r bg-popular-gradient mx-auto"></div>
          </div>
        )}
      </SubscriptionCardContainer>
    </div>
  );
}
