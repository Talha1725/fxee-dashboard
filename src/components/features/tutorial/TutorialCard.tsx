'use client'
import React, { memo, useMemo } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { TutorialNumberSVG } from "@/components/ui/TutorialNumberSVG";
import { TutorialBackgroundNumber } from "@/components/ui/TutorialBackgroundNumber";
import type { TutorialItem } from "@/data/tutorialData";

// Constants
const BACKGROUND_GRADIENT = "radial-gradient(circle at center, rgba(2,118,219,0.6), rgba(62,220,129,0.4), transparent 70%)";

interface TutorialCardProps extends TutorialItem {}

export const TutorialCard = memo<TutorialCardProps>(({
  number,
  heading,
  description,
  image,
  imagePosition = 'right',
}) => {
  const { theme } = useTheme();
  
  const imageSrc = useMemo(() => {
    return `/Images/${(theme === "dark") ? image.replace(".svg", "-dark.svg") : image}`;
  }, [theme, image]);

  const isImageLeft = imagePosition === 'left';

  return (
    <div className={`w-full max-w-[1000px] xl:max-w-full 2xl:max-w-full mx-auto flex flex-col lg:flex-row rounded-2xl bg-transparent min-h-[364px] lg:h-auto xl:h-auto tutorial-card-container ${isImageLeft ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-1 flex flex-col relative p-5 bg-transparent">
        {/* <div className="flex flex-col gap-2.5 flex-grow"> */}
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-satoshi-bold text-black dark:text-white leading-tight">
            {heading}
          </h3>
          <p className="text-[16px] sm:text-[18px] leading-relaxed dark:text-white/50 text-black/50 font-satoshi-regular break-words">
            {description}
          </p>
        {/* </div> */}

        <div className={`relative pl-0 lg:pl-0 pr-0 lg:pr-0 pt-[26px] pb-0 flex items-end  xl:pl-0 xl:pr-0 tutorial-content-padding ${isImageLeft ? 'lg:pl-0 lg:pr-0 xl:pl-0 xl:pr-0' : ''}`}>
          <TutorialBackgroundNumber number={number} />

          <div className={`relative mt-15 w-full lg:w-[300px] h-[157px] top-[50px] -left-[60px] sm:-left-[200px] md:-left-[200px] lg:top-2 tutorial-number-container ${isImageLeft ? 'lg:left-[10px]' : 'lg:left-[10px]'}`}>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] z-0"
              style={{
                width: "80%",
                background: BACKGROUND_GRADIENT,
                filter: "blur(84px)",
                opacity: 1,
              }}
            />
            <TutorialNumberSVG number={number} theme={theme} />
          </div>
        </div>
      </div>

      <div className="flex-1 w-full lg:w-[50%] flex items-center justify-center overflow-hidden">
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-full object-cover lg:object-contain xl:object-contain rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  );
});

TutorialCard.displayName = 'TutorialCard';

