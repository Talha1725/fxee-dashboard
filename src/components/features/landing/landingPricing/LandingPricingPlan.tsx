import React from "react";

import LandingButton from "@/components/features/landing/LandingButton";
import LandingPricingPlanItem from "@/components/features/landing/landingPricing/LandingPricingPlanItem";
import { Separator } from "@/components/ui/separator";
import { IconLandingBtn1 } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { PlanItemType } from "@/types/common";
import { PricingText } from "@/components/ui/typography";

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
        `flex flex-col items-center gap-5 p-5 flex-[1_0_0] self-stretch ${window.innerWidth<640 ? "bg-hero-card-thr-gradient" : "bg-hero-card-gradient"} border-grey-linear min-w-[300px] rounded-none border-green-gradient-0`,
        className,
        isActive && "bg-landing-card-green-gradient border-green-gradient"
      )}
    >
      <div className="flex flex-col justify-between items-center gap-6 flex-[1_0_0] self-stretch">
        <div className="flex flex-col items-start gap-6 self-stretch">
          <p className="h-[40px] dark:text-white/40 text-black/40 text-[12px] font-space-grotesk font-[700] tracking-[0.36px] uppercase">
            {item.fitfor}
          </p>
          <div className="flex items-center gap-2.5 self-stretch">
            <p className="flex-[1_0_0] text-white/90 text-[18px] sm:text-[20px] font-regular font-[700] tracking-[-0.4px]">
              {item.title}
            </p>
            <PricingText className="text-center">${item.price}</PricingText>
          </div>
          <div className="text-white/40 text-[12px] sm:text-[14px] font-regular font-normal tracking-[-0.28px] self-stretch">
            {item.description}
          </div>
          <Separator className="bg-landing-hiw-separator-gradient" />
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            {item.items.map((value, index) => (
              <LandingPricingPlanItem text={value} key={index} />
            ))}
          </div>
        </div>
        {isActive ? (
          <LandingButton
            color="black"
            icon={
              <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
            }
            text={ButtonText}
            className="w-full"
          />
        ) : (
          <LandingButton
            color="white"
            text={ButtonText}
            className="w-full border border-white/20"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
}
