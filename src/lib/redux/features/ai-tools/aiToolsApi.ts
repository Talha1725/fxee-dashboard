import { baseApi } from "../../services/baseApi";
import type {
  AIToolsResponse,
  UpdateAIToolsRequest,
  AITool,
} from "@/types/redux";

export const aiToolsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAITools: builder.query<AIToolsResponse, void>({
      query: () => ({
        url: "/ai-tools",
        method: "GET",
      }),
      providesTags: ["AITools"],
    }),

    updateUserAITools: builder.mutation<AIToolsResponse, UpdateAIToolsRequest>({
      query: (toolsData) => ({
        url: "/ai-tools",
        method: "PUT",
        body: toolsData,
      }),
      invalidatesTags: ["AITools"],
    }),
  }),
});

export const {
  useGetUserAIToolsQuery,
  useUpdateUserAIToolsMutation,
} = aiToolsApi;