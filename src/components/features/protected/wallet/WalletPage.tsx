'use client'

import React, { useState } from 'react'
import { Text14, Text16, Text22, Text24 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/contexts/ThemeContext'
import NavbarAccountSwitch from '../navbar/NavbarAccountSwitch'
import { IconWallet, IconClock, IconUK } from '@/components/ui/icon'
import CommonSelect from '@/components/ui/common-select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PortfolioChart from '../home/PortfolioChart'

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
        'font-satoshi',
        isHighlighted ? 'font-satoshi-medium' : '',
        'dark:text-white/80 text-black/80'
      )}
    >
      {label}
    </Text16>
    <Text16
      className={cn(
        isHighlighted ? 'font-satoshi-bold text-[20px]' : 'font-satoshi-medium',
        'dark:text-white text-black'
      )}
    >
      {value}
    </Text16>
  </div>
)


// Deposit Card Component
const DepositCard = () => {
  const { theme } = useTheme()
  const [depositType, setDepositType] = useState<'crypto' | 'card'>('crypto')

  return (
    <div className="flex flex-col" style={{ gap: '30px' }}>
      {/* Section 1: Deposit Type Buttons */}
      <div className="flex gap-3">
        <NavbarAccountSwitch
          items={[
            { label: "Crypto Deposit", value: "crypto" },
            { label: "Card Deposit", value: "card" },
          ]}
          defaultValue="crypto"
          onValueChange={(val) => {
            setDepositType(val as 'crypto' | 'card')
          }}
        />

      </div>

      {/* Conditional Content Based on Deposit Type */}
      {depositType === 'crypto' ? (
        <>
          {/* Section 2: Deposit Amount Header */}
          <div className="flex justify-between items-center">
            <Text24 className="font-satoshi-bold dark:text-white text-black">
              Deposit Amount
            </Text24>
            <CommonSelect
              placeholder="Account: Sophia7353"
              defaultValue="sophia7353"
              height={42}
              options={[
                { value: "sophia7353", label: "Account: Sophia7353" },
                { value: "john1234", label: "Account: John1234" },
                { value: "alice5678", label: "Account: Alice5678" }
              ]}
              className="w-[201px] min-w-[201px] max-w-[201px] p-[10px] rounded-[10px] border text-sm"
            />
          </div>

          {/* Section 3: Trading Account and QR Code */}
          <div className="flex flex-col" style={{ gap: '30px' }}>
            <div className="flex flex-col gap-2">
              <Text14 className="font-satoshi-medium dark:text-white/70 text-black/70">
                Select Trading Account
              </Text14>
                             <CommonSelect
                 placeholder="154898012"
                 defaultValue="154898012"
                 height={72}
                 options={[
                   { 
                     value: "154898012", 
                     label: "154898012" 
                   },
                   { 
                     value: "154898013", 
                     label: "154898013" 
                   },
                   { 
                     value: "154898014", 
                     label: "154898014" 
                   }
                 ]}
                 className="w-[407px] px-[14px] py-[10px] rounded-lg border min-w-[407px] max-w-[407px]"
                 renderOption={(option) => (
                   <div className="flex items-center justify-between w-full gap-2.5">
                     <div className="flex items-center gap-2.5">
                       <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
                       <Text16 className="font-satoshi-medium dark:text-white text-black">
                         {option.label}
                       </Text16>
                     </div>
                     <div className="text-right">
                       <Text16 className="font-satoshi-bold dark:text-white text-black">
                         $14,480.24
                       </Text16>
                       <Text14 className="font-satoshi dark:text-white/50 text-black/50">
                         Current Balance
                       </Text14>
                     </div>
                   </div>
                 )}
               />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div
                className={cn(
                  'flex items-center justify-center rounded-[11.58px] border-[1.16px]',
                  'dark:bg-white/5 dark:border-white/10 bg-gray-100 border-gray-300',
                  'w-[220px] h-[220px]'
                )}
              >
                <Text16 className="font-satoshi-medium dark:text-white/30 text-black/30">
                  QR Code
                </Text16>
              </div>
              <Text14 className="font-satoshi text-center dark:text-white/70 text-black/70 max-w-[220px]">
                Scan QR Code for wallet address
              </Text14>
            </div>
          </div>

          {/* Section 4: Form Fields and Button */}
          <div className="flex flex-col" style={{ gap: '30px' }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Text16 className="font-satoshi-medium dark:text-white text-black">
                  Crypto Type
                </Text16>
                <span className="text-red-500">*</span>
              </div>
              <CommonSelect
                placeholder="Select crypto currency"
                height={45}
                options={[
                  { value: "USDT", label: "USDT - Tether" },
                  { value: "BTC", label: "BTC - Bitcoin" },
                  { value: "ETH", label: "ETH - Ethereum" }
                ]}
                className="w-full px-[14px] py-[10px] rounded-lg border min-w-0 max-w-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Text16 className="font-satoshi-medium dark:text-white text-black">
                  Enter Amount
                </Text16>
                <span className="text-red-500">*</span>
              </div>
              <div className="flex justify-between items-center w-full h-[45px] rounded-lg border px-[14px] py-[10px]" 
                   style={{
                     backgroundColor: theme === 'dark' 
                       ? 'rgba(255, 255, 255, 0.02)' 
                       : 'rgba(0, 0, 0, 0.02)',
                     background: theme === 'dark'
                       ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)'
                       : 'linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)',
                     borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                   }}>
                <input
                  type="text"
                  placeholder="$ 0.00"
                  className="flex-1 bg-transparent outline-none text-sm font-satoshi-medium dark:text-white text-black dark:placeholder-white/60 placeholder-black/60 min-w-0"
                />
                <div className="flex items-center gap-2 px-2 py-1 flex-shrink-0">
                  <Select defaultValue="uk">
                    <SelectTrigger className="w-auto h-auto border-0 bg-transparent p-0 focus:ring-0 focus:ring-offset-0 shadow-none">
                      <div className="flex items-center gap-1">
                        <IconUK width={16} height={16} />
                        <span className="text-sm font-satoshi-medium dark:text-white text-black">USD</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent className="min-w-[60px] dark:bg-black bg-white">
                      <SelectGroup>
                        <SelectItem value="uk">
                          <div className="flex items-center gap-2">
                            <IconUK width={16} height={16} />
                            <span className="text-sm">USD</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button variant={theme === "dark" ? "white" : "black"} className="py-2.5 px-[25px] transition-all cursor-pointer w-full h-[45px]">
              <Text14 className="text-white dark:text-black font-satoshi-medium">Deposit Amount</Text14>
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <IconWallet className="w-16 h-16 mb-4 text-gray-400" />
          <Text22 className="font-satoshi-bold dark:text-white text-black mb-2">
            Card Deposit
          </Text22>
          <Text16 className="text-gray-500 text-center">
            Card deposit functionality will be available soon
          </Text16>
        </div>
      )}
    </div>
  )
}

export default function WalletPage() {
  const { theme } = useTheme()
  const [activeWalletSection, setActiveWalletSection] = useState('deposit')

  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      {/* Wallet Section Switcher */}
      <div className="flex justify-between items-center">
    
        <NavbarAccountSwitch
          items={[
            { label: "Deposit", value: "deposit", icon: <IconWallet /> },
            { label: "Transaction History", value: "history", icon: <IconClock /> },
          ]}
          defaultValue="deposit"
          onValueChange={(val) => {
            setActiveWalletSection(val)
          }}
        />
      </div>

      {/* Main Content */}
      {activeWalletSection === 'deposit' ? (
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          {/* Left Side - Deposit Card */}
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

          {/* Right Side - Status and Transaction Summary */}
          <div className="flex flex-col gap-5 w-full lg:w-[394px] lg:flex-shrink-0">
            {/* Balance Status Card */}
            <div
              className={cn(
                'h-[268px] rounded-2xl border overflow-hidden',
                theme === 'dark'
                  ? 'bg-gradient-to-b from-white/[0.02] to-[#999999]/[0.01] border-white/[0.05]'
                  : 'bg-gradient-to-b from-black/[0.02] to-black/[0.01] border-black/[0.08]'
              )}
            >
              <div className="p-4 h-full">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Text14 className="font-satoshi-medium dark:text-white/70 text-black/70">
                        Current Balance
                      </Text14>
                      <div className="ml-auto">
                        <Select defaultValue="uk">
                          <SelectTrigger className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md w-auto h-auto border-0 focus:ring-0 focus:ring-offset-0">
                            <div className="flex items-center gap-2">
                              <IconUK width={16} height={16} />
                            </div>
                          </SelectTrigger>
                          <SelectContent className="min-w-[60px] dark:bg-black bg-white">
                            <SelectGroup>
                              <SelectItem value="uk">
                                <div className="flex items-center gap-2">
                                  <IconUK width={16} height={16} />
                                </div>
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <Text22 className="font-satoshi-bold dark:text-white text-black text-[32px]">
                        $14,480.24
                      </Text22>
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-500 rounded text-sm font-satoshi-medium">
                        +5%
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    {/* <WalletBalanceChart height={120} /> */}
                    <PortfolioChart height={300} />     
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Summary */}
            <div
              className={cn(
                'h-[352px] rounded-2xl border p-6',
                theme === 'dark'
                  ? 'bg-gradient-to-b from-white/[0.02] to-[#999999]/[0.01] border-white/[0.05]'
                  : 'bg-gradient-to-b from-black/[0.02] to-black/[0.01] border-black/[0.08]'
              )}
            >
              <div className="flex flex-col gap-[26px] w-full h-full">
                <Text22 className="font-satoshi-bold dark:text-white text-black">
                  Transaction Summary
                </Text22>
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
          </div>
        </div>
      ) : (
        <div className="w-full">{/* Transaction History View */}
          <div
            className={cn(
              'w-full rounded-2xl border p-6 min-h-[600px]',
              theme === 'dark'
                ? 'bg-gradient-to-b from-white/[0.02] to-[#999999]/[0.01] border-white/[0.05]'
                : 'bg-gradient-to-b from-black/[0.02] to-black/[0.01] border-black/[0.08]'
            )}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <IconClock className="w-16 h-16 mb-4 text-gray-400" />
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
