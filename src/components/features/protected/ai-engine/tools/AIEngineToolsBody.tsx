"use client";

import React, { useState } from "react";
import AIEngineToolsNIP from "./NIP/AIEngineToolsNIP";
import { Text16 } from "@/components/ui/typography";
import { IconAdd } from "@/components/ui/icon";

const tabs = [
  { id: "default", label: "Default" },
  { id: "hft", label: "HFT Base" },
  { id: "intraday", label: "Intraday View" },
  { id: "fundamentals", label: "Fundamentals" },
  { id: "add", icon: <IconAdd width={18} height={18} className="text-white" /> },
];

export default function AIEngineToolsBody() {
  const [activeTab, setActiveTab] = useState("hft");

  return (
    <>
      <div className="flex items-center -mb-5">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isFirst = index === 0;
          const isLast = index === tabs.length - 1;

          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2.5 py-3 px-4 cursor-pointer
                ${isFirst ? "rounded-tl-[16px]" : ""}
                ${isLast ? "rounded-tr-[16px]" : ""}
              `}
              style={{
                borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.1)",
                background: isActive
                  ? "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {tab.icon ? (
                tab.icon
              ) : (
                <Text16
                  className={`font-satoshi-medium ${
                    isActive ? "text-white" : "text-white/60"
                  }`}
                >
                  {tab.label}
                </Text16>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="flex flex-col items-start self-stretch p-5 rounded-b-[16px] border border-black/5 dark:border-white/5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%)",
        }}
      >
        {activeTab === "default" && <AIEngineToolsNIP />}
        {activeTab === "hft" && <div className="text-white">⚡ HFT Base Content</div>}
        {activeTab === "intraday" && <div className="text-white">📊 Intraday View Content</div>}
        {activeTab === "fundamentals" && <div className="text-white">📑 Fundamentals Content</div>}
        {activeTab === "add" && <div className="text-white">➕ Add New Tab</div>}
      </div>
    </>
  );
}
