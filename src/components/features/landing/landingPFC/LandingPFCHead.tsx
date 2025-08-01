"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInDownView } from "@/lib/motion-variants";

export default function LandingPFCHead() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5 w-full lg:w-[950px] mx-auto"
      {...fadeInDownView}
    >
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%]">
        Pass Prop Firm Challenges with AI-Powered Precision
      </LandingTitle>
      <LandingDescription className="text-center">
        Fast-Track Your Path to Funded Trading Accounts with FXEE’s Expert Tools
      </LandingDescription>
    </motion.div>
  );
}
