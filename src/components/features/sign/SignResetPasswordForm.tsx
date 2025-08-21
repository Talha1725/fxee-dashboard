"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignResetPasswordInputs from "@/components/features/sign/SignResetPasswordInputs";
import { Button } from "@/components/ui/button";
import { useResetPasswordMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { 
  handleApiError, 
  handleApiResponse, 
  validatePassword, 
  validateRequiredFields 
} from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";

export default function SignResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  
  // Get token from URL params
  const token = searchParams.get('token');
  
  // RTK Query mutation
  const [resetPassword, { isLoading: isResetPasswordLoading }] = useResetPasswordMutation();
  
  // Form state
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // Handle form field changes
  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Form validation
  const validateForm = () => {
    // Validate required fields
    const requiredValidation = validateRequiredFields(formData, ['password', 'confirmPassword']);
    if (!requiredValidation.isValid) {
      showToast.validationError(requiredValidation.message!);
      return false;
    }

    // Validate password strength
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      showToast.validationError(passwordValidation.message!);
      return false;
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      showToast.validationError("Passwords do not match");
      return false;
    }

    // Validate token
    if (!token) {
      showToast.validationError("Invalid reset token");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      dispatch(setLoading(true));

      const response = await resetPassword({
        token: token!,
        password: formData.password,
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
      const errorMessage = handleApiError(error);
      showToast.apiError(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const isLoading = isResetPasswordLoading;

  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0] z-50">
      <div className="sm:w-[420px] flex flex-col items-end gap-6">
        <SignFormHeader isSignup={false} isForgotPassword={false} isResetPassword={true} />
        <SignResetPasswordInputs 
          formData={formData}
          onChange={handleFieldChange}
        />
        <Button 
          onClick={handleSubmit}
          variant="fancy" 
          className="flex-[1_0_0] self-stretch"
          disabled={isLoading}
        >
          {isLoading ? "Resetting Password..." : "Reset Password"}
        </Button>
      </div>
    </div>
  );
} 