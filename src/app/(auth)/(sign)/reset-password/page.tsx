import SignResetPasswordForm from "@/components/features/sign/SignResetPasswordForm";
import SignPageContainer from "@/components/features/sign/SignPageContainer";
import SignLogo from "@/components/features/sign/SignLogo";
import SignBackToLogin from "@/components/features/sign/SignBackToLogin";

export default function ResetPasswordPage() {
  return (
    <SignPageContainer>
      <SignLogo />
      <SignResetPasswordForm />
      <SignBackToLogin />
    </SignPageContainer>
  );
} 