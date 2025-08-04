import React from "react";

import { cn } from "@/lib/utils";

import LandingBg1Image from "@/public/images/landing-bg-1.png";

export default function LandingBg1({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute w-full h-full", className)}
      style={{
        background: `
          linear-gradient(189deg, rgba(0, 0, 0, 0.00) 30.84%, #000 61.17%), 
          linear-gradient(180deg, #0276DB 0%, #3EDC81 49.27%), 
          url(${LandingBg1Image.src}) lightgray 50% / cover no-repeat
        `,
        backgroundBlendMode: "normal, color, normal",
      }}
    ></div>
  );
}
