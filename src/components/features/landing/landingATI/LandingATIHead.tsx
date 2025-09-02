"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInDownView } from "@/lib/motion-variants";

export default function LandingATIHead() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5 w-full xl:w-[886px] mx-auto"
      {...fadeInDownView}
    >
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%]">
        Powered by the World’s Most Advanced Trading Intelligence
      </LandingTitle>
      <LandingDescription className="text-center">
        Leverage Cutting-Edge AI and Real-Time Data for Unmatched Trading
        Insights
      </LandingDescription>
    </motion.div>
  );
}
