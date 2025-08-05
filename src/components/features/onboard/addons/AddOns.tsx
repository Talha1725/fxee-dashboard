import React from "react";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import AddOnsPlan from "@/components/features/onboard/addons/AddOnsPlan";

export default function AddOns() {
  return (
    <OnboardContentContainer>
      <OnboardContentHeader title="Add-ons" description="Select Add-Ons" />
      <AddOnsPlan />
    </OnboardContentContainer>
  );
}
