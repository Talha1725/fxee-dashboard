'use client'

import Link from "next/link";

import OnboardStepIndicator from "@/components/features/onboard/OnboardStepIndicator";

import { IconLogo1 } from "@/components/ui/icon";

export default function OnboardNav({
  step,
  isOnboard,
}: {
  step?: string;
  isOnboard: boolean;
}) {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between gap-6 py-4 sm:py-6 px-5 sm:px-11 border-b-black/10 dark:border-b-white/30 border-b overflow-hidden">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 shrink-0 self-stretch z-10"
      >
        <IconLogo1 className="shrink-0 self-stretch" />
      </Link>
      {isOnboard && <OnboardStepIndicator step={step} />}
     
      <div className="hidden md:flex justify-end items-center gap-2 shrink-0 self-stretch">
        <p className="dark:text-white/80 text-black/80 liga font-regular text-sm leading-5 font-normal tracking-[-0.084px] select-none">
          © 2024 FXEE.AI
        </p>
      </div>
    </div>
  );
}
