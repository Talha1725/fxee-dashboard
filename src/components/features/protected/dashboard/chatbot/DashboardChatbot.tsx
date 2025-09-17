"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DashboardChatbotHead from './DashboardChatbotHead';
import DashboardChatbotBody from './DashboardChatbotBody';
import DashboardChatbotInput from './DashboardChatbotInput';
import { useChatbotMessages } from '@/hooks/useChatbotMessages';
import { useAnalysis } from '@/lib/contexts/AnalysisContext';

export default function DashboardChatbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isAnalyzing } = useAnalysis();
  
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
    <Card className="dashboard-chatbot-card flex flex-col items-center gap-4 flex-[1_0_0] self-stretch rounded-[10px] bg-white/3 border dark:border-white/4 border-black/15 p-5 overflow-hidden py-5 px-5 h-[550px] md:h-[500px] lg:max-h-[900px] lg:h-[900px] relative">
      {isAnalyzing && (
        <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 w-full bg-black/20 backdrop-blur-sm z-[999] rounded-[10px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
          <div className="text-white text-sm font-satoshi">
            Analyzing market data...
          </div>
        </div>
      )}
      <DashboardChatbotHead 
        isExpanded={isExpanded}
        clearConversation={clearConversation}
        setIsExpanded={setIsExpanded}
        tradeToUse={tradeToUse}
        useMockResponses={useMockResponses}
        latestTrade={latestTrade}
        selectedTrade={selectedTrade}
      />

      <div className="w-full flex flex-col h-full min-h-0">
        {/* Chat Body - Flexible height with proper constraints */}
        <div className="flex-1 scrollbar-hide overflow-y-auto min-h-[8rem] sm:min-h-[10rem] lg:min-h-[400px] lg:max-h-[700px]">
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

        </div>
      </div>
    </Card>
  );
}
