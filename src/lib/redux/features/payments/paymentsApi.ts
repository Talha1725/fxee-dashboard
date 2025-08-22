import { baseApi } from "../../services/baseApi";
import type {
  Payment,
  CreatePaymentRequest,
  PaymentResponse,
  PaymentsListResponse,
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
  }),
});

export const {
  useCreatePaymentMutation,
  useGetPaymentsQuery,
  useGetPaymentStatusQuery,
} = paymentsApi;
