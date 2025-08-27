"use client";

import * as React from "react";
import { useState } from "react";

import { IconEye, IconEyeOff } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  isPassword?: boolean;
  backIcon?: React.ReactNode;
  InputStyles?: string;
  parentStyles?: boolean;
}

function Input({
  className,
  type,
  icon,
  isPassword, 
  backIcon,
  InputStyles,
  parentStyles = false,
  value,
  onChange,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { theme } = useTheme();
  const baseInputStyles =
    "bg-transparent outline-none dark:placeholder:text-white/60 text-sm md:text-md font-regular disabled:cursor-not-allowed disabled:opacity-50 w-full";

  // Determine if this should be a controlled input
  const isControlled = onChange !== undefined;
  const inputValue = value ?? "";
  const defaultValue = !isControlled ? inputValue : undefined;

  if (icon || isPassword || backIcon) {
    return (
      <div
      style={parentStyles ? {
        backgroundColor:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.02)"
            : "rgba(0, 0, 0, 0.02)",
        background:
          theme === "dark"
            ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
      } : undefined}
        className={cn(
          "dark:border-white/30 border-black/5 flex items-center justify-between gap-2 self-stretch rounded-md border bg-dark-gradient px-[10px] pl-3 pr-[10px] shadow-subtle transition-[color,box-shadow] w-full",
          "focus-within:border-ring focus-within:ring-ring/50 ",
          "has-[input:invalid]:ring-destructive/20 dark:has-[input:invalid]:ring-destructive/40 has-[input:invalid]:border-destructive",
          className
        )}
      >
        {icon && <div className="flex-shrink-0 text-white/60">{icon}</div>}
        <input
          type={isPassword && !isPasswordVisible ? "password" : "text"}
          data-slot="input"
          className={cn("flex-1 shrink-0", baseInputStyles, InputStyles)}
          value={isControlled ? inputValue : undefined}
          defaultValue={defaultValue}
          onChange={onChange}
          {...props}
        />
        {isPassword && (
          <div
            className="text-black/60 dark:text-white/60 cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <IconEyeOff height={20} width={20} className="dark:text-white/60 !text-black/60" />
            ) : (
              <IconEye height={20} width={20} className="dark:text-white/60 !text-black/60" />
            )}
          </div>
        )}
        {backIcon && backIcon}
      </div>
    );
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        baseInputStyles,
        "border-white/30 flex items-center rounded-md border bg-dark-gradient px-[10px] pl-3 pr-[10px] shadow-subtle transition-[color,box-shadow]",
        "invalid:ring-destructive/20 dark:invalid:ring-destructive/40 invalid:border-destructive",
        className
      )}
      value={isControlled ? inputValue : undefined}
      defaultValue={defaultValue}
      onChange={onChange}
      {...props}
    />
  );
}

export { Input };
