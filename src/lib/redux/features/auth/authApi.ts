import { baseApi } from "../../services/baseApi";
import type {
  User,
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@/types/redux";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    googleLogin: builder.mutation<AuthResponse, { access_token: string }>({
      query: (data) => ({
        url: "/auth/google",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    appleLogin: builder.mutation<AuthResponse, { code: string }>({
      query: (data) => ({
        url: "/auth/apple",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    linkedinLogin: builder.mutation<AuthResponse, { code: string }>({
      query: (data) => ({
        url: "/auth/linkedin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    forgotPassword: builder.mutation<{ success: boolean; message: string }, { email: string }>({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation<{ success: boolean; message: string }, { token: string; password: string }>({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation<{ success: boolean; message: string; data?: any }, { token: string }>({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
      }),
    }),

    resendVerification: builder.mutation<{ success: boolean; message: string }, { email: string }>({
      query: (data) => ({
        url: "/auth/resend-verification",
        method: "POST",
        body: data,
      }),
    }),

    refreshToken: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
    }),

    verify2FA: builder.mutation<AuthResponse, { userId: number; code: string }>({
      query: (data) => ({
        url: "/auth/verify-2fa",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    resend2FA: builder.mutation<{ success: boolean; message: string }, { userId: number; email: string }>({
      query: (data) => ({
        url: "/auth/resend-2fa",
        method: "POST",
        body: data,
      }),
    }),

    setupAuthenticator: builder.mutation<{ result: { qrCodeUrl: string; manualEntryKey: string } }, void>({
      query: () => ({
        url: "/users/authenticator/setup",
        method: "POST",
      }),
    }),

    verifyAuthenticator: builder.mutation<{ result: User }, { code: string }>({
      query: (data) => ({
        url: "/users/authenticator/verify",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    getProfile: builder.query<User, void>({
      query: () => "/users/profile",
      transformResponse: (response: { result: User }) => response.result,
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation<User, Partial<User>>({
      query: (updates) => ({
        url: "/users/profile",
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: ["User"],
    }),

    logout: builder.mutation<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGoogleLoginMutation,
  useAppleLoginMutation,
  useLinkedinLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useResendVerificationMutation,
  useRefreshTokenMutation,
  useVerify2FAMutation,
  useResend2FAMutation,
  useSetupAuthenticatorMutation,
  useVerifyAuthenticatorMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useLogoutMutation,
} = authApi;
