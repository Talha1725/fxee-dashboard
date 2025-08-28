"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text14, Text16 } from "@/components/ui/typography";
import QRCode from "@/components/ui/qr-code";
import { Copy, CheckCircle } from "lucide-react";
import { RootState } from "@/lib/redux/store";
import { updateUser } from "@/lib/redux/features/auth/authSlice";
import { API_BASE_URL } from "@/lib/constants";
import { showToast } from "@/lib/utils/toast";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface AuthenticatorSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const verifySchema = z.object({
  code: z.string().length(6, "Code must be exactly 6 digits")
});

type VerifyFormData = z.infer<typeof verifySchema>;

export default function AuthenticatorSetupModal({ isOpen, onClose, onSuccess }: AuthenticatorSetupModalProps) {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  
  const [step, setStep] = useState<"setup" | "verify">("setup");
  const [isLoading, setIsLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<VerifyFormData>({
    resolver: zodResolver(verifySchema),
    mode: "onChange"
  });

  const codeValue = watch("code") || "";

  // Handle code input change to only allow numbers
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setValue("code", value);
  };

  // Initialize authenticator setup
  const initializeSetup = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/authenticator/setup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to setup authenticator");
      }

      if (result.result) {
        setQrCodeUrl(result.result.qrCodeUrl);
        setSecretKey(result.result.manualEntryKey);
        setStep("setup");
      }
    } catch (error: any) {
      showToast.error(error.message || "Failed to setup authenticator");
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  // Copy secret key to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showToast.success("Secret key copied to clipboard");
  };

  // Verify the code
  const onSubmit = async (data: VerifyFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/authenticator/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: data.code
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Invalid code");
      }

      if (result.result) {
        // Update Redux state with new user data
        dispatch(updateUser({
          ...result.result,
          role: result.result.role || "user"
        }));
        
        showToast.success("Authenticator 2FA enabled successfully!");
        reset();
        onSuccess();
      }
    } catch (error: any) {
      showToast.error(error.message || "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize when modal opens
  useEffect(() => {
    if (isOpen && !qrCodeUrl && !isLoading) {
      initializeSetup();
    }
  }, [isOpen]);

  // Reset modal state when it closes
  useEffect(() => {
    if (!isOpen) {
      setStep("setup");
      setQrCodeUrl("");
      setSecretKey("");
      setCopied(false);
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Setup Authenticator App</DialogTitle>
          <DialogDescription>
            {step === "setup" 
              ? "Scan the QR code with your authenticator app or enter the key manually"
              : "Enter the 6-digit code from your authenticator app"
            }
          </DialogDescription>
        </DialogHeader>

        {step === "setup" ? (
          <div className="space-y-6">
            {/* QR Code */}
            <div className="flex justify-center">
              {isLoading ? (
                <div className="w-[200px] h-[200px] bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
              ) : (
                qrCodeUrl && <QRCode value={qrCodeUrl} size={200} className="border p-2 rounded-lg" />
              )}
            </div>

            {/* Manual Entry */}
            <div className="space-y-2">
              <Label>Or enter this key manually:</Label>
              <div className="flex items-center space-x-2">
                <Input
                  value={secretKey}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button
                  variant="ghost"
                  onClick={copyToClipboard}
                  className="flex-shrink-0 p-2"
                >
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <Text16 className="font-semibold">Popular Authenticator Apps:</Text16>
              <ul className="list-disc list-inside space-y-1">
                <li>Google Authenticator</li>
                <li>Microsoft Authenticator</li>
                <li>Authy</li>
                <li>1Password</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                variant={theme === "dark" ? "white" : "black"}
                onClick={() => setStep("verify")}
                disabled={isLoading || !qrCodeUrl}
                className="flex-1"
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input
                id="code"
                type="text"
                placeholder="000000"
                value={codeValue}
                onChange={handleCodeChange}
                className="text-center text-2xl tracking-widest font-mono h-14"
                maxLength={6}
              />
              {errors.code && (
                <Text14 className="text-red-500">{errors.code.message}</Text14>
              )}
            </div>

            <div className="flex space-x-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep("setup")}
                disabled={isLoading}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                variant={theme === "dark" ? "white" : "black"}
                disabled={isLoading || codeValue.length !== 6}
                className="flex-1"
              >
                {isLoading ? "Verifying..." : "Verify & Enable"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}