import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import SupportCards from "./SupportCards";
import SupportFAQ from "./SupportFAQ";
import SupportAIAssistant from "./AIAssistant/SupportAIAssistant";

export default function Support() {
  return (
    <ProtectedContentContainer>
      <SupportCards />
      <SupportFAQ />
      <SupportAIAssistant />
    </ProtectedContentContainer>
  );
}
