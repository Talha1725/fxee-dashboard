"use client";
import React from "react";

import LandingNavbarLink from "@/components/features/landing/landingNavbar/LandingNavbarLink";
import { IconMenu } from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface NavbarResponsiveClientProps {
  navLinks: { href: string; label: string }[];
}

export default function LandingNavbarResponsiveClient({
  navLinks,
}: NavbarResponsiveClientProps) {
  const router = useRouter();
  return (
    <>
      <div className="hidden lg:flex lg:items-center lg:gap-3 shrink-0">
        {navLinks.map((link) => (
          <LandingNavbarLink key={link.href} href={link.href}>
            {link.label}
          </LandingNavbarLink>
        ))}
        {/* <ThemeToggle variant="minimal" size="sm" className="border-white/20" /> */}
      </div>
      <Button
        variant={"white"}
        className="font-satoshi-medium px-3"
        onClick={()=>{router.push("/signup")}}
      >
        Get $100 Bonus
      </Button>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="p-1 sm:p-2 hover:bg-white/10 rounded-sm transition-colors duration-200">
              <IconMenu width={24} height={24} />
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black border-white/20 py-2.5 px-4 will-change-transform transform-gpu"
            style={{ 
              zIndex: 999,
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
            }}
          >
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-2.5 pt-8">
              {navLinks.map((link) => (
                <LandingNavbarLink key={link.href} href={link.href}>
                  {link.label}
                </LandingNavbarLink>
              ))}
              {/* <div className="pt-2">
                <ThemeToggle variant="default" size="sm" />
              </div> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
