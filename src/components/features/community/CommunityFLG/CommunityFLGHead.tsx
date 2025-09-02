"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import { fadeInDownView } from "@/lib/motion-variants";

export default function CommunityFLGHead() {
  return (
    <motion.div {...fadeInDownView}>
      <LandingTitle className="max-w-[950px] text-[55px] text-center leading-[100%]">
        Follow Us.<br className="block md:hidden" /> <span className="block md:hidden">{" "}</span>
        Learn With Us.<br />
        Grow With Us.
      </LandingTitle>
    </motion.div>
  );
}
