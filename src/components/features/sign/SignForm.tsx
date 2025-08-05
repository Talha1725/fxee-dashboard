"use client";

import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignSocialButtons from "@/components/features/sign/SignSocialButtons";
import SignOrDivider from "@/components/features/sign/SignOrDivider";
import SigninInputs from "@/components/features/sign/SigninInputs";
import SignupInputs from "@/components/features/sign/SignupInputs";
import SignSupport from "@/components/features/sign/SignSupport";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignForm({ isSignup }: { isSignup: boolean }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="sm:w-[420px] flex flex-col items-end gap-6">
        <SignFormHeader isSignup={isSignup} isForgotPassword={false} isResetPassword={false} />
        <SignSocialButtons />
        <SignOrDivider />
        {isSignup ? <SignupInputs /> : <SigninInputs />}
        {!isSignup && <SignSupport />}
        <Button onClick={() => isSignup ? router.push("/signup") : router.push("/signin")} variant="fancy" className="flex-[1_0_0] self-stretch">
          {isSignup ? "Register" : "Login"}
        </Button>
      </div>
    </div>
  );
}
