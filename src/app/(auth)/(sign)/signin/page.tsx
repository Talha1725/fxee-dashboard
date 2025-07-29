import SignForm from "@/components/features/sign/SignForm";
import SignPageContainer from "@/components/features/sign/SignPageContainer";
import SignLogo from "@/components/features/sign/SignLogo";
import SignSwitch from "@/components/features/sign/SignSwitch";

export default function page() {
  return (
    <SignPageContainer>
      <SignLogo />
      <SignForm isSignup={false} />
      <SignSwitch isSignup={false} />
    </SignPageContainer>
  );
}
