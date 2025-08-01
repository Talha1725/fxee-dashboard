"use client";

import React from "react";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
import { fadeInLeftView, fadeInRightView } from "@/lib/motion-variants";

export default function LandingHIWContentTextContainer({
  children,
  className,
  reverseOnDesktop,
}: {
  children: React.ReactNode;
  className?: string;
  reverseOnDesktop?: boolean;
}) {
  const motionVariant = reverseOnDesktop ? fadeInLeftView : fadeInRightView;

  return (
    <motion.div
      {...motionVariant}
      className={cn(
        "relative flex-[1_0_0] self-stretch flex flex-col items-start gap-5 p-5 min-w-full lg:min-w-[500px] min-h-[170px] lg:min-h-auto overflow-hidden shrink-0",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
