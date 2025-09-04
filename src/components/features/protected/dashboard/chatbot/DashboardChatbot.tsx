"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Text14 } from '@/components/ui/typography';
import DashboardChatbotHead from './DashboardChatbotHead';
import DashboardChatbotBody from './DashboardChatbotBody';
import DashboardChatbotInput from './DashboardChatbotInput';
import { useSendProposedTradeChatMessageMutation, useSendChatMessageMutation, useGetChatHistoryQuery } from '@/lib/redux/features/chatbot/chatbotApi';
import { useGetLastProposedTradeQuery } from '@/lib/redux/features/proposed-trades/proposedTradesApi';
import { useTrade } from '@/lib/contexts/TradeContext';
import { handleApiError } from '@/lib/utils/apiUtils';
import { showToast } from '@/lib/utils/toast';
import type { ChatMessage } from '@/types/redux';

export default function DashboardChatbot() {
  const { selectedTrade, setSelectedTrade } = useTrade();
  const [message, setMessage] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // API hooks
  const [sendProposedTradeMessage, { isLoading: isSendingProposedTrade }] = useSendProposedTradeChatMessageMutation();
  const [sendRegularMessage, { isLoading: isSendingRegular }] = useSendChatMessageMutation();
  const { data: chatHistory, isLoading: isLoadingHistory } = useGetChatHistoryQuery({ limit: '5' });
  const { data: lastTradeData } = useGetLastProposedTradeQuery();
  
  const isSending = isSendingProposedTrade || isSendingRegular;
  
  // Get the latest proposed trade data for automatic context
  const latestTrade = lastTradeData?.data;
  
  // Check if we should use mock responses
  const useMockResponses = process.env.NEXT_PUBLIC_USE_MOCK_CHATBOT_RESPONSES === 'true';
  
  
  const tradeToUse = selectedTrade || latestTrade;


  useEffect(() => {
    if (chatHistory?.data?.chatHistory && conversationHistory.length === 0) {
      const recentMessages = chatHistory.data.chatHistory.slice(0, 3).map(item => [
        { role: 'user' as const, content: item.userMessage },
        { role: 'assistant' as const, content: item.botResponse }
      ]).flat();
      setConversationHistory(recentMessages);
    }
  }, [chatHistory, conversationHistory.length]);

  const handleSendMessage = async () => {
    if (!message.trim() || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: message.trim()
    };

    // Add user message to conversation
    setConversationHistory(prev => [...prev, userMessage]);
    const currentMessage = message.trim();
    setMessage('');

    try {
      let response;
      
      if (useMockResponses) {
        if (tradeToUse?.id) {
          // Mock response with automatic trade context
          const tradeContextResponse = `Based on your ${tradeToUse.symbol} trade analysis:

**Current Trade Context:**
- Symbol: ${tradeToUse.symbol}
- Timeframe: ${tradeToUse.timeframe}
- Entry Price: ${tradeToUse.entryPrice}
- Target Price: ${tradeToUse.targetPrice}
- Stop Loss: ${tradeToUse.stopLossPrice}
- Risk/Reward Ratio: ${tradeToUse.riskRewardRatio}
- Risk Level: ${tradeToUse.riskLevel}
- Trading Type: ${tradeToUse.tradingType}

**Analysis of your question: "${currentMessage}"**

This is a mock response since the backend endpoint isn't available yet, but I can see you're asking about your ${tradeToUse.symbol} trade. When the real backend is connected, I'll provide detailed analysis based on your actual trade parameters, market conditions, and technical indicators.

The AI will always consider this trade context when answering your questions, whether you're asking about risk management, entry/exit strategies, or market analysis.`;

          response = {
            success: true,
            data: {
              response: tradeContextResponse,
              timestamp: new Date().toISOString(),
              quota: { used: 1, limit: 100, remaining: 99 }
            }
          };
        } else {
          // Mock response for general questions
          response = {
            success: true,
            data: {
              response: `I received your message: "${currentMessage}". This is a test response. The chatbot is working, but the API endpoint might not be available yet. To get trade-specific analysis, please ensure you have proposed trades available in your system.`,
              timestamp: new Date().toISOString(),
              quota: { used: 1, limit: 100, remaining: 99 }
            }
          };
        }
      } else if (tradeToUse?.id) {
        
        try {
          response = await sendProposedTradeMessage({
            message: currentMessage,
            conversationHistory: conversationHistory,
            tradeId: tradeToUse.id
          }).unwrap();
        } catch (proposedTradeError) {
          try {
            response = await sendRegularMessage({
              message: currentMessage,
              conversationHistory: conversationHistory
            }).unwrap();
          } catch (regularError) {
            // Mock response with automatic trade context
            const tradeContextResponse = `Based on your ${tradeToUse.symbol} trade analysis:

**Current Trade Context:**
- Symbol: ${tradeToUse.symbol}
- Timeframe: ${tradeToUse.timeframe}
- Entry Price: ${tradeToUse.entryPrice}
- Target Price: ${tradeToUse.targetPrice}
- Stop Loss: ${tradeToUse.stopLossPrice}
- Risk/Reward Ratio: ${tradeToUse.riskRewardRatio}
- Risk Level: ${tradeToUse.riskLevel}
- Trading Type: ${tradeToUse.tradingType}

**Analysis of your question: "${currentMessage}"**

This is a mock response since the backend endpoint isn't available yet, but I can see you're asking about your ${tradeToUse.symbol} trade. When the real backend is connected, I'll provide detailed analysis based on your actual trade parameters, market conditions, and technical indicators.

The AI will always consider this trade context when answering your questions, whether you're asking about risk management, entry/exit strategies, or market analysis.`;

            response = {
              success: true,
              data: {
                response: tradeContextResponse,
                timestamp: new Date().toISOString(),
                quota: { used: 1, limit: 100, remaining: 99 }
              }
            };
          }
        }
      } else {
        try {
          response = await sendRegularMessage({
            message: currentMessage,
            conversationHistory: conversationHistory
          }).unwrap();
        } catch (apiError) {
          // Mock response for general questions
          response = {
            success: true,
            data: {
              response: `I received your message: "${currentMessage}". This is a test response. The chatbot is working, but the API endpoint might not be available yet. To get trade-specific analysis, please ensure you have proposed trades available in your system.`,
              timestamp: new Date().toISOString(),
              quota: { used: 1, limit: 100, remaining: 99 }
            }
          };
        }
      }

      if (response.success && response.data?.response) {
        const botMessage: ChatMessage = {
          role: 'assistant',
          content: response.data.response
        };
        setConversationHistory(prev => [...prev, botMessage]);
      } else {
        const errorChatMessage: ChatMessage = {
          role: 'assistant',
          content: 'Sorry, I received an invalid response from the server.'
        };
        setConversationHistory(prev => [...prev, errorChatMessage]);
      }
    } catch (error) {
      const errorMessage = handleApiError(error as any);
      const errorChatMessage: ChatMessage = {
        role: 'assistant',
        content: `I apologize, but I encountered an error: ${errorMessage}`
      };
      setConversationHistory(prev => [...prev, errorChatMessage]);
      showToast.error(errorMessage);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearConversation = () => {
    setConversationHistory([]);
    setSelectedTrade(null);
    setMessage('');
  };


  const suggestedQuestions = [
    "What is risk management?",
    "How do I calculate position size?",
    "What's the difference between day trading and swing trading?",
    "How do I read RSI indicators?"
  ];

  const tradeSpecificQuestions = [
    "Is this trade setup good?",
    "What are the risks with this trade?",
    "Should I adjust my stop loss?",
    "What's the probability of this trade succeeding?",
    "How does the risk/reward ratio look?",
    "What market conditions support this trade?",
    "Should I take partial profits?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      role: 'user',
      content: question
    };

    setConversationHistory(prev => [...prev, userMessage]);
    sendMessageDirectly(question);
  };

  const sendMessageDirectly = async (messageText: string) => {
    try {
      let response;
      
      if (useMockResponses) {
        if (tradeToUse?.id) {
          // Mock response with automatic trade context
          const tradeContextResponse = `Based on your ${tradeToUse.symbol} trade analysis:

**Current Trade Context:**
- Symbol: ${tradeToUse.symbol}
- Timeframe: ${tradeToUse.timeframe}
- Entry Price: ${tradeToUse.entryPrice}
- Target Price: ${tradeToUse.targetPrice}
- Stop Loss: ${tradeToUse.stopLossPrice}
- Risk/Reward Ratio: ${tradeToUse.riskRewardRatio}
- Risk Level: ${tradeToUse.riskLevel}
- Trading Type: ${tradeToUse.tradingType}

**Analysis of your question: "${messageText}"**

This is a mock response since the backend endpoint isn't available yet, but I can see you're asking about your ${tradeToUse.symbol} trade. When the real backend is connected, I'll provide detailed analysis based on your actual trade parameters, market conditions, and technical indicators.

The AI will always consider this trade context when answering your questions, whether you're asking about risk management, entry/exit strategies, or market analysis.`;

          response = {
            success: true,
            data: {
              response: tradeContextResponse,
              timestamp: new Date().toISOString(),
              quota: { used: 1, limit: 100, remaining: 99 }
            }
          };
        } else {
          // Mock response for general questions
          response = {
            success: true,
            data: {
              response: `I received your message: "${messageText}". This is a test response. The chatbot is working, but the API endpoint might not be available yet. To get trade-specific analysis, please ensure you have proposed trades available in your system.`,
              timestamp: new Date().toISOString(),
              quota: { used: 1, limit: 100, remaining: 99 }
            }
          };
        }
      } else if (tradeToUse?.id) {
        
        try {
          response = await sendProposedTradeMessage({
            message: messageText,
            conversationHistory: conversationHistory,
            tradeId: tradeToUse.id
          }).unwrap();
        } catch (proposedTradeError) {
          try {
            response = await sendRegularMessage({
              message: messageText,
              conversationHistory: conversationHistory
            }).unwrap();
          } catch (regularError) {
            // Mock response with automatic trade context
            const tradeContextResponse = `Based on your ${tradeToUse.symbol} trade analysis:

**Current Trade Context:**
- Symbol: ${tradeToUse.symbol}
- Timeframe: ${tradeToUse.timeframe}
- Entry Price: ${tradeToUse.entryPrice}
- Target Price: ${tradeToUse.targetPrice}
- Stop Loss: ${tradeToUse.stopLossPrice}
- Risk/Reward Ratio: ${tradeToUse.riskRewardRatio}
- Risk Level: ${tradeToUse.riskLevel}
- Trading Type: ${tradeToUse.tradingType}

**Analysis of your question: "${messageText}"**

This is a mock response since the backend endpoint isn't available yet, but I can see you're asking about your ${tradeToUse.symbol} trade. When the real backend is connected, I'll provide detailed analysis based on your actual trade parameters, market conditions, and technical indicators.

The AI will always consider this trade context when answering your questions, whether you're asking about risk management, entry/exit strategies, or market analysis.`;

            response = {
              success: true,
              data: {
                response: tradeContextResponse,
                timestamp: new Date().toISOString(),
                quota: { used: 1, limit: 100, remaining: 99 }
              }
            };
          }
        }
      } else {
        try {
          response = await sendRegularMessage({
            message: messageText,
            conversationHistory: conversationHistory
          }).unwrap();
        } catch (apiError) {
          // Mock response for general questions
          response = {
            success: true,
            data: {
              response: `I received your message: "${messageText}". This is a test response. The chatbot is working, but the API endpoint might not be available yet. To get trade-specific analysis, please ensure you have proposed trades available in your system.`,
              timestamp: new Date().toISOString(),
              quota: { used: 1, limit: 100, remaining: 99 }
            }
          };
        }
      }

      if (response.success && response.data?.response) {
        const botMessage: ChatMessage = {
          role: 'assistant',
          content: response.data.response
        };
        setConversationHistory(prev => [...prev, botMessage]);
      } else {
        const errorChatMessage: ChatMessage = {
          role: 'assistant',
          content: 'Sorry, I received an invalid response from the server.'
        };
        setConversationHistory(prev => [...prev, errorChatMessage]);
      }
    } catch (error) {
      const errorMessage = handleApiError(error as any);
      const errorChatMessage: ChatMessage = {
        role: 'assistant',
        content: `I apologize, but I encountered an error: ${errorMessage}`
      };
      setConversationHistory(prev => [...prev, errorChatMessage]);
      showToast.error(errorMessage);
    }
  };


  return (
    <Card className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch rounded-[10px] bg-white/3 border dark:border-white/4 border-black/15 p-5 overflow-hidden py-5 px-5 h-[40rem] sm:h-[44rem] md:h-[48rem] lg:h-[58rem]">
      <DashboardChatbotHead 
        isExpanded={isExpanded}
        clearConversation={clearConversation}
        setIsExpanded={setIsExpanded}
        tradeToUse={tradeToUse}
        useMockResponses={useMockResponses}
        latestTrade={latestTrade}
        selectedTrade={selectedTrade}
      />
      
      <CardContent className="flex flex-col h-full min-h-0">
        {/* Chat Body - Flexible height with proper constraints */}
        <div className="flex-1 overflow-y-auto min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
          <DashboardChatbotBody 
            conversationHistory={conversationHistory}
            isLoadingHistory={isLoadingHistory}
            isSending={isSending}
            tradeToUse={tradeToUse}
            tradeSpecificQuestions={tradeSpecificQuestions}
            suggestedQuestions={suggestedQuestions}
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
          {tradeToUse && (
            <div className="bg-[#0276DB0A] dark:bg-white/3 border border-[#3edc81] dark:border-[#3edc81] rounded-lg p-2 sm:p-3 flex-shrink-0">
              <Text14 className="text-xs sm:text-sm font-medium text-[#079744] dark:text-[#3edc81] mb-1">
                Auto Trade Context:
              </Text14>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
                <div className="flex-1 min-w-[45%]">
                  <span className="text-gray-600 dark:text-gray-400">Symbol:</span>
                  <span className="ml-1 font-medium break-all">{tradeToUse.symbol}</span>
                </div>
                <div className="flex-1 min-w-[45%]">
                  <span className="text-gray-600 dark:text-gray-400">Timeframe:</span>
                  <span className="ml-1 font-medium break-all">{tradeToUse.timeframe}</span>
                </div>
                <div className="flex-1 min-w-[45%]">
                  <span className="text-gray-600 dark:text-gray-400">Entry:</span>
                  <span className="ml-1 font-medium break-all">{tradeToUse.entryPrice}</span>
                </div>
                <div className="flex-1 min-w-[45%]">
                  <span className="text-gray-600 dark:text-gray-400">Target:</span>
                  <span className="ml-1 font-medium break-all">{tradeToUse.targetPrice}</span>
                </div>
              </div>
              <Text14 className="text-xs text-[#079744] dark:text-[#3edc81] mt-1 sm:mt-2">
                💡 AI automatically considers this trade data in all responses
                {useMockResponses && !latestTrade && !selectedTrade && (
                  <span className="text-orange-600 dark:text-orange-400"> (Using mock data for testing)</span>
                )}
              </Text14>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
