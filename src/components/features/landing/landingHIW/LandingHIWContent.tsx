"use client";

import React from "react";

import * as motion from "motion/react-client";
import { staggerContainer } from "@/lib/motion-variants";

import LandingHIW1 from "@/public/images/create-account-image.svg";
import LandingHIW2 from "@/public/images/simulate-train.svg";
import LandingHIW3 from "@/public/images/upgrade-prop-firm.svg";
import StepContainer from "./StepContainer";

const steps = [
  {
    number: "01",
    title: "Sign Up In Seconds",
    description: "Create your FREE account quickly with a streamlined process—no complex KYC needed to get started. Jump straight into the action without unnecessary delays.",
    buttonText: "Get Started Today",
    image: LandingHIW1,
    imageAlt: "create account",
    reverseOnDesktop: false,
    onRight: false,
  },
  {
    number: "02",
    title: "Simulate & Train",
    description: "Trade on FXEE's user-friendly dashboard, testing AI setups and refining strategies in a realistic virtual environment that simulates live market conditions without any financial risk.",
    buttonText: "Get A Demo Account",
    image: LandingHIW2,
    imageAlt: "simulate and train",
    reverseOnDesktop: true,
    onRight: true,
  },
  {
    number: "03",
    title: "Upgrade for Prop Firm Mode",
    description: "Unlock Prop Firm Mode to copy simulation results to funded accounts, using integrated tools to manage real trades across various prop firm platforms without leaving FXEE.",
    buttonText: "View Pricing Plans",
    image: LandingHIW3,
    imageAlt: "upgrade prop firm",
    reverseOnDesktop: false,
    onRight: false,
  },
];

export default function LandingHIWContent() {
  return (
    <motion.div
      className="flex flex-col items-center gap-10 md:gap-7.5 max-w-[900px]"
      {...staggerContainer}
    >
      {steps.map((step, index) => (
        <StepContainer
          key={step.number}
          title={step.title}
          description={step.description}
          buttonText={step.buttonText}
          imageSrc={step.image}
          imageAlt={step.imageAlt}
          reverseOnDesktop={step.reverseOnDesktop}
          onRight={step.onRight}
        />
      ))}
    </motion.div>
  );
}
