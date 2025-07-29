import React from "react";

import AIEngineToolsBody from "./AIEngineToolsBody";
import AIEngineToolsHead from "./AIEngineToolsHead";

export default function AIEngineTools() {
  return (
    <div className="flex flex-col items-start self-stretch gap-5">
      <AIEngineToolsHead />
      <AIEngineToolsBody />
    </div>
  );
}
