"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconApple, IconGoogle, IconLinkedin } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useGoogleLogin } from '@react-oauth/google';
import { useGoogleLoginMutation } from "@/lib/redux/features/auth/authApi";
import { setCredentials, setLoading } from "@/lib/redux/features/auth/authSlice";
import { handleApiError, handleApiResponse } from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";
import { GOOGLE_OAUTH_CONFIG } from '@/lib/config/google';

export default function SignSocialButtons() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  
  // RTK Query mutation
  const [googleLogin, { isLoading: isGoogleLoginLoading }] = useGoogleLoginMutation();

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

  // Google OAuth login
  const googleOAuthLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        dispatch(setLoading(true));

        const response = await googleLogin({
          access_token: tokenResponse.access_token,
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
    },
    onError: () => {
      showToast.apiError("Google login failed. Please try again.");
    }
  });

  // Handle Google button click
  const handleGoogleClick = () => {
    if (!GOOGLE_OAUTH_CONFIG.CLIENT_ID) {
      showToast.apiError("Google OAuth is not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your environment variables.");
      return;
    }
    googleOAuthLogin();
  };

  return (
    <div className="flex justify-center items-start gap-3 self-stretch">
      <Button className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}>
        <IconApple width={20} height={20} />
      </Button>
      <Button 
        onClick={handleGoogleClick}
        disabled={isGoogleLoginLoading}
        className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}
      >
        <IconGoogle width={20} height={20} />
      </Button>
      <Button className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}>
        <IconLinkedin width={20} height={20} />
      </Button>
    </div>
  );
}
