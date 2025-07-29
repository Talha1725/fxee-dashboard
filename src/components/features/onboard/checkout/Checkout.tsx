import React from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import CheckoutPlan from "@/components/features/onboard/checkout/CheckoutPlan";

export default function Checkout() {
  return (
    <OnboardContentContainer>
      <OnboardContentHeader title="Payment Method" description="Check Out" />
      <CheckoutPlan />
    </OnboardContentContainer>
  );
}
