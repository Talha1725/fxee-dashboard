"use client";

import React from "react";
import * as motion from "motion/react-client";

import { fadeInLeftView, fadeInRightView } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export default function HIWTextContainer({
  children,
  className,
  isReversed,
}: {
  children: React.ReactNode;
  className?: string;
  isReversed?: boolean;
}) {
  return (
    <motion.div
      className={cn(
        "relative flex-[1_0_0] self-stretch flex flex-col items-start gap-5 p-5 min-h-[270px] lg:min-h-auto overflow-hidden",
        className
      )}
      {...(isReversed ? fadeInLeftView : fadeInRightView)}
    >
      {children}
    </motion.div>
  );
}
