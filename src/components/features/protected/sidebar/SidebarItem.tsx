import Link from "next/link";
import React, { memo } from "react";

import { cn } from "@/lib/utils";
import { SidebarItem as SidebarItemText } from "@/components/ui/typography";

const SidebarItem = memo(function SidebarItem({
  item,
  pathname,
}: {
  item: {
    title: string;
    icon: React.ComponentType<{ width: number; height: number }>;
    iconFill: React.ComponentType<{ width: number; height: number }>;
    href: string;
  };
  pathname: string;
}) {
  const isActive = pathname === item.href;

  return (
    <Link href={item.href} className="w-full">
      <div
        className={cn(
          "relative flex items-center gap-2 self-stretch px-3 py-2 rounded-[8px] opacity-40 transition-all duration-200 hover:bg-white/20 hover:opacity-100 border border-transparent",
          isActive
            ? "bg-dark-gradient opacity-100 border border-white/10"
            : "transform hover:translate-x-1"
        )}
      >
        {isActive ? (
          <item.iconFill width={24} height={24} />
        ) : (
          <item.icon width={24} height={24} />
        )}
        <SidebarItemText>{item.title}</SidebarItemText>
        {isActive && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-1 h-5 rounded-l-[4px] rounded-r-none bg-popular-gradient"></div>
          </div>
        )}
      </div>
    </Link>
  );
});

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
