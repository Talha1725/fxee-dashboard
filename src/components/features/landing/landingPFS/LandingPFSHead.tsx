"use client";

import React from "react";

import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInDownView } from "@/lib/motion-variants";

export default function LandingPFSHead() {
  return (
    <motion.div className="flex flex-col items-center gap-5" {...fadeInDownView}>
      <LandingTitle className="text-center leading-[120%]">
        FXEE for Prop Firm Success
      </LandingTitle>
      <LandingDescription className="text-center">
        Your AI Advantage for Passing Challenges
      </LandingDescription>
    </motion.div>
  );
}
