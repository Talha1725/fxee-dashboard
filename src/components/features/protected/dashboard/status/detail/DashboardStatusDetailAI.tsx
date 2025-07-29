import React from "react";

import DashboardStatusDetailCardContainer from "./DashboardStatusDetailCardContainer";
import HomeAIChat from "../../../home/homeNewsAI/HomeAIChat";
import HomeAIMessageHead from "../../../home/homeNewsAI/HomeAIMessageHead";
import HomeAIMessageBody from "../../../home/homeNewsAI/HomeAIMessageBody";

export default function DashboardStatusDetailAI() {
  return (
    <DashboardStatusDetailCardContainer className="py-5 px-5 justify-between">
      <div className="flex flex-col items-start gap-5 flex-[1_0_0]">
        <HomeAIMessageHead />
        <HomeAIMessageBody />
      </div>
      <HomeAIChat />
    </DashboardStatusDetailCardContainer>
  );
}
