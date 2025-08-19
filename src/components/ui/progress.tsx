"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const [numDots, setNumDots] = React.useState<number>(0);

  React.useEffect(() => {
    const element = overlayRef.current;
    if (!element) return;

    const computeDotCount = () => {
      const availableWidthPx = element.clientWidth;
      const dotDiameterPx = 4; // matches tailwind w-1 h-1 (0.25rem)
      const gapBetweenDotsPx = 8; // spacing between dots
      const dotSpacingPx = dotDiameterPx + gapBetweenDotsPx;
      const calculated = Math.max(2, Math.floor(availableWidthPx / dotSpacingPx));
      setNumDots(calculated);
    };

    computeDotCount();
    const resizeObserver = new ResizeObserver(computeDotCount);
    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "dark:bg-white/20 bg-black/5 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-popular-gradient h-full w-full flex-1 transition-all rounded-full z-50 relative"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      {/* Dots overlay: centered vertically, hidden under filled gradient */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 flex items-center"
      >
        <div className="w-full h-full flex items-center justify-between px-1">
          {Array.from({ length: numDots }).map((_, index) => (
            <span key={index} className="w-[2px] h-[2px] bg-[#454459] rounded-full -z-10" />
          ))}
        </div>
      </div>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
