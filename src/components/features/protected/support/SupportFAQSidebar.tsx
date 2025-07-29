"use client";

import React from "react";

import { Text16 } from "@/components/ui/typography";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function SupportFAQSidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) {
  return (
    <div className="flex w-full md:w-[320px] p-5 flex-col items-center gap-5 rounded-[16px] border border-white/5 bg-card-main-dashboard-gradient">
      <div className="flex flex-col items-start gap-2 self-stretch">
        {FAQS.map((faq, index) => (
          <div
            className={cn(
              "flex items-center gap-1.5 self-stretch p-2 rounded-[8px] cursor-pointer border-green-gradient-0 transition-all duration-300",
              activeTab === index &&
                "border-green-gradient bg-landing-card-green-gradient"
            )}
            onClick={() => setActiveTab(index)}
            key={index}
          >
            <Text16 className="text-white/80 flex-[1_0_0]">
              {faq.category}
            </Text16>
          </div>
        ))}
      </div>
    </div>
  );
}
