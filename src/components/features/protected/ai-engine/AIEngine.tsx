import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import AIEngineStatus from "./status/AIEngineStatus";
import AIEngineTools from "./tools/AIEngineTools";

export default function AIEngine() {
  return (
    <ProtectedContentContainer className="sm:gap-10">
      <AIEngineStatus />
      <AIEngineTools />
    </ProtectedContentContainer>
  );
}
