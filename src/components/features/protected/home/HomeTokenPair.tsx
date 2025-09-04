import React from "react";
import * as Icons from "@/components/ui/icon";
import { Text20, Description16 } from "@/components/ui/typography";

export default function HomeTokenPair({
  token,
  pair,
  iconName,
}: {
  token: string;
  pair: string;
  iconName: string;
}) {
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
          {token}
        </Text20>
        <Description16 className="font-satoshi text-white">
          {pair}
        </Description16>
      </div>
    </div>
  );
}
