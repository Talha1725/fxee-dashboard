import Image from "next/image";
import { ChevronRight } from "lucide-react";

import OnboardNav from "@/components/features/onboard/OnboardNav";
import Thanks1 from "@/public/images/thanks1.png";
import Thanks2 from "@/public/images/thanks2.png";
import { Button } from "@/components/ui/button";
import { DisplayMD, Body16 } from "@/components/ui/typography";

export default function Thanks() {
  return (
    <div className="flex flex-col self-stretch flex-[1_0_0] bg-dark-green-linear">
      <Image
        priority
        src={Thanks1}
        alt="Thanks"
        className="absolute top-0 left-0 md:w-[30vw] w-[60vw] aspect-auto select-none"
      />
      <Image
        priority
        src={Thanks2}
        alt="Thanks"
        className="absolute bottom-0 right-0 md:w-[30vw] w-[60vw] h-auto select-none"
      />
      <OnboardNav isOnboard={false} />
      <div className="flex justify-center items-center self-stretch flex-[1_0_0] gap-10">
        <div className="flex flex-col gap-5 items-center max-w-[720px] w-full">
          <DisplayMD className="text-center">
            Thank You For Purchasing the Plan
          </DisplayMD>
          <Body16 className="text-center">
            Your AI-powered trading journey starts now — get ready for smarter
            insights, faster execution, and real-time support designed to
            elevate your trading performance. Let&apos;s grow your portfolio
            together.
          </Body16>
          <Button
            variant={"fancy"}
            className="flex-wrap self-center px-8 py-2.5 gap-1"
          >
            Go To Dashboard
            <ChevronRight height={20} width={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
