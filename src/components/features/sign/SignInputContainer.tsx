import React from "react";

interface SignInputContainerProps {
  children: React.ReactNode;
}

export default function SignInputContainer({
  children,
}: SignInputContainerProps) {
  return (
    <div className="flex flex-col items-start gap-1 self-stretch">
      {children}
    </div>
  );
}
