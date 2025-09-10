import { baseApi } from "../../services/baseApi";
import type {
  CustomAnalysisRequest,
  CustomAnalysisResponse,
  CustomAnalysesResponse,
  SupportedSymbolsResponse,
  ActiveRecommendationsResponse,
  DailyRecommendationsResponse,
} from "@/types/redux";

export const recommendationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomAnalysis: builder.mutation<CustomAnalysisResponse, CustomAnalysisRequest>({
      query: (analysisData) => ({
        url: "/recommendations/custom",
        method: "POST",
        body: analysisData,
      }),
      invalidatesTags: ["Recommendation"],
    }),

    getMyAnalyses: builder.query<CustomAnalysesResponse, {
      limit?: number;
      offset?: number;
      excludeRecommendationTrades?: boolean;
    }>({
      query: (params) => ({
        url: "/recommendations/custom/my-analyses",
        method: "GET",
        params,
      }),
      providesTags: ["Recommendation"],
    }),

    getCustomAnalysis: builder.query<CustomAnalysisResponse, number>({
      query: (id) => `/recommendations/custom/${id}`,
      providesTags: ["Recommendation"],
    }),

    getSupportedSymbols: builder.query<SupportedSymbolsResponse, void>({
      query: () => "/recommendations/custom/supported-symbols",
      providesTags: ["Recommendation"],
    }),

    getActiveRecommendations: builder.query<ActiveRecommendationsResponse, {
      type?: string;
      limit?: number;
    }>({
      query: (params) => ({
        url: "/recommendations/active",
        method: "GET",
        params,
      }),
      providesTags: ["Recommendation"],
    }),

    getDailyRecommendations: builder.query<DailyRecommendationsResponse, void>({
      query: () => "/recommendations/daily",
      providesTags: ["Recommendation"],
    }),

    analyzeRecommendation: builder.mutation<any, { id: number; direction: 'long' | 'short' }>({
      query: ({ id, direction }) => ({
        url: `/recommendations/${id}/analyze`,
        method: "POST",
        body: { direction },
      }),
      invalidatesTags: ["Recommendation", "ProposedTrade"],
    }),
  }),
}) as any;

export const {
  useCreateCustomAnalysisMutation,
  useGetMyAnalysesQuery,
  useGetCustomAnalysisQuery,
  useGetSupportedSymbolsQuery,
  useGetActiveRecommendationsQuery,
  useGetDailyRecommendationsQuery,
  useAnalyzeRecommendationMutation,
} = recommendationsApi;
