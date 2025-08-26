import React from "react";
import Link from "next/link";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingNavbarResponsiveClient from "@/components/features/landing/landingNavbar/LandingNavbarResponsiveClient";
import { IconLogo1, IconLogoLanding } from "@/components/ui/icon";

export default function LandingNavbar() {
  const NavLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/challenge-support", label: "Challenge Support" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About us" },
    { href: "/signin", label: "Login" },
  ];

  return (
    <div className="flex w-full fixed top-0 z-50 bg-black/50 backdrop-blur-xl">
      <LandingMax1440Container className="w-full flex flex-row py-3 justify-between items-center">
        <Link href="/" prefetch={true} className="shrink-0">
          <IconLogoLanding color="white" className="shrink-0 w-[110px] sm:w-[134px] h-[28px] sm:h-[32px]" />
        </Link>
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-7.5">
          <LandingNavbarResponsiveClient navLinks={NavLinks} />
        </div>
      </LandingMax1440Container>
    </div>
  );
}
