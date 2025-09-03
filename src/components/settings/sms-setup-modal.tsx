"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text14, Text16, Text20 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { toast } from "sonner";
import { useUpdatePhoneMutation, useSendSMSVerificationMutation, useVerifySMSMutation } from "@/lib/redux/features/auth/authApi";
import { SMS_TEST_MODE } from "@/lib/utils/smsTestMode";
import { useSMSConfig } from "@/hooks/useSMSConfig";

interface SmsSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  phoneNumber?: string;
  isUpdating?: boolean; // Whether user is updating existing phone number
}

export default function SmsSetupModal({ 
  isOpen, 
  onClose, 
  onSuccess, 
  phoneNumber = "",
  isUpdating = false
}: SmsSetupModalProps) {
  const { theme } = useTheme();
  const [phone, setPhone] = useState(phoneNumber);
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  
  // Fetch SMS configuration from backend
  const { isTestModeEnabled, testCode, twilioNumber, smsMessage, isLoading: configLoading } = useSMSConfig();
  
  const [updatePhone, { isLoading: isUpdatingPhone }] = useUpdatePhoneMutation();
  const [sendSMSVerification, { isLoading: isSendingSMS }] = useSendSMSVerificationMutation();
  const [verifySMS, { isLoading: isVerifyingSMS }] = useVerifySMSMutation();

  const handleSendCode = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      if (isTestModeEnabled) {
        // Test mode: Simulate SMS sending with console logs
        console.log(' SMS TEST MODE - Starting SMS flow...');
        
        // Step 1: Update phone number (test mode)
        SMS_TEST_MODE.log.updatePhone(phone);
        await SMS_TEST_MODE.simulateDelay(500);
        
        // Step 2: Send SMS verification code (test mode)
        SMS_TEST_MODE.log.sendSMS(phone, testCode);
        await SMS_TEST_MODE.simulateDelay(1000);
        
        setCodeSent(true);
        setCountdown(60);
        const timer = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        toast.success(` Test Mode: SMS sent! Use code: ${testCode}`);
        return;
      }

      // Production mode: Real API calls
      console.log(' PRODUCTION MODE - Sending real SMS...');
      
      // Step 1: Update phone number
      await updatePhone({ phoneNumber: phone }).unwrap();
      
      // Step 2: Send SMS verification code
      const response = await sendSMSVerification({ phoneNumber: phone }).unwrap();
      
      setCodeSent(true);
      setCountdown(60);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      toast.success(response.message || "Verification code sent to your phone");
    } catch (error: any) {
      console.error('SMS send error:', error);
      toast.error(error?.data?.message || "Failed to send verification code");
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      toast.error("Please enter the 6-digit verification code");
      return;
    }

    try {
      if (isTestModeEnabled) {
        // Test mode: Check if code matches test code
        const isValid = verificationCode === testCode;
        SMS_TEST_MODE.log.verifySMS(phone, verificationCode, isValid);
        await SMS_TEST_MODE.simulateDelay(800);
        
        if (isValid) {
          toast.success(" Test Mode: Phone verified successfully!");
          onSuccess();
        } else {
          toast.error(` Test Mode: Invalid code! Use: ${testCode}`);
        }
        return;
      }

      // Production mode: Real API call
      console.log(' PRODUCTION MODE - Verifying SMS...');
      const response = await verifySMS({ 
        phoneNumber: phone, 
        code: verificationCode 
      }).unwrap();
      
      toast.success("Phone number verified successfully!");
      onSuccess();
    } catch (error: any) {
      console.error('SMS verify error:', error);
      toast.error(error?.data?.message || "Invalid verification code");
    }
  };

  const handleResendCode = () => {
    if (countdown > 0) return;
    handleSendCode();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <Text20 className="font-satoshi">
              {isUpdating ? "Update SMS Verification" : "Setup SMS Verification"}
            </Text20>
            {isTestModeEnabled && (
              <div className="mt-2 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <Text14 className="text-blue-800 dark:text-blue-200 font-satoshi-medium text-center">
                  Test Mode Active - Check console for SMS logs
                </Text14>
                <Text14 className="text-blue-600 dark:text-blue-300 font-satoshi text-center mt-1">
                  Use code: {testCode}
                </Text14>
                <Text14 className="text-blue-500 dark:text-blue-400 font-satoshi text-center mt-1 text-xs">
                  From: {twilioNumber}
                </Text14>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Text16 className="font-satoshi mb-2">Phone Number</Text16>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={codeSent}
              className="font-satoshi"
            />
          </div>

          {!codeSent ? (
            <Button
              onClick={handleSendCode}
              disabled={isUpdatingPhone || isSendingSMS || !phone || phone.length < 10}
              className="w-full h-[52px] font-satoshi-medium"
              variant={theme === "dark" ? "white" : "black"}
            >
              {isUpdatingPhone || isSendingSMS ? "Sending..." : "Send Verification Code"}
            </Button>
          ) : (
            <div className="space-y-4">
              <div>
                <Text16 className="font-satoshi mb-2">Verification Code</Text16>
                <Input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  className="font-satoshi text-center text-lg tracking-widest"
                />
                <Text14 className="text-center mt-2 dark:text-white/70 text-black/70">
                  Code sent to {phone}
                </Text14>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleVerifyCode}
                  disabled={isVerifyingSMS || verificationCode.length !== 6}
                  className="flex-1 h-[52px] font-satoshi-medium"
                  variant={theme === "dark" ? "white" : "black"}
                >
                  {isVerifyingSMS ? "Verifying..." : "Verify Code"}
                </Button>
                
                <Button
                  onClick={handleResendCode}
                  disabled={countdown > 0}
                  variant="ghost"
                  className="h-[52px] font-satoshi-medium"
                >
                  {countdown > 0 ? `${countdown}s` : "Resend"}
                </Button>
              </div>
            </div>
          )}

          <div className="text-center">
            <Text14 className="dark:text-white/70 text-black/70">
              {isUpdating 
                ? "You'll receive a verification code via SMS to update your phone number"
                : "You'll receive a verification code via SMS to complete the setup"
              }
            </Text14>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

