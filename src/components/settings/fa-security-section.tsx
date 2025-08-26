"use client";
import { Text14, Text16, Text20 } from "../ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IconAuthenticator, MailIcon, SmsCodeIcon } from "../ui/icon";
import { Button } from "../ui/button";

export default function FASecuritySection() {
  const { theme } = useTheme();
  const [selectedFA, setSelectedFA] = useState<string>("");
  const [originalFA, setOriginalFA] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize 2FA state (simulate getting current 2FA setting)
  useEffect(() => {
    // TODO: Get current 2FA setting from API/user context
    const current2FA = localStorage.getItem("ai-trading-2fa-setting") || "";
    setSelectedFA(current2FA);
    setOriginalFA(current2FA);
  }, []);

  const handleApplyChanges = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call to update 2FA setting
      console.log("Updating 2FA setting to:", selectedFA);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage for persistence
      localStorage.setItem("ai-trading-2fa-setting", selectedFA);
      setOriginalFA(selectedFA);
      
      // TODO: Show success message
      console.log("2FA setting updated successfully");
    } catch (error) {
      // TODO: Handle error
      console.error("Error updating 2FA setting:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDiscard = () => {
    setSelectedFA(originalFA);
  };

  const isDirty = selectedFA !== originalFA;

  return (
    <div className="mt-5">
      <Text20 className="font-satoshi">2FA Security</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Enable two-factor authentication to your account.{" "}
      </Text16>

      <RadioGroup 
        value={selectedFA} 
        onValueChange={setSelectedFA}
        className="mt-5"
      >
        {/* SMS Code Option */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === "sms"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "light"
                ? "rgba(0, 0, 0, 0.02)"
                : "rgba(255, 255, 255, 0.02)",
            background:
              theme === "light"
                ? "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
          onClick={() => setSelectedFA("sms")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                <SmsCodeIcon />
              </div>
              <div className="flex flex-col">
                <Text16 className="font-satoshi">SMS Code</Text16>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                Receive a one-time verification code via SMS to enter during login.                </Text14>
              </div>
            </div>
            <RadioGroupItem
              value="sms"
              id="sms"
              className={`${
                selectedFA === "sms" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Email Code Option */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === "email"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
          }}
          onClick={() => setSelectedFA("email")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                <MailIcon />
              </div>
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Email Code</Text16>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                Get a temporary verification code sent to your email for added security.                </Text14>
              </div>
            </div>
            <RadioGroupItem
              value="email"
              id="email"
              className={`${
                selectedFA === "email" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Authenticator App Option */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === "authenticator"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
          }}
          onClick={() => setSelectedFA("authenticator")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                <IconAuthenticator />
              </div>
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Authenticator App</Text16>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                Use an authenticator app to generate time-based verification codes for login.                </Text14>
              </div>
            </div>
            <RadioGroupItem
              value="authenticator"
              id="authenticator"
              className={`${
                selectedFA === "authenticator" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>
      </RadioGroup>

      {/* Action Buttons */}
      <div className="w-full mt-5">
       
        <Button
          variant={theme === "dark" ? "white" : "black"}
          className="h-[52px] font-satoshi-medium w-full"
          onClick={handleApplyChanges}
          disabled={!isDirty || isSubmitting}
        >
          Enable 2FA Security
        </Button>
      </div>
    </div>
  );
}
