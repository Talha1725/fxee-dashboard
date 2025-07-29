"use client";

import React, { useState } from "react";

import BrokerItem from "@/components/features/onboard/broker/BrokerItem";
import { Separator } from "@/components/ui/separator";
import {
  IconBinance,
  IconBitget,
  IconBybit,
  IconCoinbase,
  IconOkx,
} from "@/components/ui/icon";
import { BrokerType } from "@/types/common";

export default function BrokerSelection() {
  const [selectedExchange, setSelectedExchange] =
    useState<BrokerType>("binance");

  const exchanges = [
    {
      id: "binance",
      name: "Binance",
      icon: <IconBinance width={22} height={22} />,
    },
    {
      id: "bitget",
      name: "Bitget",
      icon: <IconBitget width={22} height={22} />,
    },
    {
      id: "bybit",
      name: "Bybit",
      icon: <IconBybit width={22} height={22} />,
    },
    {
      id: "okx",
      name: "OKX",
      icon: <IconOkx width={22} height={22} />,
    },
    {
      id: "coinbase",
      name: "Coinbase",
      icon: <IconCoinbase width={22} height={22} />,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      {exchanges.map((exchange, index) => (
        <React.Fragment key={index}>
          <BrokerItem
            exchange={{
              ...exchange,
              id: exchange.id as BrokerType,
            }}
            selectedExchange={selectedExchange}
            setSelectedExchange={setSelectedExchange}
          />
          {index !== exchanges.length - 1 && (
            <Separator className="sm:w-[380px] w-[300px] bg-white/30" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
