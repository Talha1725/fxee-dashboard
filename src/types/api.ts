// API Response Types
export interface ApiError {
  message?: string;
  error?: string;
  details?: Record<string, unknown>;
  status?: number;
}

export interface ApiResponse<T = unknown> {
  success?: boolean;
  status?: string;
  message?: string;
  error?: string;
  data?: T;
}

// Auth Response Types
export interface AuthData {
  userData?: User;
  token?: string;
}

export interface AuthResponseData {
  userData?: User;
  token?: string;
  email?: string;
  emailVerified?: boolean;
}

export interface AuthResponse extends ApiResponse<AuthResponseData> {
  token?: string;
  data?: AuthResponseData | User;
}

// User Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  emailVerified: boolean;
  picture?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Payment Types
export interface Payment {
  id: number;
  trackId?: string;
  transactionId: string;
  userId: number;
  amount: string;
  currency: string;
  status: 'pending' | 'paid' | 'failed' | 'refunded' | 'chargeback' | 'trial';
  subscriptionStatus?: 'active' | 'cancelled_pending' | 'cancelled' | 'expired' | 'paused';
  billingCycle?: 'monthly' | 'yearly';
  paymentMethod: string;
  description?: string;
  nextBillingDate?: string;
  isRecurring?: boolean;
  createdAt?: string;
  paidAt?: string;
  failedAt?: string;
}

export interface PaymentResponse extends ApiResponse<Payment> {
  payment?: Payment;
}

// VIP Subscription Types
export interface VIPCheckoutRequest {
  planId: 'VIP';
  metadata?: {
    source?: string;
    campaign?: string;
    [key: string]: any;
  };
}

export interface VIPPlan {
  name: string;
  tier: 'vip';
  billingCycle: 'monthly' | 'yearly';
  features: string[];
}

export interface VIPCheckoutPayment {
  id: number;
  trackId: string;
  amount: string;
  currency: string;
  status: 'pending' | 'paid' | 'failed' | 'refunded' | 'chargeback' | 'trial';
}

export interface VIPCheckoutResponse extends ApiResponse<{
  payment: VIPCheckoutPayment;
  checkoutUrl: string;
  plan: VIPPlan;
}> {}

export interface Subscription {
  id: number;
  tier: string;
  isActive: boolean;
  startDate: string;
  endDate?: string;
  nextBillingDate: string;
}

export interface PaymentStatusUser {
  id: number;
  email: string;
  fullName: string;
}

export interface PaymentStatusResponse extends ApiResponse<{
  payment: {
    id: number;
    trackId: string;
    amount: string;
    currency: string;
    status: 'pending' | 'paid' | 'failed' | 'refunded' | 'chargeback' | 'trial';
    subscriptionStatus: 'active' | 'cancelled_pending' | 'cancelled' | 'expired' | 'paused';
    billingCycle: 'monthly' | 'yearly';
    nextBillingDate: string;
    isRecurring: boolean;
    paidAt?: string;
    createdAt: string;
  };
  user: PaymentStatusUser;
  subscription: Subscription;
}> {}

export interface PaymentsListResponse extends ApiResponse<{
  payments: Payment[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalPayments: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}> {}

// Payment History Types
export interface PaymentHistoryItem {
  id: number;
  userId: number;
  transactionId: string;
  amount: string;
  currency: string;
  status: 'pending' | 'paid' | 'failed' | 'refunded' | 'chargeback' | 'trial';
  paymentMethod: string;
  subscriptionStatus?: 'active' | 'cancelled_pending' | 'cancelled' | 'expired' | 'paused';
  billingCycle?: 'monthly' | 'yearly';
  nextBillingDate?: string;
  isRecurring?: boolean;
  productName?: string;
  paidAt?: string;
  createdAt: string;
  userEmail: string;
  userFullName: string;
}

export interface PaymentHistoryQueryParams {
  page?: number;
  limit?: number;
  status?: 'pending' | 'paid' | 'failed' | 'refunded' | 'chargeback' | 'trial';
  fromDate?: string; // ISO datetime string
  toDate?: string; // ISO datetime string
}

export interface PaymentHistoryResponse extends ApiResponse<{
  payments: PaymentHistoryItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}> {}

// Chatbot Types
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

export interface ChatResponse {
  response: string;
  timestamp: string;
  quota: {
    used: number;
    limit: number;
    remaining: number;
  };
}

export interface ChatResponseData extends ApiResponse<ChatResponse> {}

export interface ChatHistoryItem {
  id: number;
  userMessage: string;
  botResponse: string;
  model: string;
  responseTime: number;
  chatDate: string;
  createdAt: string;
}

export interface ChatHistoryResponse extends ApiResponse<{
  chatHistory: ChatHistoryItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalChats: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  quota: {
    used: number;
    limit: number;
    remaining: number;
  };
}> {}

export interface ChatbotInfo {
  name: string;
  description: string;
  model: string;
  capabilities: string[];
  version: string;
  status: 'active' | 'inactive';
}

export interface ChatbotInfoResponse extends ApiResponse<ChatbotInfo> {}

// Recommendation Types
export interface CustomAnalysisRequest {
  profitTarget: number;
  maxRisk: number;
  riskLevel: 'low' | 'mid' | 'high';
  tradingType: 'day_trade' | 'swing_trade';
  tradingVersion: 'basic' | 'pro';
  symbol: string;
  timeFrame?: string;
  customGoals?: string;
}

export interface CustomAnalysis {
  id: number;
  symbol: string;
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  confidence: number;
  riskLevel: string;
  timeframe: string;
  strategy: string;
  riskRewardRatio: string;
  additionalTargets?: string[];
  detailedAnalysis: string;
}

export interface CustomAnalysisResponse extends ApiResponse<CustomAnalysis> {}

export interface CustomAnalysesListResponse extends ApiResponse<{
  data: CustomAnalysis[];
  count: number;
}> {}

export interface SupportedSymbol {
  id: number;
  symbol: string;
  type: string;
}

export interface SupportedSymbolsResponse extends ApiResponse<{
  total: number;
  symbols: SupportedSymbol[];
  byType: {
    Forex: SupportedSymbol[];
    Crypto: SupportedSymbol[];
    Commodities: SupportedSymbol[];
  };
}> {}

export interface ActiveRecommendation {
  id: number;
  type: 'standard_hourly' | 'market_analysis' | 'custom_analysis';
  title: string;
  description: string;
  symbol: string;
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  confidence: number;
  riskLevel: string;
  profitTier: string;
  validUntil: string;
  createdAt: string;
}

export interface ActiveRecommendationsResponse extends ApiResponse<{
  data: ActiveRecommendation[];
  count: number;
}> {}

// Error Types
export interface ApiErrorResponse {
  success: false;
  error: string;
  message?: string;
  details?: Record<string, unknown>;
}

// Generic API Error for catch blocks
export interface ApiErrorWithData extends Error {
  data?: ApiError;
  status?: number;
  error?: string;
}
