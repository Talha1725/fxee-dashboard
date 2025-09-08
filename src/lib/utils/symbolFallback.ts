// Symbol fallback mappings
const CRYPTO_FALLBACKS: Record<string, string[]> = {
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

const COMMODITY_FALLBACKS: Record<string, string[]> = {
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

// Common crypto symbols for quick lookup
const CRYPTO_SYMBOLS = new Set(['BTC', 'ETH', 'DOGE', 'XRP', 'SOL', 'BNB', 'LTC', 'ADA', 'DOT', 'LINK', 'UNI', 'AVAX', 'MATIC', 'ATOM', 'ALGO', 'XTZ', 'XLM', 'XMR', 'DASH', 'ZEC']);

// Common commodity symbols for quick lookup
const COMMODITY_SYMBOLS = new Set(['XAU', 'XAG', 'WTI', 'UKOIL', 'NG', 'HG', 'PL', 'PA']);

// Generic fallback getter
const getFallback = (symbol: string, fallbackMap: Record<string, string[]>, defaultGenerator: (s: string) => string): string => {
  const upperSymbol = symbol.toUpperCase();
  const fallbacks = fallbackMap[upperSymbol];
  return fallbacks?.[0] || defaultGenerator(upperSymbol);
};

// Crypto fallback logic
const getCryptoDefault = (symbol: string): string => {
  if (symbol.includes('COIN') || symbol.includes('TOKEN')) {
    return `${symbol.replace(/COIN|TOKEN/g, '')}USD`;
  }
  return `${symbol}USD`;
};

// Commodity fallback logic
const getCommodityDefault = (symbol: string): string => {
  if (symbol.includes('GOLD')) return 'XAUUSD';
  if (symbol.includes('SILVER')) return 'XAGUSD';
  if (symbol.includes('OIL') || symbol.includes('CRUDE')) return 'WTI';
  if (symbol.includes('BRENT')) return 'UKOIL';
  return symbol;
};

// Optimized symbol type checkers
export const isCryptoSymbol = (symbol: string): boolean => {
  const upperSymbol = symbol.toUpperCase();
  return CRYPTO_FALLBACKS[upperSymbol] !== undefined ||
         upperSymbol.includes('COIN') ||
         upperSymbol.includes('TOKEN') ||
         CRYPTO_SYMBOLS.has(upperSymbol);
};

export const isCommoditySymbol = (symbol: string): boolean => {
  const upperSymbol = symbol.toUpperCase();
  return COMMODITY_FALLBACKS[upperSymbol] !== undefined ||
         upperSymbol.includes('GOLD') ||
         upperSymbol.includes('SILVER') ||
         upperSymbol.includes('OIL') ||
         upperSymbol.includes('CRUDE') ||
         upperSymbol.includes('BRENT') ||
         COMMODITY_SYMBOLS.has(upperSymbol);
};

// Main export functions
export const getCryptoFallbackSymbol = (symbol: string): string => 
  getFallback(symbol, CRYPTO_FALLBACKS, getCryptoDefault);

export const getCommodityFallbackSymbol = (symbol: string): string => 
  getFallback(symbol, COMMODITY_FALLBACKS, getCommodityDefault);

export const getAllCryptoFallbacks = (symbol: string): string[] => 
  CRYPTO_FALLBACKS[symbol.toUpperCase()] || [`${symbol.toUpperCase()}USD`];

export const getAllCommodityFallbacks = (symbol: string): string[] => 
  COMMODITY_FALLBACKS[symbol.toUpperCase()] || [symbol.toUpperCase()];

export const getChartSymbol = (symbol: string, symbolType: string): string => {
  if (symbolType === 'Crypto' && isCryptoSymbol(symbol)) {
    return getCryptoFallbackSymbol(symbol);
  }
  if (symbolType === 'Commodities' && isCommoditySymbol(symbol)) {
    return getCommodityFallbackSymbol(symbol);
  }
  return symbol;
};
