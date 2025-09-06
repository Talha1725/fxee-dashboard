"use client"

import Link from "next/link";
import React, { memo } from "react";

import { cn } from "@/lib/utils";
import { SidebarItem as SidebarItemText } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

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
  const { theme } = useTheme();
  
  const handleClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'translateX(4px)';
    target.style.opacity = '1';
    
    setTimeout(() => {
      target.style.transform = '';
      target.style.opacity = '';
    }, 150);
  };
  
  return (
    <Link href={item.href} className="w-full" prefetch={true}>
      <div
        onClick={handleClick}
        className={cn(
          "relative flex items-center gap-2 w-full py-2 px-3 rounded-[8px] opacity-40 transition-all duration-150 hover:bg-white/20 hover:opacity-100 border border-transparent cursor-pointer",
          isActive
            ? `opacity-100 border border-white/10 ${theme === "dark" ? "bg-dark-gradient" : "bg-gradient-to-b from-[#15B0F8]/10 to-[#0276DB]/10"} -mx-3 px-6`
            : "transform hover:translate-x-1"
        )}
      >
        {isActive ? (
          <item.iconFill width={24} height={24} />
        ) : (
          <item.icon width={24} height={24} />
        )}
        <SidebarItemText className="text-black dark:text-white">{item.title}</SidebarItemText>
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
