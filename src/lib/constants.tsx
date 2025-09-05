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
import * as AllCountry from "country-flag-icons/react/1x1";

// API endpoints
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";
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

// Trading Symbols - Based on API data
export interface TradingSymbol {
  id: number;
  symbol: string;
  type: "Forex" | "Commodities" | "Crypto";
  displayName: string;
}

export const TRADING_SYMBOLS: TradingSymbol[] = [
  // Forex
  { id: 5, symbol: "AUDUSD", type: "Forex", displayName: "AUD/USD" },
  { id: 19, symbol: "EURUSD", type: "Forex", displayName: "EUR/USD" },
  { id: 26, symbol: "GBPUSD", type: "Forex", displayName: "GBP/USD" },
  { id: 31, symbol: "NZDUSD", type: "Forex", displayName: "NZD/USD" },
  { id: 33, symbol: "USDCAD", type: "Forex", displayName: "USD/CAD" },
  { id: 34, symbol: "USDCHF", type: "Forex", displayName: "USD/CHF" },
  { id: 37, symbol: "USDJPY", type: "Forex", displayName: "USD/JPY" },
  { id: 44, symbol: "USDTRY", type: "Forex", displayName: "USD/TRY" },
  { id: 46, symbol: "USDZAR", type: "Forex", displayName: "USD/ZAR" },

  // Commodities
  { id: 80, symbol: "Brent", type: "Commodities", displayName: "Brent Oil" },
  { id: 85, symbol: "Crude", type: "Commodities", displayName: "Crude Oil" },
  { id: 87, symbol: "GOLDInd", type: "Commodities", displayName: "Gold Index" },
  { id: 101, symbol: "XAGUSD", type: "Commodities", displayName: "Silver/USD" },
  { id: 107, symbol: "XAUUSD", type: "Commodities", displayName: "Gold/USD" },

  // Crypto
  { id: 52, symbol: "BITCOIN", type: "Crypto", displayName: "Bitcoin" },
  { id: 54, symbol: "BNB", type: "Crypto", displayName: "Binance Coin" },
  { id: 58, symbol: "DOGECOIN", type: "Crypto", displayName: "Dogecoin" },
  { id: 59, symbol: "ETHEREUM", type: "Crypto", displayName: "Ethereum" },
  { id: 69, symbol: "RIPPLE", type: "Crypto", displayName: "Ripple (XRP)" },
  { id: 70, symbol: "SOLANA", type: "Crypto", displayName: "Solana" },
];

// Organized by type
export const FOREX_SYMBOLS = TRADING_SYMBOLS.filter(s => s.type === "Forex");
export const COMMODITIES_SYMBOLS = TRADING_SYMBOLS.filter(s => s.type === "Commodities");
export const CRYPTO_SYMBOLS = TRADING_SYMBOLS.filter(s => s.type === "Crypto");

// For backwards compatibility
export const CURRENCY_PAIRS = FOREX_SYMBOLS.map(s => s.displayName);

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
  // {
  //   title: "Basic",
  //   description: "Powerful AI, Affordable Edge",
  //   fitfor: "Ideal for: Active traders managing prop firm challenges",
  //   price: 99,
  //   type: "Basic" as PlanType,
  //   items: [
  //     "Access to 3 Core AI Tools:\nChart Pattern Detector\nTrend Strength Analyzer\nFibonacci Levels Predictor",
  //     "5 AI Analyses / Day",
  //     "200 FXEE Tokens / Month",
  //     "Trade Simulation Account (FXEE Internal)",
  //     "Wallet Access – Fund with ETH, BTC, or Credit Card",
  //     "Downloadable Trade Reports",
  //     "Priority Support (within 24h)",
  //   ],
  // },
  // {
  //   title: "Pro",
  //   description: "Serious Insights. Serious Gains",
  //   fitfor: "Great for: Traders looking for real-time market intelligence.",
  //   price: 249,
  //   type: "Pro" as PlanType,
  //   items: [
  //     "Access to 5 Advanced AI Tools:\nAll from Basic, plus:\nSentiment Analysis AI (market psychology)\nNews Pulse AI (live news impact estimator)",
  //     "10 AI Analyses / Day",
  //     "500 FXEE Tokens / Month",
  //     "Trade Simulation Account (FXEE Internal)",
  //     "Speed-Enhanced AI Processing",
  //     "Export-to-CSV Trade Analysis",
  //     "Live Chat + Email Support (under 12h)",
  //   ],
  // },
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
  { link: "/contact", text: "Contact Us" },
  { link: "/", text: "Support" },
];

export const LEGAL_LINKS = [
  { link: "/", text: "Terms & Conditions" },
  { link: "/", text: "Privacy Policy" },
  { link: "/", text: "Disclaimer" },
];

export const CONTACT_INFO = [{ link: "/", text: "support@fxee.ai" }];

export const addOnsData = [
  // First 4 add-ons (available to all plans)
  // {
  //   icon: <IconAIBrain width={20} height={20} />,
  //   title: "AI Analysis",
  //   description: "AI-powered trading analysis and insights",
  //   isVip: false,
  //   active: true,
  // },
  {
    icon: <IconLineChart width={20} height={20} />,
    title: "AI RSI Analyzer",
    description: "Advanced RSI analysis with AI-powered overbought/oversold",
    isVip: false,
    active: false,
  },
  {
    icon: <IconFibo width={20} height={20} />,
    title: "Fibonacci Retracement Analyzer",
    description: "Advanced Fibonacci retracement analysis with AI-powered level detection",
    isVip: false,
    active: false,
  },
  {
    icon: <IconScale width={20} height={20} />,
    title: "Volatility & Risk Analyzer",
    description: "Advanced risk assessment and position sizing recommendations",
    isVip: false,
    active: false,
  },
  // Last 6 add-ons (VIP - disabled for Basic plan)
  {
    icon: <IconEye width={20} height={20} />,
    title: "Market Sentiment Aggregator",
    description: "Real-time market sentiment analysis across multiple timeframes",
    isVip: true,
    active: false,
  },
  {
    icon: <IconEye width={20} height={20} />,
    title: "Mass Psychology Analysis",
    description: "Advanced crowd behavior analysis",
    isVip: true,
    active: false,
  },
  // {
  //   icon: <IconDoc width={20} height={20} />,
  //   title: "News Impact Predictor",
  //   description: "Realtime Market news analysis with sentiment scoring and impact prediction",
  //   isVip: true,
  //   active: false,
  // },
  {
    icon: <IconFingerPrint width={20} height={20} />,
    title: "Pattern Recognition Scanner",
    description: "Track and analyze large-scale market movements and institutional trading patterns",
    isVip: true,
    active: false,
  },
  {
    icon: <IconAIBrain width={20} height={20} />,
    title: "AI Trend Forecast",
    description: "AI-powered market direction analysis and prediction",
    isVip: true,
    active: false,
  },
  {
    icon: <IconScale width={20} height={20} />,
    title: "Smart Portfolio Allocator",
    description: "Leverage AI to automatically distribute your capital across assets based on risk tolerance, market trends...",
    isVip: true,
    active: false,
  },
  {
    icon: <IconLineChart width={20} height={20} />,
    title: "Trade Probability Calculator",
    description: "Estimate a trade's success using key factors like risk/reward ratio, market volatility, historical performance...",
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
        question: "How do I activate my FXEEAI Trading Plan after purchase?",
        answer: "After your purchase, your plan will be activated automatically. You'll receive a confirmation email with login instructions and access to your dashboard.",
      },
      {
        question: "Is FXEEAI compatible with my broker account?",
        answer: "FXEEAI is compatible with most major brokers including MetaTrader 4, MetaTrader 5, and other popular trading platforms. Check our supported brokers list for specific compatibility details.",
      },
      {
        question: "Can I cancel or change my trading plan anytime?",
        answer: "Yes, you can cancel or change your trading plan at any time from your account settings. Changes will take effect at the next billing cycle.",
      },
      {
        question: "What is the difference between AI Auto-Trading and AI Trade Advisor?",
        answer: "AI Auto-Trading automatically executes trades based on AI signals, while AI Trade Advisor provides recommendations that you can review and execute manually. Both use the same advanced AI algorithms.",
      },
      {
        question: "How accurate are the AI trading signals?",
        answer: "Our AI trading signals have shown an average accuracy of 85-92% in backtesting. However, past performance doesn't guarantee future results, and trading always involves risk.",
      },
      {
        question: "Where can I track my trades and performance?",
        answer: "You can track all your trades and performance in real-time through your personalized dashboard, which includes detailed analytics, profit/loss reports, and performance metrics.",
      },
      {
        question: "Is there a free trial available before purchasing?",
        answer: "Yes, we offer a 7-day free trial for new users. This allows you to experience our AI trading features before committing to a paid plan.",
      },
      {
        question: "How can I contact support if I face any issues?",
        answer: "You can contact our support team 24/7 through live chat, email at support@fxee.ai, or by submitting a ticket through your dashboard. We typically respond within 2 hours.",
      },
    ],
  },
  {
    category: "Orders & Billing",
    faq: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cryptocurrency payments including Bitcoin and Ethereum.",
      },
      {
        question: "How does the billing work?",
        answer: "Billing is processed monthly or annually depending on your chosen plan. You'll receive an invoice via email before each billing cycle, and payments are automatically processed.",
      },
      {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, you can request a full refund within the first 30 days.",
      },
      {
        question: "What happens if my payment fails?",
        answer: "If a payment fails, we'll notify you via email and give you 3 days to update your payment method. Your account will remain active during this grace period.",
      },
    ],
  },
  {
    category: "Platforms",
    faq: [
      {
        question: "Which trading platforms are supported?",
        answer: "FXEEAI supports MetaTrader 4, MetaTrader 5, cTrader, and our proprietary web-based platform. We're constantly adding support for new platforms based on user demand.",
      },
      {
        question: "Do I need to install any software?",
        answer: "For our web-based platform, no installation is required. For MetaTrader integration, you'll need to install our custom indicators and expert advisors.",
      },
      {
        question: "Is there a mobile app available?",
        answer: "Yes, we have mobile apps for both iOS and Android that provide full access to your trading dashboard, AI signals, and account management features.",
      },
      {
        question: "Can I use multiple devices simultaneously?",
        answer: "Yes, you can access your FXEEAI account from multiple devices simultaneously. Your settings and preferences sync across all devices in real-time.",
      },
    ],
  },
  {
    category: "Rules",
    faq: [
      {
        question: "What are the trading rules and restrictions?",
        answer: "Our AI follows strict risk management rules including maximum drawdown limits, position sizing guidelines, and market condition filters to protect your capital.",
      },
      {
        question: "Can I customize the AI trading parameters?",
        answer: "Yes, advanced users can customize various parameters including risk level, trading hours, currency pairs, and signal sensitivity to match their trading style.",
      },
      {
        question: "What happens during high volatility periods?",
        answer: "During high volatility, our AI automatically adjusts position sizes and may temporarily pause trading to protect your account from excessive risk.",
      },
      {
        question: "Are there any trading limits?",
        answer: "Trading limits depend on your account type and risk settings. We have built-in safeguards to prevent over-trading and excessive risk exposure.",
      },
    ],
  },
  {
    category: "Payout",
    faq: [
      {
        question: "How do I withdraw my profits?",
        answer: "You can withdraw profits directly to your registered bank account, PayPal, or cryptocurrency wallet. Withdrawals are processed within 1-3 business days.",
      },
      {
        question: "What are the withdrawal fees?",
        answer: "Withdrawal fees vary by method: Bank transfers are free, PayPal charges 2.9%, and cryptocurrency withdrawals have minimal network fees.",
      },
      {
        question: "Is there a minimum withdrawal amount?",
        answer: "Yes, the minimum withdrawal amount is $50 for bank transfers and $25 for digital wallets. This helps keep processing costs reasonable.",
      },
      {
        question: "How are taxes handled on my profits?",
        answer: "We provide detailed profit/loss reports for tax purposes, but you're responsible for reporting and paying taxes according to your local regulations.",
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





export const countries = [
  { code: "US", name: "United States", phoneCode: "+1", flag: AllCountry.US },
  { code: "GB", name: "United Kingdom", phoneCode: "+44", flag: AllCountry.GB },
  { code: "CA", name: "Canada", phoneCode: "+1", flag: AllCountry.CA },
  { code: "AU", name: "Australia", phoneCode: "+61", flag: AllCountry.AU },
  { code: "DE", name: "Germany", phoneCode: "+49", flag: AllCountry.DE },
  { code: "FR", name: "France", phoneCode: "+33", flag: AllCountry.FR },
  { code: "JP", name: "Japan", phoneCode: "+81", flag: AllCountry.JP },
  { code: "IN", name: "India", phoneCode: "+91", flag: AllCountry.IN },
  { code: "BR", name: "Brazil", phoneCode: "+55", flag: AllCountry.BR },
  { code: "IT", name: "Italy", phoneCode: "+39", flag: AllCountry.IT },
  { code: "ES", name: "Spain", phoneCode: "+34", flag: AllCountry.ES },
  { code: "NL", name: "Netherlands", phoneCode: "+31", flag: AllCountry.NL },
  { code: "SE", name: "Sweden", phoneCode: "+46", flag: AllCountry.SE },
  { code: "NO", name: "Norway", phoneCode: "+47", flag: AllCountry.NO },
  { code: "DK", name: "Denmark", phoneCode: "+45", flag: AllCountry.DK },
  { code: "FI", name: "Finland", phoneCode: "+358", flag: AllCountry.FI },
  { code: "CH", name: "Switzerland", phoneCode: "+41", flag: AllCountry.CH },
  { code: "AT", name: "Austria", phoneCode: "+43", flag: AllCountry.AT },
  { code: "BE", name: "Belgium", phoneCode: "+32", flag: AllCountry.BE },
  { code: "IE", name: "Ireland", phoneCode: "+353", flag: AllCountry.IE },
];