import React from "react";
import { Title32, Description14 } from "@/components/ui/typography";

export default function SignFormHeader({ 
  isSignup, 
  isForgotPassword 
}: { 
  isSignup: boolean;
  isForgotPassword?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1 self-stretch">
      <Title32 className="text-center [font-feature-settings:'liga'_off,'calt'_off]">
        {isForgotPassword 
          ? "Forgot your password?" 
          : isSignup 
            ? "Create a new account" 
            : "Login to your account"}
      </Title32>
      <Description14 className="text-center">
        {isForgotPassword
          ? "Enter your email address and we'll send you a reset link."
          : isSignup
            ? "Enter your details to register."
            : "Enter your details to login."}
      </Description14>
    </div>
  );
}
