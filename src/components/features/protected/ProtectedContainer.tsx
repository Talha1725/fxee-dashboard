"use client"
import React from "react";

import Navbar from "@/components/features/protected/navbar/Navbar";
import { NavbarTitle } from "@/components/ui/typography";
import { usePathname } from "next/navigation";

// Function to get page title based on current route
const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case "/home":
      return "Today";
    case "/dashboard":
      return "Dashboard";
    case "/ai-engine":
      return "AI Engine";
    case "/copy-trading":
      return "Copy Trading";
    case "/performance-history":
      return "Performance History";
    case "/trades":
      return "Trades";
    case "/support":
      return "Support";
    case "/tutorial":
      return "Tutorial";
    case "/settings":
      return "Settings";
    case "/wallet":
      return "Wallet";
    default:
      return "Today";
  }
};

export default function ProtectedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = usePathname();
  const pageTitle = getPageTitle(location);
  
  return (
    <div className="flex flex-col flex-[1_0_0] self-stretch overflow-x-hidden">
      <Navbar className="xl:hidden fixed top-0 right-0 left-0 p-3 sm:p-5 border-b border-white/5 z-10 bg-white/4 backdrop-blur-[77px]" pageTitle={pageTitle} />
      <div className={`flex flex-col items-start shrink-0 gap-5 self-stretch flex-[1_0_0] p-3 xs:p-5 sm:p-6 rounded-[20px] border  dark:border-white/4  backdrop-blur-[7px] xl:mt-0 mt-16 sm:mt-21 ${location === "/copy-trading" ? "bg-[#ecf3f8] dark:bg-background border-transparent" : "bg-white/50 dark:bg-white/2 border-black/4"}`}>
        <Navbar className="xl:flex hidden" pageTitle={pageTitle} />
        <NavbarTitle className="xl:hidden">{pageTitle}</NavbarTitle>
        {children}
      </div>
    </div>
  );
}
