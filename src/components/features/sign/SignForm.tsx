"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignSocialButtons from "@/components/features/sign/SignSocialButtons";
import SignOrDivider from "@/components/features/sign/SignOrDivider";
import SigninInputs from "@/components/features/sign/SigninInputs";
import SignupInputs from "@/components/features/sign/SignupInputs";
import SignSupport from "@/components/features/sign/SignSupport";
import { Button } from "@/components/ui/button";

import { useLoginMutation, useRegisterMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { RootState } from "@/lib/redux/store";
import { 
  handleApiError, 
  validateEmail, 
  validatePassword, 
  validateRequiredFields 
} from "@/lib/utils/apiUtils";
import { handleAuthentication } from "@/lib/utils/authUtils";
import { showToast } from "@/lib/utils/toast";
import { AuthResponse, AuthResponseData } from '@/types/api';

export default function SignForm({ isSignup }: { isSignup: boolean }) {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get loading state from Redux
  const { isLoading: authLoading } = useSelector((state: RootState) => state.auth);
  
  // RTK Query mutations
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    fullName: "",
  });

  // Handle form field changes
  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Form validation
  const validateForm = () => {
    if (isSignup) {
      // Validate required fields
      const requiredValidation = validateRequiredFields(formData, ['email', 'password', 'userName', 'fullName']);
      if (!requiredValidation.isValid) {
        showToast.validationError(requiredValidation.message!);
        return false;
      }

      // Validate email format
      if (!validateEmail(formData.email)) {
        showToast.validationError("Please enter a valid email address");
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
    } else {
      // Validate required fields for login
      const requiredValidation = validateRequiredFields(formData, ['email', 'password']);
      if (!requiredValidation.isValid) {
        showToast.validationError(requiredValidation.message!);
        return false;
      }

      // Validate email format
      if (!validateEmail(formData.email)) {
        showToast.validationError("Please enter a valid email address");
        return false;
      }
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      return;
    }

    if (isSignup) {
      await handleRegister();
    } else {
      await handleLogin();
    }
  };

  // Login function
  const handleLogin = async () => {
    await handleAuthentication(
      login({
        email: formData.email,
        password: formData.password,
      }).unwrap(),
      dispatch,
      router,
      'simple'
    );
  };

  // Register function
  const handleRegister = async () => {
    try {
      dispatch(setLoading(true));

      const response = await register({
        email: formData.email,
        password: formData.password,
        userName: formData.userName,
        fullName: formData.fullName,
      }).unwrap();

      showToast.success("Registration successful! Please check your email to verify your account before logging in.");
      router.push("/signin");

    } catch (error: any) {
      const errorMessage = handleApiError(error as any);
      showToast.apiError(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const isLoading = isLoginLoading || isRegisterLoading;

  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="sm:w-[420px] flex flex-col items-end gap-6">
        <SignFormHeader isSignup={isSignup} isForgotPassword={false} isResetPassword={false} />
        <SignSocialButtons />
        <SignOrDivider />
        
        {isSignup ? (
          <SignupInputs 
            formData={formData} 
            onChange={handleFieldChange}
          />
        ) : (
          <SigninInputs 
            formData={formData}
            onChange={handleFieldChange}
          />
        )}
        
        {!isSignup && <SignSupport />}
        
        <Button 
          onClick={handleSubmit}
          variant="fancy" 
          className="flex-[1_0_0] self-stretch"
          disabled={isLoading}
        >
          {isLoading 
            ? (isSignup ? "Creating Account..." : "Signing In...") 
            : (isSignup ? "Register" : "Login")
          }
        </Button>
      </div>
    </div>
  );
}