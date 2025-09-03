"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUpView } from "@/lib/motion-variants";
import { EllipsLight } from "@/components/ui/icon";

export default function LandingATCHead() {
  return (
    <motion.div className="flex flex-col items-center gap-5 relative" {...fadeInUpView}>
      <EllipsLight className="absolute top-[-100px] md:top-[-300px] -rotate-45 left-[-600px] md:left-[-100px] opacity-50" />
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%] text-white">
        FXEE as Your AI Trading Companion
      </LandingTitle>
      <LandingDescription className="text-center !text-white/40 lg:w-[55%]">
        AI suggests entries, TP/SL, lot sizes based on indicators: RSI, MA,
        Fibonacci, sentiment Trade probability, stop-loss optimizer, portfolio
        split suggestions AI draws patterns + highlights volatility
        zones
      </LandingDescription>
    </motion.div>
  );
}
