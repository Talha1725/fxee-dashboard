"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import SidebarItem from "@/components/features/protected/sidebar/SidebarItem";
import {
  IconCandle,
  IconClock,
  IconDashboard,
  IconHome,
  IconStars,
  IconTrade,
  IconHomeFill,
  IconDashboardFill,
  IconStarsFill,
  IconCandleFill,
  IconClockFill,
  IconTradeFill,
} from "@/components/ui/icon";

export default function SidebarMainContent() {
  const sidebarItems = useMemo(
    () => [
      {
        title: "Home",
        icon: IconHome,
        iconFill: IconHomeFill,
        href: "/home",
      },
      {
        title: "Dashboard",
        icon: IconDashboard,
        iconFill: IconDashboardFill,
        href: "/dashboard",
      },
      {
        title: "AI Engine",
        icon: IconStars,
        iconFill: IconStarsFill,
        href: "/ai-engine",
      },
      {
        title: "Copy Trading",
        icon: IconCandle,
        iconFill: IconCandleFill,
        href: "/copy-trading",
      },
      {
        title: "Performance History",
        icon: IconClock,
        iconFill: IconClockFill,
        href: "/performance-history",
      },
      {
        title: "Trades",
        icon: IconTrade,
        iconFill: IconTradeFill,
        href: "/trades",
      },
    ],
    []
  );

  const pathname = usePathname();

  return (
    <div className="flex flex-col items-start self-stretch gap-2">
      <div className="flex flex-col items-start self-stretch gap-1">
        {sidebarItems.map((item) => (
          <React.Fragment key={item.title}>
            <SidebarItem item={item} pathname={pathname} />
            <Link href={item.href} prefetch={true} className="hidden" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
