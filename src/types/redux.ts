// Auth Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  role: "user" | "admin" | "trader";
  picture?: string;
  phoneNumber?: string;
  language?: string;
  timezone?: string;
  emailVerified?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  userName: string;
  fullName: string;
  password: string;
}

// Updated AuthResponse to handle different backend response structures
export interface AuthResponse {
  status?: string;
  success?: boolean;
  message?: string;
  error?: string;
  token?: string;
  data?: {
    userData?: User;
    token?: string;
  } | User;
}

// Payment Types
export interface Payment {
  id: number;
  transactionId: string;
  userId: number;
  amount: string;
  currency: string;
  status: "pending" | "processing" | "completed" | "failed" | "cancelled" | "refunded";
  paymentMethod: "credit_card" | "debit_card" | "paypal" | "stripe" | "bank_transfer" | "crypto" | "other";
  description?: string;
  paymentProcessor?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  paidAt?: string;
  failedAt?: string;
}

export interface CreatePaymentRequest {
  userId: number;
  amount: number;
  currency?: string;
  paymentMethod: "credit_card" | "debit_card" | "paypal" | "stripe" | "bank_transfer" | "crypto" | "other";
  description?: string;
  paymentProcessor?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data: {
    payment: Payment;
  };
}

export interface PaymentsListResponse {
  success: boolean;
  message: string;
  data: {
    payments: Payment[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalPayments: number;
      limit: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}

// Chatbot Types
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

export interface ChatResponse {
  success: boolean;
  message: string;
  data: {
    response: string;
    timestamp: string;
    quota: {
      used: number;
      limit: number;
      remaining: number;
    };
  };
}

export interface ChatHistoryItem {
  id: number;
  userMessage: string;
  botResponse: string;
  model: string;
  responseTime: number;
  chatDate: string;
  createdAt: string;
}

export interface ChatHistoryResponse {
  success: boolean;
  message: string;
  data: {
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
  };
}

export interface ChatbotInfo {
  name: string;
  description: string;
  model: string;
  capabilities: string[];
  version: string;
  status: "active" | "inactive";
}

export interface ChatbotInfoResponse {
  success: boolean;
  message: string;
  data: ChatbotInfo;
}

// Recommendation Types
export interface CustomAnalysisRequest {
  profitTarget: number;
  maxRisk: number;
  riskLevel: "low" | "mid" | "high";
  tradingType: "day_trade" | "swing_trade";
  tradingVersion: "basic" | "pro";
  symbol: string;
  timeFrame?: string;
  customGoals?: string;
}

export interface CustomAnalysis {
  id: number;
  userId: number;
  type: string;
  title?: string;
  description?: string;
  symbol: string;
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  confidence: number;
  riskLevel: "low" | "mid" | "high";
  timeframe: string;
  strategy: string;
  riskRewardRatio: string;
  profitPercentage?: string;
  riskPercentage?: string;
  additionalTargets?: string[];
  detailedAnalysis?: string;
  metadata?: string;
  validUntil: string;
  createdAt: string;
}

export interface CustomAnalysisResponse {
  success: boolean;
  message: string;
  data: CustomAnalysis;
}

export interface CustomAnalysesResponse {
  success: boolean;
  data: CustomAnalysis[];
  count: number;
}

export interface SupportedSymbol {
  id: number;
  symbol: string;
  type: string;
}

export interface SupportedSymbolsResponse {
  success: boolean;
  data: {
    total: number;
    symbols: SupportedSymbol[];
    byType: {
      Forex: SupportedSymbol[];
      Crypto: SupportedSymbol[];
      Commodities: SupportedSymbol[];
    };
  };
  message: string;
}

export interface ActiveRecommendation {
  id: number;
  type: "standard_hourly" | "market_analysis" | "custom_analysis";
  title: string;
  description: string;
  symbol: string;
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  confidence: number;
  riskLevel: string;
  profitTier?: "GREAT_PROFIT" | "HIGH_PROFIT" | "MEDIUM_PROFIT" | "LOW_PROFIT" | "VERY_LOW_PROFIT";
  validUntil: string;
  createdAt: string;
}

export interface ActiveRecommendationsResponse {
  success: boolean;
  data: ActiveRecommendation[];
  count: number;
}

// Daily Recommendations Types
export interface DailyRecommendation {
  id: number;
  title: string;
  description: string;
  symbol: string;
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  confidence: number;
  riskLevel: string;
  timeframe: string;
  riskRewardRatio: string;
  profitTier: "GREAT_PROFIT" | "HIGH_PROFIT" | "MEDIUM_PROFIT" | "LOW_PROFIT" | "VERY_LOW_PROFIT";
  profitPercentage: string;
  riskPercentage: string;
  direction: "Long" | "Short";
  createdAt: string;
  validUntil: string;
}

export interface DailyRecommendationsResponse {
  success: boolean;
  data: DailyRecommendation[];
  message: string;
}

// Market Types
export interface MarketData {
  pair: string;
  price: number;
  change: number;
  volume: number;
  high: number;
  low: number;
  timestamp: string;
}

export type Timeframe = "1M" | "5M" | "15M" | "30M" | "1H" | "4H" | "1D" | "1W";

// Trading Types
export interface Position {
  id: string;
  pair: string;
  side: "buy" | "sell";
  size: number;
  entryPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
  createdAt: string;
}

export interface Order {
  id: string;
  pair: string;
  side: "buy" | "sell";
  type: "market" | "limit" | "stop";
  size: number;
  price?: number;
  status: "pending" | "filled" | "cancelled";
  createdAt: string;
}

export interface TradingSignal {
  id: string;
  pair: string;
  action: "buy" | "sell" | "hold";
  confidence: number;
  price: number;
  stopLoss: number;
  takeProfit: number;
  analysis: string;
  createdAt: string;
}

// Proposed Trades Types
export interface MarketDataUsed {
  trend: string;
  symbol: string;
  volatility: number;
  currentPrice: number;
  priceHistory: {
    low: number;
    high: number;
    open: number;
    close: number;
    volume: number;
    timestamp: string;
  }[];
}

export interface ProposedTrade {
  id: number;
  userId: number;
  symbol: string;
  timeframe: string;
  profitTarget: string;
  maximumRisk: string;
  profitTargetPercentage: string;
  maximumRiskPercentage: string;
  potentialProfit: string;
  maximumLoss: string;
  riskRewardRatio: string;
  riskLevel: "low" | "medium" | "high";
  tradingType: "day_trade" | "swing_trade";
  tradingVersion: "basic" | "pro";
  aiAnalysis: string;
  marketDataUsed: MarketDataUsed;
  confidence: number;
  status: "active" | "completed" | "cancelled";
  analysisCount: number;
  maxAnalysisLimit: number;
  validUntil: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProposedTradesRequest {
  symbol: string;
  timeframe: string;
}

export interface ProposedTradesResponse {
  success: boolean;
  data: ProposedTrade;
  message: string;
}

// Usage Limits Types
export interface UsageLimit {
  current: number;
  limit: number;
  canUse: boolean;
  remaining: number;
}

export interface UsageLimitsData {
  usageLimits: {
    proposed_trade: UsageLimit;
    hourly_analysis: UsageLimit;
    daily_analysis: UsageLimit;
    custom_analysis: UsageLimit;
  };
  date: string;
}

export interface UsageLimitsResponse {
  success: boolean;
  data: UsageLimitsData;
  message: string;
}
