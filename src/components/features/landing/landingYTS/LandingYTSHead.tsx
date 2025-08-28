"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUpView } from "@/lib/motion-variants";

export default function LandingYTSHead() {
  return (
    <motion.div className="flex flex-col items-center gap-5" {...fadeInUpView}>
      <LandingTitle className="w-full lg:w-[950px] text-center tracking-[-3.6px] leading-[120%] text-landing-title-black-gradient">
        Let AI Do the Heavy Lifting, You Trade Smarter
      </LandingTitle>
      <LandingDescription className="text-center !text-black/40 w-full lg:w-[700px]">
        Discover How Our AI-Powered Platform Simplifies Trading for Maximum
        Results. FXEE’s AI analyzes markets in real-time, giving you an edge in
        forex, crypto, and beyond.
      </LandingDescription>
    </motion.div>
  );
}
