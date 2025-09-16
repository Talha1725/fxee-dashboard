"use client";

import React from "react";

import * as motion from "motion/react-client";
import { staggerContainer } from "@/lib/motion-variants";
import { usePricingNavigation, useAuthNavigation } from "@/lib/utils/navigationUtils";
import { useLocalization } from "@/components/localization-provider";

import LandingHIW1 from "@/public/images/create-account-image.svg";
import LandingHIW2 from "@/public/images/simulate-train.svg";
import LandingHIW3 from "@/public/images/upgrade-prop-firm.svg";
import StepContainer from "./StepContainer";

export default function LandingHIWContent() {
  const { navigateToPricing } = usePricingNavigation();
  const { navigateToSignup, navigateToHome } = useAuthNavigation();
  const { t, locale } = useLocalization();

  const steps = [
    {
      number: "01",
      title: t("hiw_step1_title"),
      description: t("hiw_step1_description"),
      buttonText: t("hiw_step1_button"),
      image: LandingHIW1,
      imageAlt: "create account",
      reverseOnDesktop: false,
      onRight: false,
    },
    {
      number: "02",
      title: t("hiw_step2_title"),
      description: t("hiw_step2_description"),
      buttonText: t("hiw_step2_button"),
      image: LandingHIW2,
      imageAlt: "simulate and train",
      reverseOnDesktop: true,
      onRight: true,
    },
    {
      number: "03",
      title: t("hiw_step3_title"),
      description: t("hiw_step3_description"),
      buttonText: t("hiw_step3_button"),
      image: LandingHIW3,
      imageAlt: "upgrade prop firm",
      reverseOnDesktop: false,
      onRight: false,
    },
  ];

  const getButtonClickHandler = (buttonText: string) => {
    switch (buttonText) {
      case t("hiw_step1_button"):
      case "Get Started":
        return navigateToSignup;
      case t("hiw_step3_button"):
        return navigateToPricing;
      case t("hiw_step2_button"):
        return navigateToHome;
      default:
        return undefined;
    }
  };

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
          onButtonClick={getButtonClickHandler(step.buttonText)}
        />
      ))}
    </motion.div>
  );
}
