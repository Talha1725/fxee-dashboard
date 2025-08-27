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

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

interface TradingPreferences {
  id?: number;
  userId?: number;
  tradeSizeLogic: "fixed" | "percentage";
  fixedAmount?: string | null;
  percentageOfCapital?: string | null;
  riskProfile: "low" | "medium" | "high";
  autoTradeEnabled: boolean;
  maxRiskPerAutoTrade?: string | null;
  maxConcurrentAutoTrades?: number;
  preferredAssets: "crypto" | "forex" | "both";
  createdAt?: string;
  updatedAt?: string;
}

interface UpdateTradingPreferencesRequest {
  tradeSizeLogic?: "fixed" | "percentage";
  fixedAmount?: string | null;
  percentageOfCapital?: string | null;
  riskProfile?: "low" | "medium" | "high";
  autoTradeEnabled?: boolean;
  maxRiskPerAutoTrade?: string | null;
  maxConcurrentAutoTrades?: number;
  preferredAssets?: "crypto" | "forex" | "both";
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
    changePassword: builder.mutation<
      { message: string },
      ChangePasswordRequest
    >({
      query: (passwordData) => ({
        url: "/users",
        method: "PUT",
        body: passwordData,
      }),
      invalidatesTags: ["User"],
    }),
    getTradingPreferences: builder.query<
      { message: string; result: TradingPreferences },
      void
    >({
      query: () => ({
        url: "/users/trading-preferences",
        method: "GET",
      }),
      providesTags: ["TradingPreferences"],
    }),
    updateTradingPreferences: builder.mutation<
      { message: string; result: TradingPreferences },
      UpdateTradingPreferencesRequest
    >({
      query: (preferencesData) => ({
        url: "/users/trading-preferences",
        method: "PUT",
        body: preferencesData,
      }),
      invalidatesTags: ["TradingPreferences"],
    }),
  }),
});

export const { 
  useUpdateUserProfileMutation, 
  useUpdateGeneralSettingsMutation, 
  useUpdateLanguageMutation, 
  useChangePasswordMutation,
  useGetTradingPreferencesQuery,
  useUpdateTradingPreferencesMutation
} = userApi;