import SignForm from "@/components/features/sign/SignForm";
import SignLogo from "@/components/features/sign/SignLogo";
import SignPageContainer from "@/components/features/sign/SignPageContainer";
import SignSwitch from "@/components/features/sign/SignSwitch";

export default function page() {
  return (
    <SignPageContainer>
      <SignLogo />
      <SignForm isSignup={true} />
      <SignSwitch isSignup={true} />
    </SignPageContainer>
  );
}
