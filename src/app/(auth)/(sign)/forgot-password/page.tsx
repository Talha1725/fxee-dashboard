import SignForgetPasswordForm from "@/components/features/sign/SignForgetPasswordForm";
import SignPageContainer from "@/components/features/sign/SignPageContainer";
import SignLogo from "@/components/features/sign/SignLogo";
import SignBackToLogin from "@/components/features/sign/SignBackToLogin";

export default function ForgotPasswordPage() {
  return (
    <SignPageContainer>
      <SignLogo />
      <SignForgetPasswordForm />
      <SignBackToLogin />
    </SignPageContainer>
  );
} 