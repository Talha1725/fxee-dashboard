'use client'

import React from 'react'
import { Text14, Text24 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/contexts/ThemeContext'
import { IconUK } from '@/components/ui/icon'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PortfolioChart from '../home/PortfolioChart'

export default function CurrentBalanceCard() {
  const { theme } = useTheme()

  return (
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
              <Text24 className="font-satoshi-medium dark:text-white text-black">
                $14,480.24
              </Text24>
              <span className="px-2 py-0.5 bg-[#3EDC8126] text-[#3EDC81] rounded text-[12px] font-satoshi-medium">
                +5%
              </span>
            </div>
          </div>

          <div className="mt-4">
            <PortfolioChart height={300} />     
          </div>
        </div>
      </div>
    </div>
  )
}
