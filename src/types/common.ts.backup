export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ErrorResponse {
  message: string;
  code: string;
  status: number;
}

export type SortDirection = "asc" | "desc";

export interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: SortDirection;
  search?: string;
  [key: string]: string | number | SortDirection | undefined;
}

export interface Trade {
  id: string;
  symbol: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
  status: "pending" | "completed" | "cancelled";
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface MarketData {
  symbol: string;
  price: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  change24h: number;
  timestamp: string;
}

export interface AISignal {
  symbol: string;
  direction: "buy" | "sell" | "hold";
  confidence: number;
  timestamp: string;
  indicators: {
    [key: string]: number;
  };
}

export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  icon: React.ReactNode;
}

export interface PlanItemType {
  title: string;
  description: string;
  fitfor: string;
  price: number;
  type: PlanType;
  items: string[];
}

export type PlanType = "Free" | "Basic" | "Pro" | "VIP";

export type BrokerType = "binance" | "bitget" | "bybit" | "okx" | "coinbase";
