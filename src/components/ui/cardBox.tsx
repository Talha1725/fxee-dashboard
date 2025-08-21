// components/ui/CardBox.tsx
'use client'
import React, { ReactNode } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface ListItem {
  label?: string;      
  value: string;
  highlight?: boolean;
  style?: 'default' | 'sub-breakdown' | 'mini-allocation';
}

interface CardBoxProps {
  title?: string;
  children?: ReactNode;  
  listItems?: ListItem[]; 
  customSize?: {
    width?: string;
    height?: string;
    padding?: string;
  };
}

export default function CardBox({ title, children, listItems, customSize }: CardBoxProps) {
  const { theme } = useTheme();

  const width = customSize?.width || "w-[336px]";
  const height = customSize?.height || "min-h-[178px]";
  const padding = customSize?.padding || "pt-[20px] pr-[16px] pb-[20px] pl-[16px]";
  
  return (
    <div className={`${width} ${height} rounded-[16px] border border-black/10 ${padding} ${theme === "dark" ? "bg-dark-gradient" : "bg-white-gradient"} dark:border-white/[0.1] overflow-visible`}>
      {title && (
        <h2 className="font-satoshi-medium text-[18px] leading-[100%] tracking-[-0.02em] capitalize mb-4 text-black dark:text-white break-words">
          {title}
        </h2>
      )}

      <div className="space-y-3 overflow-visible">
        {listItems
          ? listItems.map((item, idx) => {
              let labelStyle = "";
              let valueStyle = "";
              
              if (item.style === 'sub-breakdown') {
                if (item.highlight) {
                  labelStyle = "text-[#079764] font-satoshi-bold text-[12px] leading-[100%] tracking-[-0.02em]";
                } else {
                  valueStyle = "font-satoshi-medium text-[14px] leading-[100%] tracking-[-0.02em] text-black dark:text-white";
                }
              } else if (item.style === 'mini-allocation') {
                if (item.highlight) {
                  labelStyle = "text-transparent bg-clip-text bg-gradient-to-b from-[#15B0F8] to-[#0276DB] font-satoshi-bold text-[12px] leading-[100%] tracking-[-0.02em]";
                } else {
                  valueStyle = "font-satoshi-medium text-[14px] leading-[100%] tracking-[-0.02em] text-black dark:text-white";
                }
              } else {
                labelStyle = item.highlight ? "font-medium text-green-600 dark:text-green-400" : "";
                valueStyle = "text-black dark:text-white";
              }
              
              return (
                <div key={idx} className="flex flex-col gap-1">
                  {item.label && (
                    <span className={labelStyle}>
                      {item.label}
                    </span>
                  )}
                  <span className={valueStyle}>
                    {item.value}
                  </span>
                </div>
              );
            })
          : children}
      </div>
    </div>
  );
}
