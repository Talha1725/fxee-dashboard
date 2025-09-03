import React, { memo } from "react";

// Constants
const GRADIENT_COLORS = {
  light: { from: "#0276DB", to: "#3EDC81" },
  dark: { from: "#114FEE", to: "#15B0F8" }
} as const;

const SVG_TEXT_CONFIG = {
  fontSize: "150",
  fontWeight: "700",
  fillOpacity: "0.4",
  strokeWidth: "3",
  fontFamily: "Satoshi-Bold, Satoshi, Arial, sans-serif"
} as const;

interface TutorialNumberSVGProps {
  number: string;
  theme: string | null;
}

export const TutorialNumberSVG = memo<TutorialNumberSVGProps>(({ number, theme }) => {
  const gradientId = `gradStroke-${number}`;
  const fillColor = (theme === "dark") ? "black" : "white";
  
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={GRADIENT_COLORS.light.from} />
          <stop offset="100%" stopColor={GRADIENT_COLORS.light.to} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={SVG_TEXT_CONFIG.fontSize}
        fontWeight={SVG_TEXT_CONFIG.fontWeight}
        fill={fillColor}
        fillOpacity={SVG_TEXT_CONFIG.fillOpacity}
        stroke={`url(#${gradientId})`}
        strokeWidth={SVG_TEXT_CONFIG.strokeWidth}
        fontFamily={SVG_TEXT_CONFIG.fontFamily}
      >
        {number}
      </text>
    </svg>
  );
});

TutorialNumberSVG.displayName = 'TutorialNumberSVG';
