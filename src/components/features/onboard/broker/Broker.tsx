"use client"

import React, { useState } from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import BrokerPlan from "@/components/features/onboard/broker/BrokerPlan";

export default function Broker() {
  const [qrSection, setQrSection] = useState(false);
  return (
    <OnboardContentContainer>
      <OnboardContentHeader
        title="Payment"
        description={`${qrSection ? "Fund Account with Crypto" : "Broker Account"}`}
      />
      <BrokerPlan qrSection={qrSection} setQrSection={setQrSection} />
    </OnboardContentContainer>
  );
}
