"use client";

import React from "react";
import { useRouter } from "next/navigation";

import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import OnboardSummaryItem from "@/components/features/onboard/OnboardSummaryItem";
import { Title24 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContractContent() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[1080px] flex items-start gap-5">
      <div className="flex flex-col gap-5 items-start flex-[1_0_0]">
        <OnboardCardContainer>
          <OnboardSummaryItem
            title="Contract ID"
            value="CONTRACT-1042158-021548"
          />
          <OnboardSummaryItem
            title="Date & Time"
            value="June 2, 2025 03:45pm"
          />
        </OnboardCardContainer>
        <OnboardCardContainer>
          <Title24>Client Information</Title24>
          <OnboardSummaryItem title="Name" value="Noah Merriby" />
          <OnboardSummaryItem title="Email" value="noah@gmail.com" />
          <OnboardSummaryItem title="Phone" value="+1 561-555-7689" />
        </OnboardCardContainer>
        <OnboardCardContainer>
          <Title24>Selected Plan</Title24>
          <OnboardSummaryItem title="Plan" value="VIP Plan $399/month" />
          <OnboardSummaryItem title="Cost" value="$399.00" />
          <OnboardSummaryItem
            title="Crypto Discount"
            value="-$79.80"
            isDiscount={true}
          />
          <OnboardSummaryItem title="Tax" value="$29.00" />
          <OnboardSummaryItem title="Payment Method" value="Crypto" />
        </OnboardCardContainer>
        <OnboardCardContainer>
          <Title24>Add-Ons</Title24>
          <OnboardSummaryItem
            title="Extra MetaAPI Trade Simulation Account ($29/month per account)"
            value="$29.00"
          />
          <OnboardSummaryItem
            title="ETH Token Top-Up ($50 = 500 FXEE tokens)"
            value="$50.00"
          />
        </OnboardCardContainer>
      </div>
      <OnboardCardContainer className="flex-[1_0_0] self-start">
        <Title24>Client’s Details Confirmation</Title24>
        <OnboardSummaryItem title="Name" value="Noah Merriby" />
        <OnboardSummaryItem title="Email" value="noah@gmail.com" />
        <OnboardSummaryItem title="Phone" value="+1 561-555-7689" />
        <div className="flex items-center gap-[5px]">
          <Checkbox className="border-green-gradient border-none" />
          <p className="text-[12px] text-white/60 liga font-regular font-normal tracking-[-0.072px]">
            By proceeding, you agree to our{" "}
            <span className="text-foreground underline">Terms</span> &{" "}
            <span className="text-foreground underline">Privacy Policy.</span>
          </p>
        </div>
        <Button
          variant="fancy"
          onClick={() => router.push("/onboard/5")}
          className="w-full"
        >
          Proceed to Payment
        </Button>
      </OnboardCardContainer>
    </div>
  );
}
