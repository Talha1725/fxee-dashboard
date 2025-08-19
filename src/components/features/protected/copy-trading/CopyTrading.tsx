"use client";
import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import CopyTradingAccounts from "./accounts/CopyTradingAccounts";
import CopyTradingBenefits from "./benefits/CopyTradingBenefits";
import CopyTradingHowTo from "./how-to/CopyTradingHowTo";
import { useTheme } from "@/lib/contexts/ThemeContext";
import mt5 from "@/public/images/mt-5.svg";
import Image from "next/image";
import { Text14, Text16, Text24 } from "@/components/ui/typography";

export default function CopyTrading() {
  const { theme } = useTheme();
  return (
    <ProtectedContentContainer className="sm:gap-10">
      {/* Account Details */}
      <div className="flex w-full justify-center items-center">
        <div
          className={`w-full md:w-[70%] lg:w-[50%] p-4 md:p-6 rounded-[16px] border border-white/3 ${
            theme === "dark" ? "bg-dark-radial-gradient" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-center gap-2.5 w-full">
            <Image src={mt5} alt="mt-5" width={60} height={60} />
            <Text24 className="font-satoshi-medium text-black dark:text-white">
              MT5 Account Details
            </Text24>
          </div>
          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Account Type
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                Demo Account
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Login
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                100354762
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Password
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                demo1234
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Server
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                MetaQuotes-Demo
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Investor Password (Read-only)
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                investor123
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Leverage
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                1:100
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Initial Balance
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                $10,000.00
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Currency
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                USD ($)
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Account Name
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                John Doe
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Broker
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                FXEE Markets
              </Text16>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
              <Text16 className="text-black dark:text-white font-satoshi opacity-60">
                Account Creation Date
              </Text16>
              <Text16 className="text-black dark:text-white font-satoshi-medium text-end">
                June 10, 2025
              </Text16>
            </div>
          </div>
        </div>
      </div>
      
      <CopyTradingAccounts />
      <CopyTradingBenefits />
      <CopyTradingHowTo />
    </ProtectedContentContainer>
  );
}
