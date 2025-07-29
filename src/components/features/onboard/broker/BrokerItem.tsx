import React from "react";

import { BrokerType } from "@/types/common";
import { IconRadio, IconRadioSelected } from "@/components/ui/icon";

type BrokerItemProps = {
  exchange: {
    id: BrokerType;
    name: string;
    icon: React.ReactNode;
  };
  selectedExchange: BrokerType;
  setSelectedExchange: (id: BrokerType) => void;
};

export default function BrokerItem({
  exchange,
  selectedExchange,
  setSelectedExchange,
}: BrokerItemProps) {
  return (
    <div className="flex justify-between items-center self-stretch">
      <div className="flex items-center gap-2.5">
        {exchange.icon}
        <p className="text-white text-[16px] font-regular font-normal">
          {exchange.name}
        </p>
      </div>
      <div
        onClick={() => setSelectedExchange(exchange.id)}
        className="cursor-pointer"
      >
        {selectedExchange === exchange.id ? (
          <IconRadioSelected width={20} height={20} />
        ) : (
          <IconRadio width={20} height={20} />
        )}
      </div>
    </div>
  );
}
