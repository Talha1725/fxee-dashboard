import React from "react";

import { Text12, Text18 } from "@/components/ui/typography";
import { Progress } from "@/components/ui/progress";
import { IconAIBrain } from "@/components/ui/icon";

import HomeUptrendImage from "@/components/features/protected/home/HomeUptrendImage";

export default function HomeAIMessageHead() {
  return (
    <div className="flex justify-between items-start self-stretch">
      <div className="flex items-start gap-1">
        <div className="w-[54px] h-[54px] flex items-center justify-center">
          <HomeUptrendImage />
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <Text18>
            FXEE <span className="text-green">AI</span>
          </Text18>
          <Text12>Analyzing market patterns...</Text12>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={50} className="w-[100px] h-[12px]" />
        <IconAIBrain className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}
