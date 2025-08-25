"use client";

import React, { useState } from "react";
import AIEngineToolsNIP from "./NIP/AIEngineToolsNIP";
import { Text16 } from "@/components/ui/typography";
import { IconAdd } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";

const tabs = [
  { id: "default", label: "Default" },
  { id: "hft", label: "HFT Base" },
  { id: "intraday", label: "Intraday View" },
  { id: "fundamentals", label: "Fundamentals" },
  { id: "add", icon: <IconAdd width={20} height={20} /> },
];

export default function AIEngineToolsBody() {
  const [activeTab, setActiveTab] = useState("hft");
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const themePrefix = isDark ? "dark" : "light";

  // ✅ Active vs non-active text color logic
  const getTextClass = (isActive: boolean) => {
    if (isActive) {
      return isDark ? "text-white" : "text-black";
    }
    return isDark ? "text-white/60" : "text-black/60";
  };

  const getTabClasses = (
    isActive: boolean,
    isLast: boolean,
    isNextTabActive: boolean
  ) => {
    const classes = [
      "flex",
      "items-center",
      "gap-2.5",
      "h-full",
      "px-4",
      "cursor-pointer",
      "whitespace-nowrap",
    ];

    if (isActive) {
      classes.push(
        isDark ? "bg-tab-dark-gradient-selected" : "bg-tab-light-gradient",
        `border-tab-${themePrefix}`,
        "rounded-t-[8px]"
      );
    }

    if (!isActive && !isLast && !isNextTabActive) {
      classes.push("border-r", isDark ? "border-white/10" : "border-black/10");
    }

    return classes.join(" ");
  };

  const contentMap = {
    default: <div className={getTextClass(activeTab === "hft")}>
      ⚡ Default Content
    </div>,
    hft: (
      <div className={getTextClass(activeTab === "hft")}>
        <AIEngineToolsNIP />
      </div>
    ),
    intraday: (
      <div className={getTextClass(activeTab === "intraday")}>
        📊 Intraday View Content
      </div>
    ),
    fundamentals: (
      <div className={getTextClass(activeTab === "fundamentals")}>
        📑 Fundamentals Content
      </div>
    ),
    add: (
      <div className={getTextClass(activeTab === "add")}>➕ Add New Tab</div>
    ),
  };

  const containerClasses = [
    "flex",
    "items-center",
    "-mb-5",
    "h-[44px]",
    isDark ? "bg-tab-dark-gradient" : "bg-tab-light-base-gradient",
    "rounded-t-[8px]",
  ].join(" ");

  const contentClasses = [
    "flex",
    "flex-col",
    "items-start",
    "self-stretch",
    "p-5",
    "rounded-b-[16px]",
    isDark ? "bg-tab-dark-gradient-selected" : "bg-tab-light-gradient",
    "border",
    isDark ? "border-white/5" : "border-black/5",
  ].join(" ");

  return (
    <>
      <div className={containerClasses}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isLast = index === tabs.length - 1;
          const isNextTabActive =
            index < tabs.length - 1 && activeTab === tabs[index + 1].id;

          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={getTabClasses(isActive, isLast, isNextTabActive)}
            >
              {tab.icon ? (
                <div className={getTextClass(isActive)}>{tab.icon}</div>
              ) : (
                <span
                  className={`font-satoshi-medium text-[16px] transition-colors ${getTextClass(
                    isActive
                  )}`}
                >
                  {tab.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className={contentClasses}>
        {contentMap[activeTab as keyof typeof contentMap] || null}
      </div>
    </>
  );
}
