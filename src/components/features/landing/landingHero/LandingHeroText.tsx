"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUp } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePricingNavigation } from "@/lib/utils/navigationUtils";

export default function LandingHeroText() {
  const router = useRouter();
  const { navigateToPricing } = usePricingNavigation();
  return (
    <motion.div
      {...fadeInUp}
      className="flex flex-col item-center gap-5 flex-[1_0_0] self-stretch pt-12.5 pb-0 xl:py-12.5"
    >
      <LandingTitle className="text-center text-[64px] font-satoshi-medium min-[576px]:leading-[90px] leading-[70px]">
      World’s First AI Trading <span className="text-gradient">Companion</span>
      </LandingTitle>
      <LandingDescription className="w-full max-w-[620px] mx-auto !text-white/50 text-center">
      The most advanced AI-powered trading simulator for forex, crypto, and indices. Trade smarter, train harder, and pass prop firm challenges with precision.
      </LandingDescription>
      <div className="flex justify-center items-start gap-2.5 sm:gap-5">
       <Button variant={'white'} onClick={() => router.push('/signup')} className="font-satoshi-medium px-4 w-1/2 sm:w-auto h-[42px] text-[16px]">
       Start Trading Now
       </Button>
       <Button 
         variant={'white'} 
         onClick={navigateToPricing}
         className="font-satoshi-medium px-4 w-1/2 sm:w-auto h-[42px] text-[16px] bg-transparent text-white border-white hover:bg-white hover:text-black"
       >
       View Pricing
       </Button>
      </div>
    </motion.div>
  );
}
