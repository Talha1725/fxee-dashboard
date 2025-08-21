"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignForgetPasswordInputs from "@/components/features/sign/SignForgetPasswordInputs";
import { Button } from "@/components/ui/button";
import { useForgotPasswordMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { 
  handleApiError, 
  handleApiResponse, 
  validateEmail, 
  validateRequiredFields 
} from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";

export default function SignForgetPasswordForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // RTK Query mutation
  const [forgotPassword, { isLoading: isForgotPasswordLoading }] = useForgotPasswordMutation();
  
  // Form state
  const [formData, setFormData] = useState({
    email: "",
  });

  // Handle form field changes
  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Form validation
  const validateForm = () => {
    // Validate required fields
    const requiredValidation = validateRequiredFields(formData, ['email']);
    if (!requiredValidation.isValid) {
      showToast.validationError(requiredValidation.message!);
      return false;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      showToast.validationError("Please enter a valid email address");
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

      const response = await forgotPassword({
        email: formData.email,
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
      const errorMessage = handleApiError(error);
      showToast.apiError(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const isLoading = isForgotPasswordLoading;

  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="sm:w-[420px] flex flex-col items-end gap-6">
        <SignFormHeader isSignup={false} isForgotPassword={true} isResetPassword={false} />
        <SignForgetPasswordInputs 
          formData={formData}
          onChange={handleFieldChange}
        />
        <Button 
          onClick={handleSubmit}
          variant="fancy" 
          className="flex-[1_0_0] self-stretch"
          disabled={isLoading}
        >
          {isLoading ? "Sending Reset Link..." : "Send Reset Link"}
        </Button>
      </div>
    </div>
  );
} 