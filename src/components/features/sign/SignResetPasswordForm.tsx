import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignResetPasswordInputs from "@/components/features/sign/SignResetPasswordInputs";
import { Button } from "@/components/ui/button";

export default function SignResetPasswordForm() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="sm:w-[420px] flex flex-col items-end gap-6">
        <SignFormHeader isSignup={false} isForgotPassword={false} isResetPassword={true} />
        <SignResetPasswordInputs />
        <Button variant="fancy" className="flex-[1_0_0] self-stretch">
          Reset Password
        </Button>
      </div>
    </div>
  );
} 