import React from "react";
import Link from "next/link";

import NavbarAccountSwitch from "@/components/features/protected/navbar/NavbarAccountSwitch";
import NavbarActions from "@/components/features/protected/navbar/NavbarActions";
import NavbarProfile from "@/components/features/protected/navbar/NavbarProfile";
import NavbarSheet from "@/components/features/protected/navbar/NavbarSheet";
import { Separator } from "@/components/ui/separator";
import { NavbarTitle } from "@/components/ui/typography";
import { IconLogo1Small } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-end items-center gap-2 self-stretch select-none",
        className
      )}
    >
      <NavbarSheet />
      <div className="flex-[1_0_0] xl:hidden">
        <Link href="/home">
          <IconLogo1Small width={96} height={25} className="shrink-0" />
        </Link>
      </div>
      <NavbarTitle className="xl:flex-[1_0_0] hidden xl:block ">
        Today
      </NavbarTitle>
      <NavbarAccountSwitch className="lg:flex hidden" />
      <Separator
        orientation="vertical"
        className="opacity-10 lg:block hidden"
      />
      <NavbarActions />
      <Separator
        orientation="vertical"
        className="opacity-10 sm:block hidden"
      />
      <NavbarProfile />
    </div>
  );
}
