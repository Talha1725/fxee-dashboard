import React from "react";
import { StaticImageData } from "next/image";

import StepContainer from "@/components/features/landing/landingHIW/StepContainer";

import HIWImage1 from "@/public/images/hiw-1.svg";
import HIWImage2 from "@/public/images/hiw-2.svg";
import HIWImage3 from "@/public/images/hiw-3.svg";
import HIWImage4 from "@/public/images/hiw-4.svg";
import HIWImage5 from "@/public/images/hiw-5.svg";
import { LongEllipse } from "@/components/ui/icon";

interface HIWStep {
  id: string;
  image: StaticImageData;
  title: string;
  points: string[];
  buttonText: string;
  reverseOnDesktop?: boolean;
  onRight?: boolean;
}

const HIW_STEPS: HIWStep[] = [
  {
    id: "step1",
    image: HIWImage1,
    title: "Choose Your Mode",
    points: [
      "Real Market Advice: Free trade ideas from FXEE market scanning",
      "Custom Goal Mode (Premium): Set profit target, risk tolerance, and timeframe — FXEE builds personalized trade plans",
    ],
    buttonText: "Get Started",
    onRight: false,
  },
  {
    id: "step2",
    image: HIWImage2,
    title: "Analyze with AI",
    points: [
      "Live charts powered by AI overlays",
      "See entries, exits, stop losses, Fibonacci zones, RSI/BBs, trendlines, and more",
      "Visual patterns (e.g. triangles, flags) are auto-drawn by the system",
    ],
    buttonText: "Try Analysis",
    reverseOnDesktop: true,
    onRight: true,
  },
  {
    id: "step3",
    image: HIWImage3,
    title: "Simulate Trades Without Risk",
    points: [
      "Execute trades directly inside the FXEE platform",
      "Simulate a personalized trade plan",
      "Practice and improve before going live",
    ],
    buttonText: "Start Simulation",
    onRight: false,
  },
  {
    id: "step4",
    image: HIWImage4,
    title: "Upgrade for Challenge Mode",
    points: [
      "All customization features unlocked",
      "Access Challenge Mode and test your trading skills",
      "Earn prizes and rewards for top performers",
    ],
    buttonText: "Upgrade Now",
    reverseOnDesktop: true,
    onRight: true,
  },
  {
    id: "step5",
    image: HIWImage5,
    title: "Track, Improve, Repeat",
    points: [
      "A journaling system to track all your trades",
      "Gain insights into your trading habits and optimize trade strategies",
    ],
    buttonText: "View Performance",
    onRight: false,
  },
];

export default function HIWFlowContent() {
  return (
    <div className="flex flex-col items-center gap-9 sm:gap-7.5 max-w-[700px] lg:max-w-[900px] relative">
      <LongEllipse className="absolute top-0 -right-[80%] sm:right-1/2 sm:translate-x-1/2 opacity-70 sm:opacity-80" />

      {HIW_STEPS.map((step, index) => (
        <React.Fragment key={step.id}>
          <StepContainer
            title={step.title}
            points={step.points}
            buttonText={step.buttonText}
            imageSrc={step.image.src}
            imageAlt={step.title}
            reverseOnDesktop={step.reverseOnDesktop}
            onRight={step.onRight}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
