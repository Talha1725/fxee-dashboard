import SignInputContainer from "@/components/features/sign/SignInputContainer";
import SignLabel from "@/components/features/sign/SignLabel";
import { IconLock } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";

interface SignResetPasswordInputsProps {
  formData: {
    password: string;
    confirmPassword: string;
  };
  onChange: (field: string, value: string) => void;
  errors?: {
    password?: FieldError;
    confirmPassword?: FieldError;
  };
  register: UseFormRegister<any>;
}

export default function SignResetPasswordInputs({ formData, onChange, errors, register }: SignResetPasswordInputsProps) {
  return (
    <div className="flex flex-col items-center gap-3 self-stretch z-50">
      <SignInputContainer error={errors?.password?.message}>
        <SignLabel label="New Password" required />
        <Input
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
          {...register("password")}
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
      </SignInputContainer>
      <SignInputContainer error={errors?.confirmPassword?.message}>
        <SignLabel label="Confirm New Password" required />
        <Input
          placeholder="• • • • • • • • • •"
          icon={<IconLock height={20} width={20} />}
          isPassword
          className="h-10 mt-1"
          {...register("confirmPassword")}
          value={formData.confirmPassword}
          onChange={(e) => onChange("confirmPassword", e.target.value)}
        />
      </SignInputContainer>
    </div>
  );
} 