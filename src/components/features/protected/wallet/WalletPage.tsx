'use client'

import React, { useState } from 'react'
import { Text16, Text22 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/contexts/ThemeContext'
import NavbarAccountSwitch from '../navbar/NavbarAccountSwitch'
import { IconExchangeLine, IconExport } from '@/components/ui/icon'
import DepositCard from './DepositCard'
import CurrentBalanceCard from './CurrentBalanceCard'
import TransactionHistoryCard from './TransactionHistoryCard'

export default function WalletPage() {
  const { theme } = useTheme()
  const [activeWalletSection, setActiveWalletSection] = useState('deposit')

  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <div className="flex justify-between items-center">
        <NavbarAccountSwitch
          items={[
            { label: "Deposit", value: "deposit", icon: <IconExport /> },
            { label: "Transaction History", value: "history", icon: <IconExchangeLine /> },
          ]}
          defaultValue="deposit"
          fontSize={16}
          onValueChange={(val) => {
            setActiveWalletSection(val)
          }}
        />
      </div>

      {activeWalletSection === 'deposit' ? (
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div
            className={cn(
              'flex-1 w-full rounded-2xl border p-6',
              theme === 'dark'
                ? 'bg-gradient-to-b from-white/[0.02] to-[#999999]/[0.01] border-white/[0.05]'
                : 'bg-gradient-to-b from-black/[0.02] to-black/[0.01] border-black/[0.08]'
            )}
          >
            <DepositCard />
          </div>

          <div className="flex flex-col gap-5 w-full lg:w-[394px] lg:flex-shrink-0">
            <CurrentBalanceCard />

            <TransactionHistoryCard />
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div
            className={cn(
              'w-full rounded-2xl border p-6 min-h-[600px]',
              theme === 'dark'
                ? 'bg-gradient-to-b from-white/[0.02] to-[#999999]/[0.01] border-white/[0.05]'
                : 'bg-gradient-to-b from-black/[0.02] to-black/[0.01] border-black/[0.08]'
            )}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <IconExchangeLine className="w-16 h-16 mb-4 text-gray-400" />
              <Text22 className="font-satoshi-bold dark:text-white text-black mb-2">
                Transaction History
              </Text22>
              <Text16 className="text-gray-500 text-center">
                Your transaction history will appear here
              </Text16>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
