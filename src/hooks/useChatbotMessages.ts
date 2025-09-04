import { useState, useEffect } from 'react';
import { useSendProposedTradeChatMessageMutation, useSendChatMessageMutation, useGetChatHistoryQuery } from '@/lib/redux/features/chatbot/chatbotApi';
import { useGetLastProposedTradeQuery } from '@/lib/redux/features/proposed-trades/proposedTradesApi';
import { useTrade } from '@/lib/contexts/TradeContext';
import { handleApiError } from '@/lib/utils/apiUtils';
import { showToast } from '@/lib/utils/toast';
import type { ChatMessage } from '@/types/redux';

export function useChatbotMessages() {
  const { selectedTrade, setSelectedTrade } = useTrade();
  const [message, setMessage] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  
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

  const generateMockResponse = (messageText: string, hasTrade: boolean) => {
    if (hasTrade && tradeToUse?.id) {
      const tradeFields = [
        { label: 'Symbol', value: tradeToUse.symbol },
        { label: 'Timeframe', value: tradeToUse.timeframe },
        { label: 'Entry Price', value: tradeToUse.entryPrice },
        { label: 'Target Price', value: tradeToUse.targetPrice },
        { label: 'Stop Loss', value: tradeToUse.stopLossPrice },
        { label: 'Risk/Reward Ratio', value: tradeToUse.riskRewardRatio },
        { label: 'Risk Level', value: tradeToUse.riskLevel },
        { label: 'Trading Type', value: tradeToUse.tradingType }
      ];

      const tradeContext = tradeFields
        .map(field => `- ${field.label}: ${field.value}`)
        .join('\n');

      return `Based on your ${tradeToUse.symbol} trade analysis:

**Current Trade Context:**
${tradeContext}

**Analysis of your question: "${messageText}"**

This is a mock response since the backend endpoint isn't available yet, but I can see you're asking about your ${tradeToUse.symbol} trade. When the real backend is connected, I'll provide detailed analysis based on your actual trade parameters, market conditions, and technical indicators.

The AI will always consider this trade context when answering your questions, whether you're asking about risk management, entry/exit strategies, or market analysis.`;
    } else {
      return `I received your message: "${messageText}". This is a test response. The chatbot is working, but the API endpoint might not be available yet. To get trade-specific analysis, please ensure you have proposed trades available in your system.`;
    }
  };

  const sendMessage = async (messageText: string) => {
    try {
      let response;
      
      if (useMockResponses) {
        const mockResponse = generateMockResponse(messageText, !!tradeToUse?.id);
        response = {
          success: true,
          data: {
            response: mockResponse,
            timestamp: new Date().toISOString(),
            quota: { used: 1, limit: 100, remaining: 99 }
          }
        };
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
            const mockResponse = generateMockResponse(messageText, true);
            response = {
              success: true,
              data: {
                response: mockResponse,
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
          const mockResponse = generateMockResponse(messageText, false);
          response = {
            success: true,
            data: {
              response: mockResponse,
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

  const handleSendMessage = async () => {
    if (!message.trim() || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: message.trim()
    };

    setConversationHistory(prev => [...prev, userMessage]);
    const currentMessage = message.trim();
    setMessage('');

    await sendMessage(currentMessage);
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

  const handleSuggestedQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      role: 'user',
      content: question
    };

    setConversationHistory(prev => [...prev, userMessage]);
    sendMessage(question);
  };

  return {
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
  };
}
