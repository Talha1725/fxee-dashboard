"use client";

import React, { useState, useRef, useEffect } from "react";

import HomeAIMessageBodyIcon from "@/components/features/protected/home/homeNewsAI/HomeAIMessageBodyIcon";
import HomeAIMessageBodyItem from "./HomeAIMessageBodyItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSend, IconRobot, IconClose } from "@/components/ui/icon";
import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useSendProposedTradeChatMessageMutation, useSendChatMessageMutation, useGetChatHistoryQuery } from "@/lib/redux/features/chatbot/chatbotApi";
import { useGetLastProposedTradeQuery } from "@/lib/redux/features/proposed-trades/proposedTradesApi";
import { useTrade } from "@/lib/contexts/TradeContext";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { handleApiError } from "@/lib/utils/apiUtils";
import { showToast } from "@/lib/utils/toast";
import type { ChatMessage } from "@/types/redux";
import HomeAIChat from "./HomeAIChat";

export default function HomeAIMessageBody({
  className,
}: {
  className?: string;
}) {
  const { theme } = useTheme();
  const { selectedTrade, setSelectedTrade } = useTrade();
  const [message, setMessage] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
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
  
  // Mock trade data for testing when no real data is available
  const mockTradeData = {
    id: 123,
    userId: 1,
    symbol: "EURUSD",
    timeframe: "1H",
    entryPrice: "1.0850",
    targetPrice: "1.0900",
    stopLossPrice: "1.0800",
    profitTarget: "100.00",
    maximumRisk: "50.00",
    profitTargetPercentage: "0.46",
    maximumRiskPercentage: "0.23",
    potentialProfit: "100.00",
    maximumLoss: "50.00",
    riskRewardRatio: "2.00",
    riskLevel: "medium" as const,
    tradingType: "day_trade" as const,
    tradingVersion: "pro" as const,
    aiAnalysis: "Strong bullish momentum with RSI at 65, MACD showing positive divergence, and price breaking above key resistance at 1.0840. The 1.0900 target aligns with the 61.8% Fibonacci retracement level.",
    confidence: 85,
    winRatePercentage: "72.5",
    totalWins: 29,
    totalLosses: 11,
    averageRr: "1.8",
    totalProfit: "2,450.00",
    averagePerTrade: "61.25",
    successRate: "72.5",
    totalAnalyses: 40,
    analysesUsed: 35,
    analysesRemainingPercentage: "12.5",
    potentialWin: "100.00",
    maxRiskAmount: "50.00",
    accountRiskPercentage: "1.0",
    status: "active" as const,
    analysisCount: 1,
    maxAnalysisLimit: 10,
    validUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  // Use mock trade data when no real data is available and we're in mock mode
  // For real backend, only use actual trade data
  const tradeToUse = selectedTrade || latestTrade;

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory]);

  // Load recent chat history on mount
  useEffect(() => {
    if (chatHistory?.data?.chatHistory && conversationHistory.length === 0) {
      const recentMessages = chatHistory.data.chatHistory.slice(0, 3).map(item => [
        { role: 'user' as const, content: item.userMessage },
        { role: 'assistant' as const, content: item.botResponse }
      ]).flat();
      setConversationHistory(recentMessages);
    }
  }, [chatHistory, conversationHistory.length]);

  const sendMessageDirectly = async (messageText: string) => {
    try {
      let response;
      
      console.log('sendMessageDirectly called with:', messageText);
      console.log('Latest trade data available:', latestTrade);
      console.log('Selected trade:', selectedTrade);
      console.log('Trade to use:', tradeToUse);
      
      if (useMockResponses) {
        console.log('Using mock responses (backend disabled)');
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
        console.log('Sending to proposed trade endpoint with tradeId:', tradeToUse.id);
        console.log('Using trade:', tradeToUse.symbol, tradeToUse.timeframe);
        
        try {
          response = await sendProposedTradeMessage({
            message: messageText,
            conversationHistory: conversationHistory,
            tradeId: tradeToUse.id
          }).unwrap();
          console.log('Proposed trade response received:', response);
        } catch (proposedTradeError) {
          console.log('Proposed trade endpoint failed, trying regular chatbot:', proposedTradeError);
          try {
            response = await sendRegularMessage({
              message: messageText,
              conversationHistory: conversationHistory
            }).unwrap();
            console.log('Regular chatbot response received:', response);
          } catch (regularError) {
            console.log('Both endpoints failed, using mock response with trade context:', regularError);
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
        console.log('No trade data available, sending to regular chatbot');
        try {
          response = await sendRegularMessage({
            message: messageText,
            conversationHistory: conversationHistory
          }).unwrap();
          console.log('Regular chatbot response received:', response);
        } catch (apiError) {
          console.log('Regular chatbot failed, using mock response:', apiError);
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
        console.error('Response not successful:', response);
        const errorChatMessage: ChatMessage = {
          role: 'assistant',
          content: 'Sorry, I received an invalid response from the server.'
        };
        setConversationHistory(prev => [...prev, errorChatMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = handleApiError(error as any);
      const errorChatMessage: ChatMessage = {
        role: 'assistant',
        content: `I apologize, but I encountered an error: ${errorMessage}`
      };
      setConversationHistory(prev => [...prev, errorChatMessage]);
      showToast.error(errorMessage);
    }
  };

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

    // Send the message
    await sendMessageDirectly(currentMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearConversation = () => {
    console.log('Clearing conversation...');
    setConversationHistory([]);
    setSelectedTrade(null);
    setMessage('');
    console.log('Conversation cleared');
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

    // Add user message to conversation
    setConversationHistory(prev => [...prev, userMessage]);

    // Send the message directly
    sendMessageDirectly(question);
  };

  const getContextInfo = () => {
    if (tradeToUse) {
      const isMockData = useMockResponses && !latestTrade && !selectedTrade;
      return `Auto-context: ${tradeToUse.symbol} (${tradeToUse.timeframe})${isMockData ? ' [Mock Data]' : ''}`;
    }
    return "No trade data available";
  };

  return (
    <div
      className={cn("flex flex-col items-start gap-5 self-stretch", className)}
    >
      {/* Header with expand/collapse */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <HomeAIMessageBodyIcon />
          <div className="flex flex-col items-start gap-1">
            <Text16 className="text-[#079744] dark:text-green font-satoshi-medium">TradeMind AI</Text16>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${tradeToUse ? 'bg-green-500' : 'bg-gray-400'}`} />
              <Text12 className="text-white/60 dark:text-white/60 text-xs">
                {getContextInfo()}
              </Text12>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isExpanded && (
            <Button
              variant="ghost"
              onClick={() => {
                console.log('Clear button clicked');
                clearConversation();
              }}
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 px-2 py-1"
            >
              Clear
            </Button>
          )}
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1"
          >
            <IconClose width={16} height={16} className={`transition-transform ${isExpanded ? 'rotate-45' : 'rotate-0'}`} />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      {isExpanded && (
        <div className="w-full space-y-4">
          <div className="h-64 overflow-y-auto space-y-3">
            {conversationHistory.length === 0 && !isLoadingHistory && (
              <div className="text-center text-white/60 dark:text-white/60 py-6">
                <IconRobot width={32} height={32} className="mx-auto mb-3 opacity-50" />
                <Text14 className="text-sm mb-4 font-medium">
                  {tradeToUse 
                    ? `Ask me anything about your ${tradeToUse.symbol} trade setup! I'll automatically consider your trade context.`
                    : "No proposed trades available yet. You can ask general trading questions, or create some proposed trades to get trade-specific analysis."
                  }
                </Text14>
                
                {/* Suggested Questions */}
                <div className="space-y-2">
                  <Text14 className="text-xs text-white/40 mb-2">
                    {tradeToUse ? "Trade-specific questions:" : "Suggested questions:"}
                  </Text14>
                  <div className="grid grid-cols-1 gap-2">
                    {(tradeToUse ? tradeSpecificQuestions : suggestedQuestions).slice(0, 4).map((question, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs text-left justify-start p-2 h-auto border border-white/20 dark:border-white/20 hover:bg-white/10 dark:hover:bg-white/10 text-white/80 dark:text-white/80"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {isLoadingHistory && (
              <div className="text-center text-white/60 dark:text-white/60 py-4">
                <Text14 className="text-sm">Loading recent conversations...</Text14>
              </div>
            )}

            {conversationHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    msg.role === 'user'
                      ? 'text-white'
                      : 'bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 text-white/90 dark:text-white/90'
                  }`}
                >
                  <Text14 className="text-sm whitespace-pre-wrap">{msg.content}</Text14>
                </div>
              </div>
            ))}
            
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                    <Text14 className="text-sm text-white/60">AI is thinking...</Text14>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {/* <div className="flex gap-2"> */}
            <HomeAIChat/>
          
          {/* </div> */}

          {/* Trade Context Display */}
          {tradeToUse && (
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
              <Text14 className="text-sm font-medium text-blue-200 dark:text-blue-200 mb-1">
                Auto Trade Context:
              </Text14>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-white/60 dark:text-white/60">Symbol:</span>
                  <span className="ml-1 font-medium text-white">{tradeToUse.symbol}</span>
                </div>
                <div>
                  <span className="text-white/60 dark:text-white/60">Timeframe:</span>
                  <span className="ml-1 font-medium text-white">{tradeToUse.timeframe}</span>
                </div>
                <div>
                  <span className="text-white/60 dark:text-white/60">Entry:</span>
                  <span className="ml-1 font-medium text-white">{tradeToUse.entryPrice}</span>
                </div>
                <div>
                  <span className="text-white/60 dark:text-white/60">Target:</span>
                  <span className="ml-1 font-medium text-white">{tradeToUse.targetPrice}</span>
                </div>
              </div>
              <Text14 className="text-xs text-blue-300 dark:text-blue-300 mt-2">
                💡 AI automatically considers this trade data in all responses
                {useMockResponses && !latestTrade && !selectedTrade && (
                  <span className="text-orange-400 dark:text-orange-400"> (Using mock data for testing)</span>
                )}
              </Text14>
            </div>
          )}
        </div>
      )}

      {/* Default static messages when not expanded */}
      {/* {!isExpanded && (
        <>
          <div className="flex items-start gap-2 self-stretch">
            <HomeAIMessageBodyIcon />
            <HomeAIMessageBodyItem />
          </div>
          <div className="flex items-start gap-2 self-stretch">
            <HomeAIMessageBodyIcon />
            <HomeAIMessageBodyItem />
          </div>
        </>
      )} */}
    </div>
  );
}
