import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconEmail } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function SignForgetPasswordInputs() {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch">
      <SignInputContainer>
        <SignLabel label="Email Address" required />
        <Input
          placeholder="hello@example.com"
          icon={<IconEmail height={20} width={20} />}
          className="h-10 mt-1"
        />
      </SignInputContainer>
    </div>
  );
} 