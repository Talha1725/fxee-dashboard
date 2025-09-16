// Translation types for type safety
export type Locale = "en-us" | "en-uk" | "es" | "fr" | "de" | "it" | "pt" | "ru" | "zh";

export interface TranslationKeys {
  // Home page translations
  "home": string;
  "dashboard": string;
  "login": string;
  "signup": string;
  "logout": string;
  "language": string;
  "loading": string;
  "error": string;
  "success": string;
  "cancel": string;
  "save": string;
  "edit": string;
  "delete": string;
  "close": string;
  "back": string;
  "next": string;
  "previous": string;
  "submit": string;
  "continue": string;
  "get_started": string;
  "learn_more": string;
  "contact_us": string;
  "support": string;
  "how_it_works": string;
  "challenge_support": string;
  "community": string;
  "about_us": string;
  "hero_title": string;
  "hero_subtitle": string;
  "start_trading": string;
  "view_pricing": string;
  "see_ai_action": string;
  "explore_platform": string;
  "trade_smarter": string;
  "join_fxee": string;
  "quick_links": string;
  "legal_links": string;
  "contact_info": string;
  "social_links": string;
  "disclaimer": string;
  "prop_firm_challenges": string;
  "success_stories": string;
  "terms_conditions": string;
  "privacy_policy": string;
  
  // YTS Section
  "yts_title": string;
  "yts_description": string;
  
  // How It Works Section
  "hiw_step1_title": string;
  "hiw_step1_description": string;
  "hiw_step1_button": string;
  "hiw_step2_title": string;
  "hiw_step2_description": string;
  "hiw_step2_button": string;
  "hiw_step3_title": string;
  "hiw_step3_description": string;
  "hiw_step3_button": string;
  
  // ATC Section
  "atc_title": string;
  "atc_description": string;
  
  // Why FXEE Section
  "why_fxee_title": string;
  "why_fxee_description": string;
  "why_fxee_feature1_title": string;
  "why_fxee_feature1_description": string;
  "why_fxee_feature2_title": string;
  "why_fxee_feature2_description": string;
  "why_fxee_feature3_title": string;
  "why_fxee_feature3_description": string;
  "why_fxee_feature4_title": string;
  "why_fxee_feature4_description": string;
  
  // Pricing Section
  "pricing_title": string;
  "pricing_description": string;
  
  // Reviews Section
  "reviews_title": string;
  "reviews_description": string;
  
  // Claim Section
  "claim_title": string;
  "claim_description": string;
  "claim_button": string;
  
  // Dashboard Components
  "start_ai_trading": string;
  "portfolio": string;
  "trades": string;
  "total_balance": string;
  "profit_loss": string;
  "win_rate": string;
  "total_trades": string;
  "active_trades": string;
  "closed_trades": string;
  "ai_recommendations": string;
  "market_news": string;
  "trading_insights": string;
  "total_portfolio": string;
  "ai_recommended_trades": string;
  "analyzing_recommendation": string;
  "analysis": string;
  "left": string;
  "news_and_market_impact": string;
  "search": string;
  "top_picks": string;
  "consistency_score": string;
  "symbols": string;
  "entry": string;
  "profit_percent": string;
  "confidence": string;
  "forex": string;
  "crypto": string;
  "minutes_ago": string;
  "min_read": string;
  "australian_dollar_strengthens": string;
  "upgrade": string;
  "long": string;
  "short": string;
  "skip": string;
  "restore": string;
  "risk_reward_ratio": string;
  "potential_profit_vs_loss": string;
  "gain_ratio_per_dollar_risked": string;
  "ai_confidence_level": string;
  "algorithms_confidence_in": string;
  "this_trading_recommendation": string;
  "trade_direction": string;
  "long_buy_expecting_price_rise": string;
  "short_sell_expecting_price_fall": string;
  "profit_tier": string;
  "expected_profit_potential_level": string;
  "target": string;
  "stop_loss": string;
  "risk_level": string;
  "profit": string;
  "great_profit": string;
  "high_profit": string;
  "medium_profit": string;
  "low_profit": string;
  "very_low_profit": string;
  "standard": string;
  "demo_trade_recommendation": string;
  "bearish_outlook_on_gold": string;
  "just_now": string;
  "minutes_ago_short": string;
  "hours_ago": string;
  "days_ago": string;
  "today": string;
  "virtual_account": string;
  "demo_account": string;
  "entry_price": string;
  "confidence_level": string;
  "profit_potential": string;
  "risk_reward": string;
  "take_profit": string;
  "timeframe": string;
  "valid_until": string;
  "created": string;
  "ai_insight": string;
  "close_trade": string;
  "open_trade": string;
  "position_direction": string;
  "profitable": string;
  "in_loss": string;
  "signal": string;
  "top": string;
  "latest": string;
  "ripple": string;
  "bitcoin": string;
  "ethereum": string;
  "usd": string;
  "eur": string;
  "gbp": string;
  "jpy": string;
  "cad": string;
  "aud": string;
  "chf": string;
  "try": string;
  "zar": string;
  "nzd": string;
  "gold": string;
  "silver": string;
  "oil": string;
  "average": string;
  "average_per_trade": string;
  "average_latency": string;
  "moving_average": string;
  "exponential_moving_average": string;
  "moving_average_convergence_divergence": string;
  "average_true_range": string;
  "moving_averages": string;
  "ai_engine": string;
  "copy_trading": string;
  "performance_history": string;
  "tradingview": string;
  "settings": string;
  "wallet": string;
  "usdtry": string;
  "usdcad": string;
  "usdjpy": string;
  "usdchf": string;
  "eth": string;
  "audusd": string;
  "eurusd": string;
  "gbpusd": string;
  "nzdusd": string;
  "usdzar": string;
  "brent": string;
  "crude": string;
  "goldind": string;
  "xagusd": string;
  "xauusd": string;
  "bnb": string;
  "dogecoin": string;
  "solana": string;
  "usdgbp": string;
  "usdaud": string;
  "usdeur": string;
  "broker": string;
  "virtual": string;
  "dark": string;
  "light": string;
  "dark_mode": string;
  "light_mode": string;
}

// RTL support (none of the current languages are RTL)
export const RTL_LOCALES: Locale[] = [];

// Default locale
export const DEFAULT_LOCALE: Locale = "en-us";

// Available locales matching the LANGUAGES constant
export const AVAILABLE_LOCALES: Locale[] = ["en-us", "en-uk", "es", "fr", "de", "it", "pt", "ru", "zh"];

// Translation key type for type safety
export type TranslationKey = keyof TranslationKeys;
