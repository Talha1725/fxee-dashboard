"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUpView } from "@/lib/motion-variants";

export default function LandingATCHead() {
  return (
    <motion.div className="flex flex-col items-center gap-5" {...fadeInUpView}>
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%] text-landing-title-black-gradient">
        FXEE as Your AI Trading Companion
      </LandingTitle>
      <div className="text-black text-[20px] sm:text-[24px] text-center font-regular font-medium tracking-[-0.48px]">
        The All-in-One AI Trading Simulator
      </div>
      <LandingDescription className="text-center text-black/40 md:w-[700px]">
        AI suggests entries, TP/SL, lot sizes based on indicators: RSI, MA,
        Fibonacci, sentiment Trade probability, stop-loss optimizer, portfolio
        split suggestions<br></br>AI draws patterns + highlights volatility
        zones
      </LandingDescription>
    </motion.div>
  );
}
