"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignResetPasswordInputs from "@/components/features/sign/SignResetPasswordInputs";
import { Button } from "@/components/ui/button";

import { useResetPasswordMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { 
  handleApiError,
  handleApiResponse
} from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";
import { resetPasswordSchema, ResetPasswordFormData } from "@/lib/validations/auth";

export default function SignResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  
  // Get token from URL params
  const token = searchParams.get('token');
  
  // RTK Query mutation
  const [resetPassword, { isLoading: isResetPasswordLoading }] = useResetPasswordMutation();
  
  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  });

  // Watch form values for input components
  const formData = watch();

  // Handle form field changes for input components
  const handleFieldChange = (field: string, value: string) => {
    setValue(field as keyof ResetPasswordFormData, value);
  };

  // Handle form submission
  const onSubmit = async (data: ResetPasswordFormData) => {
    // Validate token
    if (!token) {
      showToast.validationError("Invalid reset token");
      return;
    }

    try {
      dispatch(setLoading(true));

      const response = await resetPassword({
        token: token!,
        password: data.password,
      }).unwrap();

      // Use centralized response handling
      const isSuccess = handleApiResponse(
        response,
        // Success callback
        () => {
          showToast.passwordResetSuccess();
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

  const isLoading = isResetPasswordLoading;

  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0] z-50">
      <div className="w-[90%] md:w-[420px] flex flex-col items-end md:gap-6 gap-3">
        <SignFormHeader isSignup={false} isForgotPassword={false} isResetPassword={true} />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <SignResetPasswordInputs 
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
            {isLoading ? "Resetting Password..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
} 