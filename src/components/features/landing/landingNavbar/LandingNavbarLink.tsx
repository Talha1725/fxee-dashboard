"use client";

import Link from "next/link";
import React from "react";
import { Text16 } from "@/components/ui/typography";

interface LandingNavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function LandingNavbarLink({
  href,
  children,
}: LandingNavbarLinkProps) {
  return (
    <Link href={href} prefetch={true}>
      <Text16 className="px-2.5 py-1.5 rounded-md text-white/40 font-satoshi text-base font-[400] hover:text-white/90 hover:bg-white/10 transition-colors shrink-0">
        {children}
      </Text16>
    </Link>
  );
}
