'use client'

import React, { useState } from 'react'
import { Text14, Text16, Text18, Text20, Text22 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/contexts/ThemeContext'
import NavbarAccountSwitch from '../navbar/NavbarAccountSwitch'
import { IconWallet, IconUK } from '@/components/ui/icon'
import CommonSelect from '@/components/ui/common-select'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'

export default function DepositCard() {
  const { theme } = useTheme()
  const [depositType, setDepositType] = useState<'crypto' | 'card'>('crypto')

  return (
    <div className="flex flex-col" style={{ gap: '30px' }}>
      <div className="flex gap-3">
        <NavbarAccountSwitch
          items={[
            { label: "Crypto Deposit", value: "crypto" },
            { label: "Card Deposit", value: "card" },
          ]}
          defaultValue="crypto"
          fontSize={14}
          onValueChange={(val) => {
            setDepositType(val as 'crypto' | 'card')
          }}
        />
      </div>

      {depositType === 'crypto' ? (
        <>
          <div className="flex justify-between items-center">
            <Text20 className="font-satoshi-medium dark:text-white text-black">
              Deposit Amount
            </Text20>
            <CommonSelect
              placeholder="Account: Sophia7353"
              defaultValue="sophia7353"
              height={42}
              options={[
                { value: "sophia7353", label: "Account: Sophia7353" },
                { value: "john1234", label: "Account: John1234" },
                { value: "alice5678", label: "Account: Alice5678" }
              ]}
              className="w-[201px] min-w-[201px] max-w-[201px] font-satoshi-medium text-[16px] p-[10px] rounded-[10px] border text-sm"
            />
          </div>

          {/* Section 3: Trading Account and QR Code */}
          <div className="flex flex-col" style={{ gap: '30px' }}>
            <div className="flex flex-col gap-2">
              <Text18 className="font-satoshi-medium dark:text-white text-black">
                Select Trading Account
              </Text18>
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
                className="w-[407px] font-satoshi-medium text-[16px] px-[14px] py-[10px] rounded-lg border min-w-[407px] max-w-[407px]"
                renderOption={(option) => (
                  <div className="flex items-center w-full gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-[10px] overflow-hidden flex items-center justify-center">
                        <Image 
                          src="/images/fxee.svg" 
                          alt="FXEE Plan" 
                          width={40} 
                          height={40} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Text16 className="font-satoshi-medium dark:text-white text-black">
                        {option.label}
                      </Text16>
                    </div>
                    <div className="ml-[100px] text-right">
                      <Text16 className="font-satoshi-bold dark:text-white text-black">
                        $14,480.24
                      </Text16>
                      <Text14 className="font-satoshi-medium text-[#000000] dark:text-white text-black">
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
                  'flex items-center justify-center rounded-[11.58px] border-[0.9px] p-[11.8px]',
                  'dark:bg-white/5 dark:border-white/10 bg-gray-100 border-gray-300'
                )}
                style={{
                  width: '219.83px',
                  height: '220px',
                  gap: '10.73px'
                }}
              >
                <Image 
                  src="/images/qr-code.svg" 
                  alt="QR Code" 
                  width={196.22} 
                  height={196.23} 
                  className="object-contain"
                  style={{
                    width: '196.22px',
                    height: '196.23px'
                  }}
                />
              </div>
              <Text16 className="font-satoshi-bold whitespace-nowrap text-center dark:text-white text-black max-w-[220px]">
                Scan QR Code for wallet address
              </Text16>
            </div>
          </div>

          <div className="flex flex-col" style={{ gap: '30px' }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Text18 className="font-satoshi-medium dark:text-white text-black">
                  Crypto Type
                </Text18>
                <span style={{ color: 'rgba(45, 208, 255, 1)' }}>*</span>
              </div>
              <CommonSelect
                placeholder="Select crypto currency"
                height={45}
                options={[
                  { value: "USDT", label: "USDT - Tether" },
                  { value: "BTC", label: "BTC - Bitcoin" },
                  { value: "ETH", label: "ETH - Ethereum" }
                ]}
                className="w-full px-[14px] py-[10px] placeholder:dark:text-white placeholder:text-black rounded-lg font-satoshi-regular text-[16px] border min-w-0 max-w-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Text18 className="font-satoshi-medium dark:text-white text-black">
                  Enter Amount
                </Text18>
                <span style={{ color: 'rgba(45, 208, 255, 1)' }}>*</span>
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
                  className="flex-1 bg-transparent text-[16px] outline-none text-sm font-satoshi-regular dark:text-white text-black dark:placeholder-white/60 placeholder-black/60 min-w-0"
                />
                <div className="flex items-center gap-2 px-2 py-1 flex-shrink-0">
                  <Select defaultValue="uk">
                    <SelectTrigger className="w-auto h-auto border-0 bg-transparent p-0 focus:ring-0 focus:ring-offset-0 shadow-none">
                      <div className="flex items-center gap-1">
                        <IconUK width={16} height={16} />
                        <span className="text-sm font-satoshi-regular text-[14px] dark:text-white text-black">USD</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent className="min-w-[60px] dark:bg-black bg-white">
                      <SelectGroup>
                        <SelectItem value="uk">
                          <div className="flex items-center gap-2">
                            <IconUK width={16} height={16} />
                            <span className="text-sm font-satoshi-regular text-[14px]">USD</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button variant={theme === "dark" ? "white" : "black"} className="py-2.5 px-[25px] transition-all cursor-pointer w-full h-[45px]">
              <Text16 className="text-white dark:text-black font-satoshi-bold">Deposit Amount</Text16>
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
