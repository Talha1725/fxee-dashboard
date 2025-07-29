"use client";

import * as React from "react";
import { useState } from "react";

import { IconEye, IconEyeOff } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  isPassword?: boolean;
  backIcon?: React.ReactNode;
}

function Input({
  className,
  type,
  icon,
  isPassword,
  backIcon,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const baseInputStyles =
    "bg-transparent outline-none placeholder:text-white/60 text-sm md:text-md font-regular disabled:cursor-not-allowed disabled:opacity-50";

  if (icon || isPassword || backIcon) {
    return (
      <div
        className={cn(
          "border-white/30 flex items-center justify-between gap-2 self-stretch rounded-md border bg-dark-gradient px-[10px] pl-3 pr-[10px] shadow-subtle transition-[color,box-shadow]",
          "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[2px]",
          "has-[input:invalid]:ring-destructive/20 dark:has-[input:invalid]:ring-destructive/40 has-[input:invalid]:border-destructive",
          className
        )}
      >
        {icon && <div className="flex-shrink-0 text-white/60">{icon}</div>}
        <input
          type={isPassword && !isPasswordVisible ? "password" : "text"}
          data-slot="input"
          className={cn("flex-1 shrink-0", baseInputStyles)}
          {...props}
        />
        {isPassword && (
          <div
            className="text-white/60 cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <IconEyeOff height={20} width={20} />
            ) : (
              <IconEye height={20} width={20} />
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
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]",
        "invalid:ring-destructive/20 dark:invalid:ring-destructive/40 invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
