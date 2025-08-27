// API Configuration
export const API_CONFIG = {
  // API Base URL from environment variables
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  
  // API Endpoints
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      GOOGLE: "/auth/google",
      FORGOT_PASSWORD: "/auth/forgot-password",
      RESET_PASSWORD: "/auth/reset-password",
      VERIFY_EMAIL: "/auth/verify-email",
      RESEND_VERIFICATION: "/auth/resend-verification",
      REFRESH_TOKEN: "/auth/refresh",
    },
    USERS: {
      PROFILE: "/users/profile",
      ALL: "/users",
      BY_ID: (id: string) => `/users/${id}`,
      TRADING_PREFERENCES: "/users/trading-preferences",
    },
    PAYMENTS: {
      CREATE: "/payments",
      ALL: "/payments",
      BY_ID: (id: string) => `/payments/${id}`,
    },
    CHATBOT: {
      CHAT: "/chatbot/chat",
      INFO: "/chatbot/info",
      HISTORY: "/chatbot/history",
    },
    RECOMMENDATIONS: {
      CUSTOM: "/recommendations/custom",
      MY_ANALYSES: "/recommendations/custom/my-analyses",
      BY_ID: (id: string) => `/recommendations/custom/${id}`,
      SUPPORTED_SYMBOLS: "/recommendations/custom/supported-symbols",
      ACTIVE: "/recommendations/active",
    },
  },
  
  // Request configuration
  REQUEST_CONFIG: {
    TIMEOUT: 30000, // 30 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000, // 1 second
  },
};

// Validate API configuration
if (!API_CONFIG.BASE_URL) {
  console.error('❌ NEXT_PUBLIC_API_BASE_URL is not set in environment variables');
  console.error('Please create a .env.local file with:');
  console.error('NEXT_PUBLIC_API_BASE_URL=http://localhost:3000');
}
