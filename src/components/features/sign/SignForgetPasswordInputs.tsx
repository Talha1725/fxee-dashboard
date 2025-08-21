import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconEmail } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

interface SignForgetPasswordInputsProps {
  formData: {
    email: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SignForgetPasswordInputs({ formData, onChange }: SignForgetPasswordInputsProps) {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch">
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
    </div>
  );
} 