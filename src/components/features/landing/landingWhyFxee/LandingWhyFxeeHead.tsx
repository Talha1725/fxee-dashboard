"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInDownView } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingWhyFxeeHead() {
  const router = useRouter();
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      {...fadeInDownView}
    >
      <LandingTitle className="text-center">
        Why FXEE is Your Trading Edge
      </LandingTitle>
      <LandingDescription className="text-center">
        From AI Precision to Prop Firm Success, We Empower Traders to Win
      </LandingDescription>
      <Button onClick={() => router.push('/about')} variant={'white'} className="font-satoshi-medium px-4 h-[42px] text-[16px] cursor-pointer">
      Explore All Solutions
       </Button>
    </motion.div>
  );
}
