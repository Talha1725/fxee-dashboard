"use client";
import React, { useState } from "react";

import BrokerInput from "@/components/features/onboard/broker/BrokerInput";
import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import BrokerSelection from "@/components/features/onboard/broker/BrokerSelection";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { CheckIcon } from "lucide-react";
import SignLabel from "../../sign/SignLabel";
import qrCode from "@/public/images/qr.svg";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

type BrokerPlanProps = {
  qrSection: boolean;
  setQrSection: (qrSection: boolean) => void;
};

export default function BrokerPlan({
  qrSection,
  setQrSection,
}: BrokerPlanProps) {
  const { theme } = useTheme();
  const [isConnected, setIsConnected] = useState(false);

  if (qrSection) {
    return (
      <>
      <OnboardCardContainer
        className={`w-full max-w-[420px] gap-4 ${
          theme === "dark" ? "bg-dark-radial-gradient" : "bg-white"
        } mx-auto z-50`}
      >
        <div className="flex flex-col justify-center w-full border-b border-transparent dark:border-white/10 dark:pb-3">
          <div>
            {" "}
            <SignLabel label="Crypto type dropdown" required />
            <Select>
              <SelectTrigger className="w-[100%] h-8 mt-3 bg-gray-100 border-transparent dark:border-white/10 dark:bg-white/5">
                <SelectValue placeholder="Select a crypto type" />
              </SelectTrigger>
              <SelectContent className="dark:bg-black bg-white">
                <SelectItem value="light" className="dark:text-white text-black">Crypto</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
        <div className="flex flex-col justify-center w-full border-b border-transparent dark:border-white/10 dark:pb-3">
          <div className="flex justify-center w-full">
            <div className="w-[200px] h-[200px] mx-auto border rounded-sm dark:border-white/10 p-2">
              <Image src={qrCode} alt="QR Code" width={200} height={200} />
            </div>
          </div>
            <p className="text-center dark:text-white font-satoshi mt-3">Scan QR Code for wallet address</p>
            </div>
            <div className="flex justify-between w-full font-satoshi">
              <p className="text-center dark:text-white/80 text-black/80">Wallet Address</p>
              <p className="dark:text-white font-semibold">xhdjfhu83763bxbx61</p>
            </div>
          
      </OnboardCardContainer>
        <Button variant="fancy" className="w-full max-w-[420px] mt-3">
        Copy Wallet Address
      </Button>
     </>
    );
  }

  return (
    <OnboardCardContainer
      className={`w-full max-w-[420px] gap-4 ${
        theme === "dark" ? "bg-dark-radial-gradient" : "bg-white"
      } ${
        isConnected
          ? `${
              theme === "dark"
                ? "bg-green-radial-gradient border-green-gradient"
                : "bg-light-green-gradient border-green-gradient"
            }`
          : ""
      } mx-auto z-50`}
    >
      <BrokerSelection />
      <BrokerInput />
      <Button
        onClick={() => {
          setTimeout(() => {
            setQrSection(true);
          }, 2000);
          setIsConnected(true);
        }}
        variant="fancy"
        className="w-full"
      >
        Connect {isConnected && <CheckIcon className="w-4 h-4" />}
      </Button>
      {isConnected && (
        <div className="absolute bottom-0 right-[16px] left-[16px]">
          <div className="h-[4px] w-[80%] mx-auto rounded-tr-lg rounded-tl-lg overflow-hidden bg-popular-gradient"></div>
        </div>
      )}
    </OnboardCardContainer>
  );
}
