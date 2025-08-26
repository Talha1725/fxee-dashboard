import { PlanType } from "@/types/common";
import {
  IconAIBrain,
  IconEye,
  IconFibo,
  IconLineChart,
  IconScale,
  IconDoc,
  IconFingerPrint,
  IconRobot,
  IconAIPattern,
  IconBox,
} from "@/components/ui/icon";

// API endpoints
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
export const WS_URL = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:3001";

// Timeframes
export const TIMEFRAMES = {
  M1: "1m",
  M5: "5m",
  M15: "15m",
  M30: "30m",
  H1: "1h",
  H4: "4h",
  D1: "1d",
  W1: "1w",
} as const;

// Currency pairs
export const CURRENCY_PAIRS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "USD/CHF",
  "USD/CAD",
  "AUD/USD",
  "NZD/USD",
] as const;

// Technical indicators
export const INDICATORS = {
  MA: "Moving Average",
  EMA: "Exponential Moving Average",
  RSI: "Relative Strength Index",
  MACD: "Moving Average Convergence Divergence",
  BB: "Bollinger Bands",
  STOCH: "Stochastic Oscillator",
} as const;

// Risk levels
export const RISK_LEVELS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

// Chart types
export const CHART_TYPES = {
  CANDLESTICK: "candlestick",
  LINE: "line",
  AREA: "area",
  BAR: "bar",
} as const;

// Theme
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

// WebSocket events
export const WS_EVENTS = {
  PRICE: "price",
  INDICATOR: "indicator",
  RECOMMENDATION: "recommendation",
  ALERT: "alert",
  SYSTEM: "system",
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: "ai-trading-theme",
  AUTH_TOKEN: "ai-trading-token",
  USER_PREFERENCES: "ai-trading-preferences",
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  AUTH_ERROR: "Authentication failed. Please try again.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  SERVER_ERROR: "Server error. Please try again later.",
} as const;

// Validation
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  MAX_INDICATORS: 5,
  MAX_ACTIVE_TRADES: 10,
  MAX_ALERTS: 50,
  MAX_SAVED_LAYOUTS: 5,
} as const;

export const SUBSCRIPTION_PLANS = [
  {
    title: "Free Plan",
    description: "Test the Power of AI Before You Upgrade",
    fitfor: "Perfect for: Testers, skeptics, curious traders",
    price: 0,
    type: "Free" as PlanType,
    items: [
      "Access to FXEE AI Companion (Basic Mode)",
      "3 AI Chart Analyses per Month",
      "$100 in ETH Token Credits (usable for extra analyses or trial tools)",
      "Access to 1 Tool (Chart Pattern Detection)",
      "Telegram & Email Support (24–48h)",
      "Trade Simulation Account (FXEE Internal Only)",
    ],
  },
  {
    title: "Basic",
    description: "Powerful AI, Affordable Edge",
    fitfor: "Ideal for: Active traders managing prop firm challenges",
    price: 99,
    type: "Basic" as PlanType,
    items: [
      "Access to 3 Core AI Tools:\nChart Pattern Detector\nTrend Strength Analyzer\nFibonacci Levels Predictor",
      "5 AI Analyses / Day",
      "200 FXEE Tokens / Month",
      "Trade Simulation Account (FXEE Internal)",
      "Wallet Access – Fund with ETH, BTC, or Credit Card",
      "Downloadable Trade Reports",
      "Priority Support (within 24h)",
    ],
  },
  {
    title: "Pro",
    description: "Serious Insights. Serious Gains",
    fitfor: "Great for: Traders looking for real-time market intelligence.",
    price: 249,
    type: "Pro" as PlanType,
    items: [
      "Access to 5 Advanced AI Tools:\nAll from Basic, plus:\nSentiment Analysis AI (market psychology)\nNews Pulse AI (live news impact estimator)",
      "10 AI Analyses / Day",
      "500 FXEE Tokens / Month",
      "Trade Simulation Account (FXEE Internal)",
      "Speed-Enhanced AI Processing",
      "Export-to-CSV Trade Analysis",
      "Live Chat + Email Support (under 12h)",
    ],
  },
  {
    title: "VIP",
    description: "Elite Trading Intelligence. Built for Toppers",
    fitfor: "Ideal for: Active traders managing prop firm challenges or retail trades manually.",
    price: 399,
    type: "VIP" as PlanType,
    items: [
      "Access to 10+ AI Tools, including:\nWhale Wallet Movement Scanner\nOrder Book Heatmap Analyzer\nCorrelation Matrix AI\nRisk-Adjusted Position Sizer\nMulti-Timeframe Confluence Detector\nAnd Many More Elite Modules",
      "25 AI Analyses / Day",
      "1,000 FXEE Tokens / Month",
      "Trade Simulation Account + Option to Add MetaAPI Copy Account",
      "Exclusive Dashboard with Higher Data Feed Access",
      "$100 ETH Gift (on first purchase only)",
      "Strategy Optimization Reports (Auto-generated Weekly)",
      "Add & Reset MetaAPI Demo Accounts for Extra Fee",
      "Direct AI Tuning Access (Customize AI suggestions to your strategy)",
      "1-on-1 Onboarding Call",
      "Premium 6h VIP Support Window",
    ],
  },
];

export const ACCOUNT_TYPES = [
  {
    title: "Virtual Trading Environment",
    price: "$0",
    items: [
      "Simulate trades directly within the FXEE dashboard",
      "Analyze charts, test strategies, and use all AI tools",
      "Perfect for beginners, learning, or testing without external connections",
      "All trades remain inside the FXEE ecosystem",
      "No copy-trading or external broker execution",
      "100% free, instant access",
    ],
  },
  {
    title: "Broker Backed Simulation Account",
    price: "$199/month",
    items: [
      "10 AI AnalysesConnect your FXEE account to a live broker-style environment",
      "Perfect for traders preparing for FTMO, FundedNext, URFX, and other prop firm challenges",
      "All trades are executed through real-time broker conditions (spreads, slippage, latency)",
      "Supports copy trading to external platforms (MT4/MT5/others)",
      "Mimics daily drawdown, leverage, stop-loss, and target rules used by major prop firms",
      "Ideal for testing prop firm strategies without risking a live challenge fee",
      "Access all FXEE AI tools with real-market simulation:\nSL/TP auto recommendations\nSentiment and trend detection\nWhale movement alerts\nFibonacci and resistance support tracking",
      "Includes full performance analytics to evaluate challenge-readiness",
      "Use as a risk-free prep account before going for real evaluations",
      "Cancel anytime — no contracts",
    ],
  },
];

export const QUICK_LINKS = [
  { link: "/home", text: "Home" },
  { link: "/how-it-works", text: "How It Works" },
  { link: "/", text: "Prop Firm Challenges" },
  { link: "/", text: "Community" },
  { link: "/", text: "Success Stories" },
  { link: "/", text: "Contact Us" },
  { link: "/", text: "Support" },
];

export const LEGAL_LINKS = [
  { link: "/", text: "Terms & Conditions" },
  { link: "/", text: "Privacy Policy" },
  { link: "/", text: "Disclaimer" },
];

export const CONTACT_INFO = [{ link: "/", text: "support@fxee.ai" }];

export const addOnsData = [
  {
    icon: <IconAIBrain width={20} height={20} />,
    title: "AI Analysis",
    isVip: false,
    active: true,
  },
  {
    icon: <IconLineChart width={20} height={20} />,
    title: "Technical",
    isVip: false,
    active: true,
  },
  {
    icon: <IconFibo width={20} height={20} />,
    title: "Fibonacci",
    isVip: false,
    active: true,
  },
  {
    icon: <IconScale width={20} height={20} />,
    title: "Risk Calc",
    isVip: false,
    active: true,
  },
  {
    icon: <IconEye width={20} height={20} />,
    title: "Smart Alerts",
    isVip: true,
    active: true,
  },
  {
    icon: <IconEye width={20} height={20} />,
    title: "Psychology",
    isVip: true,
    active: false,
  },
  {
    icon: <IconDoc width={20} height={20} />,
    title: "News Impact",
    isVip: true,
    active: false,
  },
  {
    icon: <IconFingerPrint width={20} height={20} />,
    title: "Pattern Scanner",
    isVip: true,
    active: false,
  },
];

export const proToolsData = [
  {
    icon: <IconRobot width={20} height={20} />,
    title: "Neural Trader",
    isPro: true,
  },
  {
    icon: <IconAIPattern width={20} height={20} />,
    title: "Pattern AI",
    isPro: true,
  },
  {
    icon: <IconBox width={20} height={20} />,
    title: "Market Mind",
    isPro: true,
  },
];

export const FAQS = [
  {
    category: "General",
    faq: [
      {
        question: "What is Fxee?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
      {
        question: "What is Fxee?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
      {
        question: "What is Fxee?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
    ],
  },
  {
    category: "Orders & Billing",
    faq: [
      {
        question: "What is Fxee? Why Fxee? How does it work?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
    ],
  },
  {
    category: "Platforms",
    faq: [
      {
        question: "What is Fxee?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
    ],
  },
  {
    category: "Rules",
    faq: [
      {
        question: "What is Fxee?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
    ],
  },
  {
    category: "Payout",
    faq: [
      {
        question: "What is Fxee?",
        answer: "Fxee is a platform that allows you to trade forex and CFDs.",
      },
    ],
  },
];

export const COPY_TRADING_HOW_TO = [
  {
    title: "Set Up Your Copy Trade Account",
    description:
      "Create or log into your trading account and choose the Copy Trading option. Select your account type (Demo or Live), set your base currency, and fund your account.",
  },
  {
    title: "Choose a Strategy Provider",
    description:
      "Browse through the list of experienced traders or strategy providers. Review their past performance, risk level, success rate, and trading style. Pick one that aligns with your goals.",
  },
  {
    title: "Set Your Risk Preferences",
    description:
      "Customize your copy settings — define how much of your capital you want to allocate, set stop-loss levels, maximum drawdown limits, and whether you want to copy all trades or only specific types.",
  },
  {
    title: "Start Copying",
    description:
      "Once your settings are configured, hit Start Copying. Trades from the selected strategy provider will be mirrored in your account in real-time.",
  },
  {
    title: "Monitor & Manage",
    description:
      "Use your dashboard to track performance, pause or stop copying at any time, switch providers, or manually close individual trades.",
  },
  {
    title: "Withdraw Profits or Reinvest",
    description:
      "Profits are reflected in your account balance. You can choose to withdraw them or reinvest into other strategies to diversify your portfolio.",
  },
];
