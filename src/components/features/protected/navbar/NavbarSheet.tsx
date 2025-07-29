import React from "react";

import Sidebar from "@/components/features/protected/sidebar/Sidebar";
import { IconAlignLeft } from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconAlignLeft
          width={28}
          height={28}
          className="shrink-0 xl:hidden block"
        />
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
