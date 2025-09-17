import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import LandingWhyFxeeCardText from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardText";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";

export default function LandingWhyFxeeCard({
  title,
  description,
  className,
  onMouseEnter,
  onMouseLeave,
  isActive = false,
}: {
  title: string;
  description: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  // Show description if card is active (autoplay) or hovered
  const shouldShowDescription = isActive || isHovered;

  return (
    <LandingWhyFxeeCardContainer
      className={`h-auto p-4 rounded-md ${
        isActive 
          ? 'opacity-100 border border-white/20 bg-gradient-to-r from-white/5 via-white/5 to-transparent' 
          : 'opacity-20'
      } hover:opacity-100 hover:border hover:border-white/20 hover:bg-gradient-to-r from-white/5 via-white/5 to-transparent ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        WebkitTransition: 'opacity 0.2s linear',
        transition: 'opacity 0.2s linear',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <LandingWhyFxeeCardText title={title} description={description} showDescription={shouldShowDescription} />
    </LandingWhyFxeeCardContainer>
  );
}
