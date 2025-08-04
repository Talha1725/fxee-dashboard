"use client";

import React from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { THEMES } from "@/lib/constants";
import { IconMoon, IconSun } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal";
}

export function ThemeToggle({ 
  className, 
  size = "md", 
  variant = "default" 
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "flex items-center justify-center rounded-md border border-border bg-background p-2 hover:bg-accent hover:text-accent-foreground transition-colors",
          sizeClasses[size],
          className
        )}
        aria-label="Toggle theme"
      >
        {theme === THEMES.DARK ? (
          <IconSun width={iconSizes[size]} height={iconSizes[size]} />
        ) : (
          <IconMoon width={iconSizes[size]} height={iconSizes[size]} />
        )}
      </button>
    );
  }

  return (
    <div className={cn(
      "flex items-center rounded-lg border border-border bg-background p-1",
      className
    )}>
      <button
        onClick={() => theme !== THEMES.LIGHT && toggleTheme()}
        className={cn(
          "flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium transition-colors",
          theme === THEMES.LIGHT 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-accent hover:text-accent-foreground"
        )}
        aria-label="Light mode"
      >
        <IconSun width={16} height={16} className="mr-1" />
        Light
      </button>
      <button
        onClick={() => theme !== THEMES.DARK && toggleTheme()}
        className={cn(
          "flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium transition-colors",
          theme === THEMES.DARK 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-accent hover:text-accent-foreground"
        )}
        aria-label="Dark mode"
      >
        <IconMoon width={16} height={16} className="mr-1" />
        Dark
      </button>
    </div>
  );
} 