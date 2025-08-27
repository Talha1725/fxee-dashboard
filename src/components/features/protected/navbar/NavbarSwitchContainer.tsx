"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function NavbarSwitchContainer({
  children,
  className,
  dropdown,
  customPadding,
}: {
  children: React.ReactNode;
  className?: string;
  dropdown?: boolean;
  customPadding?: string;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        `flex justify-center items-center gap-2 rounded-[10px] ${
          theme === "dark" ? "bg-dark-gradient" : dropdown ? "bg-white" : "bg-light-gradient"
        } shrink-0 w-full sm:w-fit`,
        customPadding || "px-[5px] py-[4px]",
        className
      )}
    >
      {children}
    </div>
  );
}
