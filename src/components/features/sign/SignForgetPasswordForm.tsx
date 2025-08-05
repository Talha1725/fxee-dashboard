import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignSocialButtons from "@/components/features/sign/SignSocialButtons";
import SignOrDivider from "@/components/features/sign/SignOrDivider";
import SignForgetPasswordInputs from "@/components/features/sign/SignForgetPasswordInputs";
import { Button } from "@/components/ui/button";

export default function SignForgetPasswordForm() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="sm:w-[420px] flex flex-col items-end gap-6">
        <SignFormHeader isSignup={false} isForgotPassword={true} isResetPassword={false} />
        <SignForgetPasswordInputs />
        <Button variant="fancy" className="flex-[1_0_0] self-stretch">
          Send Reset Link
        </Button>
      </div>
    </div>
  );
} 