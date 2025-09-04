import React, { useState } from "react";

import HomeAIMessageHead from "@/components/features/protected/home/homeNewsAI/HomeAIMessageHead";
import HomeAIMessageBody from "@/components/features/protected/home/homeNewsAI/HomeAIMessageBody";

export default function HomeAIMessage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const clearConversation = () => {
    // Add clear conversation logic here
  };

  return (
    <div className="flex items-start gap-5 shrink-0 max-h-[262px] overflow-hidden">
      <div className="flex flex-col items-start gap-5 flex-[1_0_0]">
        <HomeAIMessageHead 
          isExpanded={isExpanded}
          clearConversation={clearConversation}
          setIsExpanded={setIsExpanded}
        />
        <HomeAIMessageBody className="max-h-[190px] overflow-y-scroll homeAI-scrollbar" />
      </div>
    </div>
  );
}
