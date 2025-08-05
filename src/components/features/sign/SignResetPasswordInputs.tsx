import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconLock } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function SignResetPasswordInputs() {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch z-50">
      <SignInputContainer>
        <SignLabel label="New Password" required />
        <Input
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
        />
      </SignInputContainer>
      <SignInputContainer>
        <SignLabel label="Confirm New Password" required />
        <Input
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
        />
      </SignInputContainer>
    </div>
  );
} 