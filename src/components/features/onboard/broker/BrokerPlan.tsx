"use client";
import React from "react";

import BrokerInput from "@/components/features/onboard/broker/BrokerInput";
import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import BrokerSelection from "@/components/features/onboard/broker/BrokerSelection";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function BrokerPlan() {
  const { theme } = useTheme();
  return (
    <OnboardCardContainer
      className={`w-full max-w-[420px] gap-4 ${
        theme === "dark"
          ? "bg-dark-radial-gradient"
          : "bg-light-green-gradient border-green-gradient"
      } mx-auto z-50`}
    >
      <BrokerSelection />
      <BrokerInput />
      <Button variant="fancy" className="w-full">
        Connect
      </Button>
      {/* <div className="absolute bottom-0 right-[16px] left-[16px]">
          <div className="h-[4px] w-full rounded-tr-lg rounded-tl-lg overflow-hidden bg-popular-gradient"></div>
        </div> */}
    </OnboardCardContainer>
  );
}
