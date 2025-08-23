import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconEmail, IconLock } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

interface SigninInputsProps {
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
    userName: string;
    fullName: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SigninInputs({ formData, onChange }: SigninInputsProps) {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch">
      <SignInputContainer>
        <SignLabel label="Email Address for testing" required />
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
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
      </SignInputContainer>
    </div>
  );
}