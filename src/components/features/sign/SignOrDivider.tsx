import React from "react";
import { Caption } from "@/components/ui/typography";

export default function SignOrDivider() {
  return (
    <div className="flex items-center justify-center gap-2.5 self-stretch">
      <div className="w-full h-px bg-black/10 dark:bg-white/30" />
      <Caption className="leading-normal tracking-[0.24px] dark:text-white text-black">OR</Caption>
      <div className="w-full h-px bg-black/10 dark:bg-white/30" />
    </div>
  );
}
