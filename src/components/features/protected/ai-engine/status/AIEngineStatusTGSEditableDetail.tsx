"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Text12, Text16 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { IconCheck, IconEdit } from "@/components/ui/icon";

interface AIEngineStatusTGSEditableDetailProps {
  title: string;
  value: string;
  className?: string;
  type: "profit" | "loss" | "reward";
  onSave?: (value: string) => void;
}

export default function AIEngineStatusTGSEditableDetail({
  title,
  value,
  className,
  type,
  onSave,
}: AIEngineStatusTGSEditableDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  const handleSave = () => {
    if (inputValue.trim() === "") return;
    onSave?.(inputValue);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setInputValue(value);
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (type === "reward") {
      // For risk/reward ratio, keep the ratio format
      setInputValue(rawValue);
    } else {
      // For monetary values, format as currency
      const numericValue = parseFloat(rawValue || "0");
      const formattedValue = `$${numericValue.toLocaleString()}`;
      setInputValue(formattedValue);
    }
  };

  const getColorClassName = (type: "profit" | "loss" | "reward") => {
    switch (type) {
      case "profit":
        return "text-[#3EDC81] dark:text-[#3EDC81]";
      case "loss":
        return "text-[#EA4335] dark:text-[#EA4335]";
      case "reward":
        return "bg-gradient-to-b from-[#15B0F8] to-[#0276DB] text-transparent bg-clip-text dark:bg-gradient-to-b dark:from-[#15B0F8] dark:to-[#0276DB] dark:text-transparent dark:bg-clip-text";
      default:
        return "text-green";
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 self-stretch flex-[1_0_0] p-2 sm:p-2.5 rounded-[10px] border border-white/2 bg-dark-gradient">
      <div className="flex flex-col items-start gap-1.5 flex-[1_0_0]">
        <div className="flex items-center justify-between w-full">
          <Text12 className="text-[#FFFFFF] dark:text-[#FFFFFF]">{title}</Text12>
          <div className="flex items-center gap-1">
            <button
              onClick={handleEdit}
              className="w-4 h-4 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors text-white/60"
              title="Edit"
            >
              <IconEdit width={12} height={12} />
            </button>
            <button
              onClick={handleSave}
              className="w-4 h-4 flex items-center justify-center hover:bg-green-500/20 rounded-md transition-colors text-green-500"
              title="Save"
            >
              <IconCheck width={12} height={12} />
            </button>
          </div>
        </div>
        {isEditing ? (
          <div className="flex items-center gap-2 w-full">
            <Input
              type={type === "reward" ? "text" : "number"}
              value={type === "reward" ? (inputValue || "") : (inputValue || "").replace(/[$,]/g, "")}
              onChange={handleInputChange}
              className="flex-1 h-8 text-sm bg-transparent border border-white/20 text-white placeholder:text-white/50"
              placeholder={type === "reward" ? "e.g. 1:2.50" : "Enter amount"}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 w-full">
            <Text16 className={cn("flex-1", getColorClassName(type), className)}>
              {value}
            </Text16>
          </div>
        )}
      </div>
    </div>
  );
}
