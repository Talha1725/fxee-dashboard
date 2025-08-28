import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import LandingHero2 from "@/public/images/landing-hero2.png";
import LandingHero1 from "@/public/images/landing-hero1.png";

export default function LandingHeroContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative w-full mt-17 xl:mb-0 xl:h-[810px] h-full -mb-12.5",
        className
      )}
    >
      {children}
      <div className="absolute -top-40 sm:-top-60 lg:-top-80 xl:top-0 right-0 -z-5 select-none w-[450px] h-[600px] sm:w-[600px] sm:h-[900px] lg:w-[830px] lg:h-[1050px]">
        <Image
          src={LandingHero2}
          alt="Landing Hero 2"
          fill
          sizes="(max-width: 830px) 100vw, 830px"
          priority
          className="object-contain"
        />
      </div>
      <div className="absolute top-62 lg:top-65 xl:-top-5 left-0 -z-5 select-none w-[530px] h-[900px] lg:w-[1010px] lg:h-[1450px]">
        <Image
          src={LandingHero1}
          alt="Landing Hero 1"
          fill
          sizes="(max-width: 860px) 100vw, 860px"
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
