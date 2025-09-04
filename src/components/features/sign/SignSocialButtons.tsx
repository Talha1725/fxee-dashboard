"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconApple, IconGoogle, IconLinkedin } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useGoogleLogin } from '@react-oauth/google';
import { 
  useGoogleLoginMutation, 
  useLinkedinLoginMutation, 
  useAppleLoginMutation 
} from "@/lib/redux/features/auth/authApi";
import { handleAuthentication, validateProviderConfig, getProviderErrorMessage } from "@/lib/utils/authUtils";
import { showToast } from "@/lib/utils/toast";
import { OAUTH_CONFIG } from '@/lib/config/oauth';
import { GOOGLE_OAUTH_CONFIG } from '@/lib/config/google';

// Google OAuth Button Component - only renders when Google OAuth is configured
function GoogleOAuthButton({ 
  theme, 
  isGoogleLoginLoading, 
  googleLogin, 
  dispatch, 
  router 
}: {
  theme: string;
  isGoogleLoginLoading: boolean;
  googleLogin: any;
  dispatch: any;
  router: any;
}) {
  const googleOAuthLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (!validateProviderConfig('google')) return;
      
      await handleAuthentication(
        googleLogin({ access_token: tokenResponse.access_token }).unwrap(),
        dispatch,
        router,
        'google'
      );
    },
    onError: () => {
      showToast.apiError(getProviderErrorMessage('google'));
    }
  });

  return (
    <Button 
      onClick={() => googleOAuthLogin()}
      disabled={isGoogleLoginLoading}
      className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}
    >
      <IconGoogle width={20} height={20} />
    </Button>
  );
}

// Fallback Google Button when OAuth is not configured
function GoogleFallbackButton({ theme, isGoogleLoginLoading }: { theme: string; isGoogleLoginLoading: boolean }) {
  const handleClick = () => {
    showToast.apiError("Google OAuth is not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your environment variables.");
  };

  return (
    <Button 
      onClick={handleClick}
      disabled={isGoogleLoginLoading}
      className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}
    >
      <IconGoogle width={20} height={20} />
    </Button>
  );
}

export default function SignSocialButtons() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  
  // RTK Query mutations
  const [googleLogin, { isLoading: isGoogleLoginLoading }] = useGoogleLoginMutation();
  const [linkedinLogin, { isLoading: isLinkedinLoginLoading }] = useLinkedinLoginMutation();
  const [appleLogin, { isLoading: isAppleLoginLoading }] = useAppleLoginMutation();

  // LinkedIn OAuth login
  const handleLinkedinClick = async () => {
    if (!validateProviderConfig('linkedin')) return;
    
    // LinkedIn OAuth implementation
    // This would typically involve opening a popup or redirect to LinkedIn OAuth
    // For now, we'll show a placeholder implementation
    showToast.success("LinkedIn login coming soon!");
    
    // Example implementation:
    // const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin)}&scope=r_liteprofile%20r_emailaddress`;
    // window.open(linkedinAuthUrl, '_blank', 'width=500,height=600');
  };

  // Apple OAuth login
  const handleAppleClick = async () => {
    if (!validateProviderConfig('apple')) return;
    
    // Apple OAuth implementation
    // This would typically involve using Apple's Sign in with Apple JS SDK
    // For now, we'll show a placeholder implementation
    showToast.success("Apple login coming soon!");
    
    // Example implementation:
    // AppleID.auth.signIn().then(async (response) => {
    //   await handleAuthentication(
    //     appleLogin({ code: response.authorization.code }).unwrap(),
    //     dispatch,
    //     router,
    //     'apple'
    //   );
    // });
  };

  return (
    <div className="flex justify-center items-start gap-3 self-stretch">
      <Button 
        onClick={handleAppleClick}
        disabled={isAppleLoginLoading}
        className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}
      >
        <IconApple width={20} height={20} />
      </Button>
      {GOOGLE_OAUTH_CONFIG.CLIENT_ID ? (
        <GoogleOAuthButton 
          theme={theme || 'light'}
          isGoogleLoginLoading={isGoogleLoginLoading}
          googleLogin={googleLogin}
          dispatch={dispatch}
          router={router}
        />
      ) : (
        <GoogleFallbackButton 
          theme={theme || 'light'}
          isGoogleLoginLoading={isGoogleLoginLoading}
        />
      )}
      <Button 
        onClick={handleLinkedinClick}
        disabled={isLinkedinLoginLoading}
        className={`flex-[1_0_0] self-stretch ${theme === "dark" ? "bg-dark-gradient" : "bg-[#24242409]"} dark:text-foreground dark:shadow-subtle dark:border-white/30 hover:opacity-50 shadow-none`}
      >
        <IconLinkedin width={20} height={20} />
      </Button>
    </div>
  );
}
