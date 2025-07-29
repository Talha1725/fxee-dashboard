import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import CopyTradingAccounts from "./accounts/CopyTradingAccounts";
import CopyTradingBenefits from "./benefits/CopyTradingBenefits";
import CopyTradingHowTo from "./how-to/CopyTradingHowTo";

export default function CopyTrading() {
  return (
    <ProtectedContentContainer className="sm:gap-10">
      <CopyTradingAccounts />
      <CopyTradingBenefits />
      <CopyTradingHowTo />
    </ProtectedContentContainer>
  );
}
