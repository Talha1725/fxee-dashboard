import SignHintText from "@/components/features/sign/SignHintText";
import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { Input } from "@/components/ui/input";
import { IconEmail, IconLock, IconUser } from "@/components/ui/icon";

export default function SignupInputs() {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch">
      <SignInputContainer>
        <SignLabel label="Full Name" required />
        <Input
          placeholder="John Doe"
          icon={<IconUser height={20} width={20} />}
          className="h-10 mt-1"
        />
      </SignInputContainer>
      <SignInputContainer>
        <SignLabel label="Email Address" required />
        <Input
          placeholder="hello@example.com"
          icon={<IconEmail height={20} width={20} />}
          className="h-10 mt-1"
        />
      </SignInputContainer>
      <SignInputContainer>
        <SignLabel label="Password" required />
        <Input
          placeholder="• • • • • • • • • • "
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
        />
        <SignHintText text="Must contain 1 uppercase letter, 1 number, min. 8 characters." />
      </SignInputContainer>
    </div>
  );
}
