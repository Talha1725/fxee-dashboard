"use client";

import React, { useState } from "react";

import CopyTradingAccount from "./CopyTradingAccount";

export default function CopyTradingAccounts() {
  const [selectedAccount, setSelectedAccount] = useState<string>("virtual");
  return (
    <div className="flex flex-col db:flex-row justify-center items-start gap-4.5 self-stretch">
      <CopyTradingAccount
        title="Virtual Trading Environment"
        price="$0"
        isSelected={selectedAccount === "virtual"}
        onSelect={() => setSelectedAccount("virtual")}
      />
      <CopyTradingAccount
        title="Broker Backed Simulation Account"
        price="$199/month"
        isSelected={selectedAccount === "broker"}
        onSelect={() => setSelectedAccount("broker")}
      />
    </div>
  );
}
