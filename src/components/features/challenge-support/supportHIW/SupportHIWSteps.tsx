import React from "react";

import LandingHIWContentStepContainer from "@/components/features/landing/landingHIW/LandingHIWContentStepContainer";
import LandingHIWContentTitle from "@/components/features/landing/landingHIW/LandingHIWContentTitle";
import LandingHIWContentNumber from "@/components/features/landing/landingHIW/LandingHIWContentNumber";
import HIWTextContainer from "@/components/features/landing/landingHIW/LandingHIWContentTextContainer";
import SupportHIWStep1 from "@/components/features/challenge-support/supportHIW/SupportHIWStep1";
import SupportHIWStep2 from "@/components/features/challenge-support/supportHIW/SupportHIWStep2";
import SupportHIWStep3 from "@/components/features/challenge-support/supportHIW/SupportHIWStep3";
import SupportHIWStep4 from "@/components/features/challenge-support/supportHIW/SupportHIWStep4";
import SupportHIWStep5 from "@/components/features/challenge-support/supportHIW/SupportHIWStep5";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    id: 1,
    component: SupportHIWStep1,
    title: "Subscribe",
    description: "Subscribe to Pro or VIP plan.",
    number: "01",
    reverseOnDesktop: false,
  },
  {
    id: 2,
    component: SupportHIWStep2,
    title: "Account Mode",
    description: "Activate Simulation Account Mode.",
    number: "02",
    reverseOnDesktop: true,
  },
  {
    id: 3,
    component: SupportHIWStep3,
    title: "Connect",
    description: "Connect your external MT4/MT5 prop firm account",
    number: "03",
    reverseOnDesktop: false,
  },
  {
    id: 4,
    component: SupportHIWStep4,
    title: "Risk-Managed Strategies",
    description:
      "Our AI begins trading your account using smart, risk-managed strategies",
    number: "04",
    reverseOnDesktop: true,
  },
  {
    id: 5,
    component: SupportHIWStep5,
    title: "Monitor Progress",
    description: (
      <p className="max-w-[300px]">
        Monitor your progress and get closer to a payout — hands-free
      </p>
    ),
    number: "05",
    reverseOnDesktop: false,
  },
];

export default function CommunityHIWSteps() {
  return (
    <div className="flex flex-col items-center gap-7.5 max-w-[700px] lg:max-w-[1000px]">
      {steps.map((step, index) => {
        const StepComponent = step.component;
        const isLastStep = index === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <LandingHIWContentStepContainer>
              {step.reverseOnDesktop ? (
                <>
                  <HIWTextContainer
                    className="hidden lg:flex min-h-[180px]"
                    reverseOnDesktop={step.reverseOnDesktop}
                  >
                    <LandingHIWContentTitle title={step.title}>
                      {step.description}
                    </LandingHIWContentTitle>
                    <LandingHIWContentNumber number={step.number} />
                  </HIWTextContainer>
                  <StepComponent />
                  <HIWTextContainer
                    className="flex lg:hidden min-h-[180px]"
                    reverseOnDesktop={step.reverseOnDesktop}
                  >
                    <LandingHIWContentTitle title={step.title}>
                      {step.description}
                    </LandingHIWContentTitle>
                    <LandingHIWContentNumber number={step.number} />
                  </HIWTextContainer>
                </>
              ) : (
                <>
                  <StepComponent />
                  <HIWTextContainer
                    className="min-h-[180px]"
                    reverseOnDesktop={step.reverseOnDesktop}
                  >
                    <LandingHIWContentTitle title={step.title}>
                      {step.description}
                    </LandingHIWContentTitle>
                    <LandingHIWContentNumber number={step.number} />
                  </HIWTextContainer>
                </>
              )}
            </LandingHIWContentStepContainer>
            {!isLastStep && (
              <Separator className="bg-landing-hiw-separator-gradient" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
