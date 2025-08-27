"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import OnboardNav from "@/components/features/onboard/OnboardNav";
import Thanks1 from "@/public/images/thanks1.png";
import ThanksHeader from "@/public/images/thankshead.svg";
import Thanks2 from "@/public/images/thanks2.png";
import ThanksBottom from "@/public/images/thanks-bottom.svg";
import { Button } from "@/components/ui/button";
import { DisplayMD, Body16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useRouter } from "next/navigation";

export default function Thanks() {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <div className={`flex flex-col self-stretch flex-[1_0_0] ${theme === "dark" ? "bg-dark-green-linear" : ""}`}>
      <Image
        priority
        src={theme === "dark" ? Thanks1 : ThanksHeader}
        alt="Thanks"
        className="absolute top-0 left-0 md:w-[30vw] w-[60vw] aspect-auto select-none"
      />
      <Image
        priority
        src={theme === "dark" ? Thanks2 : ThanksBottom}
        alt="Thanks"
        className="absolute bottom-0 right-0 md:w-[30vw] w-[60vw] h-auto select-none z-50"
      />
      <OnboardNav isOnboard={false} />
      <div className="flex justify-center items-center self-stretch flex-[1_0_0] gap-10">
        <div className="flex flex-col gap-5 items-center max-w-[720px] w-full">
          <div className="xl:w-[55%]">
          <DisplayMD className="text-center z-50 text-black dark:text-white">
            Thank You For Purchasing the Plan
          </DisplayMD>
          </div>
          <Body16 className="text-center z-50 text-black/60 dark:text-white">
            Your AI-powered trading journey starts now — get ready for smarter
            insights, faster execution, and real-time support designed to
            elevate your trading performance. Let&apos;s grow your portfolio
            together.
          </Body16>
          <Button
            variant={"fancy"}
            className="flex-wrap self-center px-8 py-2.5 gap-1 z-50"
            onClick={() => router.push("/home")}
          >
            Go To Dashboard
            <ChevronRight height={20} width={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
