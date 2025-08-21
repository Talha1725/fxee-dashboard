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
import { setCredentials, setLoading } from "@/lib/redux/features/auth/authSlice";
import { RootState } from "@/lib/redux/store";
import { 
  handleApiError, 
  handleApiResponse, 
  validateEmail, 
  validatePassword, 
  validateRequiredFields 
} from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";

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

  // Helper function to extract user and token from response
  const extractAuthData = (response: any) => {
    // Structure 1: response.data.userData and response.data.token
    if (response.data?.userData && response.data?.token) {
      return {
        user: response.data.userData,
        token: response.data.token
      };
    }
    
    // Structure 2: response.token and response.data (user object)
    if (response.token && response.data && typeof response.data === 'object' && 'id' in response.data) {
      return {
        user: response.data,
        token: response.token
      };
    }
    
    // Structure 3: response.data.token and response.data (user object)
    if (response.data?.token && response.data && typeof response.data === 'object' && 'id' in response.data) {
      return {
        user: response.data,
        token: response.data.token
      };
    }
    
    return null;
  };

  // Login function
  const handleLogin = async () => {
    try {
      dispatch(setLoading(true));

      const response = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      // Use centralized response handling
      const isSuccess = handleApiResponse(
        response,
        // Success callback
        () => {
          const authData = extractAuthData(response);
          
          if (authData) {
            // Update Redux state
            dispatch(setCredentials({
              user: authData.user,
              token: authData.token
            }));

            // Store token in localStorage
            localStorage.setItem('token', authData.token);
            showToast.loginSuccess();
            router.push("/dashboard");
          } else {
            throw new Error("Invalid response format");
          }
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

      // Use centralized response handling
      const isSuccess = handleApiResponse(
        response,
        // Success callback
        () => {
          const authData = extractAuthData(response);
          
          if (authData) {
            // Update Redux state
            dispatch(setCredentials({
              user: authData.user,
              token: authData.token
            }));

            // Store token in localStorage
            localStorage.setItem('token', authData.token);
            showToast.loginSuccess();
            router.push("/dashboard");
          } else {
            // For registration, we might not get user data immediately if email verification is required
            showToast.registrationSuccess();
            router.push("/signin");
          }
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