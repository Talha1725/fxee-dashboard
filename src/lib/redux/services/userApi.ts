import { baseApi } from "./baseApi";

interface UpdateUserProfileRequest {
  fullName: string;
  userName: string;
  picture?: string;
  phoneNumber?: string;
}

interface UpdateGeneralSettingsRequest {
  language?: string;
  timezone?: string;
  fullName?: string;
  userName?: string;
}

interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  role?: "user" | "admin" | "trader";
  picture?: string;
  phoneNumber?: string;
  language?: string;
  timezone?: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation<
      { message: string; result: UserProfile },
      UpdateUserProfileRequest
    >({
      query: (userData) => ({
        url: "/users",
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    updateGeneralSettings: builder.mutation<
      { message: string; result: UserProfile },
      UpdateGeneralSettingsRequest
    >({
      query: (settingsData) => ({
        url: "/users",
        method: "PUT",
        body: settingsData,
      }),
      invalidatesTags: ["User"],
    }),
    updateLanguage: builder.mutation<
      { message: string; result: UserProfile },
      { language: string; fullName?: string; userName?: string }
    >({
      query: (data) => ({
        url: "/users",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUpdateUserProfileMutation, useUpdateGeneralSettingsMutation, useUpdateLanguageMutation } = userApi;