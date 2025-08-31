import React, { memo } from "react";

// Constants
const LAYOUT_CONFIG = {
  backgroundNumber: {
    fontSize: "229.24px",
    opacity: "0.05"
  }
} as const;

interface TutorialBackgroundNumberProps {
  number: string;
}

export const TutorialBackgroundNumber = memo<TutorialBackgroundNumberProps>(({ number }) => (
  <span 
    className="absolute bottom-1 lg:bottom-11 -left-[10px] sm:left-[46px] md:left-[80px] lg:left-[100px] font-satoshi-bold font-bold leading-[100%] tracking-[-0.02em] bg-gradient-to-b from-black/10 to-black dark:from-white/10 dark:to-white bg-clip-text text-transparent select-none"
    style={{
      fontSize: LAYOUT_CONFIG.backgroundNumber.fontSize,
      opacity: LAYOUT_CONFIG.backgroundNumber.opacity
    }}
  >
    {number}
  </span>
));

TutorialBackgroundNumber.displayName = 'TutorialBackgroundNumber';
