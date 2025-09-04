import React from 'react';
import { Button } from '@/components/ui/button';

interface SuggestedQuestionsProps {
  tradeToUse: any;
  handleSuggestedQuestion: (question: string) => void;
}

export default function SuggestedQuestions({ tradeToUse, handleSuggestedQuestion }: SuggestedQuestionsProps) {
  const questionSets = {
    general: [
      "What is risk management?",
      "How do I calculate position size?",
      "What's the difference between day trading and swing trading?",
      "How do I read RSI indicators?"
    ],
    tradeSpecific: [
      "Is this trade setup good?",
      "What are the risks with this trade?",
      "Should I adjust my stop loss?",
      "What's the probability of this trade succeeding?",
      "How does the risk/reward ratio look?",
      "What market conditions support this trade?",
      "Should I take partial profits?"
    ]
  };

  const questionsToShow = tradeToUse ? questionSets.tradeSpecific : questionSets.general;
  const title = tradeToUse ? "Ask about your trade:" : "Suggested questions:";

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
      <div className="flex flex-wrap gap-2">
        {questionsToShow.map((question, index) => (
          <Button
            key={index}
            variant="ghost"
            size="default"
            onClick={() => handleSuggestedQuestion(question)}
            className="text-xs px-3 py-1 h-auto"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}
