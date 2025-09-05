"use client";
import React from "react";

import { Text16 } from "@/components/ui/typography";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function SupportFAQSidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) {
  const { theme } = useTheme();
  return (
    <div className={`flex w-full md:w-[320px] p-5 flex-col items-center gap-5 rounded-[16px] border dark:border-white/5 border-black/5 ${theme === "dark" ? "bg-card-main-dashboard-gradient" : "bg-white/50"}`}>
      <div className="flex flex-col items-start gap-2 self-stretch">
        {/* All option */}
        <div
          className={cn(
            "flex items-center gap-1.5 self-stretch p-2 rounded-[8px] cursor-pointer border-green-gradient-0 transition-all duration-300",
            activeTab === -1 &&
              `border-green-gradient ${theme === "dark" ? "bg-[radial-gradient(126.8%_109.9%_at_95.59%_0%,rgba(0,0,0,0.63)_0%,rgba(0,0,0,0.90)_100%),linear-gradient(17deg,#0276DB_14.37%,#3EDC81_82.05%)]" : "support-card-gradient"}`
          )}
          onClick={() => setActiveTab(-1)}
        >
          <Text16 className="dark:!text-white/80 !text-black flex-[1_0_0]">
            All
          </Text16>
        </div>
        
        {FAQS.map((faq, index) => (
          <div
            className={cn(
              "flex items-center gap-1.5 self-stretch p-2 rounded-[8px] cursor-pointer border-green-gradient-0 transition-all duration-300",
              activeTab === index &&
                `border-green-gradient ${theme === "dark" ? "bg-[radial-gradient(126.8%_109.9%_at_95.59%_0%,rgba(0,0,0,0.63)_0%,rgba(0,0,0,0.90)_100%),linear-gradient(17deg,#0276DB_14.37%,#3EDC81_82.05%)]" : "support-card-gradient"}`
            )}
            onClick={() => setActiveTab(index)}
            key={index}
          >
            <Text16 className="dark:!text-white/80 !text-black flex-[1_0_0]">
              {faq.category}
            </Text16>
          </div>
        ))}
      </div>
    </div>
  );
}
