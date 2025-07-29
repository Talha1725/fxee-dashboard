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

    googleLogin: builder.mutation<AuthResponse, { token: string }>({
      query: (data) => ({
        url: "/auth/google",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    refreshToken: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
    }),

    getProfile: builder.query<User, void>({
      query: () => "/users/profile",
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
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGoogleLoginMutation,
  useRefreshTokenMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = authApi;
