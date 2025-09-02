"use client";

import React from "react";
import LandingReviewCarouselSlide from "@/components/features/landing/landingReview/LandingReviewCarouselSlide";
import Joseph from "@/public/images/Joseph.png";
import Alice from "@/public/images/Alice.png";
import Michael from "@/public/images/michael-smith.png";
import { EllipsLight } from "@/components/ui/icon";

const TESTIMONIALS = [
  {
    name: "Alice Johnson",
    testimonial: "As a part-time trader, I lack time for chart analysis. FXEE identifies high-probability setups for me. It's brilliant.",
    image: Alice,
  },
  {
    name: "Michael Smith",
    testimonial: "The Sentiment Scanner is a game-changer for crypto. It shows market sentiment beyond just charts.",
    image: Michael,
  },
  {
    name: "Joseph Brown",
    testimonial: "The simulator is super realistic. It helped me test strategies with AI suggestions without risking money.",
    image: Joseph,
  },
  {
    name: "James Wilson",
    testimonial: "I struggled with emotional trading. The AI Trade Advisor gives clear, data-driven plans that keep me focused.",
    image: Joseph, // Using Joseph's image as placeholder
  },
  {
    name: "Michael Smith",
    testimonial: "After a decade of trading, I'm impressed. The AI spots subtle patterns that are easy to miss.",
    image: Michael,
  },
  {
    name: "James Wilson",
    testimonial: "The platform improved my risk-to-reward ratio. I'm winning more trades with bigger wins and smaller losses.",
    image: Joseph, // Using Joseph's image as placeholder
  },
  {
    name: "Alice Johnson",
    testimonial: "The AI tools helped me pass my funding challenge! The simulator prepared me for various market conditions, key to my success.",
    image: Alice,
  },
  {
    name: "Michael Smith",
    testimonial: "The VIP tools, especially the News Impact Predictor, are amazing. I can position myself ahead of major events.",
    image: Michael,
  },
  {
    name: "Joseph Brown",
    testimonial: "I started with the free plan and was impressed. Upgraded to Pro in a week and saw a 15% rise in monthly returns.",
    image: Joseph,
  },
  {
    name: "James Wilson",
    testimonial: "The Telegram community is fantastic. Real-time alerts and discussions with other FXEE traders are invaluable.",
    image: Joseph, // Using Joseph's image as placeholder
  },
  {
    name: "Alice Johnson",
    testimonial: "As a part-time trader, I lack time for chart analysis. FXEE identifies high-probability setups for me. It's brilliant.",
    image: Alice,
  },
  {
    name: "Michael Smith",
    testimonial: "The Sentiment Scanner is a game-changer for crypto. It shows market sentiment beyond just charts.",
    image: Michael,
  },
  {
    name: "Joseph Brown",
    testimonial: "The simulator is super realistic. It helped me test strategies with AI suggestions without risking money.",
    image: Joseph,
  },
  {
    name: "James Wilson",
    testimonial: "I struggled with emotional trading. The AI Trade Advisor gives clear, data-driven plans that keep me focused.",
    image: Joseph, // Using Joseph's image as placeholder
  },
  {
    name: "Michael Smith",
    testimonial: "After a decade of trading, I'm impressed. The AI spots subtle patterns that are easy to miss.",
    image: Michael,
  },
  {
    name: "James Wilson",
    testimonial: "The platform improved my risk-to-reward ratio. I'm winning more trades with bigger wins and smaller losses.",
    image: Joseph, // Using Joseph's image as placeholder
  },
  {
    name: "Alice Johnson",
    testimonial: "The AI tools helped me pass my funding challenge! The simulator prepared me for various market conditions, key to my success.",
    image: Alice,
  },
  {
    name: "Michael Smith",
    testimonial: "The VIP tools, especially the News Impact Predictor, are amazing. I can position myself ahead of major events.",
    image: Michael,
  },
  {
    name: "Joseph Brown",
    testimonial: "I started with the free plan and was impressed. Upgraded to Pro in a week and saw a 15% rise in monthly returns.",
    image: Joseph,
  },
  {
    name: "James Wilson",
    testimonial: "The Telegram community is fantastic. Real-time alerts and discussions with other FXEE traders are invaluable.",
    image: Joseph, // Using Joseph's image as placeholder
  },
];

export default function LandingReviewCarousel() {
  return (
    <div className="flex flex-col gap-5 relative">
      <EllipsLight className="absolute top-0 left-0 w-full h-full" />
      {/* First row - scrolls left to right */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-left-to-right">
          {TESTIMONIALS.slice(0, 8).map((testimonial, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mr-4">
              <LandingReviewCarouselSlide
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {TESTIMONIALS.slice(0, 8).map((testimonial, index) => (
            <div key={`row1-duplicate-${index}`} className="flex-shrink-0 mr-4">
              <LandingReviewCarouselSlide
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolls right to left */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-right-to-left">
          {TESTIMONIALS.slice(8, 16).map((testimonial, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 mr-4">
              <LandingReviewCarouselSlide
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {TESTIMONIALS.slice(8, 16).map((testimonial, index) => (
            <div key={`row2-duplicate-${index}`} className="flex-shrink-0 mr-4">
              <LandingReviewCarouselSlide
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Third row - scrolls left to right */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-left-to-right-slow">
          {/* Use remaining testimonials and wrap around to beginning if needed */}
          {[...TESTIMONIALS.slice(16), ...TESTIMONIALS.slice(0, 8)].map((testimonial, index) => (
            <div key={`row3-${index}`} className="flex-shrink-0 mr-4">
              <LandingReviewCarouselSlide
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[...TESTIMONIALS.slice(16), ...TESTIMONIALS.slice(0, 8)].map((testimonial, index) => (
            <div key={`row3-duplicate-${index}`} className="flex-shrink-0 mr-4">
              <LandingReviewCarouselSlide
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
