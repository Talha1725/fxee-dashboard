import React from "react";

import { cn } from "@/lib/utils";

export default function NavbarSwitchContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 px-[5px] py-[4px] rounded-[10px] bg-dark-gradient shrink-0 w-full sm:w-fit",
        className
      )}
    >
      {children}
    </div>
  );
}
