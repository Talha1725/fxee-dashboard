"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import LandingHero2 from "@/public/images/ellipse.svg";
import { usePathname } from "next/navigation";
export default function LandingHeroContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <section
      className={cn(
        "relative w-full mt-17 xl:mb-0 xl:h-[810px] -mb-12.5 h-full bg-[#ffffff06]",
        className
      )}
    >
      {children}
      <div className="absolute top-[35%] right-[-40%] md:right-0 select-none w-[650px] h-[70px] rounded-full bg-white -rotate-[19deg] blur-[180px] overflow-visible">
      
      </div>
    </section>
  );
}
