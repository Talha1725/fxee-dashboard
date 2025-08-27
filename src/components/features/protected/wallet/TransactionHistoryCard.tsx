'use client'

import React from 'react'
import { Text16, Text20 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/contexts/ThemeContext'
import { IconExchangeLine } from '@/components/ui/icon'

// Transaction Summary Card Component
const TransactionSummaryCard = ({
  account,
  wallet,
  cryptoType,
  amount,
  totalAmount,
  newBalance
}: {
  account: string
  wallet: string
  cryptoType: string
  amount: string
  totalAmount: string
  newBalance: string
}) => {
  return (
    <div className="flex flex-col gap-4">
      <TransactionRow label="Trading Account" value={account} />
      <TransactionRow label="Wallet Address" value={wallet} />
      <TransactionRow label="Crypto Type" value={cryptoType} />
      <TransactionRow label={`Amount (in ${cryptoType})`} value={`$${amount}`} />
      <div className="h-3"></div>
      <TransactionRow label="Total Amount (in USD)" value={`$${totalAmount}`} isHighlighted />
      <TransactionRow label="New Wallet Balance" value={`$${newBalance}`} isHighlighted />
    </div>
  )
}

const TransactionRow = ({
  label,
  value,
  isHighlighted = false
}: {
  label: string
  value: string
  isHighlighted?: boolean
}) => (
  <div className="flex justify-between items-center">
    <Text16
      className={cn(
        'font-satoshi-regular text-[16px] text-black/80 text-right',
        isHighlighted ? 'dark:text-white' : 'dark:text-white/80'
      )}
    >
      {label}
    </Text16>
    <Text16
      className={cn(
        'dark:text-white text-black text-right',
        isHighlighted ? 'font-satoshi-medium text-[20px]' : 'font-satoshi-regular text-[16px]'
      )}
    >
      {value}
    </Text16>
  </div>
)

export default function TransactionHistoryCard() {
  const { theme } = useTheme()

  return (
    <div
      className={cn(
        'h-[352px] rounded-2xl border p-6',
        theme === 'dark'
          ? 'bg-gradient-to-b from-white/[0.02] to-[#999999]/[0.01] border-white/[0.05]'
          : 'bg-gradient-to-b from-black/[0.02] to-black/[0.01] border-black/[0.08]'
      )}
    >
      <div className="flex flex-col gap-[26px] w-full h-full">
        <Text20 className="font-satoshi-medium dark:text-white text-black">
          Transaction Summary
        </Text20>
        <TransactionSummaryCard
          account="154898012"
          wallet="xhdjfhu83763bxbx61"
          cryptoType="USDT"
          amount="8,500"
          totalAmount="9,300"
          newBalance="23,780.24"
        />
      </div>
    </div>
  )
}
