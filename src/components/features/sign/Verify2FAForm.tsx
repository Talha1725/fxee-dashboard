"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title32, Description14 } from "@/components/ui/typography";
import { Spinner } from "@/components/ui/spinner";
import { showToast } from "@/lib/utils/toast";
import { handle2FAAuthentication } from "@/lib/utils/authUtils";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useVerify2FAMutation, useResend2FAMutation } from "@/lib/redux/features/auth/authApi";
import { setLoading } from "@/lib/redux/features/auth/authSlice";
import { RootState } from "@/lib/redux/store";
import { handleApiError } from "@/lib/utils/apiUtils";
import { ArrowLeftIcon } from "lucide-react";

const verify2FASchema = z.object({
  code: z.string()
    .min(1, "Please enter the verification code")
    .min(6, "Code must be 6 digits")
    .max(6, "Code must be 6 digits")
});

type Verify2FAFormData = z.infer<typeof verify2FASchema>;

export default function Verify2FAForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  
  // Get loading state from Redux
  const { isLoading: authLoading } = useSelector((state: RootState) => state.auth);
  
  const [verify2FA, { isLoading: isVerifying }] = useVerify2FAMutation();
  const [resend2FA, { isLoading: isResending }] = useResend2FAMutation();
  const [countdown, setCountdown] = useState(0);
  const [userInfo, setUserInfo] = useState<{
    userId: number;
    email: string;
    twoFAMethod: string;
  } | null>(null);
  
  // Get user info from session storage and URL params
  const urlUserId = searchParams.get("userId");

  // Initialize user info from session storage
  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem('2fa_verification_data');
      if (storedData) {
        const data = JSON.parse(storedData);
        
        // Check if data is recent (within 10 minutes)
        const isExpired = Date.now() - data.timestamp > 10 * 60 * 1000;
        
        // Verify userId matches URL param
        const userIdMatches = urlUserId && parseInt(urlUserId) === data.userId;
        
        if (!isExpired && userIdMatches) {
          setUserInfo({
            userId: data.userId,
            email: data.email,
            twoFAMethod: data.twoFAMethod
          });
          return;
        }
      }
      
      // If we reach here, data is invalid/expired
      showToast.error("2FA session expired. Please login again.");
      sessionStorage.removeItem('2fa_verification_data');
      router.push("/signin");
    } catch (error) {
      showToast.error("Invalid 2FA verification request");
      router.push("/signin");
    }
  }, [urlUserId, router]);

  // Reset loading state when component unmounts or user navigates away
  useEffect(() => {
    return () => {
      // Cleanup: reset loading state when component unmounts
      dispatch(setLoading(false));
    };
  }, [dispatch]);

  // Reset loading state when user navigates away (browser back/forward)
  useEffect(() => {
    const handleBeforeUnload = () => {
      dispatch(setLoading(false));
    };

    const handlePopState = () => {
      dispatch(setLoading(false));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [dispatch]);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Verify2FAFormData>({
    resolver: zodResolver(verify2FASchema),
    mode: "onChange",
  });

  const [codeValue, setCodeValue] = useState<string[]>(['', '', '', '', '', '']);

  const onSubmit = async (data: Verify2FAFormData) => {
    if (!userInfo || isVerifying || authLoading) return;

    try {
      dispatch(setLoading(true));
      
      const result = await verify2FA({
        userId: userInfo.userId,
        code: data.code
      }).unwrap();

      if (result.data) {
        // Extract the correct structure for handle2FAAuthentication
        const authData = typeof result.data === 'object' && 'userData' in result.data && 'token' in result.data
          ? { token: result.data.token || '', userData: result.data.userData }
          : result.token && result.data
          ? { token: result.token, userData: result.data }
          : null;

        if (authData) {
          // Reset loading state before redirect
          dispatch(setLoading(false));
          
          await handle2FAAuthentication(authData, router, dispatch);
          sessionStorage.removeItem('2fa_verification_data');
          showToast.success("Login successful!");
        } else {
          showToast.error("Invalid response format");
          dispatch(setLoading(false));
        }
      } else {
        showToast.error("Verification failed");
        dispatch(setLoading(false));
      }
    } catch (error: any) {
      const errorMessage = handleApiError(error as any);
      showToast.apiError(errorMessage);
      dispatch(setLoading(false));
    }
  };

  const handleResendCode = async () => {
    if (!userInfo || countdown > 0 || userInfo.twoFAMethod !== 'email' || isResending) return;

    try {
      await resend2FA({
        userId: userInfo.userId,
        email: userInfo.email
      }).unwrap();
      
      setCountdown(60);
      showToast.success("New verification code sent to your email");
    } catch (error: any) {
      const errorMessage = handleApiError(error as any);
      showToast.apiError(errorMessage);
    }
  };

  // Auto-format code input
  const handleCodeChange = (index: number, value: string) => {
    const newCodeValue = [...codeValue];
    newCodeValue[index] = value.replace(/\D/g, "").slice(0, 1);
    setCodeValue(newCodeValue);
    setValue("code", newCodeValue.join(""));
  };

  // Show loading state while userInfo is being loaded
  if (!userInfo) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="flex flex-col items-center gap-1 self-stretch mb-8">
          <Title32 className="text-center font-satoshi-medium">
            Loading...
          </Title32>
          <Description14 className="text-center font-satoshi">
            Verifying your session...
          </Description14>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col justify-center h-full p-4 lg:p-0">
      <div className="flex flex-col items-center gap-1 self-stretch mb-8">
        <Title32 className="text-center font-satoshi-medium">
          Enter Verification Code
        </Title32>
        <Description14 className="text-center font-satoshi">
          {userInfo.twoFAMethod === 'email' 
            ? `We've sent a 6-digit code to ${userInfo.email}`
            : 'Enter the 6-digit code from your authenticator app'
          }
        </Description14>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="code" className="text-black dark:text-white font-satoshi-medium text-sm">Verification Code</Label>
          <div className="flex gap-2 justify-center">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <Input
                key={index}
                id={`code-${index}`}
                type="text"
                placeholder="0"
                value={codeValue[index] || ''}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                disabled={isVerifying || authLoading}
                className={`text-center text-2xl tracking-widest font-mono h-12 w-12 sm:h-14 sm:w-14 border-black/5 ${
                  errors.code ? "border-red-500" : ""
                } ${isVerifying || authLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                maxLength={1}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !codeValue[index] && index > 0) {
                    // Move to previous input on backspace if current is empty
                    document.getElementById(`code-${index - 1}`)?.focus();
                  }
                }}
                onInput={(e) => {
                  const value = e.currentTarget.value;
                  if (value && index < 5) {
                    // Move to next input when a digit is entered
                    document.getElementById(`code-${index + 1}`)?.focus();
                  }
                }}
              />
            ))}
          </div>
          {errors.code && (
            <p className="text-sm text-red-500">{errors.code.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isVerifying || authLoading || codeValue.join('').length !== 6}
          className="w-full h-12"
          variant={"fancy"}
        >
          {isVerifying || authLoading ? (
            <div className="flex items-center gap-2">
              <Spinner size="sm" className="text-white" />
              Verifying...
            </div>
          ) : (
            "Verify & Sign In"
          )}
        </Button>

        {userInfo.twoFAMethod === 'email' && (
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">
              Didn't receive the code?
            </p>
            <Button
              type="button"
              variant="ghost"
              onClick={handleResendCode}
              disabled={countdown > 0 || isResending}
              className="text-sm"
            >
              {isResending ? (
                <div className="flex items-center gap-2">
                  <Spinner size="sm" className="text-gray-500" />
                  Sending...
                </div>
              ) : countdown > 0 ? (
                `Resend in ${countdown}s`
              ) : (
                "Resend Code"
              )}
            </Button>
          </div>
        )}

        <div className="text-center relative z-50">
          <Button
            type="button"
            variant={theme === "dark" ? "white" : "black"}
            onClick={() => router.push("/signin")}
            className="text-sm bg-transparent border-none dark:text-white text-black font-satoshi hover:!bg-transparent"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}