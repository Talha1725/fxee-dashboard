import React from "react";

import SidebarContent from "@/components/features/protected/sidebar/SidebarContent";
import SidebarHeader from "@/components/features/protected/sidebar/SidebarHeader";
import { cn } from "@/lib/utils";

export default function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("w-[250px] h-full max-h-[790px]", className)}>
      <div className="flex flex-col items-start self-stretch shrink-0 select-none fixed h-full">
        <SidebarHeader />
        <SidebarContent />
      </div>
    </div>
  );
}
