"use client";

import { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

import { Text12 } from "@/components/ui/typography";

export default function DashboardAPLSlider() {
  const [value, setValue] = useState([33]);

  return (
    <div className="flex items-center gap-2.5 self-stretch">
      <SliderPrimitive.Root
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="relative flex w-full touch-none items-center select-none"
      >
        <SliderPrimitive.Track className="bg-white dark:bg-[#ffffff2a] relative grow overflow-hidden rounded-full h-3 w-full">
          <SliderPrimitive.Range className="bg-white dark:bg-[#FFFFFF2a] absolute h-full w-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="bg-white dark:bg-[#ffffff11] border-black dark:border-white ring-ring/50 block size-3 shrink-0 rounded-full border-[3px] shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      <Text12 className="w-5 text-black dark:text-white font-satoshi-medium">{value[0]}%</Text12>
    </div>
  );
}
