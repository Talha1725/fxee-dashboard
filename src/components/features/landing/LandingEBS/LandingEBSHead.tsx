"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUpView } from "@/lib/motion-variants";
import { EllipsLight } from "@/components/ui/icon";

export default function LandingEBSHead() {
  return (
<motion.div className="flex flex-col items-center gap-5 relative" {...fadeInUpView}>
      <LandingTitle className="text-center tracking-[-3.6px] leading-[120%] text-white lg:w-[70%]">
      The Engine Behind Smarter Trading Decisions      </LandingTitle>
      <LandingDescription className="text-center !text-white/40 lg:w-[55%]">
      Unlike basic “AI chart overlays” or simple ChatGPT-powered bots, FXEE’s backend is a purpose-built intelligence hub.
      </LandingDescription>
    </motion.div>
  );
}
