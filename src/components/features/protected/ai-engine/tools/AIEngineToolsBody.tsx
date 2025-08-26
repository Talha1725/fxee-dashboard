"use client";

import React, { useState, useEffect } from "react";
import AIEngineToolsAllSections from "./AIEngineToolsAllSections";
import { Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";

// Custom styles for horizontal scrollbar
const getCustomScrollbarStyles = (isDark: boolean) => `
  .tab-scroll-container {
    scrollbar-width: thin;
    scrollbar-color: ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'} transparent;
  }

  .tab-scroll-container::-webkit-scrollbar {
    height: 4px;
  }
  
  .tab-scroll-container::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .tab-scroll-container::-webkit-scrollbar-thumb {
    background: ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
    border-radius: 2px;
  }
  
  .tab-scroll-container::-webkit-scrollbar-thumb:hover {
    background: ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  }

  .tab-scroll-container::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export default function AIEngineToolsBody() {
  const { theme } = useTheme();
  const { addOns } = useAddOns();
  const { isPremium } = useUser();
  
  const getActiveAddOnsTabs = () => {
    const accessibleActiveAddOns = addOns.filter(addOn => {
      if (!addOn.active) return false;
      return isPremium || !addOn.isVip;
    });
    
    // If no add-ons are active, show "No addons selected" tab
    if (accessibleActiveAddOns.length === 0) {
      return [{
        id: "no-addons",
        label: "No addons selected",
        icon: null as React.ReactNode | null
      }];
    }
    
    const tabs = accessibleActiveAddOns.map(addOn => ({
      id: addOn.title.toLowerCase().replace(/\s+/g, '-'),
      label: addOn.title,
      icon: null as React.ReactNode | null
    }));    
    return tabs;
  };

  const tabs = getActiveAddOnsTabs();
  const [activeTab, setActiveTab] = useState(() => {
    return tabs.length > 0 ? tabs[0].id : "no-addons";
  });

  // Update active tab when tabs change
  useEffect(() => {
    if (tabs.length === 1 && tabs[0].id === "no-addons") {
      // Only "no-addons" tab available
      setActiveTab("no-addons");
    } else if (tabs.length > 0 && activeTab === "no-addons") {
      // Switch from "no-addons" to first available real tab
      setActiveTab(tabs[0].id);
    } else if (tabs.length > 0 && !tabs.find(tab => tab.id === activeTab)) {
      // If current active tab is no longer available, switch to first available tab
      setActiveTab(tabs[0].id);
    }
  }, [tabs, activeTab]);

  const scrollToSection = (sectionId: string) => {
    // Don't scroll for the "no-addons" tab
    if (sectionId === "no-addons") {
      setActiveTab(sectionId);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setActiveTab(sectionId);
    }
  };

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
      "justify-center",
      "gap-2.5",
      "h-full",
      "px-4",
      "py-2",
      "cursor-pointer",
      "whitespace-nowrap",
      "flex-shrink-0",
      "min-w-fit",
      "transition-colors",
      "duration-200",
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


  const containerClasses = [
    "tab-scroll-container",
    "flex",
    "items-center",
    "overflow-x-auto", 
    "overflow-y-hidden",
    "scroll-smooth",
    "-mb-5",
    "h-[44px]",
    "w-full",
    "max-w-full",
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
      <style dangerouslySetInnerHTML={{ __html: getCustomScrollbarStyles(isDark) }} />
      <div className={containerClasses}>
        <div className="flex flex-nowrap items-center h-full min-w-max gap-0">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const isLast = index === tabs.length - 1;
            const isNextTabActive =
              index < tabs.length - 1 && activeTab === tabs[index + 1].id;

            // Don't try to find matching add-on for "no-addons" tab
            const matchingAddOn = tab.id === "no-addons" ? null : addOns.find(addOn => 
              addOn.title.toLowerCase().replace(/\s+/g, '-') === tab.id
            );

            return (
              <div
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={getTabClasses(isActive, isLast, isNextTabActive)}
              >
                <div className="flex items-center gap-2">
                  {matchingAddOn?.icon && (
                    <span className={getTextClass(isActive)}>
                      {matchingAddOn.icon}
                    </span>
                  )}
                  <span
                    className={`font-satoshi-medium text-[16px] transition-colors ${getTextClass(
                      isActive
                    )}`}
                  >
                    {tab.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={contentClasses}>
        {activeTab === "no-addons" ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="mb-4">
              <Text16 className={`${isDark ? "text-white/60" : "text-black/60"}`}>
                No add-ons are currently selected
              </Text16>
            </div>
            <Text16 className={`${isDark ? "text-white/40" : "text-black/40"} text-sm`}>
              Please select add-ons from the AI Control Panel to view their tools
            </Text16>
          </div>
        ) : (
          <AIEngineToolsAllSections />
        )}
      </div>
    </>
  );
}
