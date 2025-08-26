"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

import { Text12 } from "@/components/ui/typography";

interface DashboardAPLSliderProps {
  value?: number;
  onValueChange?: (value: number) => void;
}

export default function DashboardAPLSlider({ 
  value = 33, 
  onValueChange 
}: DashboardAPLSliderProps) {
  // Ensure value is always defined and within bounds
  const currentValue = typeof value === 'number' ? Math.max(0, Math.min(100, value)) : 33;
  
  const handleValueChange = (values: number[]) => {
    onValueChange?.(values[0]);
  };

  return (
    <div className="flex items-center gap-2.5 self-stretch">
      <SliderPrimitive.Root
        value={[currentValue]}
        onValueChange={handleValueChange}
        max={100}
        step={1}
        className="relative flex w-full touch-none items-center select-none"
      >
        <SliderPrimitive.Track className="bg-white dark:bg-[#ffffff21] relative grow overflow-hidden rounded-full h-3 w-full">
          <SliderPrimitive.Range className="bg-white dark:bg-[#FFFFFF21] absolute h-full w-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="bg-white dark:bg-[#ffffff11] border-black dark:border-white ring-ring/50 block size-4 shrink-0 rounded-full border-[4px] shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      <Text12 className="w-5 text-black dark:text-white font-satoshi-medium">{currentValue}%</Text12>
    </div>
  );
}
