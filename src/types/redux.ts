// Auth Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin" | "trader";
  avatar?: string;
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
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
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
