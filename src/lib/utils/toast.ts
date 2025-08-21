import { toast } from '@/components/ui/toast';

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      duration: 4000,
    });
  },
  
  error: (message: string) => {
    toast.error(message, {
      duration: 5000,
    });
  },
  
  loading: (message: string) => {
    return toast.loading(message, {
      duration: Infinity,
    });
  },
  
  dismiss: (toastId: string) => {
    toast.dismiss(toastId);
  },
  
  // Custom toast for API responses
  apiSuccess: (message: string) => {
    toast.success(message, {
      duration: 4000,
    });
  },
  
  apiError: (message: string) => {
    toast.error(message, {
      duration: 5000,
    });
  },
  
  // Form validation errors
  validationError: (message: string) => {
    toast.error(message, {
      duration: 4000,
    });
  },
  
  // Registration success with email verification
  registrationSuccess: () => {
    toast.success('Registration successful! Please check your email to verify your account before logging in.', {
      duration: 6000,
    });
  },
  
  // Login success
  loginSuccess: () => {
    toast.success('Login successful! Welcome back.', {
      duration: 3000,
    });
  },
  
  // Password reset
  passwordResetSent: () => {
    toast.success('Password reset email sent! Please check your inbox.', {
      duration: 5000,
    });
  },
  
  passwordResetSuccess: () => {
    toast.success('Password reset successfully! You can now log in with your new password.', {
      duration: 5000,
    });
  },
  
  // Email verification
  emailVerificationSent: () => {
    toast.success('Verification email sent! Please check your inbox.', {
      duration: 5000,
    });
  },
  
  emailVerificationSuccess: () => {
    toast.success('Email verified successfully! You can now log in to your account.', {
      duration: 5000,
    });
  },
};
