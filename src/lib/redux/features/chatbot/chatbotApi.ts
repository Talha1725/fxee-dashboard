import { baseApi } from "../../services/baseApi";
import type {
  ChatRequest,
  ChatResponse,
  ChatHistoryResponse,
  ChatbotInfoResponse,
} from "@/types/redux";

export const chatbotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendChatMessage: builder.mutation<ChatResponse, ChatRequest>({
      query: (chatData) => ({
        url: "/chatbot/chat",
        method: "POST",
        body: chatData,
      }),
      invalidatesTags: ["Chat"],
    }),

    sendProposedTradeChatMessage: builder.mutation<ChatResponse, ChatRequest>({
      query: (chatData) => ({
        url: "/chatbot/proposed-trade",
        method: "POST",
        body: chatData,
      }),
      invalidatesTags: ["Chat"],
    }),

    getChatHistory: builder.query<ChatHistoryResponse, {
      page?: string;
      limit?: string;
    }>({
      query: (params) => ({
        url: "/chatbot/history",
        method: "GET",
        params,
      }),
      providesTags: ["Chat"],
    }),

    getChatbotInfo: builder.query<ChatbotInfoResponse, void>({
      query: () => "/chatbot/info",
      providesTags: ["Chat"],
    }),
  }),
});

export const {
  useSendChatMessageMutation,
  useSendProposedTradeChatMessageMutation,
  useGetChatHistoryQuery,
  useGetChatbotInfoQuery,
} = chatbotApi;
