"use client";

import React, { useState, useEffect, useRef } from "react";
import AIEngineToolsAllSections from "./AIEngineToolsAllSections";
import { Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";
import { IconChevronLeft, IconChevronRight } from "@/components/ui/icon";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Custom styles for horizontal scrollbar
const getCustomScrollbarStyles = (isDark: boolean) => `
  .tab-scroll-container {
    scrollbar-width: thin;
    scrollbar-color: ${
      isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
    } transparent;
  }

  .tab-scroll-container::-webkit-scrollbar {
    height: 4px;
  }
  
  .tab-scroll-container::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .tab-scroll-container::-webkit-scrollbar-thumb {
    background: ${isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    border-radius: 2px;
  }
  
  .tab-scroll-container::-webkit-scrollbar-thumb:hover {
    background: ${isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  }

  .tab-scroll-container::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export default function AIEngineToolsBody() {
  const { theme } = useTheme();
  const { savedAddOns } = useAddOns();
  const { isPremium } = useUser();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getActiveAddOnsTabs = () => {
    const accessibleActiveAddOns = savedAddOns.filter((addOn) => {
      if (!addOn.active) return false;
      return isPremium || !addOn.isVip;
    });

    if (accessibleActiveAddOns.length === 0) {
      return [
        {
          id: "no-addons",
          label: "No addons selected",
          icon: null as React.ReactNode | null,
        },
      ];
    }

    const tabs = accessibleActiveAddOns.map((addOn) => ({
      id: addOn.title.toLowerCase().replace(/\s+/g, "-"),
      label: addOn.title,
      icon: null as React.ReactNode | null,
    }));
    return tabs;
  };

  const tabs = getActiveAddOnsTabs();
  const [activeTab, setActiveTab] = useState(() => {
    return tabs.length > 0 ? tabs[0].id : "no-addons";
  });

  useEffect(() => {
    if (tabs.length === 1 && tabs[0].id === "no-addons") {
      setActiveTab("no-addons");
    } else if (tabs.length > 0 && activeTab === "no-addons") {
      setActiveTab(tabs[0].id);
    } else if (tabs.length > 0 && !tabs.find((tab) => tab.id === activeTab)) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs, activeTab]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "no-addons") {
      setActiveTab(sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setActiveTab(sectionId);
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const canScrollRightValue = scrollLeft < scrollWidth - clientWidth - 5; // Increased tolerance
    
    console.log('Scroll Debug:', {
      scrollLeft,
      scrollWidth,
      clientWidth,
      canScrollRight: canScrollRightValue,
      difference: scrollWidth - clientWidth,
      isScrollable: scrollWidth > clientWidth
    });
    
    setCanScrollLeft(scrollLeft > 5); // Increased tolerance
    setCanScrollRight(canScrollRightValue);
  };

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) {
      console.log('Left scroll: No container found');
      return;
    }

    console.log('Left scroll: Before scroll', {
      scrollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth
    });

    // Calculate how much we can actually scroll
    const scrollAmount = Math.min(200, container.scrollLeft);
    
    if (scrollAmount > 0) {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      console.log('Left scroll: Already at start position');
    }

    // Check after scroll
    setTimeout(() => {
      console.log('Left scroll: After scroll', {
        scrollLeft: container.scrollLeft,
        scrollWidth: container.scrollWidth,
        clientWidth: container.clientWidth
      });
    }, 100);
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) {
      console.log('Right scroll: No container found');
      return;
    }

    console.log('Right scroll: Before scroll', {
      scrollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth,
      maxScroll: container.scrollWidth - container.clientWidth
    });

    // Calculate how much we can actually scroll
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const scrollAmount = Math.min(200, maxScrollLeft - container.scrollLeft);
    
    if (scrollAmount > 0) {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      console.log('Right scroll: Already at max scroll position');
    }

    // Check after scroll
    setTimeout(() => {
      console.log('Right scroll: After scroll', {
        scrollLeft: container.scrollLeft,
        scrollWidth: container.scrollWidth,
        clientWidth: container.clientWidth,
        maxScroll: container.scrollWidth - container.clientWidth
      });
    }, 100);
  };

  useEffect(() => {
    checkScrollPosition();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [tabs]);

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
    "scrollbar-hide",
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
      <style
        dangerouslySetInnerHTML={{ __html: getCustomScrollbarStyles(isDark) }}
      />
      <div className="relative flex items-center w-full">
        <div className="absolute right-0 -top-8 flex items-center gap-2">
        
        {/* Left Arrow Button */}
          <button
            onClick={handleScrollLeft}
            className={`z-10 w-8 h-8 transition-all duration-200 cursor-pointer ${
              canScrollLeft ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
            }`}
            title="Scroll Left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft strokeWidth={2} className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleScrollRight}
            className={`z-10 w-8 h-8 transition-all duration-200 cursor-pointer ${
              canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
            }`}
            title="Scroll Right"
            disabled={!canScrollRight}
          >
            <ChevronRight strokeWidth={2} className="w-5 h-5" />
          </button>
        </div>

        <div ref={scrollContainerRef} className={`${containerClasses}`}>
          <div className="flex flex-nowrap items-center h-full min-w-max gap-0 scrollbar-hide">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const isLast = index === tabs.length - 1;
              const isNextTabActive =
                index < tabs.length - 1 && activeTab === tabs[index + 1].id;

              const matchingAddOn =
                tab.id === "no-addons"
                  ? null
                  : savedAddOns.find(
                      (addOn) =>
                        addOn.title.toLowerCase().replace(/\s+/g, "-") ===
                        tab.id
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

        {/* Right Arrow Button */}
      </div>

      <div className={contentClasses}>
        {activeTab === "no-addons" ? (
          <div className="flex flex-col items-center justify-center h-full w-full text-center">
            <div className="mb-4">
              <Text16
                className={`${isDark ? "text-white/60" : "text-black/60"}`}
              >
                No add-ons are currently selected
              </Text16>
            </div>
            <Text16
              className={`${
                isDark ? "text-white/40" : "text-black/40"
              } text-sm`}
            >
              Please select add-ons from the AI Control Panel to view their
              tools
            </Text16>
          </div>
        ) : (
          <AIEngineToolsAllSections />
        )}
      </div>
    </>
  );
}
