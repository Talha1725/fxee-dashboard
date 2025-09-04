import React from "react";

import { Text12, Text18 } from "@/components/ui/typography";
import { Progress } from "@/components/ui/progress";
import { IconAIBrain, IconClose } from "@/components/ui/icon";
import agentImage from "@/public/images/ai-agent-avatar.svg"
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeAIMessageHead({ isExpanded, clearConversation }: { isExpanded: boolean, clearConversation: () => void, setIsExpanded: (isExpanded: boolean) => void }) {
  return (
    <div className="w-full flex items-start self-stretch">
      <div className="flex items-start gap-2 flex-1">
        <div className="w-[54px] h-[54px] flex items-center justify-center">
          <Image src={agentImage} alt="Agent" width={54} height={54} />
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <Text18 className="font-satoshi-medium">
            FXEE <span className="text-green">AI</span>
          </Text18>
          <Text12 className="text-black/80 dark:text-white/80 font-satoshi">Analyzing market patterns...</Text12>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={50} className="w-[100px] h-[12px]" />
        <IconAIBrain className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}
