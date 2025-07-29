import React from "react";
import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import ContractContent from "@/components/features/onboard/contract/ContractContent";

export default function Contract() {
  return (
    <OnboardContentContainer>
      <OnboardContentHeader
        title="Contract"
        description="Service Agreement Contract"
      />
      <ContractContent />
    </OnboardContentContainer>
  );
}
