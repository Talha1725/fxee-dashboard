"use client";

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface CommonSelectProps {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: { value: string; label: string; flag?: React.ReactNode }[];
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  height?: number;
  renderOption?: (option: { value: string; label: string; flag?: React.ReactNode }) => React.ReactNode;
}

export default function CommonSelect({
  placeholder = "Select an option",
  defaultValue,
  value,
  onValueChange,
  options,
  className,
  disabled = false,
  size = 'md',
  height = 52,
  renderOption,
}: CommonSelectProps) {
  const { theme } = useTheme();

  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
              <SelectTrigger
          className={cn(
            `rounded-[12px] ${theme === "dark" ? "!bg-tab-dark-gradient !border-white/[0.1] [&]:!bg-tab-dark-gradient dark:!bg-tab-dark-gradient" : "!bg-card-dashboard-main-gradient !border-black/10 [&]:!bg-card-dashboard-main-gradient"}`,
            "flex items-center justify-between",
            `w-[336px] font-satoshi-medium text-[18px] pt-[14px] pr-5 pb-[14px] pl-5 min-w-[336px] max-w-[336px] gap-5`,
            className
          )}
          style={{
            height: `${height}px`,
            backgroundColor: theme === "dark" 
              ? "rgba(255, 255, 255, 0.02)" 
              : "rgba(0, 0, 0, 0.02)",
            background: theme === "dark" 
              ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)" 
              : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)"
          }}
        >
        <SelectValue 
          placeholder={placeholder}
          className="flex items-center justify-between text-black dark:text-white font-satoshi-medium"
        />
      </SelectTrigger>
      <SelectContent
        className={`${
          theme === "dark"
            ? "!bg-tab-dark-gradient !border-white/[0.1] dark:!bg-tab-dark-gradient [&]:!bg-tab-dark-gradient"
            : "!bg-card-dashboard-main-gradient !border-black/10 [&]:!bg-card-dashboard-main-gradient"
        } rounded-md`}
        style={{
          backgroundColor: theme === "dark" 
            ? "rgba(0,0,0)" 
            : "rgba(255, 255, 255)",
          background: theme === "dark" 
            ? "bg-tab-dark-gradient" 
            : "bg-tab-dark-gradient"
        }}
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-black dark:text-white cursor-pointer"
          >
            {renderOption ? renderOption(option) : option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
