import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconLock } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

interface SignResetPasswordInputsProps {
  formData: {
    password: string;
    confirmPassword: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SignResetPasswordInputs({ formData, onChange }: SignResetPasswordInputsProps) {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch z-50">
      <SignInputContainer>
        <SignLabel label="New Password" required />
        <Input
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
      </SignInputContainer>
      <SignInputContainer>
        <SignLabel label="Confirm New Password" required />
        <Input
          placeholder="• • • • • • • • • •"
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