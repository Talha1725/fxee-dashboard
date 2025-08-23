import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { API_CONFIG } from "@/lib/config/api";

// Base API configuration
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_CONFIG.BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      // Get token from state
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      // Ensure Content-Type is set for JSON requests
      if (!headers.has('content-type')) {
        headers.set('content-type', 'application/json');
      }

      return headers;
    },
    // credentials: "include", // temporarily disabled to test CORS
    mode: 'cors', // explicitly set CORS mode
  }),
  tagTypes: ["User", "Payment", "Chat", "Recommendation"],
  endpoints: () => ({}),
});
