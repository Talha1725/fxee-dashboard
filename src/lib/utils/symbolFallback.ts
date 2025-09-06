// Symbol fallback mapping for crypto symbols that don't have data
export const CRYPTO_SYMBOL_FALLBACKS: Record<string, string[]> = {
  'DOGECOIN': ['DOGEUSD', 'DOGE/USD', 'DOGEUSDT'],
  'BITCOIN': ['BTCUSD', 'BTC/USD', 'BTCUSDT', 'XBTUSD'],
  'ETHEREUM': ['ETHUSD', 'ETH/USD', 'ETHUSDT'],
  'RIPPLE': ['XRPUSD', 'XRP/USD', 'XRPUSDT'],
  'SOLANA': ['SOLUSD', 'SOL/USD', 'SOLUSDT'],
  'BNB': ['BNBUSD', 'BNB/USD', 'BNBUSDT'],
  'LITECOIN': ['LTCUSD', 'LTC/USD', 'LTCUSDT'],
  'CARDANO': ['ADAUSD', 'ADA/USD', 'ADAUSDT'],
  'POLKADOT': ['DOTUSD', 'DOT/USD', 'DOTUSDT'],
  'CHAINLINK': ['LINKUSD', 'LINK/USD', 'LINKUSDT'],
  'UNISWAP': ['UNIUSD', 'UNI/USD', 'UNIUSDT'],
  'AVALANCHE': ['AVAXUSD', 'AVAX/USD', 'AVAXUSDT'],
  'POLYGON': ['MATICUSD', 'MATIC/USD', 'MATICUSDT'],
  'COSMOS': ['ATOMUSD', 'ATOM/USD', 'ATOMUSDT'],
  'ALGORAND': ['ALGOUSD', 'ALGO/USD', 'ALGOUSDT'],
  'TEZOS': ['XTZUSD', 'XTZ/USD', 'XTZUSDT'],
  'STELLAR': ['XLMUSD', 'XLM/USD', 'XLMUSDT'],
  'MONERO': ['XMRUSD', 'XMR/USD', 'XMRUSDT'],
  'DASH': ['DASHUSD', 'DASH/USD', 'DASHUSDT'],
  'ZCASH': ['ZECUSD', 'ZEC/USD', 'ZECUSDT'],
};

// Symbol fallback mapping for commodity symbols that don't have data
export const COMMODITY_SYMBOL_FALLBACKS: Record<string, string[]> = {
  'BRENT': ['UKOIL', 'BRENT', 'BZ=F', 'BZ1!'],
  'CRUDE': ['WTI', 'CRUDE', 'CL=F', 'CL1!', 'USOIL'],
  'GOLDIND': ['GOLD', 'XAUUSD', 'GC=F', 'GC1!', 'GOLD/USD'],
  'GOLD': ['XAUUSD', 'GC=F', 'GC1!', 'GOLD/USD'],
  'SILVER': ['XAGUSD', 'SI=F', 'SI1!', 'SILVER/USD'],
  'OIL': ['WTI', 'CRUDE', 'CL=F', 'CL1!', 'USOIL'],
  'WTI': ['WTI', 'CRUDE', 'CL=F', 'CL1!', 'USOIL'],
  'UKOIL': ['BRENT', 'BZ=F', 'BZ1!'],
  'NATGAS': ['NG=F', 'NG1!', 'NATURALGAS'],
  'COPPER': ['HG=F', 'HG1!', 'COPPER'],
  'PLATINUM': ['PL=F', 'PL1!', 'PLATINUM'],
  'PALLADIUM': ['PA=F', 'PA1!', 'PALLADIUM'],
};

// Get the best fallback symbol for a given crypto symbol
export const getCryptoFallbackSymbol = (symbol: string): string => {
  const upperSymbol = symbol.toUpperCase();
  const fallbacks = CRYPTO_SYMBOL_FALLBACKS[upperSymbol];
  
  if (fallbacks && fallbacks.length > 0) {
    // Return the first fallback (most common trading pair)
    return fallbacks[0];
  }
  
  // If no specific fallback, try to create a USD pair
  if (upperSymbol.includes('COIN') || upperSymbol.includes('TOKEN')) {
    const baseSymbol = upperSymbol.replace('COIN', '').replace('TOKEN', '');
    return `${baseSymbol}USD`;
  }
  
  // Default fallback - add USD suffix
  return `${upperSymbol}USD`;
};

// Get all possible fallback symbols for a given crypto symbol
export const getAllCryptoFallbacks = (symbol: string): string[] => {
  const upperSymbol = symbol.toUpperCase();
  return CRYPTO_SYMBOL_FALLBACKS[upperSymbol] || [`${upperSymbol}USD`];
};

// Get the best fallback symbol for a given commodity symbol
export const getCommodityFallbackSymbol = (symbol: string): string => {
  const upperSymbol = symbol.toUpperCase();
  const fallbacks = COMMODITY_SYMBOL_FALLBACKS[upperSymbol];
  
  if (fallbacks && fallbacks.length > 0) {
    // Return the first fallback (most common trading symbol)
    return fallbacks[0];
  }
  
  // If no specific fallback, try to create a common commodity symbol
  if (upperSymbol.includes('GOLD')) {
    return 'XAUUSD';
  }
  if (upperSymbol.includes('SILVER')) {
    return 'XAGUSD';
  }
  if (upperSymbol.includes('OIL') || upperSymbol.includes('CRUDE')) {
    return 'WTI';
  }
  if (upperSymbol.includes('BRENT')) {
    return 'UKOIL';
  }
  
  // Default fallback - return as is
  return upperSymbol;
};

// Get all possible fallback symbols for a given commodity symbol
export const getAllCommodityFallbacks = (symbol: string): string[] => {
  const upperSymbol = symbol.toUpperCase();
  return COMMODITY_SYMBOL_FALLBACKS[upperSymbol] || [upperSymbol];
};

// Check if a symbol is a crypto symbol that might need fallback
export const isCryptoSymbol = (symbol: string): boolean => {
  const upperSymbol = symbol.toUpperCase();
  return Object.keys(CRYPTO_SYMBOL_FALLBACKS).includes(upperSymbol) ||
         upperSymbol.includes('COIN') ||
         upperSymbol.includes('TOKEN') ||
         ['BTC', 'ETH', 'DOGE', 'XRP', 'SOL', 'BNB', 'LTC', 'ADA', 'DOT', 'LINK', 'UNI', 'AVAX', 'MATIC', 'ATOM', 'ALGO', 'XTZ', 'XLM', 'XMR', 'DASH', 'ZEC'].includes(upperSymbol);
};

// Check if a symbol is a commodity symbol that might need fallback
export const isCommoditySymbol = (symbol: string): boolean => {
  const upperSymbol = symbol.toUpperCase();
  return Object.keys(COMMODITY_SYMBOL_FALLBACKS).includes(upperSymbol) ||
         upperSymbol.includes('GOLD') ||
         upperSymbol.includes('SILVER') ||
         upperSymbol.includes('OIL') ||
         upperSymbol.includes('CRUDE') ||
         upperSymbol.includes('BRENT') ||
         ['XAU', 'XAG', 'WTI', 'UKOIL', 'NG', 'HG', 'PL', 'PA'].includes(upperSymbol);
};

// Get the best chart symbol for TradingView widget
export const getChartSymbol = (symbol: string, symbolType: string): string => {
  // For crypto symbols, try fallback first
  if (symbolType === 'Crypto' && isCryptoSymbol(symbol)) {
    return getCryptoFallbackSymbol(symbol);
  }
  
  // For commodity symbols, try fallback first
  if (symbolType === 'Commodities' && isCommoditySymbol(symbol)) {
    return getCommodityFallbackSymbol(symbol);
  }
  
  // For other symbols, return as is
  return symbol;
};
