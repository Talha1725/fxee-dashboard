import React from "react";
import { Description18 } from "@/components/ui/typography";

export default function LandingDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <Description18 className={className}>{children}</Description18>;
}
