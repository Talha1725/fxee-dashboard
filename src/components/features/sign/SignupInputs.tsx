import SignHintText from "@/components/features/sign/SignHintText";
import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { Input } from "@/components/ui/input";
import { IconEmail, IconLock, IconUser } from "@/components/ui/icon";

interface SignupInputsProps {
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
    userName: string;
    fullName: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SignupInputs({ formData, onChange }: SignupInputsProps) {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch z-50">
      <SignInputContainer>
        <SignLabel label="Full Name" required />
        <Input
          placeholder="John Doe"
          icon={<IconUser height={20} width={20} />}
          className="h-10 mt-1"
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
        />
      </SignInputContainer>

      <SignInputContainer>
        <SignLabel label="Username" required />
        <Input
          placeholder="johndoe"
          icon={<IconUser height={20} width={20} />}
          className="h-10 mt-1"
          value={formData.userName}
          onChange={(e) => onChange("userName", e.target.value)}
        />
      </SignInputContainer>

      <SignInputContainer>
        <SignLabel label="Email Address" required />
        <Input
          placeholder="hello@example.com"
          icon={<IconEmail height={20} width={20} />}
          className="h-10 mt-1"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </SignInputContainer>

      <SignInputContainer>
        <SignLabel label="Password" required />
        <Input
          placeholder="• • • • • • • • • • "
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
        <SignHintText text="Must contain 1 uppercase letter, 1 number, min. 8 characters." />
      </SignInputContainer>

      <SignInputContainer>
        <SignLabel label="Confirm Password" required />
        <Input
          placeholder="• • • • • • • • • • "
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
          value={formData.confirmPassword}
          onChange={(e) => onChange("confirmPassword", e.target.value)}
        />
      </SignInputContainer>
    </div>
  );
}