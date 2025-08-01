import React from "react";
import { StaticImageData } from "next/image";

import HIWTextContainer from "@/components/features/how-it-works/HIWFlow/HIWTextContainer";
import LandingHIWContentStepContainer from "@/components/features/landing/landingHIW/LandingHIWContentStepContainer";
import LandingHIWContentImage from "@/components/features/landing/landingHIW/LandingHIWContentImage";
import LandingHIWContentTitle from "@/components/features/landing/landingHIW/LandingHIWContentTitle";
import LandingHIWContentNumber from "@/components/features/landing/landingHIW/LandingHIWContentNumber";
import { Separator } from "@/components/ui/separator";

import HIWImage1 from "@/public/images/hiw-1.png";
import HIWImage2 from "@/public/images/hiw-2.png";
import HIWImage3 from "@/public/images/hiw-3.png";
import HIWImage4 from "@/public/images/hiw-4.png";
import HIWImage5 from "@/public/images/hiw-5.png";

interface HIWStep {
  id: string;
  image: StaticImageData;
  title: string;
  bulletPoints: string[];
  number: string;
  textContainerClass?: string;
  isReversed?: boolean; // For responsive behavior where text comes first on lg+
}

const HIW_STEPS: HIWStep[] = [
  {
    id: "step1",
    image: HIWImage1,
    title: "Sign Up In Seconds",
    bulletPoints: [
      "Best Market Advice: Let FXEE scan the markets and give you top-tier trade ideas instantly.",
      "Custom Goal Mode (Premium): Set your profit target, risk tolerance, and timeframe — FXEE builds a personalized trade plan for you.",
    ],
    number: "01",
    textContainerClass: "min-h-[320px] xs:min-h-[280px]",
  },
  {
    id: "step2",
    image: HIWImage2,
    title: "Simulate & Train",
    bulletPoints: [
      "Get live charts powered by AI overlays",
      "See entries, exits, stop losses, Fibonacci zones, RSI/MAs, trendlines, and more",
      "Visual patterns (e.g. triangles, flags) are auto-drawn by the system",
    ],
    number: "02",
    textContainerClass: "min-h-[320px] xs:min-h-[260px]",
    isReversed: true,
  },
  {
    id: "step3",
    image: HIWImage3,
    title: "Upgrade for Prop Firm Mode",
    bulletPoints: [
      "Execute trades directly inside the FXEE dashboard",
      "No broker connection required",
      "Backtest and forward-test before going live",
    ],
    number: "03",
    textContainerClass: "min-h-[280px] xs:min-h-[240px]",
  },
  {
    id: "step4",
    image: HIWImage4,
    title: "Simulate & Train",
    bulletPoints: [
      "Activate Simulation Account Mode",
      "Copy trades to your external MT4/MT5 prop firm account",
      "Let FXEE manage and track your challenge performance",
    ],
    number: "04",
    isReversed: true,
  },
  {
    id: "step5",
    image: HIWImage5,
    title: "Upgrade for Prop Firm Mode",
    bulletPoints: [
      "AI learns your trading patterns and improves suggestions",
      "Save strategies, monitor risk, and optimize results",
    ],
    number: "05",
    textContainerClass: "xs:min-h-[220px]",
  },
];

export default function HIWFlowContent() {
  const renderTextContainer = (step: HIWStep, additionalClass?: string) => (
    <HIWTextContainer
      className={`${step.textContainerClass || ""} ${additionalClass || ""}`}
      isReversed={step.isReversed}
    >
      <LandingHIWContentTitle title={step.title}>
        <ul className="list-disc list-outside pl-5">
          {step.bulletPoints.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </LandingHIWContentTitle>
      <LandingHIWContentNumber number={step.number} />
    </HIWTextContainer>
  );

  return (
    <div className="flex flex-col items-center gap-7.5 max-w-[700px] lg:max-w-[1000px]">
      {HIW_STEPS.map((step, index) => (
        <React.Fragment key={step.id}>
          <LandingHIWContentStepContainer>
            {step.isReversed ? (
              <>
                {renderTextContainer(step, "hidden lg:flex")}
                <LandingHIWContentImage image={step.image} />
                {renderTextContainer(step, "flex lg:hidden")}
              </>
            ) : (
              <>
                <LandingHIWContentImage image={step.image} />
                {renderTextContainer(step)}
              </>
            )}
          </LandingHIWContentStepContainer>
          {index < HIW_STEPS.length - 1 && (
            <Separator className="bg-landing-hiw-separator-gradient" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
