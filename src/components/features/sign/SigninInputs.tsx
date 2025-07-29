import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconEmail, IconLock } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function SigninInputs() {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch">
      <SignInputContainer>
        <SignLabel label="Email Address" required />
        <Input
          placeholder="hello@example.com"
          icon={<IconEmail height={20} width={20} />}
        />
      </SignInputContainer>
      <SignInputContainer>
        <SignLabel label="Password" required />
        <Input
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
        />
      </SignInputContainer>
    </div>
  );
}
