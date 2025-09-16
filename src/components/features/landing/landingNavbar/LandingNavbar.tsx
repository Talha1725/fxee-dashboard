"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingNavbarResponsiveClient from "@/components/features/landing/landingNavbar/LandingNavbarResponsiveClient";
import { IconLogoLanding } from "@/components/ui/icon";
import { useLocalization } from "@/components/localization-provider";
import LanguageSelector from "@/components/ui/language-selector";

export default function LandingNavbar() {
   const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLocalization();

  const NavLinks = useMemo(() => [
    { href: "/", label: t("home") },
    { href: "/how-it-works", label: t("how_it_works") },
    { href: "/challenge-support", label: t("challenge_support") },
    { href: "/community", label: t("community") },
    { href: "/about", label: t("about_us") },
    { href: isAuthenticated ? "/home" : "/signin", label: isAuthenticated ? t("dashboard") : t("login") },
  ], [t, isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex w-full fixed top-0 z-[9999] ${isScrolled ? 'bg-black/50 backdrop-blur-xl border-none' : 'lg:bg-[#ffffff03] lg:backdrop-blur-xl lg:border-b'}`}>
      <LandingMax1440Container className="w-full flex flex-row py-3 justify-between items-center relative">
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-white/10 w-[90%] block lg:hidden ${isScrolled ? 'hidden' : ''}`}></div>
        <Link href="/" prefetch={true} className="shrink-0">
          <IconLogoLanding color="white" className="shrink-0 w-[110px] sm:w-[134px] h-[28px] sm:h-[32px]" />
        </Link>
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-7.5">
          <LanguageSelector variant="minimal" />
          <LandingNavbarResponsiveClient navLinks={NavLinks} />
        </div>
      </LandingMax1440Container>
    </div>
  );
}
