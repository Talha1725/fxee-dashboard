import { baseApi } from "../../services/baseApi";
import type { ProposedTradesResponse, ProposedTradesRequest, UsageLimitsResponse } from "@/types/redux";

export const proposedTradesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProposedTrades: builder.mutation<ProposedTradesResponse, ProposedTradesRequest>({
      query: (requestData) => ({
        url: "/proposed-trades",
        method: "POST",
        body: requestData,
      }),
      invalidatesTags: ["ProposedTrade"],
    }),
    getUsageLimits: builder.query<UsageLimitsResponse, void>({
      query: () => ({
        url: "/proposed-trades/usage-limits",
        method: "GET",
      }),
      providesTags: ["ProposedTrade"],
    }),
    getLastProposedTrade: builder.query<ProposedTradesResponse, { excludeRecommendationTrades?: boolean } | void>({
      query: (params) => ({
        url: "/proposed-trades/last",
        method: "GET",
        params: params,
      }),
      providesTags: ["ProposedTrade"],
    }),
  }),
});

export const {
  useCreateProposedTradesMutation,
  useGetUsageLimitsQuery,
  useGetLastProposedTradeQuery,
} = proposedTradesApi;