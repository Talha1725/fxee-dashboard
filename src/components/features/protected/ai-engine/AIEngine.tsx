import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import AIEngineStatus from "./status/AIEngineStatus";
import AIEngineTools from "./tools/AIEngineTools";
import { AnalysisProvider } from "@/lib/contexts/AnalysisContext";

export default function AIEngine() {
  return (
    <AnalysisProvider>
      <ProtectedContentContainer className="sm:gap-10">
        <AIEngineStatus />
        <AIEngineTools />
      </ProtectedContentContainer>
    </AnalysisProvider>
  );
}
