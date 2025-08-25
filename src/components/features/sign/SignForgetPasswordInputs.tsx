import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconEmail } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";

interface SignForgetPasswordInputsProps {
  formData: {
    email: string;
  };
  onChange: (field: string, value: string) => void;
  errors?: {
    email?: FieldError;
  };
  register: UseFormRegister<any>;
}

export default function SignForgetPasswordInputs({ formData, onChange, errors, register }: SignForgetPasswordInputsProps) {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch">
      <SignInputContainer error={errors?.email?.message}>
        <SignLabel label="Email Address" required />
        <Input
          placeholder="hello@example.com"
          icon={<IconEmail height={20} width={20} />}
          className="h-10 mt-1"
          type="email"
          {...register("email")}
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </SignInputContainer>
    </div>
  );
} 