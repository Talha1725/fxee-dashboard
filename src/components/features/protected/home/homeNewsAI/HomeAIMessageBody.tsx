import React from "react";

import HomeAIMessageBodyIcon from "@/components/features/protected/home/homeNewsAI/HomeAIMessageBodyIcon";
import HomeAIMessageBodyItem from "./HomeAIMessageBodyItem";
import { cn } from "@/lib/utils";

export default function HomeAIMessageBody({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-col items-start gap-5 self-stretch", className)}
    >
      <div className="flex items-start gap-2 self-stretch">
        <HomeAIMessageBodyIcon />
        <HomeAIMessageBodyItem />
      </div>
      <div className="flex items-start gap-2 self-stretch">
        <HomeAIMessageBodyIcon />
        <HomeAIMessageBodyItem />
      </div>
      <div className="flex items-start gap-2 self-stretch">
        <HomeAIMessageBodyIcon />
        <HomeAIMessageBodyItem />
      </div>
    </div>
  );
}
