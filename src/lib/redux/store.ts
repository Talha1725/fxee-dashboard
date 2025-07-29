import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./services/baseApi";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    // Add the RTK Query reducer
    [baseApi.reducerPath]: baseApi.reducer,

    // Add slice reducers
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
        // Ignore these paths in the state
        ignoredPaths: ["api.queries"],
      },
    }).concat(baseApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});

// Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
