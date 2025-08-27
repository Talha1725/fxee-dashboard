"use client";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Text16, Text20 } from "../ui/typography";
import LinkedCard from "./linked-card";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function LinkBrokerAccount() {
  const { theme } = useTheme();
  const handleDisconnect = () => {
    // Handle disconnect logic here
    console.log("Disconnecting broker account");
  };

  return (
    <div className="w-full md:h-[81vh] relative">
      <Text20 className="font-satoshi">Linked Broker Account</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Manage integration with broker/exchange.
      </Text16>

      <div className="mt-5 h-[40vh] md:h-[72vh] p-4 self-stretch rounded-[16px] border border-black/5 dark:border-white/5 bg-gradient-to-b from-[#00000007] to-[#00000007]  dark:backdrop-blur-[7px] overflow-y-auto scrollbar-hide scroll-smooth">
        <div className="space-y-3">
          <LinkedCard
            exchangeName="Binance"
            username="binance_user_92817"
            balanceSyncTime="Last updated at 10:42 AM"
            isConnected={true}
            onDisconnect={handleDisconnect}
          />
        </div>
        <Button
          variant={theme === "dark" ? "white" : "black"}
          className="h-[40px] mt-3 w-full flex items-center justify-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />{" "}
          <p className="font-satoshi-medium">Add Another Account</p>
        </Button>
      </div>
    </div>
  );
}
