import React from "react";

import LandingButton from "@/components/features/landing/LandingButton";
import LandingNavbarLink from "@/components/features/landing/landingNavbar/LandingNavbarLink";
import { IconMenu } from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

interface NavbarResponsiveClientProps {
  navLinks: { href: string; label: string }[];
}

export default function LandingNavbarResponsiveClient({
  navLinks,
}: NavbarResponsiveClientProps) {
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
      >
        Get $100 Bonus
      </Button>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="p-1 sm:p-2 hover:bg-white/10 rounded-sm">
              <IconMenu width={24} height={24} />
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black border-white/20 py-2.5 px-4"
            style={{ zIndex: 999 }}
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
