import { baseApi } from "../../services/baseApi";
import type {
  VIPCheckoutRequest,
  VIPCheckoutResponse,
  PaymentStatusResponse,
  PaymentResponse,
  PaymentsListResponse,
  PaymentHistoryResponse,
  PaymentHistoryQueryParams,
} from "@/types/api";
import type {
  CreatePaymentRequest,
} from "@/types/redux";

export const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation<PaymentResponse, CreatePaymentRequest>({
      query: (paymentData) => ({
        url: "/payments",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["Payment"],
    }),

    getPayments: builder.query<PaymentsListResponse, {
      page?: string;
      limit?: string;
      status?: string;
      userId?: string;
      paymentMethod?: string;
    }>({
      query: (params) => ({
        url: "/payments",
        method: "GET",
        params,
      }),
      providesTags: ["Payment"],
    }),

    getPaymentStatus: builder.query<PaymentResponse, string>({
      query: (paymentId) => `/payments/${paymentId}`,
      providesTags: ["Payment"],
    }),

    // VIP Subscription Checkout
    createVIPCheckout: builder.mutation<VIPCheckoutResponse, VIPCheckoutRequest>({
      query: (checkoutData) => ({
        url: "/payments/create",
        method: "POST",
        body: checkoutData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Payment"],
    }),

    // Get Payment Status by Track ID
    getPaymentStatusByTrackId: builder.query<PaymentStatusResponse, string>({
      query: (trackId) => ({
        url: `/payments/status/${trackId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Payment"],
    }),

    // Get Payment History with enhanced query parameters
    getPaymentHistory: builder.query<PaymentHistoryResponse, PaymentHistoryQueryParams | void>({
      query: (params) => ({
        url: "/payments/history",
        method: "GET",
        params: params || { page: 1, limit: 10 },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Payment"],
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetPaymentsQuery,
  useGetPaymentStatusQuery,
  useCreateVIPCheckoutMutation,
  useGetPaymentStatusByTrackIdQuery,
  useGetPaymentHistoryQuery,
} = paymentsApi;
