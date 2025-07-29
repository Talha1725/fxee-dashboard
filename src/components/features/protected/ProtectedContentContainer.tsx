import React from "react";
import { cn } from "@/lib/utils";

export default function ProtectedContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-5 self-stretch overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
