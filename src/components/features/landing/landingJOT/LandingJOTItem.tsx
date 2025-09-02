import React from "react";

export default function LandingJOTItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center shrink-0 gap-3">
      {icon}
      <p className="text-white/90 text-center shrink-0 font-satoshi-medium">{title}</p>
    </div>
  );
}
