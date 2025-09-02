import React from "react";

import LandingButton from "@/components/features/landing/LandingButton";
import LandingPricingPlanItem from "@/components/features/landing/landingPricing/LandingPricingPlanItem";
import { Separator } from "@/components/ui/separator";
import { IconLandingBtn1 } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { PlanItemType } from "@/types/common";
import { PricingText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function LandingPricingPlan({
  item,
  className,
  isActive,
  onClick,
}: {
  item: PlanItemType;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const ButtonText = item.type === "Free" ? "Start Free Trial" : "Select Plan";

  return (
    <div
      className={cn(
        `flex flex-col items-center gap-5 p-5 flex-[1_0_0] self-stretch border border-white/20 rounded-md min-w-[300px] bg-white/5`,
        className,
        isActive && "bg-white/10"
      )}
    >
      <div className="flex flex-col justify-between items-center gap-6 flex-[1_0_0] self-stretch">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="h-[40px] dark:text-white/40 text-black/40 text-[12px] font-satoshi-medium tracking-[0.36px] uppercase">
            {item.fitfor}
          </p>
          <div className="flex items-center gap-2.5 self-stretch">
            <PricingText className="text-center">${item.price}</PricingText>
          </div>
          <p className="flex-[1_0_0] text-white/90 text-[18px] sm:text-[20px] font-satoshi-medium tracking-[-0.4px]">
            {item.title}
          </p>
          


          <Separator className="bg-gradient-to-r from-white/20 to-transparent" />
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            {item.items.map((value, index) => (
              <LandingPricingPlanItem text={value} key={index} />
            ))}
          </div>
        </div>
        <Button
          variant={"white"}
          onClick={onClick}
          className="w-full font-satoshi-medium"
        >
          {ButtonText}
        </Button>
      </div>
    </div>
  );
}
