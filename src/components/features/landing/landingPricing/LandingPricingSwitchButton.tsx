import { cn } from "@/lib/utils";
import React from "react";

export default function LandingPricingSwitchButton({
  title,
  isActive,
  onClick,
  className
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "rounded-none flex flex-col items-start gap-5 p-5 bg-landing-pricing-switch cursor-pointer",
        className,
        isActive && "bg-landing-card-green-gradient border-gradient-blue-green"
      )}
      onClick={onClick}
    >
      <p className="text-white/90 text-[16px] sm:text-[22px] font-regular font-[700] tracking-[-0.44px]">
        {title}
      </p>
    </button>
  );
}
