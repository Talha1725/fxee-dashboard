"use client";

import React from "react";
import { useRouter } from "next/navigation";

import OnboardContentContainer from "@/components/features/onboard/OnboardContentContainer";
import OnboardContentHeader from "@/components/features/onboard/OnboardContentHeader";
import AddOnsPlan from "@/components/features/onboard/addons/AddOnsPlan";
import { useOnboarding } from "@/lib/contexts/OnboardingContext";

export default function AddOns() {
  const { selectedPlan } = useOnboarding();
  const router = useRouter();

  // If no plan is selected, redirect to subscription page
  // If Free plan is selected, redirect to dashboard
  React.useEffect(() => {
    if (!selectedPlan) {
      router.push("/onboard/1");
    } else if (selectedPlan === "Free") {
      router.push("/dashboard");
    }
  }, [selectedPlan, router]);

  // Show loading or redirect if no plan selected or Free plan
  if (!selectedPlan || selectedPlan === "Free") {
    return (
      <OnboardContentContainer>
        <OnboardContentHeader title="Add-ons" description="Select Add-Ons" />
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">
            {!selectedPlan ? "Redirecting to plan selection..." : "Redirecting to dashboard..."}
          </p>
        </div>
      </OnboardContentContainer>
    );
  }

  return (
    <OnboardContentContainer>
      <OnboardContentHeader title="Add-ons" description="Select Add-Ons" />
      <AddOnsPlan />
    </OnboardContentContainer>
  );
}
