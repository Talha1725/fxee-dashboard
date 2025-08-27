import { baseApi } from "./baseApi";

interface UpdateUserProfileRequest {
  fullName: string;
  userName: string;
  picture?: string;
  phoneNumber?: string;
}

interface UserProfile {
  id: number;
  email: string;
  fullName: string;
  userName: string;
  picture?: string;
  phoneNumber?: string;
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
  }),
});

export const { useUpdateUserProfileMutation } = userApi;