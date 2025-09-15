"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingNavbarResponsiveClient from "@/components/features/landing/landingNavbar/LandingNavbarResponsiveClient";
import { IconLogoLanding } from "@/components/ui/icon";

export default function LandingNavbar() {
   const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);

  const NavLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/challenge-support", label: "Challenge Support" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About us" },
    { href: isAuthenticated ? "/dashboard" : "/signin", label: isAuthenticated ? "Dashboard" : "Login" },
  ];

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
          <LandingNavbarResponsiveClient navLinks={NavLinks} />
        </div>
      </LandingMax1440Container>
    </div>
  );
}
