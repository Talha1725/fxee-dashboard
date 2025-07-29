import React from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import BrokerPlan from "@/components/features/onboard/broker/BrokerPlan";

export default function Broker() {
  return (
    <OnboardContentContainer>
      <OnboardContentHeader
        title="Payment"
        description="Connect Broker Account"
      />
      <BrokerPlan />
    </OnboardContentContainer>
  );
}
