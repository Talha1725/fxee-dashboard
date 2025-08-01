"use client";

import React from "react";

import * as motion from "motion/react-client";

import LandingHIWContentNumber from "@/components/features/landing/landingHIW/LandingHIWContentNumber";
import LandingHIWContentTitle from "@/components/features/landing/landingHIW/LandingHIWContentTitle";
import LandingHIWContentStepContainer from "@/components/features/landing/landingHIW/LandingHIWContentStepContainer";
import LandingHIWContentImage from "@/components/features/landing/landingHIW/LandingHIWContentImage";
import LandingHIWContentTextContainer from "@/components/features/landing/landingHIW/LandingHIWContentTextContainer";
import { Separator } from "@/components/ui/separator";
import { staggerContainer } from "@/lib/motion-variants";

import LandingHIW1 from "@/public/images/landing-hiw-2.png";
import LandingHIW2 from "@/public/images/landing-hiw-2.png";
import LandingHIW3 from "@/public/images/landing-hiw-3.png";

const steps = [
  {
    number: "01",
    title: "Sign Up In Seconds",
    description: "Fast account creation — no complex KYC needed",
    image: LandingHIW1,
    reverseOnDesktop: false,
  },
  {
    number: "02",
    title: "Simulate & Train",
    description:
      "Place trades on FXEE's dashboard, test AI setups, refine your strategy",
    image: LandingHIW2,
    reverseOnDesktop: true,
  },
  {
    number: "03",
    title: "Upgrade for Prop Firm Mode",
    description:
      "Copy your simulation results manually or via tools to external funded accounts",
    image: LandingHIW3,
    reverseOnDesktop: false,
  },
];

export default function LandingHIWContent() {
  return (
    <motion.div
      className="flex flex-col items-center gap-7.5 max-w-[1000px]"
      {...staggerContainer}
    >
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <LandingHIWContentStepContainer>
            {step.reverseOnDesktop ? (
              <>
                <LandingHIWContentTextContainer
                  className="hidden lg:flex"
                  reverseOnDesktop={step.reverseOnDesktop}
                >
                  <LandingHIWContentTitle title={step.title} key={index + 1}>
                    {step.description}
                  </LandingHIWContentTitle>
                  <LandingHIWContentNumber number={step.number} />
                </LandingHIWContentTextContainer>
                <LandingHIWContentImage image={step.image} />
                <LandingHIWContentTextContainer
                  className="flex lg:hidden"
                  reverseOnDesktop={step.reverseOnDesktop}
                >
                  <LandingHIWContentTitle title={step.title} key={index + 1}>
                    {step.description}
                  </LandingHIWContentTitle>
                  <LandingHIWContentNumber number={step.number} />
                </LandingHIWContentTextContainer>
              </>
            ) : (
              <>
                <LandingHIWContentImage image={step.image} />
                <LandingHIWContentTextContainer
                  reverseOnDesktop={step.reverseOnDesktop}
                >
                  <LandingHIWContentTitle title={step.title} key={index + 1}>
                    {step.description}
                  </LandingHIWContentTitle>
                  <LandingHIWContentNumber number={step.number} />
                </LandingHIWContentTextContainer>
              </>
            )}
          </LandingHIWContentStepContainer>
          {index < steps.length - 1 && (
            <Separator className="bg-landing-hiw-separator-gradient" />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
