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
        "px-6 py-3 rounded-lg text-sm transition-all duration-300 ease-in-out cursor-pointer font-satoshi-medium",
        "border border-transparent",
        isActive 
          ? "bg-gradient-to-b from-white to-white/70 text-black shadow-lg" 
          : "bg-gradient-to-r from-white/10 to-transparent text-gray-300 hover:bg-white hover:text-black border border-white/25",
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
