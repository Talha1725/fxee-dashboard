"use client";

import React from "react";

import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInDownView } from "@/lib/motion-variants";

export default function SupportHIWHead() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      {...fadeInDownView}
    >
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%]">
        How It Works
      </LandingTitle>
      <LandingDescription className="text-center">
        Built for Real Traders. Trusted by Thousands. Designed for Your Success.
      </LandingDescription>
    </motion.div>
  );
}
