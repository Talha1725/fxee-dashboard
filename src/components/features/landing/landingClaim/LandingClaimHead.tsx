"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUpView } from "@/lib/motion-variants";

export default function LandingClaimHead() {
  return (
    <motion.div className="flex flex-col items-center gap-5" {...fadeInUpView}>
      <LandingTitle className="text-[48px] lg:text-[56px] w-full lg:max-w-[600px] text-center tracking-[-3.6px] leading-[120%] font-satoshi-medium text-white">
        Get Started with FXEE — Earn $100 in ETH Instantly
      </LandingTitle>
      <LandingDescription className="text-center !text-white/30 w-full lg:w-[700px]">
        Join FXEE Today and Receive $100 Worth of Ethereum Deposited into Your
        Trading Account
      </LandingDescription>
    </motion.div>
  );
}
