import { Text14 } from "@/components/ui/typography";

export default function SupportAIAssistantSuggestion() {
  const suggestions = [
    "How accurate are the AI trading signals?",
    "What is the minimum deposit required?",
    "How do I withdraw my profits?",
  ];
  return (
    <div className="flex flex-col items-start gap-1.5 self-stretch">
      <Text14 className="text-white/80">Suggestions</Text14>
      {suggestions.map((suggestion) => (
        <div className="flex justify-center items-center gap-1 p-2.5 bg-card-weak-gradient rounded-[10px]">
          <Text14 key={suggestion}>{suggestion}</Text14>
        </div>
      ))}
    </div>
  );
}
