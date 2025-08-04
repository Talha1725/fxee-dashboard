"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingDescription from "@/components/features/landing/LandingDescription";
import LandingTitle from "@/components/features/landing/LandingTitle";
import { fadeInDownView } from "@/lib/motion-variants";

export default function LandingPricingHead() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5 w-full lg:w-[950px] mx-auto"
      {...fadeInDownView}
    >
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%]">
        Pricing That Powers Your Trading Success
      </LandingTitle>
      <LandingDescription className="text-center">
        Choose the Plan That Fits Your AI Trading Journey
      </LandingDescription>
    </motion.div>
  );
}
