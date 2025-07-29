import React from "react";

import AIEngineToolsNIP from "./NIP/AIEngineToolsNIP";

export default function AIEngineToolsBody() {
  return (
    <div className="flex flex-col items-start gap-10 self-stretch p-5 rounded-[16px] border border-white/5 bg-card-dashboard-main-gradient">
      <AIEngineToolsNIP />
    </div>
  );
}
