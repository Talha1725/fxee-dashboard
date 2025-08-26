import * as AllCountry from "country-flag-icons/react/1x1";
import React from "react";

export default function CurrencyToCountryFlagConverter({
  currency,
  size = 16,
}: {
  currency: string;
  size?: number;
}) {
  const subSize = (size * 3) / 4;
  
  // Handle currency pairs (e.g., "EUR/USD") vs single currencies (e.g., "BITCOIN")
  const currencyParts = currency.split("/");
  const countries = currencyParts.map((c) => c.toUpperCase().slice(0, 2));
  
  const Country1 = AllCountry[countries[0] as keyof typeof AllCountry];
  const Country2 = currencyParts.length > 1 ? AllCountry[countries[1] as keyof typeof AllCountry] : null;

  // If it's a single currency or crypto, show just one flag or a placeholder
  if (!Country2 || !Country1) {
    // For crypto or single currencies, show a simple placeholder or single flag
    if (Country1) {
      return (
        <div
          className="relative shrink-0 rounded-full overflow-hidden"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <Country1
            className="w-full h-full"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        </div>
      );
    }
    
    // Fallback for cryptocurrencies or unknown currencies
    return (
      <div
        className="relative shrink-0 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
          {currency.slice(0, 2)}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Country2
        className="absolute top-0 left-0 rounded-full"
        style={{ width: `${subSize}px`, height: `${subSize}px` }}
      />
      <Country1
        className="absolute bottom-0 right-0 rounded-full"
        style={{ width: `${subSize}px`, height: `${subSize}px` }}
      />
    </div>
  );
}
