import React from "react";
import * as Icons from "@/components/ui/icon";
import { Text20, Description16 } from "@/components/ui/typography";
import { useLocalization } from "@/components/localization-provider";

export default function HomeTokenPair({
  token,
  pair,
  iconName,
}: {
  token: string;
  pair: string;
  iconName: string;
}) {
  const { t } = useLocalization();
  
  // Function to translate symbol names
  const translateSymbol = (symbol: string) => {
    const symbolLower = symbol.toLowerCase();
    
    // Map common symbols to translation keys
    const symbolMap: Record<string, string> = {
      'ripple': 'ripple',
      'bitcoin': 'bitcoin',
      'ethereum': 'ethereum',
      'eth': 'eth',
      'usd': 'usd',
      'eur': 'eur',
      'gbp': 'gbp',
      'jpy': 'jpy',
      'cad': 'cad',
      'aud': 'aud',
      'chf': 'chf',
      'try': 'try',
      'zar': 'zar',
      'nzd': 'nzd',
      'gold': 'gold',
      'silver': 'silver',
      'oil': 'oil',
      // Currency pairs
      'usdtry': 'usdtry',
      'usdcad': 'usdcad',
      'usdjpy': 'usdjpy',
      'usdchf': 'usdchf',
      'usdzar': 'usdzar',
      'usdgbp': 'usdgbp',
      'usdaud': 'usdaud',
      'usdeur': 'usdeur',
      'audusd': 'audusd',
      'eurusd': 'eurusd',
      'gbpusd': 'gbpusd',
      'nzdusd': 'nzdusd',
      'brent': 'brent',
      'crude': 'crude',
      'goldind': 'goldind',
      'xagusd': 'xagusd',
      'xauusd': 'xauusd',
      'bnb': 'bnb',
      'dogecoin': 'dogecoin',
      'solana': 'solana',
      'xrp': 'ripple',
      'btc': 'bitcoin',
    };
    
    const translationKey = symbolMap[symbolLower];
    return translationKey ? t(translationKey as any) : symbol;
  };

  // Function to translate currency pairs and symbols
  const translateCurrencyPair = (pair: string) => {
    const pairLower = pair.toLowerCase();
    
    // Map currency pairs and symbols to translation keys
    const pairMap: Record<string, string> = {
      // Forex pairs
      'usdtry': 'usdtry',
      'usdcad': 'usdcad',
      'usdjpy': 'usdjpy',
      'usdchf': 'usdchf',
      'usdzar': 'usdzar',
      'usdgbp': 'usdgbp',
      'usdaud': 'usdaud',
      'usdeur': 'usdeur',
      'audusd': 'audusd',
      'eurusd': 'eurusd',
      'gbpusd': 'gbpusd',
      'nzdusd': 'nzdusd',
      'usd/try': 'usdtry',
      'usd/cad': 'usdcad',
      'usd/jpy': 'usdjpy',
      'usd/chf': 'usdchf',
      'usd/zar': 'usdzar',
      'usd/gbp': 'usdgbp',
      'usd/aud': 'usdaud',
      'usd/eur': 'usdeur',
      'aud/usd': 'audusd',
      'eur/usd': 'eurusd',
      'gbp/usd': 'gbpusd',
      'nzd/usd': 'nzdusd',
      'usdcad/usd': 'usdcad',
      'usdtry/usd': 'usdtry',
      'usdjpy/usd': 'usdjpy',
      'usdchf/usd': 'usdchf',
      'brent/usd': 'brent',
      'gbpusd/usd': 'gbpusd',
      
      // Commodities
      'brent': 'brent',
      'crude': 'crude',
      'goldind': 'goldind',
      'xagusd': 'xagusd',
      'xauusd': 'xauusd',
      'silver/usd': 'xagusd',
      'gold/usd': 'xauusd',
      
      // Crypto
      'eth': 'eth',
      'ethereum': 'eth',
      'ripple': 'ripple',
      'bitcoin': 'bitcoin',
      'bnb': 'bnb',
      'dogecoin': 'dogecoin',
      'solana': 'solana',
      'ripple/usd': 'ripple',
      'bitcoin/usd': 'bitcoin',
      'ethereum/usd': 'eth',
      'bnb/usd': 'bnb',
      'dogecoin/usd': 'dogecoin',
      'solana/usd': 'solana',
      'xrp': 'ripple',
      'xrp/usd': 'ripple',
      'btc': 'bitcoin',
      'btc/usd': 'bitcoin',
      'eth/usd': 'eth',
    };
    
    const translationKey = pairMap[pairLower];
    return translationKey ? t(translationKey as any) : pair;
  };
  
  const translatedToken = translateSymbol(token);
  const translatedPair = translateCurrencyPair(pair) || pair.split('/').map(part => translateSymbol(part)).join('/');
  
  const Icon = (Icons as any)[iconName];

  return (
    <div className="flex items-center gap-2.5 z-1">
      {Icon ? (
        <Icon
          width={38}
          height={38}
          className="w-[26px] sm:w-[38px] h-[26px] sm:h-[38px]"
        />
      ) : (
        <div className="w-[26px] sm:w-[38px] h-[26px] sm:h-[38px] bg-gray-500/20 rounded-full" />
      )}
      <div className="flex flex-col justify-center items-start gap-0.5">
        <Text20 className="font-satoshi-medium text-white">
          {translatedToken}
        </Text20>
        <Description16 className="font-satoshi text-white">
          {translatedPair}
        </Description16>
      </div>
    </div>
  );
}
