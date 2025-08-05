"use client";

import { useState } from "react";

import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import CheckoutCardItem from "@/components/features/onboard/checkout/CheckoutCardItem";
import { Title24 } from "@/components/ui/typography";

export default function CheckoutCard() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("Crypto");
  return (
    <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Title24>Select Payment Method</Title24>
        <CheckoutCardItem
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          title="Crypto"
          price="399"
        />
        <CheckoutCardItem
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          title="Card"
          price="399"
        />
      </div>
    </OnboardCardContainer>
  );
}
