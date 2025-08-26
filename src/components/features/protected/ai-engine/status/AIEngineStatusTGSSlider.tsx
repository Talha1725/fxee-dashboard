"use client";

import React, { useEffect, useState } from "react";

import { Text12, Text14 } from "@/components/ui/typography";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function AIEngineStatusTGSSlider({
  title,
  value,
  color = "green",
  disabled = false,
}: {
  title: string;
  value: number;
  color?: "green" | "danger";
  disabled?: boolean;
}) {
  const [sliderValue, setSliderValue] = useState(0);

  // Update slider position when value prop changes
  useEffect(() => {
    // Convert value to percentage (assuming max value is 1000 for reasonable scale)
    const percentage = Math.min((value / 1000) * 100, 100);
    setSliderValue(Math.round(percentage));
  }, [value]);

  return (
    <div className={cn(
      "flex flex-col items-start gap-2.5 py-3.5 px-3 self-stretch flex-[1_0_0] rounded-[10px] border border-white/2 bg-dark-gradient",
      disabled && "cursor-not-allowed"
    )}>
      <div className="flex items-center gap-2.5 self-stretch">
        <Text14 className="flex-[1_0_0] text-white dark:text-white">{title}</Text14>
        <Text12
          className={cn(
            "text-[#3EDC81] dark:text-[#3EDC81]", 
            color === "danger" && "text-[#EA4335] dark:text-[#EA4335]"
          )}
        >
          ${value.toLocaleString()}
        </Text12>
      </div>
      <div className="flex items-center gap-2.5 self-stretch">
        <Slider
          value={[sliderValue]}
          onValueChange={disabled ? undefined : (value) => setSliderValue(value[0])}
          borderColor={color === "danger" ? "border-danger" : "border-green"}
          disabled={disabled}
        />
        <Text12
          className={cn(
            "text-[#3EDC81] dark:text-[#3EDC81] text-right w-9",
            color === "danger" && "text-[#EA4335] dark:text-[#EA4335]"
          )}
        >
          {sliderValue}%
        </Text12>
      </div>
    </div>
  );
}
