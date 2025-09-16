"use client"
import React from "react";

import Navbar from "@/components/features/protected/navbar/Navbar";
import { NavbarTitle } from "@/components/ui/typography";
import { usePathname } from "next/navigation";
import { useLocalization } from "@/components/localization-provider";

// Function to get page title based on current route
const getPageTitle = (pathname: string, t: (key: string) => string): string => {
  switch (pathname) {
    case "/home":
      return t("today");
    case "/dashboard":
      return t("dashboard");
    case "/ai-engine":
      return t("ai_engine");
    case "/copy-trading":
      return t("copy_trading");
    case "/performance-history":
      return t("performance_history");
    case "/trades":
      return t("trades");
    case "/support":
      return t("support");
    case "/tutorial":
      return t("tutorial");
    case "/settings":
      return t("settings");
    case "/wallet":
      return t("wallet");
    default:
      return t("today");
  }
};

export default function ProtectedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = usePathname();
  const { t } = useLocalization();
  const pageTitle = getPageTitle(location, t);
  
  return (
    <div className="flex flex-col flex-[1_0_0] self-stretch overflow-x-hidden">
      <Navbar className="xl:hidden fixed top-0 right-0 left-0 p-3 sm:p-5 border-b border-white/5 z-10 bg-white/4 backdrop-blur-[77px]" pageTitle={pageTitle} />
      <div className={`flex flex-col items-start shrink-0 gap-5 self-stretch flex-[1_0_0] p-3 xs:p-5 sm:p-6 rounded-[20px] border  dark:border-white/4  backdrop-blur-[7px] xl:mt-0 mt-16 sm:mt-21 ${location === "/copy-trading" ? "bg-[#ecf3f8] dark:bg-background border-transparent" : location === "/performance-history" || location === "/trades" ? "dark:border-black/4 bg-white md:bg-[#ecf3f8] dark:bg-white/2 border-black/4 sm:border-transparent" : "bg-white/50 dark:bg-white/2 border-black/4"}`}>
        <Navbar className="xl:flex hidden" pageTitle={pageTitle} />
        <NavbarTitle className="xl:hidden">{pageTitle}</NavbarTitle>
        {children}
      </div>
    </div>
  );
}
