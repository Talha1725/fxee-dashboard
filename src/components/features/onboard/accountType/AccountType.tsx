import React from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import AccountTypePlan from "@/components/features/onboard/accountType/AccountTypePlan";

export default function AccountType() {
  return (
    <OnboardContentContainer>
      <OnboardContentHeader
        title="Pricing"
        description="Select Subscription Plan"
      />
      <AccountTypePlan />
    </OnboardContentContainer>
  );
}
