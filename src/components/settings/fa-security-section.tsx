"use client";
import { Text14, Text16, Text20 } from "../ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IconAuthenticator, MailIcon, SmsCodeIcon } from "../ui/icon";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { useUpdate2FAPreferencesMutation } from "@/lib/redux/services/userApi";
import { useGetProfileQuery } from "@/lib/redux/features/auth/authApi";
import { updateUser } from "@/lib/redux/features/auth/authSlice";
import { toast } from "sonner";
import AuthenticatorSetupModal from "./authenticator-setup-modal";
import SmsSetupModal from "./sms-setup-modal";
import { TWO_FA_METHODS } from "@/lib/constants";

export default function FASecuritySection() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { data: profileData, isLoading: profileLoading, error: profileError } = useGetProfileQuery(undefined, {
    skip: true // Temporarily disable to test Redux user data only
  });
  const [selectedFA, setSelectedFA] = useState<string>("");
  const [originalFA, setOriginalFA] = useState<string>("");
  const [showAuthenticatorModal, setShowAuthenticatorModal] = useState(false);
  const [pendingAuthenticatorSelection, setPendingAuthenticatorSelection] = useState(false);
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [pendingSmsSelection, setPendingSmsSelection] = useState(false);
  const [update2FAPreferences, { isLoading }] = useUpdate2FAPreferencesMutation();

  // Debug auth state
  console.log('Auth Debug:', { token: !!token, isAuthenticated, user: !!user, profileError });
  console.log('Full user object:', user);
  console.log('User twoFAMethod:', user?.twoFAMethod);

  // Sync profile data to Redux store when it's fetched
  useEffect(() => {
    if (profileData && (!user || user.twoFAMethod !== profileData.twoFAMethod)) {
      dispatch(updateUser({
        ...profileData,
        role: user?.role || "user" // Keep existing role or default to user
      }));
    }
  }, [profileData, user, dispatch]);

  // Initialize 2FA state from user data (prefer profile data from API, fallback to Redux user data)
  useEffect(() => {
    const current2FA = profileData?.twoFAMethod || user?.twoFAMethod || "";
    console.log('2FA Debug - Setting state:', { 
      profileData: profileData?.twoFAMethod, 
      user: user?.twoFAMethod, 
      final: current2FA,
      typeof: typeof current2FA 
    });
    setSelectedFA(current2FA);
    setOriginalFA(current2FA);
  }, [profileData?.twoFAMethod, user?.twoFAMethod]);

  // Debug: Log current state
  console.log('2FA Debug - Current state:', { selectedFA, originalFA });

  const handleApplyChanges = async () => {
    try {
      if (!isAuthenticated || !token) {
        toast.error("Please log in to update 2FA preferences");
        return;
      }

      if (!selectedFA) {
        toast.error("Please select a 2FA method");
        return;
      }

      // If authenticator is selected and not already enabled, show setup modal
      if (selectedFA === TWO_FA_METHODS.AUTHENTICATOR && originalFA !== TWO_FA_METHODS.AUTHENTICATOR) {
        setPendingAuthenticatorSelection(true);
        setShowAuthenticatorModal(true);
        return;
      }

      if (selectedFA === TWO_FA_METHODS.SMS && originalFA !== TWO_FA_METHODS.SMS) {
        setPendingSmsSelection(true);
        setShowSmsModal(true);
        return;
      }

      if (selectedFA === TWO_FA_METHODS.SMS && originalFA === TWO_FA_METHODS.SMS) {
        setPendingSmsSelection(true);
        setShowSmsModal(true);
        return;
      }

      const twoFAMethod = selectedFA as typeof TWO_FA_METHODS.SMS | typeof TWO_FA_METHODS.EMAIL | typeof TWO_FA_METHODS.AUTHENTICATOR | null;
      const result = await update2FAPreferences({ twoFAMethod }).unwrap();
      
      // Update Redux store with new user data
      dispatch(updateUser({
        ...result.result,
        role: (result.result.role as "user" | "admin" | "trader") || user?.role || "user"
      }));
      
      setOriginalFA(selectedFA);
      toast.success(`2FA preference updated to ${selectedFA}`);
    } catch (error: any) {
      console.error('Error updating 2FA preference:', error);
      if (error?.status === 401) {
        toast.error("Session expired. Please log in again.");
      } else {
        toast.error(error?.data?.message || "Failed to update 2FA preference");
      }
      // Revert on error
      setSelectedFA(originalFA);
    }
  };

  const handleDiscard = () => {
    setSelectedFA(originalFA);
  };

  const isDirty = selectedFA !== originalFA;

  // Show loading state while profile data is being fetched
  if (profileLoading) {
    return (
      <div className="mt-5">
        <Text20 className="font-satoshi">2FA Security</Text20>
        <Text16 className="dark:opacity-70 mt-1">
          Loading 2FA settings...
        </Text16>
      </div>
    );
  }

  if (!isAuthenticated || !token) {
    return (
      <div className="mt-5">
        <Text20 className="font-satoshi">2FA Security</Text20>
        <Text16 className="dark:opacity-70 mt-1">
          Please log in to configure 2FA security settings.
        </Text16>
      </div>
    );
  }

  // Debug: Show current state in UI for debugging
  console.log('2FA Component render:', { 
    profileLoading, 
    selectedFA, 
    originalFA, 
    profileData: profileData?.twoFAMethod, 
    user: user?.twoFAMethod 
  });

  return (
    <div className="mt-5">
      <Text20 className="font-satoshi">2FA Security</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Enable two-factor authentication to your account.{" "}
      </Text16>

      <RadioGroup 
        value={selectedFA} 
        onValueChange={setSelectedFA}
        className="mt-5"
      >
        {/* SMS Code Option */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === TWO_FA_METHODS.SMS
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "light"
                ? "rgba(0, 0, 0, 0.02)"
                : "rgba(255, 255, 255, 0.02)",
            background:
              theme === "light"
                ? "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
          onClick={() => setSelectedFA(TWO_FA_METHODS.SMS)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                <SmsCodeIcon />
              </div>
              <div className="flex flex-col">
                <Text16 className="font-satoshi">SMS Code</Text16>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                Receive a one-time verification code via SMS to enter during login.                </Text14>
              </div>
            </div>
            <RadioGroupItem
              value={TWO_FA_METHODS.SMS}
              id={TWO_FA_METHODS.SMS}
              className={`${
                selectedFA === TWO_FA_METHODS.SMS && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Email Code Option */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === "email"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
          }}
          onClick={() => setSelectedFA("email")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                <MailIcon />
              </div>
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Email Code</Text16>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                Get a temporary verification code sent to your email for added security.                </Text14>
              </div>
            </div>
            <RadioGroupItem
              value="email"
              id="email"
              className={`${
                selectedFA === "email" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Authenticator App Option */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === TWO_FA_METHODS.AUTHENTICATOR
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
          }}
          onClick={() => setSelectedFA("authenticator")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                <IconAuthenticator />
              </div>
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Authenticator App</Text16>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                Use an authenticator app to generate time-based verification codes for login.                </Text14>
              </div>
            </div>
            <RadioGroupItem
              value="authenticator"
              id="authenticator"
              className={`${
                selectedFA === TWO_FA_METHODS.AUTHENTICATOR && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>
      </RadioGroup>

      {/* Action Buttons */}
      <div className="w-full mt-5">
       
        <Button
          variant={theme === "dark" ? "white" : "black"}
          className="h-[52px] font-satoshi-medium w-full"
          onClick={handleApplyChanges}
          disabled={!isDirty || isLoading}
        >
          {isLoading ? "Updating..." : selectedFA ? "Update 2FA Preference" : "Enable 2FA Security"}
        </Button>
      </div>

      {/* Authenticator Setup Modal */}
      <AuthenticatorSetupModal
        isOpen={showAuthenticatorModal}
        onClose={() => {
          setShowAuthenticatorModal(false);
          // Revert selection if setup was cancelled
          if (pendingAuthenticatorSelection) {
            setSelectedFA(originalFA);
            setPendingAuthenticatorSelection(false);
          }
        }}
        onSuccess={() => {
          setShowAuthenticatorModal(false);
          setPendingAuthenticatorSelection(false);
          setOriginalFA("authenticator");
          toast.success("Authenticator 2FA enabled successfully!");
        }}
      />

      <SmsSetupModal
        isOpen={showSmsModal}
        onClose={() => {
          setShowSmsModal(false);
          if (pendingSmsSelection) {
            setSelectedFA(originalFA);
            setPendingSmsSelection(false);
          }
        }}
        onSuccess={async () => {
          try {
            const result = await update2FAPreferences({ twoFAMethod: TWO_FA_METHODS.SMS }).unwrap();
            
            dispatch(updateUser({
              ...result.result,
              role: (result.result.role as "user" | "admin" | "trader") || user?.role || "user"
            }));
            
            setShowSmsModal(false);
            setPendingSmsSelection(false);
            setOriginalFA(TWO_FA_METHODS.SMS);
            toast.success(originalFA === TWO_FA_METHODS.SMS ? "SMS 2FA updated successfully!" : "SMS 2FA enabled successfully!");
          } catch (error: any) {
            console.error('Error updating 2FA preference after SMS verification:', error);
            toast.error(error?.data?.message || "Failed to enable SMS 2FA");
            // Revert selection on error
            setSelectedFA(originalFA);
          }
        }}
        phoneNumber={user?.phoneNumber || ""}
        isUpdating={originalFA === TWO_FA_METHODS.SMS}
      />
    </div>
  );
}
