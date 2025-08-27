import Verify2FAForm from "@/components/features/sign/Verify2FAForm";
import SignPageContainer from "@/components/features/sign/SignPageContainer";
import SignLogo from "@/components/features/sign/SignLogo";

export default function page() {
  return (
    <SignPageContainer>
      <SignLogo />
      <Verify2FAForm />
    </SignPageContainer>
  );
}