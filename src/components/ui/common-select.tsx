"use client";

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

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
  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
              <SelectTrigger 
          className={cn(
            // Base styles
            "rounded-[12px] border border-[#0000000F] bg-[linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)]",
            "flex items-center justify-between",
            "w-[336px] h-[52px] pt-[14px] pr-5 pb-[14px] pl-5 min-w-[336px] max-w-[336px] gap-5",
        
            
            // Size variants
            
            className
          )}
        >
        <SelectValue 
          placeholder={placeholder}
          className="flex items-center justify-between text-black dark:text-white font-satoshi-medium"
        />
      </SelectTrigger>
      <SelectContent 
        className="bg-white dark:bg-black border border-[#0000000F] dark:border-white/[0.1] rounded-[16px]"
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-black dark:text-white hover:bg-gray-50 dark:hover:bg-white/[0.05] focus:bg-gray-50 dark:focus:bg-white/[0.05] cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
