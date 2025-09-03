"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title32, Description14 } from "@/components/ui/typography";
import { showToast } from "@/lib/utils/toast";
import { handle2FAAuthentication } from "@/lib/utils/authUtils";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { API_BASE_URL, SMS_CONFIG, TWO_FA_METHODS } from "@/lib/constants";
import { ArrowLeftIcon } from "lucide-react";
import { useSendSMSVerificationMutation, useVerifySMSMutation } from "@/lib/redux/features/auth/authApi";
import { SMS_TEST_MODE } from "@/lib/utils/smsTestMode";
import { useSMSConfig } from "@/hooks/useSMSConfig";

const verify2FASchema = z.object({
  code: z.string().min(6, "Code must be 6 digits").max(6, "Code must be 6 digits")
});

type Verify2FAFormData = z.infer<typeof verify2FASchema>;

export default function Verify2FAForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [userInfo, setUserInfo] = useState<{
    userId: number;
    email: string;
    twoFAMethod: string;
    phoneNumber?: string;
  } | null>(null);
  
  const { isTestModeEnabled, testCode, twilioNumber, smsMessage } = useSMSConfig();
  
  const [sendSMSVerification, { isLoading: isSendingSMS }] = useSendSMSVerificationMutation();
  const [verifySMS, { isLoading: isVerifyingSMS }] = useVerifySMSMutation();
  
  // Get user info from session storage and URL params
  const urlUserId = searchParams.get("userId");

  // Initialize user info from session storage
  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem('2fa_verification_data');
      if (storedData) {
        const data = JSON.parse(storedData);
        
        // Check if data is recent (within session timeout)
        const isExpired = Date.now() - data.timestamp > SMS_CONFIG.SESSION_TIMEOUT;
        
        // Verify userId matches URL param
        const userIdMatches = urlUserId && parseInt(urlUserId) === data.userId;
        
        if (!isExpired && userIdMatches) {
          setUserInfo({
            userId: data.userId,
            email: data.email,
            twoFAMethod: data.twoFAMethod,
            phoneNumber: data.phoneNumber
          });
          return;
        }
      }
      
      // If we reach here, data is invalid/expired
      showToast.error("2FA session expired. Please login again.");
      sessionStorage.removeItem('2fa_verification_data');
      router.push("/signin");
    } catch (error) {
      console.error("Error parsing 2FA data:", error);
      showToast.error("Invalid 2FA verification request");
      router.push("/signin");
    }
  }, [urlUserId, router]);

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
    if (!userInfo) return;

    setIsLoading(true);
    try {
      if (userInfo.twoFAMethod === TWO_FA_METHODS.SMS && userInfo.phoneNumber) {
        if (isTestModeEnabled) {
          console.log('SMS TEST MODE - Verifying SMS code...');
          const isValid = data.code === testCode;
          SMS_TEST_MODE.log.verifySMS(userInfo.phoneNumber, data.code, isValid);
          await SMS_TEST_MODE.simulateDelay(800);
          
          if (isValid) {
            await handle2FAAuthentication(SMS_TEST_MODE.responses.verifySMS.data, router, dispatch);
            
            sessionStorage.removeItem('2fa_verification_data');
            
            showToast.success("Test Mode: Login successful!");
          } else {
            showToast.error(`Test Mode: Invalid code! Use: ${testCode}`);
          }
        } else {
          console.log('PRODUCTION MODE - Verifying SMS...');
          const response = await verifySMS({
            phoneNumber: userInfo.phoneNumber,
            code: data.code
          }).unwrap();

          if (response.success && response.data) {
            const authData = {
              token: (response.data as any).token || (response.data as any).accessToken,
              userData: (response.data as any).user || (response.data as any).userData || response.data
            };
            await handle2FAAuthentication(authData, router, dispatch);
            
            sessionStorage.removeItem('2fa_verification_data');
            
            showToast.success("Login successful!");
          } else {
            showToast.error("Verification failed");
          }
        }
      } else {
        const response = await fetch(`${API_BASE_URL}/auth/verify-2fa`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userInfo.userId,
            code: data.code
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          showToast.error(result.message || "Verification failed");
          return;
        }

        if (result.success && result.data) {
          // Handle successful authentication
          await handle2FAAuthentication(result.data, router, dispatch);
          
          // Clear session storage on successful verification
          sessionStorage.removeItem('2fa_verification_data');
          
          showToast.success("Login successful!");
        } else {
          showToast.error("Verification failed");
        }
      }
    } catch (error: any) {
      console.error("2FA verification error:", error);
      showToast.error(error?.data?.message || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!userInfo || countdown > 0) return;

    setIsLoading(true);
    try {
      if (userInfo.twoFAMethod === TWO_FA_METHODS.SMS && userInfo.phoneNumber) {
        if (isTestModeEnabled) {
          console.log(' SMS TEST MODE - Resending SMS...');
          SMS_TEST_MODE.log.sendSMS(userInfo.phoneNumber, testCode);
          await SMS_TEST_MODE.simulateDelay(1000);
          setCountdown(60);
          showToast.success(` Test Mode: SMS resent! Use code: ${testCode}`);
        } else {
          console.log(' PRODUCTION MODE - Resending SMS...');
          const response = await sendSMSVerification({ phoneNumber: userInfo.phoneNumber }).unwrap();
          setCountdown(60);
          showToast.success(response.message || "New verification code sent to your phone");
        }
      } else if (userInfo.twoFAMethod === 'email') {
        const response = await fetch(`${API_BASE_URL}/auth/resend-2fa`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userInfo.userId,
            email: userInfo.email
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setCountdown(60);
          showToast.success("New verification code sent to your email");
        } else {
          showToast.error(result.message || "Failed to resend code");
        }
      }
    } catch (error: any) {
      console.error("Resend error:", error);
      showToast.error(error?.data?.message || "Failed to resend code");
    } finally {
      setIsLoading(false);
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
            : userInfo.twoFAMethod === 'sms' && userInfo.phoneNumber
            ? `We've sent a 6-digit code to ${userInfo.phoneNumber}`
            : 'Enter the 6-digit code from your authenticator app'
          }
        </Description14>
        {isTestModeEnabled && userInfo.twoFAMethod === 'sms' && (
          <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <Description14 className="text-blue-800 dark:text-blue-200 font-satoshi-medium text-center">
              Test Mode Active - Check console for SMS logs
            </Description14>
            <Description14 className="text-blue-600 dark:text-blue-300 font-satoshi text-center mt-1">
              Use code: {testCode}
            </Description14>
            <Description14 className="text-blue-500 dark:text-blue-400 font-satoshi text-center mt-1 text-xs">
              From: {twilioNumber}
            </Description14>
          </div>
        )}
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
                className={`text-center text-2xl tracking-widest font-mono h-12 w-12 sm:h-14 sm:w-14 border-black/5 ${
                  errors.code ? "border-red-500" : ""
                }`}
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
          disabled={isLoading || codeValue.length !== 6}
          className="w-full h-12"
          variant={"fancy"}
        >
          {isLoading ? "Verifying..." : "Verify & Sign In"}
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
              disabled={countdown > 0 || isLoading}
              className="text-sm"
            >
              {countdown > 0 ? `Resend in ${countdown}s` : "Resend Code"}
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