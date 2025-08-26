"use client";

import React, { useState } from "react";
import AIEngineToolsNIP from "./NIP/AIEngineToolsNIP";
import { Text16 } from "@/components/ui/typography";
import { IconAdd } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";

export default function AIEngineToolsBody() {
  const { theme } = useTheme();
  const { addOns } = useAddOns();
  const { isPremium } = useUser();
  
  const getActiveAddOnsTabs = () => {
    const accessibleActiveAddOns = addOns.filter(addOn => {
      if (!addOn.active) return false;
      return isPremium || !addOn.isVip;
    });
    
    const tabs = accessibleActiveAddOns.map(addOn => ({
      id: addOn.title.toLowerCase().replace(/\s+/g, '-'),
      label: addOn.title,
      icon: null as React.ReactNode | null
    }));    
    return tabs;
  };

  const tabs = getActiveAddOnsTabs();
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : "ai-analysis");

  const isDark = theme === "dark";
  const themePrefix = isDark ? "dark" : "light";

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

  const getContentMap = () => {
    const contentMap: { [key: string]: React.ReactNode } = {};
    
    const accessibleActiveAddOns = addOns.filter(addOn => {
      if (!addOn.active) return false;
      return isPremium || !addOn.isVip;
    });
    
    accessibleActiveAddOns.forEach(addOn => {
      const tabId = addOn.title.toLowerCase().replace(/\s+/g, '-');
      
      if (addOn.title === "News Impact") {
        contentMap[tabId] = (
          <div className={getTextClass(activeTab === tabId)}>
            <AIEngineToolsNIP />
          </div>
        );
      } else {
        contentMap[tabId] = (
          <div className={getTextClass(activeTab === tabId)}>
            <div className="p-8 text-center">
              <div className="mb-4 flex justify-center">{addOn.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{addOn.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {addOn.title} tools and features will be available here.
              </p>
            </div>
          </div>
        );
      }
    });
    return contentMap;
  };
  
  const contentMap = getContentMap();

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
              <span
                className={`font-satoshi-medium text-[16px] transition-colors ${getTextClass(
                  isActive
                )}`}
              >
                {tab.label}
              </span>
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
