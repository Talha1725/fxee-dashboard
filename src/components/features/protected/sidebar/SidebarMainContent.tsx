"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useLocalization } from "@/components/localization-provider";
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
  const { t } = useLocalization();
  const sidebarItems = useMemo(
    () => [
      {
        title: t("home"),
        icon: IconHome,
        iconFill: IconHomeFill,
        href: "/home",
      },
      {
        title: t("dashboard"),
        icon: IconDashboard,
        iconFill: IconDashboardFill,
        href: "/dashboard",
      },
      {
        title: t("ai_engine"),
        icon: IconStars,
        iconFill: IconStarsFill,
        href: "/ai-engine",
      },
      {
        title: t("copy_trading"),
        icon: IconCandle,
        iconFill: IconCandleFill,
        href: "/copy-trading",
      },
      {
        title: t("performance_history"),
        icon: IconClock,
        iconFill: IconClockFill,
        href: "/performance-history",
      },
      {
        title: t("trades"),
        icon: IconTrade,
        iconFill: IconTradeFill,
        href: "/trades",
      },
    ],
    [t]
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
