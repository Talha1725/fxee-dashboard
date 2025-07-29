import { Text14 } from "@/components/ui/typography";
import React from "react";

export default function HomeScoreColor() {
  return (
    <div className="flex justify-between items-start self-stretch">
      <div className="flex justify-center items-center gap-1.5 flex-[1_0_0]">
        <div className="w-4 h-4 rounded-full bg-score30"></div>
        <Text14>0-30%</Text14>
      </div>
      <div className="flex justify-center items-center gap-1.5 flex-[1_0_0]">
        <div className="w-4 h-4 rounded-full bg-score80"></div>
        <Text14>30-80%</Text14>
      </div>
      <div className="flex justify-center items-center gap-1.5 flex-[1_0_0]">
        <div className="w-4 h-4 rounded-full bg-green"></div>
        <Text14>80-100%</Text14>
      </div>
    </div>
  );
}
