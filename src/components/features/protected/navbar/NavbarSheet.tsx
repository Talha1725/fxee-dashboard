"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/features/protected/sidebar/Sidebar";
import { IconAlignLeft } from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function NavbarSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the sidebar when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <IconAlignLeft
          width={28}
          height={28}
          className="shrink-0 xl:hidden block"
        />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
