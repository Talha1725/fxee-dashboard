"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import OnboardSummaryItem from "@/components/features/onboard/OnboardSummaryItem";
import { Title24 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useOnboarding } from "@/lib/contexts/OnboardingContext";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { RootState } from "@/lib/redux/store";
import { showToast } from "@/lib/utils/toast";

export default function ContractContent() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const { selectedPlan, selectedAddOns } = useOnboarding();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleProceedToPayment = () => {
    if (!isTermsAccepted) {
      showToast.error("Please accept the Terms & Privacy Policy to proceed.");
      return;
    }
    router.push("/onboard/5");
  };

  // Get the selected plan configuration
  const planConfig = selectedPlan ? SUBSCRIPTION_PLANS.find(plan => plan.type === selectedPlan) : null;

  // Generate dynamic contract data
  const contractId = `CONTRACT-${Date.now().toString().slice(-6)}-${Math.random().toString().slice(-6)}`;
  const currentDate = new Date().toLocaleDateString("en-US", { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentTime = new Date().toLocaleTimeString("en-US", { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  // Add-ons data with prices
  const ADD_ONS_DATA = [
    {
      value: "metaapi-monthly",
      title: "Extra MetaAPI Trade Simulation Account ($29/month per account)",
      price: 29
    },
    {
      value: "metaapi-reset", 
      title: "Extra MetaAPI Trade Simulation Account ($10/ pre reset)",
      price: 10
    },
    {
      value: "metaapi-tool",
      title: "Extra MetaAPI Trade Simulation Account ($9.99/month per tool)", 
      price: 9.99
    },
    {
      value: "ai-uses",
      title: "Extra MetaAPI Trade Simulation Account ($10 for 10 additional AI uses)",
      price: 10
    },
    {
      value: "fxee-tokens",
      title: "ETH Token Top-Up ($50 = 500 FXEE tokens)",
      price: 50
    }
  ];

  // Calculate selected add-ons total
  const selectedAddOnsData = ADD_ONS_DATA.filter(addOn => selectedAddOns.includes(addOn.value));
  const addOnsTotal = selectedAddOnsData.reduce((sum, addOn) => sum + addOn.price, 0);

  return (
    <div className="w-full max-w-[1080px] flex flex-col lg:flex-row lg:items-start gap-5">
      <div className="flex flex-col gap-5 items-start flex-[1_0_0]">
        <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
          <OnboardSummaryItem
            title="Contract ID"
            value={contractId}
          />
          <OnboardSummaryItem
            title="Date & Time"
            value={`${currentDate} ${currentTime}`}
          />
        </OnboardCardContainer>
        <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
          <Title24 className="text-black dark:text-white">Client Information</Title24>
          <OnboardSummaryItem 
            title="Name" 
            value={user?.fullName || "Not provided"} 
          />
          <OnboardSummaryItem 
            title="Email" 
            value={user?.email || "Not provided"} 
          />
          <OnboardSummaryItem 
            title="Phone" 
            value={user?.phoneNumber || "Not provided"} 
          />
        </OnboardCardContainer>
        <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
          <Title24 className="text-black dark:text-white">Selected Plan</Title24>
          <OnboardSummaryItem 
            title="Plan" 
            value={planConfig ? `${planConfig.title} $${planConfig.price}/month` : "No plan selected"} 
          />
          <OnboardSummaryItem 
            title="Cost" 
            value={planConfig ? `$${planConfig.price}.00` : "$0.00"} 
          />
          <OnboardSummaryItem title="Tax" value="$0.00" />
          <OnboardSummaryItem title="Payment Method" value="Card Payment" />
        </OnboardCardContainer>
        {selectedAddOnsData.length > 0 && (
          <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
            <Title24 className="text-black dark:text-white">Add-Ons</Title24>
            {selectedAddOnsData.map((addOn) => (
              <OnboardSummaryItem
                key={addOn.value}
                title={addOn.title}
                value={`$${addOn.price.toFixed(2)}`}
              />
            ))}
          </OnboardCardContainer>
        )}
      </div>
      <OnboardCardContainer className="flex-[1_0_0] self-start bg-white dark:bg-white/5 z-50 w-full lg:w-auto">
        <Title24 className="text-black dark:text-white">Client's Details Confirmation</Title24>
        <OnboardSummaryItem 
          title="Name" 
          value={user?.fullName || "Not provided"} 
        />
        <OnboardSummaryItem 
          title="Email" 
          value={user?.email || "Not provided"} 
        />
        <OnboardSummaryItem 
          title="Phone" 
          value={user?.phoneNumber || "Not provided"} 
        />
        <div className="flex items-center gap-[5px]">
          <Checkbox 
            className="border-green-gradient border-none bg-[#EDF2FF] dark:bg-transparent" 
            checked={isTermsAccepted}
            onCheckedChange={(checked) => setIsTermsAccepted(checked as boolean)}
          />
          <p className="text-[12px] dark:text-white/60 text-black/60 liga font-regular font-normal tracking-[-0.072px]">
            By proceeding, you agree to our{" "}
            <span className="text-foreground underline">Terms</span> &{" "}
            <span className="text-foreground underline">Privacy Policy.</span>
          </p>
        </div>
        <Button
          variant="fancy"
          onClick={handleProceedToPayment}
          className="w-full"
          disabled={!isTermsAccepted}
        >
          Proceed to Payment
        </Button>
      </OnboardCardContainer>
    </div>
  );
}
