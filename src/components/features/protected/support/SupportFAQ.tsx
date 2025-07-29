"use client";

import React, { useState } from "react";
import SupportFAQSidebar from "./SupportFAQSidebar";
import SupportAccordion from "./SupportAccordion";

export default function SupportFAQ() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex items-start gap-5 self-stretch">
      <div className="flex flex-col md:flex-row items-start gap-5 p-5 flex-[1_0_0] bg-card-main-dashboard-gradient rounded-[16px] border border-white/5">
        <SupportFAQSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <SupportAccordion activeTab={activeTab} />
      </div>
    </div>
  );
}
