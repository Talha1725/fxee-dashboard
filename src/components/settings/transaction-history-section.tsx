"use client";
import { RecentClockIcon } from "../ui/icon";
import { Text14, Text18 } from "../ui/typography";
import { ColumnDef } from "@tanstack/react-table";
import { IconBitcoin, IconTether, IconUsdCoin } from "../ui/icon";
import { DataTable, createSortableHeader } from "../ui/data-table";

// Sample wallet data
const sampleWallets = [
  {
    id: 1,
    walletName: "Trading Wallet",
    walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlhkmvpxslfq4jq",
    currency: "Bitcoin (BTC)",
    currencySymbol: "BTC",
    network: "Success"
  },
  {
    id: 2,
    walletName: "Trading Wallet",
    walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlhkmvpxslfq4jq",
    currency: "Tether (USDT)",
    currencySymbol: "USDT",
    network: "Success"
  },
  {
    id: 3,
    walletName: "Trading Wallet",
    walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlhkmvpxslfq4jq",
    currency: "Bitcoin (BTC)",
    currencySymbol: "BTC",
    network: "Success"
  }
];

type Wallet = typeof sampleWallets[0];

// Function to get coin icon
const getCoinIcon = (symbol: string) => {
  switch (symbol) {
    case "BTC":
      return <IconBitcoin className="w-6 h-6" />;
    case "USDT":
      return <IconTether className="w-6 h-6" />;
    case "USDC":
      return <IconUsdCoin className="w-6 h-6" />;
    default:
      return <div className="w-6 h-6 bg-gray-400 rounded-full" />;
  }
};

export default function TransactionHistorySection() {
  const columns: ColumnDef<Wallet>[] = [
    {
      ...createSortableHeader("Wallet Name", "walletName"),
      cell: ({ row }) => <div className="text-sm font-satoshi">{row.getValue("walletName")}</div>,
    },
    {
      ...createSortableHeader("Wallet Address", "walletAddress"),
      cell: ({ row }) => {
        const address = row.getValue("walletAddress") as string;
        return <div className="text-sm font-satoshi tracking-wider">{address.substring(0, 20)}...</div>;
      },
    },
    {
      ...createSortableHeader("Currency", "currency"),
      cell: ({ row }) => {
        const currency = row.getValue("currency") as string;
        const symbol = row.original.currencySymbol;
        return (
          <div className="flex items-center gap-2">
            {getCoinIcon(symbol)}
            <span className="text-sm font-satoshi">{currency}</span>
          </div>
        );
      },
    },
    {
      ...createSortableHeader("Network", "network"),
      cell: ({ row }) => {
        const network = row.getValue("network") as string;
        return (
          <span className={`px-2 py-1 rounded-full font-medium font-satoshi dark:text-white/80`}>
            {network}
          </span>
        );
      },
    },
  ];

  return (
    <div className="mt-5">
      <div className="flex gap-2 items-center">
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-black/30 dark:border-white/50">
          <RecentClockIcon />
        </div>
        <div>
          <Text18 className="font-satoshi">Wallet Management</Text18>
          <Text14 className="dark:opacity-70 mt-1 font-satoshi">
            Manage your connected wallets and addresses.
          </Text14>
        </div>
      </div>

      {/* Wallet Table */}
      <div className="mt-5">
        <DataTable 
          columns={columns} 
          data={sampleWallets} 
          emptyMessage="No wallets found."
        />
      </div>
    </div>
  );
}
