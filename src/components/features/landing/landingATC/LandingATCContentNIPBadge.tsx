import React from "react";

export default function LandingATCContentNIPBadge({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-1 items-center justify-center p-2 rounded-[8px] bg-card-weak-gradient">
      {icon}
      <p className="text-white text-[10px] font-regular font-[700] tracking-[-0.211px]">
        {title}
      </p>
    </div>
  );
}
