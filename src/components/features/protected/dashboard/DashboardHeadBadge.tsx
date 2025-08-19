import { cn } from "@/lib/utils";
import React from "react";

export default function DashboardHeadBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center p-[7px] rounded-[7px] bg-button-grey-gradient border dark:border-none border-black/15", className)}>
      {children}
    </div>
  );
}
