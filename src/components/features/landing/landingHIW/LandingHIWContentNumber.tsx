import { cn } from "@/lib/utils";
import React from "react";
import { HeroNumber, HeroNumberShadow } from "@/components/ui/typography";

export default function LandingHIWContentNumber({
  number,
  hiw=false
}: {
  number: string;
  hiw?: boolean;
}) {
  return (
    <React.Fragment>
      <div className={`absolute ${hiw? "bottom-0 -right-20" :"-bottom-10 -right-20"} lg:bottom-0 lg:left-[46px] select-none font-regular`}>
        <svg
          width="200"
          height="145"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[67px] lg:text-[116px]"
        >
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0.3"
              gradientTransform="rotate(17)"
            >
              <stop stopColor="#0276DB" offset="0.1437" />
              <stop stopColor="#3EDC81" offset="0.8205" />
            </linearGradient>
          </defs>
          <g>
            <text
              id="text"
              y="100"
              fontFamily="var(--font-satoshi-bold), sans-serif"
              fontWeight="bold"
              strokeWidth="1.2"
              stroke="url(#gradient)"
              fill="none"
              letterSpacing="-2.32px"
            >
              {number}
            </text>
          </g>
        </svg>
      </div>
      <div className={`absolute ${hiw? "bottom-2 right-7" :"-bottom-8 right-7"} lg:bottom-0 lg:left-[46px] bg-popular-gradient bg-clip-text text-transparent blur-[42px]`}>
        <HeroNumber>{number}</HeroNumber>
      </div>
      <HeroNumberShadow
        className={cn(
          `absolute ${hiw? "-bottom-2 -right-22" :"-bottom-12 -right-22"} lg:bottom-0 lg:left-[46px]`,
          number === "01" && "-right-10"
        )}
      >
        {number}
      </HeroNumberShadow>
    </React.Fragment>
  );
}
