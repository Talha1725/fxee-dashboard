import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";

export default function LandingJOTHead() {
  return (
    <div className="flex flex-col items-center self-stretch gap-5">
      <LandingTitle className="w-full md:w-[640px] text-center text-[32px] sm:text-[44px] !tracking-[-1.76px] leading-[120%]">
        Stay Ahead of the Markets with Real-Time Insights
      </LandingTitle>
      <LandingDescription className="!text-white text-center text-[16px] sm:text-[18px] tracking-[-0.36px] leading-[150%]">
        Join Our Telegram Channel for Daily Trading Signals, AI Alerts, and
        Insider Content
      </LandingDescription>
    </div>
  );
}
