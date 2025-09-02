"use client";

import { OnboardingProvider } from "@/lib/contexts/OnboardingContext";

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnboardingProvider>
      <div className="flex flex-col items-center self-stretch flex-[1_0_0] overflow-x-hidden">
        {children}
      </div>
    </OnboardingProvider>
  );
}
