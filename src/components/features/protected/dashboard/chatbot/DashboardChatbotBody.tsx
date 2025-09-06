import React, { useRef, useEffect } from 'react';
import { IconRobot } from '@/components/ui/icon';
import { Text14 } from '@/components/ui/typography';
import SuggestedQuestions from './SuggestedQuestions';
import type { ChatMessage } from '@/types/redux';

interface DashboardChatbotBodyProps {
  conversationHistory: ChatMessage[];
  isLoadingHistory: boolean;
  isSending: boolean;
  tradeToUse: any;
  handleSuggestedQuestion: (question: string) => void;
}

export default function DashboardChatbotBody({ 
  conversationHistory, 
  isLoadingHistory, 
  isSending, 
  tradeToUse, 
  handleSuggestedQuestion 
}: DashboardChatbotBodyProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom within the chat container only
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory]);

  return (
    <div className="space-y-3">
      {conversationHistory.length === 0 && !isLoadingHistory && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-6">
          <IconRobot width={32} height={32} className="mx-auto mb-3 opacity-50" />
          <Text14 className="text-sm mb-4 font-medium">
            {tradeToUse 
              ? `Ask me anything about your ${tradeToUse.symbol} trade setup! I'll automatically consider your trade context.`
              : "No proposed trades available yet. You can ask general trading questions, or create some proposed trades to get trade-specific analysis."
            }
          </Text14>
          
          {/* Suggested Questions */}
          <SuggestedQuestions 
            tradeToUse={tradeToUse}
            handleSuggestedQuestion={handleSuggestedQuestion}
          />
        </div>
      )}
      
      {isLoadingHistory && (
        <div className="flex justify-center py-6">
          <div className="flex items-center gap-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <Text14 className="text-sm text-white/70">Loading recent conversations...</Text14>
          </div>
        </div>
      )}

      {conversationHistory.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] px-3 py-2 rounded-[15px] ${
              msg.role === 'user'
                ? 'bg-black/10 dark:bg-white/10 px-3 dark:border-white/20 text-white/90 dark:text-white/90'
                : 'text-white/90 dark:text-white/90'
            }`}
          >
            <Text14 className="text-sm whitespace-pre-wrap">{msg.content}</Text14>
          </div>
        </div>
      ))}
      
      {isSending && (
        <div className="flex justify-start">
          <div className="max-w-[80%] px-3 py-2 rounded-[90px] bg-black/10 dark:bg-white/10 dark:border-white/20 text-white/90 dark:text-white/90">
            <div className="flex items-center gap-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <Text14 className="text-sm text-gray-500">AI is thinking...</Text14>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}
