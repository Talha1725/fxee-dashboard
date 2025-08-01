"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import LandingReviewCarouselSlide from "@/components/features/landing/landingReview/LandingReviewCarouselSlide";
import { usePrevNextButtons } from "@/hooks/use-prev-next-buttons";
import {
  ReviewNextButton,
  ReviewPrevButton,
} from "@/components/features/landing/landingReview/LandingReviewCarouselButton";

const SLIDES = [
  {
    name: "David Kim",
    testimonial:
      "“With the guidance I received, I finally feel confident navigating the market. The results are speaking for themselves!”",
  },
  {
    name: "Sarah Johnson",
    testimonial:
      "“The AI-powered insights have completely transformed my trading strategy. I'm seeing consistent profits for the first time!”",
  },
  {
    name: "Michael Chen",
    testimonial:
      "“Outstanding platform! The real-time analysis and automated trading features have exceeded my expectations.”",
  },
  {
    name: "David Kim",
    testimonial:
      "“With the guidance I received, I finally feel confident navigating the market. The results are speaking for themselves!”",
  },
  {
    name: "Sarah Johnson",
    testimonial:
      "“The AI-powered insights have completely transformed my trading strategy. I'm seeing consistent profits for the first time!”",
  },
  {
    name: "Michael Chen",
    testimonial:
      "“Outstanding platform! The real-time analysis and automated trading features have exceeded my expectations.”",
  },
];

export default function LandingReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi as EmblaCarouselType);

  return (
    <div className="flex flex-col gap-[50px] sm:gap-[70px]">
      <div className="max-w-[1000px]">
        <div className="" ref={emblaRef}>
          <div className="flex ml-0 sm:-ml-[155px]">
            {SLIDES.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 pl-0 sm:pl-[155px]"
              >
                <LandingReviewCarouselSlide
                  name={slide.name}
                  testimonial={slide.testimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <ReviewPrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <ReviewNextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}
