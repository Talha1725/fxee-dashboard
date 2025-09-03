import React from "react";

import StepContainer from "@/components/features/landing/landingHIW/StepContainer";
import SupportHIWStep1 from "@/public/images/support-hiw-1.svg";
import SupportHIWStep2 from "@/public/images/support-hiw-2.svg";
import SupportHIWStep3 from "@/public/images/support-hiw-3.svg";
import SupportHIWStep4 from "@/public/images/support-hiw-4.svg";
import SupportHIWStep5 from "@/public/images/support-hiw-5.svg";
import { LongEllipse } from "@/components/ui/icon";

interface SupportStep {
  id: number;
  image: any;
  title: string;
  description: string;
  buttonText: string;
  reverseOnDesktop?: boolean;
  onRight?: boolean;
}

const steps: SupportStep[] = [
  {
    id: 1,
    image: SupportHIWStep1,
    title: "Subscribe",
    description: "Select your Pro or VIP plan.",
    buttonText: "Subscribe",
    reverseOnDesktop: false,
    onRight: false,
  },
  {
    id: 2,
    image: SupportHIWStep2,
    title: "Account Mode",
    description: "Activate Simulation Account Mode.",
    buttonText: "Activate",
    reverseOnDesktop: true,
    onRight: true,
  },
  {
    id: 3,
    image: SupportHIWStep3,
    title: "Connect",
    description: "Connect your external MT4/MT5 prop firm account",
    buttonText: "Connect",
    reverseOnDesktop: false,
    onRight: false,
  },
  {
    id: 4,
    image: SupportHIWStep4,
    title: "Risk-Managed Strategies",
    description:
      "Our AI analyzes, trading your account using smart risk-managed strategies.",
    buttonText: "Start Trading",
    reverseOnDesktop: true,
    onRight: true,
  },
  {
    id: 5,
    image: SupportHIWStep5,
    title: "Monitor Progress",
    description:
      "Monitor your progress and get closer to a payout — hassle-free.",
    buttonText: "View Progress",
    reverseOnDesktop: false,
    onRight: false,
  },
];

export default function CommunityHIWSteps() {
  return (
    <div className="flex flex-col items-center gap-7.5 max-w-[700px] lg:max-w-[950px] relative">
      <LongEllipse className="absolute -top-36 -right-[60%] sm:right-1/2 sm:translate-x-1/2 opacity-60" />

      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <StepContainer
            title={step.title}
            description={step.description}
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
