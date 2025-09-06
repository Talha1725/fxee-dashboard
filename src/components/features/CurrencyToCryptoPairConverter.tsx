"use client";

import React from "react";

import { TokenIcon } from "@web3icons/react";
import { US } from "country-flag-icons/react/1x1";
import { CRYPTO_MAP } from "@/lib/constants";

export default function CurrencyToCryptoPairConverter({
  currency,
  size = 16,
}: {
  currency: string;
  size?: number;
}) {
  const subSize = (size * 6.5) / 10;
  
  if (!currency.includes("/")) {
    const cryptoSymbol = CRYPTO_MAP[currency.toLowerCase()] || currency.toLowerCase();
    
    return (
      <div
        className="relative shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <TokenIcon
          symbol={cryptoSymbol}
          size={subSize}
          variant="background"
          className="rounded-full"
        />
      </div>
    );
  }
  
  const tokens = currency.split("/").map((c) => c.toLowerCase());

  if (tokens[1] === "usd") {
    return (
      <div
        className="relative shrink-0"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <US
          style={{ width: `${subSize}px`, height: `${subSize}px` }}
          className="absolute top-0 left-0 rounded-full"
        />
        <TokenIcon
          symbol={tokens[0]}
          size={subSize}
          variant="background"
          className={`absolute bottom-0 right-0 rounded-full`}
        />
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <TokenIcon
        symbol={tokens[1]}
        size={subSize}
        variant="background"
        className={`absolute top-0 left-0 rounded-full`}
      />
      <TokenIcon
        symbol={tokens[0]}
        size={subSize}
        variant="background"
        className={`absolute bottom-0 right-0 rounded-full`}
      />
    </div>
  );
}
