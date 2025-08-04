"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingDescription from "@/components/features/landing/LandingDescription";
import LandingTitle from "@/components/features/landing/LandingTitle";
import { fadeInDownView } from "@/lib/motion-variants";

export default function LandingReviewHead() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5 w-full lg:w-[950px] mx-auto"
      {...fadeInDownView}
    >
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%]">
        Real Traders, Real Results
      </LandingTitle>
      <LandingDescription className="text-center">
        See How Traders Like You Are Passing Prop Firm Challenges and Profiting
      </LandingDescription>
    </motion.div>
  );
}
