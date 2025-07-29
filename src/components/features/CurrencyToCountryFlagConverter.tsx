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
  const countries = currency.split("/").map((c) => c.toUpperCase().slice(0, 2));
  const Country1 = AllCountry[countries[0] as keyof typeof AllCountry];
  const Country2 = AllCountry[countries[1] as keyof typeof AllCountry];

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
