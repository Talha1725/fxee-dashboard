"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignForgetPasswordInputs from "@/components/features/sign/SignForgetPasswordInputs";
import { Button } from "@/components/ui/button";

import { useForgotPasswordMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { 
  handleApiError,
  handleApiResponse
} from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";
import { forgotPasswordSchema, ForgotPasswordFormData } from "@/lib/validations/auth";

export default function SignForgetPasswordForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // RTK Query mutation
  const [forgotPassword, { isLoading: isForgotPasswordLoading }] = useForgotPasswordMutation();
  
  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  // Watch form values for input components
  const formData = watch();

  // Handle form field changes for input components
  const handleFieldChange = (field: string, value: string) => {
    setValue(field as keyof ForgotPasswordFormData, value);
  };

  // Handle form submission
  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      dispatch(setLoading(true));

      const response = await forgotPassword({
        email: data.email,
      }).unwrap();

      // Use centralized response handling
      const isSuccess = handleApiResponse(
        response,
        // Success callback
        () => {
          showToast.passwordResetSent();
          router.push("/signin");
        },
        // Error callback
        (errorMessage) => {
          showToast.apiError(errorMessage);
        }
      );

      if (!isSuccess) {
        return; // Error already handled by callback
      }

    } catch (error: any) {
      const errorMessage = handleApiError(error as any);
      showToast.apiError(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const isLoading = isForgotPasswordLoading;

  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="w-[90%] md:w-[420px] flex flex-col items-end md:gap-6 gap-3">
        <SignFormHeader isSignup={false} isForgotPassword={true} isResetPassword={false} />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <SignForgetPasswordInputs 
            formData={formData}
            onChange={handleFieldChange}
            errors={errors}
            register={register}
          />
          <Button 
            type="submit"
            variant="fancy" 
            className="flex-[1_0_0] self-stretch w-full mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Sending Reset Link..." : "Send Reset Link"}
          </Button>
        </form>
      </div>
    </div>
  );
} 