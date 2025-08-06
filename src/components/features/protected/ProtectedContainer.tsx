import React from "react";

import Navbar from "@/components/features/protected/navbar/Navbar";
import { NavbarTitle } from "@/components/ui/typography";

export default function ProtectedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-[1_0_0] self-stretch overflow-x-hidden">
      <Navbar className="xl:hidden fixed top-0 right-0 left-0 p-3 sm:p-5 border-b border-white/5 z-10 bg-white/4 backdrop-blur-[77px]" />
      <div className="flex flex-col items-start shrink-0 gap-5 self-stretch flex-[1_0_0] p-3 xs:p-5 sm:p-6 rounded-[20px] border border-white/4 bg-white dark:bg-white/2 backdrop-blur-[7px] xl:mt-0 mt-16 sm:mt-21">
        <Navbar className="xl:flex hidden" />
        <NavbarTitle className="xl:hidden">Today</NavbarTitle>
        {children}
      </div>
    </div>
  );
}
