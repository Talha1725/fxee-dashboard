"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";

import { usePrevNextButtons } from "@/hooks/use-prev-next-buttons";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import {
  LandingPFSNextButton,
  LandingPFSPrevButton,
} from "@/components/features/landing/landingPFS/LandingPFSButton";

import LandingPFSImage from "@/public/images/landing-pfs.png";

const SLIDES_DATA = [
  {
    id: 0,
    image: LandingPFSImage,
    title: "AI Fine-Tuned for Prop Firms",
    description:
      "AI setups fine-tuned for prop firm rules (drawdown limits, risk levels)",
  },
  {
    id: 1,
    image: LandingPFSImage,
    title: "Manual & External Tools",
    description:
      "Copy trades manually or with external tools to real prop firm accounts",
  },
  {
    id: 2,
    image: LandingPFSImage,
    title: "AI Trading Guide",
    description:
      "AI monitors your simulation account and guides your prop firm trading",
  },
];

export default function LandingPFSContent({ className }: { className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 769px)");

  // Handle window resize properly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 641);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi as EmblaCarouselType);

  return (
    <div className={`w-full md:w-auto flex flex-col items-center justify-center gap-5 pt-[50px] bg-landing-card-green-gradient lg:rounded-lg ${isMobile ? "border-b border-[#0276DB]" : "border-green-gradient"} overflow-hidden ${className}`}>
      <div className="relative w-full mx-auto md:w-[760px] h-[400px] md:h-[400px] lg:w-[960px] lg:h-[490px]">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full ml-5 md:ml-0">
            {SLIDES_DATA.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex-[0_0_100%] min-w-[760px] relative h-full shrink-0 pl-[100px] ${
                  index < SLIDES_DATA.length - 1 ? "mr-[100px]" : ""
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="md:object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center self-stretch transition-all duration-300">
        <div
          className={cn(`w-full h-[1px] transition-all duration-300`, {
            "bg-landing-line-gradient1": selectedIndex === 0,
            "bg-landing-line-gradient2": selectedIndex === 1,
            "bg-landing-line-gradient3": selectedIndex === 2,
          })}
        ></div>
        <div className="flex md:justify-start justify-between items-center md:items-start md:gap-15 gap-3 sm:gap-5 self-stretch px-4 py-3 sm:px-8 sm:py-5 bg-landing-pfs-gradient">
          <LandingPFSPrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          {SLIDES_DATA.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => scrollTo(index)}
              className={`max-w-[300px] text-[14px] sm:text-[16px] text-center font-regular font-medium tracking-[-0.32px] flex-[1_0_0] transition-all duration-300 cursor-pointer hover:text-white/70 ${
                index === selectedIndex ? "block" : "hidden md:block"
              } ${selectedIndex === index ? "text-white/90" : "text-white/40"}`}
            >
              {slide.description}
            </button>
          ))}
          <LandingPFSNextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
}
