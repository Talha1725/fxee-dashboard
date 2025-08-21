import { baseApi } from "../../services/baseApi";
import type { User } from "@/types/redux";

export interface UsersListResponse {
  success: boolean;
  data: User[];
}

export interface UserResponse {
  success: boolean;
  data: User;
}

export interface CreateUserRequest {
  email: string;
  fullName: string;
  password: string;
}

export interface UpdateUserRequest {
  email?: string;
  fullName?: string;
  userName?: string;
  picture?: string;
  emailVerified?: boolean;
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersListResponse, {
      page?: string;
      limit?: string;
      search?: string;
    }>({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params,
      }),
      providesTags: ["User"],
    }),

    createUser: builder.mutation<UserResponse, CreateUserRequest>({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    getUserById: builder.query<UserResponse, string>({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),

    updateUser: builder.mutation<UserResponse, { id: string; data: UpdateUserRequest }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation<{ success: boolean; message: string }, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
