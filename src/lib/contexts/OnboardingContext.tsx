"use client";

import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlanType } from '@/types/common';

interface OnboardingContextType {
  selectedPlan: PlanType | null;
  setSelectedPlan: (plan: PlanType) => void;
  selectedAddOns: string[];
  setSelectedAddOns: (addOns: string[]) => void;
  selectPlanAndNavigate: (plan: PlanType) => void;
  clearOnboardingData: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const router = useRouter();

  const selectPlanAndNavigate = (plan: PlanType) => {
    setSelectedPlan(plan);
    
    // Navigate based on plan type
    if (plan === "Free") {
      router.push("/thanks");
    } else {
      router.push("/onboard/2");
    }
  };

  const clearOnboardingData = () => {
    setSelectedPlan(null);
    setSelectedAddOns([]);
  };

  return (
    <OnboardingContext.Provider value={{ 
      selectedPlan, 
      setSelectedPlan, 
      selectedAddOns, 
      setSelectedAddOns,
      selectPlanAndNavigate,
      clearOnboardingData
    }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
