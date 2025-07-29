import * as React from "react";

import OnboardNav from "@/components/features/onboard/OnboardNav";
import OnboardPattern from "@/components/features/onboard/OnboardPattern";
import OnboardContainer from "@/components/features/onboard/OnboardContainer";
import OnboardBackButton from "@/components/features/onboard/OnboardBackButton";
import Subscription from "@/components/features/onboard/subscription/Subscription";
import AddOns from "@/components/features/onboard/addons/AddOns";
import Checkout from "@/components/features/onboard/checkout/Checkout";
import Contract from "@/components/features/onboard/contract/Contract";
import AccountType from "@/components/features/onboard/accountType/AccountType";
import Broker from "@/components/features/onboard/broker/Broker";

export default async function page({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const content = (() => {
    switch (step) {
      case "1":
        return <Subscription />;
      case "2":
        return <AddOns />;
      case "3":
        return <Checkout />;
      case "4":
        return <Contract />;
      case "5":
        return <AccountType />;
      case "6":
        return <Broker />;
      default:
        break;
    }
  })();

  return (
    <React.Fragment>
      <OnboardNav step={step} isOnboard={true} />
      <OnboardContainer>
        <OnboardPattern />
        <OnboardBackButton step={step} />
        {content}
      </OnboardContainer>
    </React.Fragment>
  );
}
