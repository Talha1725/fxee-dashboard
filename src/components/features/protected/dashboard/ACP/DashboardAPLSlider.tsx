"use client";

import { useState } from "react";

import { Text12 } from "@/components/ui/typography";
import { Slider } from "@/components/ui/slider";

export default function DashboardAPLSlider() {
  const [value, setValue] = useState([33]);

  return (
    <div className="flex items-center gap-2.5 self-stretch">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <Text12 className="w-5 text-black dark:text-white font-satoshi-medium">{value[0]}%</Text12>
    </div>
  );
}
