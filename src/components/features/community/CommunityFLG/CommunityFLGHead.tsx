"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import { fadeInDownView } from "@/lib/motion-variants";

export default function CommunityFLGHead() {
  return (
    <motion.div {...fadeInDownView}>
      <LandingTitle className="max-w-[950px] text-center lg:tracking-[-3.6px] tracking-[-2px]">
        Follow Us. Learn <br className="block sm:hidden" />
        With Us. <br />
        Grow With Us.
      </LandingTitle>
    </motion.div>
  );
}
