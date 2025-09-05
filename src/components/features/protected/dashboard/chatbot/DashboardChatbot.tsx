"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DashboardChatbotHead from './DashboardChatbotHead';
import DashboardChatbotBody from './DashboardChatbotBody';
import DashboardChatbotInput from './DashboardChatbotInput';
import TradeContextDisplay from './TradeContextDisplay';
import { useChatbotMessages } from '@/hooks/useChatbotMessages';

export default function DashboardChatbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const {
    message,
    setMessage,
    conversationHistory,
    isSending,
    isLoadingHistory,
    tradeToUse,
    useMockResponses,
    latestTrade,
    selectedTrade,
    handleSendMessage,
    handleKeyPress,
    clearConversation,
    handleSuggestedQuestion
  } = useChatbotMessages();


  return (
    <Card className="flex flex-col items-center gap-4 flex-[1_0_0] self-stretch rounded-[10px] bg-white/3 border dark:border-white/4 border-black/15 p-5 overflow-hidden py-5 px-5 h-[40rem] sm:h-[44rem] md:h-[48rem] lg:h-[58rem]">
      <DashboardChatbotHead 
        isExpanded={isExpanded}
        clearConversation={clearConversation}
        setIsExpanded={setIsExpanded}
        tradeToUse={tradeToUse}
        useMockResponses={useMockResponses}
        latestTrade={latestTrade}
        selectedTrade={selectedTrade}
      />
      
      <CardContent className="flex flex-col h-full min-h-0 !w-full p-0">
        {/* Chat Body - Flexible height with proper constraints */}
        <div className="flex-1 overflow-y-auto !w-full min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
          <DashboardChatbotBody 
            conversationHistory={conversationHistory}
            isLoadingHistory={isLoadingHistory}
            isSending={isSending}
            tradeToUse={tradeToUse}
            handleSuggestedQuestion={handleSuggestedQuestion}
          />
        </div>

        {/* Fixed bottom section - Always visible */}
        <div className="flex-shrink-0 space-y-4 mt-4">
          <DashboardChatbotInput 
            message={message}
            setMessage={setMessage}
            handleKeyPress={handleKeyPress}
            handleSendMessage={handleSendMessage}
            isSending={isSending}
            tradeToUse={tradeToUse}
          />

          {/* Trade Context Display - Fixed at bottom, never cut off */}
          <TradeContextDisplay 
            tradeToUse={tradeToUse}
            useMockResponses={useMockResponses}
            latestTrade={latestTrade}
            selectedTrade={selectedTrade}
          />
        </div>
      </CardContent>
    </Card>
  );
}
