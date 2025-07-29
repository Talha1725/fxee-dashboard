"use client";

import { useRouter } from "next/navigation";

import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import OnboardSummaryItem from "@/components/features/onboard/OnboardSummaryItem";
import { Button } from "@/components/ui/button";
import { Text18, Title24 } from "@/components/ui/typography";

export default function OnboardSummary({
  isCrypto,
  isCheckout,
}: {
  isCrypto?: boolean;
  isCheckout?: boolean;
}) {
  const router = useRouter();
  return (
    <OnboardCardContainer>
      <Title24>Summary</Title24>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <OnboardSummaryItem title="Plan" value="VIP Plan $399/month" />
        <OnboardSummaryItem title="Cost" value="$399.00" />
        {isCrypto && (
          <OnboardSummaryItem
            title="Crypto Discount"
            value="-$79.80"
            isDiscount
          />
        )}
        <OnboardSummaryItem title="Tax" value="$0.00" />
        <div className="flex flex-col items-start gap-[5px] self-stretch">
          <Text18>Add-Ons</Text18>
          <OnboardSummaryItem
            title="Extra MetaAPI Trade Simulation Account ($29/month per account)"
            value="$29.00"
          />
          <OnboardSummaryItem
            title="ETH Token Top-Up ($50 = 500 FXEE tokens)"
            value="$50.00"
          />
        </div>
      </div>
      <Text18 className="text-right w-full">
        Total <Title24>{!isCrypto ? "$449.00" : "$399.20"}</Title24>
      </Text18>
      <Button
        variant="fancy"
        onClick={() => {
          if (isCheckout) {
            router.push("/onboard/4");
          } else {
            router.push("/onboard/3");
          }
        }}
        className="w-full"
      >
        {isCheckout ? "View Contract" : "Checkout"}
      </Button>
    </OnboardCardContainer>
  );
}
