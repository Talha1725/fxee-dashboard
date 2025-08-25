import React from "react";
import { Text14 } from "@/components/ui/typography";

interface SignInputContainerProps {
  children: React.ReactNode;
  error?: string;
}

export default function SignInputContainer({
  children,
  error,
}: SignInputContainerProps) {
  return (
    <div className="flex flex-col items-start gap-1 self-stretch">
      {children}
      {error && (
        <Text14 className="!text-red-500 !text-xs font-satoshi mt-1">
          {error}
        </Text14>
      )}
    </div>
  );
}
