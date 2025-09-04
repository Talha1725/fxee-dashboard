import React from 'react';
import { Input } from '@/components/ui/input';
import { IconSend, IconTradeUp } from '@/components/ui/icon';
import { Text14 } from '@/components/ui/typography';
import { useTheme } from '@/lib/contexts/ThemeContext';

interface DashboardChatbotInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  handleSendMessage: () => void;
  isSending: boolean;
  tradeToUse: any;
}

export default function DashboardChatbotInput({ 
  message, 
  setMessage, 
  handleKeyPress, 
  handleSendMessage, 
  isSending, 
  tradeToUse 
}: DashboardChatbotInputProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-start gap-4.5 self-stretch">
      <div className="flex flex-col items-center gap-5 self-stretch">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={
            tradeToUse
              ? `Ask about ${tradeToUse.symbol} trade...`
              : "Ask about trading strategies, risk management..."
          }
          disabled={isSending}
          backIcon={<IconSend height={20} width={20} onClick={handleSendMessage} className='cursor-pointer' />}
          className="flex-1 px-4 py-4 gap-3 border h-full dark:border-transparent border-black/10"
          InputStyles="!dark:placeholder:text-white/40 !placeholder:text-black/50 !text-[16px] !font-satoshi-medium"
        />
        <div className="flex justify-between items-center self-stretch">
          <div className="flex items-center gap-1">
            <IconTradeUp width={20} height={20} color={theme === "dark" ? "#3EDC81" : "#079744"} />
            <Text14 className="text-[#079744] dark:text-green font-satoshi-medium">Bullish Market</Text14>
          </div>
          <div className="flex items-center gap-1">
            <Text14 className="font-satoshi dark:text-white text-black">
              AI Confidence: <span className="text-[#079744] dark:text-green">81%</span>
            </Text14>
          </div>
        </div>
      </div>
    </div>
  );
}
