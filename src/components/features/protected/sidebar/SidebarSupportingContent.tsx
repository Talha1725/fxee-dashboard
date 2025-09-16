"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { useLocalization } from "@/components/localization-provider";
import SidebarItem from "@/components/features/protected/sidebar/SidebarItem";
import {
  IconHeadphone,
  IconHeadphoneFill,
  IconSetting,
  IconSettingFill,
  IconWallet,
  IconWalletFill,
  IconAIbook,
  IconAIbookFill,
} from "@/components/ui/icon";

export default function SidebarSupportingContent() {
  const { t } = useLocalization();
  const pathname = usePathname();
  const Items = [
    {
      title: t("support"),
      icon: IconHeadphone,
      iconFill: IconHeadphoneFill,
      href: "/support",
    },
    {
      title: t("tutorial"),
      icon: IconAIbook,
      iconFill: IconAIbookFill,
      href: "/tutorial",
    },
    {
      title: t("settings"),
      icon: IconSetting,
      iconFill: IconSettingFill,
      href: "/settings",
    },
    // {
    //   title: "Wallet",
    //   icon: IconWallet,
    //   iconFill: IconWalletFill,
    //   href: "/wallet",
    // },
  ];
  return (
    <div className="flex flex-col items-start gap-1.5 self-stretch">
      {Items.map((item) => (
        <SidebarItem item={item} pathname={pathname} key={item.title} />
      ))}
    </div>
  );
}
