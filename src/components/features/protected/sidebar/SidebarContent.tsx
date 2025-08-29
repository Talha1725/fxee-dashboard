import React from "react";

import SidebarMainContent from "@/components/features/protected/sidebar/SidebarMainContent";
import SidebarSupportingContent from "@/components/features/protected/sidebar/SidebarSupportingContent";

export default function SidebarContent() {
  return (
    <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch gap-5 px-3 pt-5 pb-4">
      <SidebarMainContent />  
      <SidebarSupportingContent />
    </div>
  );
}
