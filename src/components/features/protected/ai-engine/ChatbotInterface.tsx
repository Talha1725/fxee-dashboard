"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSendChatMessageMutation, useGetChatHistoryQuery, useGetChatbotInfoQuery } from '@/lib/redux/features/chatbot/chatbotApi';
import { handleApiError } from '@/lib/utils/apiUtils';
import type { ChatMessage } from '@/types/api';

export default function ChatbotInterface() {
  const [message, setMessage] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // API hooks
  const [sendMessage, { isLoading: isSending }] = useSendChatMessageMutation();
  const { data: chatHistory, isLoading: isLoadingHistory } = useGetChatHistoryQuery({ limit: '10' });
  const { data: chatbotInfo, isLoading: isLoadingInfo } = useGetChatbotInfoQuery();

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory]);

  const handleSendMessage = async () => {
    if (!message.trim() || isSending) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: message.trim()
    };

    // Add user message to conversation
    setConversationHistory(prev => [...prev, userMessage]);
    const currentMessage = message.trim();
    setMessage('');

    try {
      const response = await sendMessage({
        message: currentMessage,
        conversationHistory: conversationHistory
      }).unwrap();

      if (response.success && response.data?.response) {
        const botMessage: ChatMessage = {
          role: 'assistant',
          content: response.data.response
        };
        setConversationHistory(prev => [...prev, botMessage]);
      }
    } catch (error) {
      const errorMessage = handleApiError(error as any);
      const errorChatMessage: ChatMessage = {
        role: 'assistant',
        content: `Error: ${errorMessage}`
      };
      setConversationHistory(prev => [...prev, errorChatMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isLoadingInfo ? (
            <div className="animate-pulse bg-gray-300 h-6 w-32 rounded"></div>
          ) : (
            <>
              <span>💬</span>
              {chatbotInfo?.data?.name || 'AI Assistant'}
            </>
          )}
        </CardTitle>
        {chatbotInfo?.data?.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {chatbotInfo.data.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto border rounded-lg p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
          {conversationHistory.length === 0 && !isLoadingHistory && (
            <div className="text-center text-gray-500 dark:text-gray-400">
              Start a conversation with the AI assistant...
            </div>
          )}
          
          {isLoadingHistory && (
            <div className="text-center text-gray-500 dark:text-gray-400">
              Loading chat history...
            </div>
          )}

          {conversationHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 border'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          
          {isSending && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 border px-4 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isSending}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim() || isSending}
            className="px-6"
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </div>

        {/* Quota Information */}
        {chatHistory?.data?.quota && (
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Used: {chatHistory.data.quota.used} / {chatHistory.data.quota.limit} 
            ({chatHistory.data.quota.remaining} remaining today)
          </div>
        )}
      </CardContent>
    </Card>
  );
}
