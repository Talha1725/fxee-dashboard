import React from "react";
import Link from "next/link";

import { IconLogo1 } from "@/components/ui/icon";

export default function SidebarHeader() {
  return (
    <div className="flex justify-start items-center gap-3 shrink-0 self-stretch h-[80px] px-3 py-0">
      <Link href="/">
        <div className="flex items-center gap-3 self-stretch p-3 rounded-[10px]">
          <IconLogo1 width={133.393} height={34} className="shrink-0" />
        </div>
      </Link>
    </div>
  );
}
