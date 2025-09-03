"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} prefetch={true}>
      <Text16 className={`px-2.5 py-1.5 rounded-md font-satoshi text-base font-[400] transition-colors shrink-0 ${
        isActive 
          ? 'lg:!text-white' 
          : 'lg:!text-white/40 hover:text-white/90'
      }`}>
        {children}
      </Text16>
    </Link>
  );
}
