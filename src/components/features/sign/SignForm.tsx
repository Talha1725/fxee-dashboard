"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import SignSocialButtons from "@/components/features/sign/SignSocialButtons";
import SignOrDivider from "@/components/features/sign/SignOrDivider";
import SigninInputs from "@/components/features/sign/SigninInputs";
import SignupInputs from "@/components/features/sign/SignupInputs";
import SignSupport from "@/components/features/sign/SignSupport";
import { Button } from "@/components/ui/button";

import { useLoginMutation, useRegisterMutation, useLoginWithPhoneMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { RootState } from "@/lib/redux/store";
import { 
  handleApiError
} from "@/lib/utils/apiUtils";
import { handleAuthentication } from "@/lib/utils/authUtils";
import { showToast } from "@/lib/utils/toast";
import { AuthResponse, AuthResponseData } from '@/types/api';
import { loginSchema, registerSchema, LoginFormData, RegisterFormData } from "@/lib/validations/auth";
import { TWO_FA_METHODS } from "@/lib/constants";

export default function SignForm({ isSignup }: { isSignup: boolean }) {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get loading state from Redux
  const { isLoading: authLoading } = useSelector((state: RootState) => state.auth);
  
  // RTK Query mutations
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [registerUser, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [loginWithPhone, { isLoading: isPhoneLoginLoading }] = useLoginWithPhoneMutation();
  
  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoginFormData | RegisterFormData>({
    resolver: zodResolver(isSignup ? registerSchema : loginSchema),
    mode: "onChange",
  });

  // Watch form values for input components
  const formData = watch();

  // Handle form field changes for input components
  const handleFieldChange = (field: string, value: string) => {
    setValue(field as keyof (LoginFormData | RegisterFormData), value);
  };

  // Handle form submission
  const onSubmit = async (data: LoginFormData | RegisterFormData) => {
    if (isSignup) {
      await handleRegister(data as RegisterFormData);
    } else {
      await handleLogin(data as LoginFormData);
    }
  };

  // Login function
  const handleLogin = async (data: LoginFormData) => {
    try {
      dispatch(setLoading(true));
      
      const response = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      // Check if 2FA is required
      if (response.data && typeof response.data === 'object' && 'requiresTwoFA' in response.data) {
        const twoFAData = response.data as any;
        const toastMessage = twoFAData.twoFAMethod === TWO_FA_METHODS.EMAIL 
          ? "2FA code sent to your email"
          : twoFAData.twoFAMethod === TWO_FA_METHODS.SMS
          ? "2FA code sent to your phone"
          : "Please enter your authenticator code";
        showToast.success(toastMessage);
        
        // Store 2FA data in session storage for security (don't expose in URL)
        sessionStorage.setItem('2fa_verification_data', JSON.stringify({
          userId: twoFAData.userId,
          email: twoFAData.email,
          twoFAMethod: twoFAData.twoFAMethod,
          phoneNumber: twoFAData.phoneNumber,
          timestamp: Date.now()
        }));
        
        // Redirect to 2FA verification page with only userId
        router.push(`/verify-2fa?userId=${twoFAData.userId}`);
        return;
      }

      // Handle normal login
      await handleAuthentication(
        Promise.resolve(response),
        dispatch,
        router,
        'simple'
      );
    } catch (error: any) {
      const errorMessage = handleApiError(error as any);
      showToast.apiError(errorMessage);
    } 
    finally {
      dispatch(setLoading(false));
    }
  };

  // Register function
  const handleRegister = async (data: RegisterFormData) => {
    try {
      dispatch(setLoading(true));

      const response = await registerUser({
        email: data.email,
        password: data.password,
        userName: data.userName,
        fullName: data.fullName,
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
      <div className="w-[90%] md:w-[420px] flex flex-col items-end md:gap-6 gap-3">
        <SignFormHeader isSignup={isSignup} isForgotPassword={false} isResetPassword={false} />
        <SignSocialButtons />
        <SignOrDivider />
        
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {isSignup ? (
            <SignupInputs 
              formData={formData as RegisterFormData} 
              onChange={handleFieldChange}
              errors={errors}
              register={register}
            />
          ) : (
            <SigninInputs 
              formData={formData as LoginFormData}
              onChange={handleFieldChange}
              errors={errors}
              register={register}
            />
          )}
          
          {!isSignup && <SignSupport />}
          
          <Button 
            type="submit"
            variant="fancy" 
            className="flex-[1_0_0] self-stretch w-full mt-5"
            disabled={isLoading}
          >
            {isLoading 
              ? (isSignup ? "Registering..." : "Logging in...") 
              : (isSignup ? "Register" : "Login")
            }
          </Button>
        </form>
      </div>
    </div>
  );
}