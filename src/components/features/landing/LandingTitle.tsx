import React from "react";
import { DisplayXL } from "@/components/ui/typography";

export default function LandingTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <DisplayXL className={className}>{children}</DisplayXL>;
}
