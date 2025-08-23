import SignPageContainer from "@/components/features/sign/SignPageContainer";
import SignLogo from "@/components/features/sign/SignLogo";
import SignVerificationForm from "@/components/features/sign/SignVerificationForm";

export default function CongratSignupPage() {
  return (
    <SignPageContainer>
      <SignLogo />
      <SignVerificationForm />
    </SignPageContainer>
  );
}