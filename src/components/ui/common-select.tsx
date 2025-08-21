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
  options: { value: string; label: string }[];
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
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
            `rounded-[12px] ${theme === "dark" ? "bg-dark-gradient! border-white/[0.1]" : "bg-white! border-black/10"}`,
            "flex items-center justify-between",
            "w-[336px] h-[52px] pt-[14px] pr-5 pb-[14px] pl-5 min-w-[336px] max-w-[336px] gap-5",
            className
          )}
        >
        <SelectValue 
          placeholder={placeholder}
          className="flex items-center justify-between text-black dark:text-white font-satoshi-medium"
        />
      </SelectTrigger>
      <SelectContent
        className={`${
          theme === "dark"
            ? "bg-black! border-white/[0.1]"
            : "bg-white! border-black/10"
        } rounded-[16px]`}
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-black dark:text-white cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
