"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title32, Description14 } from "@/components/ui/typography";
import { showToast } from "@/lib/utils/toast";
import { handle2FAAuthentication } from "@/lib/utils/authUtils";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { API_BASE_URL } from "@/lib/constants";

const verify2FASchema = z.object({
  code: z.string().min(6, "Code must be 6 digits").max(6, "Code must be 6 digits")
});

type Verify2FAFormData = z.infer<typeof verify2FASchema>;

export default function Verify2FAForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
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

  const codeValue = watch("code") || "";

  const onSubmit = async (data: Verify2FAFormData) => {
    if (!userInfo) return;

    setIsLoading(true);
    try {
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
        await handle2FAAuthentication(result.data, router);
        
        // Clear session storage on successful verification
        sessionStorage.removeItem('2fa_verification_data');
        
        showToast.success("Login successful!");
      } else {
        showToast.error("Verification failed");
      }
    } catch (error) {
      console.error("2FA verification error:", error);
      showToast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!userInfo || countdown > 0) return;

    setIsLoading(true);
    try {
      // Create a proper resend endpoint call
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
    } catch (error) {
      console.error("Resend error:", error);
      showToast.error("Failed to resend code");
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-format code input
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setValue("code", value);
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
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-1 self-stretch mb-8">
        <Title32 className="text-center font-satoshi-medium">
          Enter Verification Code
        </Title32>
        <Description14 className="text-center font-satoshi">
          We've sent a 6-digit code to {userInfo.email}
        </Description14>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="code">Verification Code</Label>
          <Input
            id="code"
            type="text"
            placeholder="000000"
            value={codeValue}
            onChange={handleCodeChange}
            className={`text-center text-2xl tracking-widest font-mono h-14 ${
              errors.code ? "border-red-500" : ""
            }`}
            maxLength={6}
          />
          {errors.code && (
            <p className="text-sm text-red-500">{errors.code.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || codeValue.length !== 6}
          className="w-full h-12"
          variant={theme === "dark" ? "white" : "black"}
        >
          {isLoading ? "Verifying..." : "Verify & Sign In"}
        </Button>

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

        <div className="text-center">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.push("/signin")}
            className="text-sm"
          >
            Back to Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}