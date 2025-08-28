"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyEmailMutation, useResendVerificationMutation } from "@/lib/redux/features/auth/authApi";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2, Mail } from "lucide-react";
import { showToast } from "@/lib/utils/toast";
import SignFormHeader from "@/components/features/sign/SignFormHeader";
import { toast } from "sonner";

type VerificationState = 'verifying' | 'success' | 'error' | 'expired';

interface UserData {
  email?: string;
  fullName?: string;
  emailVerified?: boolean;
}

export default function SignVerificationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [verificationState, setVerificationState] = useState<VerificationState>('verifying');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState<UserData>({});
  const [userEmail, setUserEmail] = useState<string>('');
  
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [resendVerification, { isLoading: isResending }] = useResendVerificationMutation();

  useEffect(() => {
    if (!token) {
      setVerificationState('error');
      setMessage('No verification token found. Please check your email link.');
      return;
    }

    // Try to decode token to get email (for resend functionality)
    try {
      const base64Payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(base64Payload));
      if (decodedPayload.email) {
        setUserEmail(decodedPayload.email);
      }
    } catch (e) {
      // Token might be malformed, continue with verification
    }

    const handleVerification = async () => {
      try {
        const response = await verifyEmail({ token }).unwrap();
        
        setVerificationState('success');
        setMessage(response.message || 'Email verified successfully!');
        setUserData(response.data || {});
        showToast.success('Email verified successfully!');
        
      } catch (error: any) {
        console.error('Email verification error:', error);
        
        if (error?.data?.message) {
          setMessage(error.data.message);
          
          // Check if it's already verified
          if (error.data.message.includes('already verified')) {
            setVerificationState('success');
            setUserData(error.data.data || {});
          } else if (error.data.message.includes('expired') || error.data.message.includes('invalid')) {
            setVerificationState('expired');
          } else {
            setVerificationState('error');
          }
        } else {
          setVerificationState('error');
          setMessage('Something went wrong during verification. Please try again.');
        }
      }
    };

    handleVerification();
  }, [token, verifyEmail]);

  const handleContinueToOnboarding = () => {
    router.replace('/onboard/1');
  };

  const handleGoToLogin = () => {
    router.replace('/signin');
  };

  const handleResendVerificationEmail = async () => {
    if (!userEmail) {
      showToast.error('Unable to determine email address. Please try signing up again.');
      router.replace('/signup');
      return;
    }

    try {
      const response = await resendVerification({ email: userEmail }).unwrap();
      showToast.success('Verification email sent! Please check your inbox.');
      setMessage(`A new verification email has been sent to ${userEmail}. Please check your inbox and click the verification link.`);
    } catch (error: any) {
      console.error('Resend verification error:', error);
      const errorMessage = error?.data?.message || 'Failed to send verification email. Please try again.';
      showToast.error(errorMessage);
      setMessage(errorMessage);
    }
  };

  const handleGoToSignup = () => {
    router.replace('/signup');
  };

  const renderVerificationContent = () => {
    switch (verificationState) {
      case 'verifying':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Verifying Your Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Please wait while we verify your email address...
              </p>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16rounded-full">
              <CheckCircle className="h-14 w-14 text-green-600" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Email Verified Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Welcome to Fxee.ai! Your account is now ready.
              </p>
              
              {userData.email && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 justify-center">
                    <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {userData.email}
                    </span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              )}
            </div>
            
            <Button 
              onClick={handleContinueToOnboarding}
              variant="fancy" 
              className="w-full"
            >
              Continue to Setup
            </Button>
          </div>
        );

      case 'error':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full">
              <XCircle className="h-14 w-14 text-red-600" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Verification Failed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {message || 'We encountered an error while verifying your email.'}
              </p>
              
              {userEmail && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 justify-center">
                    <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {userEmail}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="w-full space-y-3">
              {userEmail ? (
                <Button 
                  onClick={handleResendVerificationEmail}
                  variant="fancy"
                  className="w-full"
                  disabled={isResending}
                >
                  {isResending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Email...
                    </>
                  ) : (
                    'Send Verification Email Again'
                  )}
                </Button>
              ) : (
                <Button 
                  onClick={handleGoToSignup}
                  variant="fancy"
                  className="w-full"
                >
                  Go to Sign Up
                </Button>
              )}
              <Button 
                onClick={handleGoToLogin}
                variant="grey"
                className="w-full"
              >
                Back to Login
              </Button>
            </div>
          </div>
        );

      case 'expired':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full">
              <XCircle className="h-14 w-14 text-orange-600" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Link Expired
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your verification link has expired. We can send you a new one.
              </p>
              
              {userEmail && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 justify-center">
                    <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {userEmail}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="w-full space-y-3">
              {userEmail ? (
                <Button 
                  onClick={handleResendVerificationEmail}
                  variant="fancy"
                  className="w-full"
                  disabled={isResending}
                >
                  {isResending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Email...
                    </>
                  ) : (
                    'Send New Verification Email'
                  )}
                </Button>
              ) : (
                <Button 
                  onClick={handleGoToSignup}
                  variant="fancy"
                  className="w-full"
                >
                  Go to Sign Up
                </Button>
              )}
              <Button 
                onClick={handleGoToLogin}
                variant="grey"
                className="w-full"
              >
                Back to Login
              </Button>
            </div>
          </div>
        );
    }
  };

  // Show toast notifications
  useEffect(() => {
    if (verificationState === 'success' && message) {
      toast.success(message);
    }
    if (verificationState === 'error' && message) {
      toast.error(message);
    }
  }, [verificationState, message]);

  return (
    <div className="flex flex-col items-center justify-center self-stretch flex-[1_0_0]">
      <div className="w-[90%] md:w-[420px] flex flex-col items-end md:gap-6 gap-3">
        
        <div className="w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          {renderVerificationContent()}
        </div>
        
      </div>
    </div>
  );
}