"use client";

import { Check, X } from "lucide-react";
import { IconLock } from "../ui/icon";
import { Input } from "../ui/input";
import { Text16, Text20 } from "../ui/typography";
import SettingsLabel from "./settings-label";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useChangePasswordMutation } from "@/lib/redux/services/userApi";
import { toast } from "sonner";

// Create a new schema for change password
const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, 'Current password is required'),
  newPassword: z
    .string()
    .min(1, 'New password is required')
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordSection() {
  const { theme } = useTheme();
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const formData = watch();
  const newPassword = formData.newPassword;

  const handleInputChange = (field: keyof ChangePasswordFormData, value: string) => {
    setValue(field, value, { shouldValidate: true, shouldDirty: true });
  };

  // Password strength validation functions
  const hasUppercase = /[A-Z]/.test(newPassword || "");
  const hasNumber = /[0-9]/.test(newPassword || "");
  const hasMinLength = (newPassword || "").length >= 8;

  // Calculate password strength (0-3)
  const getPasswordStrength = () => {
    let strength = 0;
    if (hasUppercase) strength++;
    if (hasNumber) strength++;
    if (hasMinLength) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength();

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }).unwrap();
      
      // Reset form on success
      reset();
      toast.success("Password changed successfully!");
    } catch (error: any) {
      // Handle API errors
      const errorMessage = error?.data?.message || "Failed to change password. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleDiscard = () => {
    reset();
  };

  return (
    <div>
      <Text20 className="font-satoshi">Change Password</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Update password for enhanced account security.{" "}
      </Text16>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <div>
            <SettingsLabel label="Current Password" required />
            <Input
              placeholder="• • • • • • • • • •"
              icon={<IconLock height={20} width={20} />}
              isPassword
              className="h-10 mt-2 dark:border-white/10 border-black/10 !bg-transparent "
              parentStyles={true}
              {...register("currentPassword")}
              value={formData.currentPassword}
              onChange={(e) => handleInputChange("currentPassword", e.target.value)}
            />
            {errors.currentPassword && (
              <Text16 className="!text-red-500 mt-1 !text-xs">
                {errors.currentPassword.message}
              </Text16>
            )}
            <div className="mt-3">
              <SettingsLabel label="New Password" required />
              <Input
                placeholder="• • • • • • • • • •"
                icon={<IconLock height={20} width={20} />}
                isPassword
                className="h-10 mt-2 dark:border-white/10 border-black/10 !bg-transparent"
                parentStyles={true}
                {...register("newPassword")}
                value={formData.newPassword}
                onChange={(e) => handleInputChange("newPassword", e.target.value)}
              />
              {errors.newPassword && (
                <Text16 className="!text-red-500 mt-1 !text-xs">
                  {errors.newPassword.message}
                </Text16>
              )}
              <div className="mt-3">
                <SettingsLabel label="Confirm Password" required />
                <Input
                  placeholder="• • • • • • • • • •"
                  icon={<IconLock height={20} width={20} />}
                  isPassword
                  className="h-10 mt-2 dark:border-white/10 border-black/10 !bg-transparent"
                  parentStyles={true}
                  {...register("confirmPassword")}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                />
                {errors.confirmPassword && (
                  <Text16 className="!text-red-500 mt-1 !text-xs">
                    {errors.confirmPassword.message}
                  </Text16>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Password Strength Indicator */}
        <div className="grid grid-cols-3 gap-1">
          <div className="w-full h-1 bg-[#0F15254D] relative mt-5 rounded-[1.5px] overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full transition-all duration-300 bg-[#EA4335]`}
              style={{ width: passwordStrength >= 1 ? "100%" : "0%" }}
            ></div>
          </div>
          <div className="w-full h-1 bg-[#0F15254D] relative mt-5 rounded-[1.5px] overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full transition-all duration-300 bg-[#EA4335]`}
              style={{ width: passwordStrength >= 2 ? "100%" : "0%" }}
            ></div>
          </div>
          <div className="w-full h-1 bg-[#0F15254D] relative mt-5 rounded-[1.5px] overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full transition-all duration-300 bg-[#EA4335]`}
              style={{ width: passwordStrength >= 3 ? "100%" : "0%" }}
            ></div>
          </div>
        </div>

        {/* Password Requirements */}
        <div className="mt-2">
          <Text16 className={`${theme === 'dark' ? "font-satoshi" : "font-satoshi-medium"} dark:text-white/80`}>Must contain at least;</Text16>
          <div className="mt-1 flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              hasUppercase ? "bg-[#3EDC81]" : "bg-black dark:bg-white/60"
            }`}>
              {hasUppercase ? (
                <Check className="w-2.5 h-2.5 text-white dark:text-black stroke-[4px]" />
              ) : (
                <X className="w-2.5 h-2.5 text-white dark:text-black stroke-[4px]" />
              )}
            </div>
            <Text16 className="font-satoshi dark:text-white/80">At least 1 uppercase</Text16>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              hasNumber ? "bg-[#3EDC81]" : "bg-black dark:bg-white/60"
            }`}>
              {hasNumber ? (
                <Check className="w-2.5 h-2.5 text-white dark:text-black stroke-[4px]" />
              ) : (
                <X className="w-2.5 h-2.5 text-white dark:text-black stroke-[4px]" />
              )}
            </div>
            <Text16 className="font-satoshi dark:text-white/80">At least 1 number</Text16>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              hasMinLength ? "bg-[#3EDC81]" : "bg-black dark:bg-white/60"
            }`}>
              {hasMinLength ? (
                <Check className="w-2.5 h-2.5 text-white dark:text-black stroke-[4px]" />
              ) : (
                <X className="w-2.5 h-2.5 text-white dark:text-black stroke-[4px]" />
              )}
            </div>
            <Text16 className="font-satoshi dark:text-white/80">At least 8 characters</Text16>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-2 mt-4">
          <Button
            type="button"
            variant={"black"}
            className="h-[52px] font-satoshi w-full dark:text-white dark:bg-white/5 bg-transparent text-black border-black/15 dark:border-white/15 hover:bg-white/10 hover:opacity-70"
            onClick={handleDiscard}
            disabled={!isDirty || isLoading}
          >
            Discard
          </Button>
          <Button
            type="submit"
            variant={theme === "dark" ? "white" : "black"}
            className="h-[52px] font-satoshi-medium w-full"
            disabled={!isDirty || isLoading || passwordStrength < 3}
          >
            {isLoading ? "Changing Password..." : "Apply Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
