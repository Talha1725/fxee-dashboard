import React from "react";

import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import AIEngineToolsNIPCardATF from "./AIEngineToolsNIPCardATF";
import AIEngineToolsNIPCardTP from "./AIEngineToolsNIPCardTP";

export default function AIEngineToolsNIPCards() {
  return (
    <div className="flex flex-col items-start gap-2 w-full md:w-[344px]">
      <AIEngineToolsNIPCardAI />
      <AIEngineToolsNIPCardATF />
      <AIEngineToolsNIPCardTP />
    </div>
  );
}
