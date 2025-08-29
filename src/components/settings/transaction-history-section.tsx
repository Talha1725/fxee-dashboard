"use client";
import { RecentClockIcon } from "../ui/icon";
import { Text14, Text18 } from "../ui/typography";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, createSortableHeader } from "../ui/data-table";
import { useGetPaymentHistoryQuery } from "@/lib/redux/features/payments/paymentsApi";
import type { PaymentHistoryItem } from "@/types/api";
import { RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

// Helper function to format payment status for display
const getStatusDisplay = (status: string) => {
  const statusMap = {
    'pending': { text: 'Pending', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' },
    'paid': { text: 'Paid', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' },
    'failed': { text: 'Failed', color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' },
    'refunded': { text: 'Refunded', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' },
    'chargeback': { text: 'Chargeback', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' },
    'trial': { text: 'Trial', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400' }
  };
  return statusMap[status as keyof typeof statusMap] || { text: status, color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400' };
};

export default function TransactionHistorySection() {
  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 20
  });

  const { 
    data: paymentHistory, 
    isLoading, 
    error, 
    refetch 
  } = useGetPaymentHistoryQuery(queryParams);

  const columns: ColumnDef<PaymentHistoryItem>[] = [
    {
      ...createSortableHeader("Transaction ID", "transactionId"),
      cell: ({ row }) => (
        <div className="text-sm font-satoshi font-mono max-w-[150px] truncate">
          {row.getValue("transactionId")}
        </div>
      ),
    },
    {
      ...createSortableHeader("Product", "productName"),
      cell: ({ row }) => {
        const productName = row.original.productName;
        return (
          <div className="text-sm font-satoshi">
            {productName || 'N/A'}
          </div>
        );
      },
    },
    {
      ...createSortableHeader("Amount", "amount"),
      cell: ({ row }) => {
        const amount = row.getValue("amount") as string;
        const currency = row.original.currency;
        return (
          <div className="text-sm font-satoshi font-medium">
            ${amount} {currency}
          </div>
        );
      },
    },
    {
      ...createSortableHeader("Status", "status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const statusInfo = getStatusDisplay(status);
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
            {statusInfo.text}
          </span>
        );
      },
    },
    {
      ...createSortableHeader("Date", "createdAt"),
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as string;
        return (
          <div className="text-sm font-satoshi">
            {new Date(date).toLocaleDateString()}
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-5">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-black/30 dark:border-white/50">
            <RecentClockIcon />
          </div>
          <div>
            <Text18 className="font-satoshi">Payment History</Text18>
            <Text14 className="dark:opacity-70 mt-1 font-satoshi">
              View your subscription payments and transaction history.
            </Text14>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            onClick={() => refetch()}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-2 text-sm"
          >
            <RefreshCcw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="mt-5">
        {isLoading ? (
          <div className="text-center py-8">
            <Text14 className="dark:opacity-70">Loading payment history...</Text14>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <Text14 className="text-red-500">Failed to load payment history</Text14>
            <Text14 className="dark:opacity-70 mt-2">Please try refreshing the page</Text14>
          </div>
        ) : (
          <DataTable 
            columns={columns} 
            data={paymentHistory?.data?.payments || []} 
            emptyMessage="No payment history found."
          />
        )}
        
        {/* Pagination info */}
        {paymentHistory?.data?.pagination && (
          <div className="flex justify-between items-center mt-4">
            <Text14 className="dark:opacity-70">
              Showing {paymentHistory.data.payments.length} of {paymentHistory.data.pagination.total} payments
            </Text14>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                disabled={!paymentHistory.data.pagination.hasPreviousPage || isLoading}
                onClick={() => setQueryParams(prev => ({ ...prev, page: prev.page - 1 }))}
                className="px-3 py-2 text-sm"
              >
                Previous
              </Button>
              <Text14 className="flex items-center px-3">
                Page {paymentHistory.data.pagination.page} of {paymentHistory.data.pagination.totalPages}
              </Text14>
              <Button
                variant="ghost"
                disabled={!paymentHistory.data.pagination.hasNextPage || isLoading}
                onClick={() => setQueryParams(prev => ({ ...prev, page: prev.page + 1 }))}
                className="px-3 py-2 text-sm"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
