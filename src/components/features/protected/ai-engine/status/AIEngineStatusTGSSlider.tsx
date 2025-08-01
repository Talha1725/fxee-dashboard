"use client";

import React, { useEffect, useState } from "react";

import { Text12, Text14 } from "@/components/ui/typography";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function AIEngineStatusTGSSlider({
  title,
  value,
  color = "green",
}: {
  title: string;
  value: number;
  color?: "green" | "danger";
}) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="flex flex-col items-start gap-2.5 py-3.5 px-3 self-stretch flex-[1_0_0] rounded-[10px] border border-white/2 bg-white/3">
      <div className="flex items-center gap-2.5 self-stretch">
        <Text14 className="flex-[1_0_0]">{title}</Text14>
        <Text12
          className={cn("text-green", color === "danger" && "text-danger")}
        >
          ${value.toLocaleString()}
        </Text12>
      </div>
      <div className="flex items-center gap-2.5 self-stretch">
        <Slider
          value={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          borderColor={color === "danger" ? "border-danger" : "border-green"}
        />
        <Text12
          className={cn(
            "text-green text-right w-9",
            color === "danger" && "text-danger"
          )}
        >
          {sliderValue}%
        </Text12>
      </div>
    </div>
  );
}
