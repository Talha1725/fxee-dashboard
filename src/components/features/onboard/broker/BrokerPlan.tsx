import React from "react";

import BrokerInput from "@/components/features/onboard/broker/BrokerInput";
import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import BrokerSelection from "@/components/features/onboard/broker/BrokerSelection";
import { Button } from "@/components/ui/button";

export default function BrokerPlan() {
  return (
    <OnboardCardContainer className="w-full max-w-[420px] gap-4 bg-dark-radial-gradient mx-auto">
      <BrokerSelection />
      <BrokerInput />
      <Button variant="fancy" className="w-full">
        Connect
      </Button>
    </OnboardCardContainer>
  );
}
